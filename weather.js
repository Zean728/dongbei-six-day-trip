// Daily forecasts use WGS84 coordinates. The local snapshot is a dated fallback.
const weatherPlaces = [
  {id:'changchun',name:'长春',lat:43.9033,lon:125.3245},
  {id:'yanji',name:'延吉',lat:42.904,lon:129.49},
  {id:'songjianghe',name:'松江河',lat:42.164976,lon:127.483243},
  {id:'north',name:'二道白河 · 北坡山下',lat:42.418448,lon:128.127078},
  {id:'tianchi',name:'天池附近 · 山上',lat:42.005868,lon:128.055015}
];
const dayWeatherPlaces = [
  ['changchun'], ['yanji'], ['yanji','songjianghe'],
  ['songjianghe'], ['north','tianchi'], ['north','yanji']
];
const weatherDates = ['2026-10-01','2026-10-02','2026-10-03','2026-10-04','2026-10-05','2026-10-06'];
let weatherData = null;
let weatherUpdatedAt = null;
let weatherSource = '';
let weatherLoading = false;

function weatherCondition(code) {
  if(code===0) return ['晴','☀️'];
  if(code<=3) return ['多云','⛅'];
  if(code===45||code===48) return ['有雾','🌫️'];
  if(code>=51&&code<=57) return ['毛毛雨','🌦️'];
  if(code>=61&&code<=67) return ['有雨','🌧️'];
  if(code>=71&&code<=77) return ['有雪','🌨️'];
  if(code>=80&&code<=82) return ['阵雨','🌦️'];
  if(code>=85&&code<=86) return ['阵雪','🌨️'];
  if(code>=95) return ['雷雨','⛈️'];
  return ['天气多变','🌤️'];
}

function chinaDate(date) {
  return new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Shanghai',year:'numeric',month:'2-digit',day:'2-digit'}).format(date);
}
function chinaTime(date) {
  return new Intl.DateTimeFormat('zh-CN',{timeZone:'Asia/Shanghai',month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit',hour12:false}).format(date);
}
function weatherDegrees(value) {
  return String(Math.round(value)).replace('-', '−');
}

function renderDayWeather(dayIndex) {
  const block=document.querySelector('#weatherBlock');
  if(!block) return;
  const date=weatherDates[dayIndex];
  const today=chinaDate(new Date());
  if(date<today) {
    block.innerHTML='<p class="weather-empty">这一天已经过去，逐日预报不再显示。</p>';
    return;
  }
  const ageHours=weatherUpdatedAt?(Date.now()-new Date(weatherUpdatedAt).getTime())/3600000:Infinity;
  const canShow=weatherData&&(weatherSource==='实时预报'||ageHours<36);
  const cards=canShow?dayWeatherPlaces[dayIndex].map(id=>{
    const place=weatherPlaces.find(p=>p.id===id);
    const day=weatherData[id]?.[date];
    if(!day) return '';
    const [condition,icon]=weatherCondition(Number(day.weather_code));
    if(day.temperature_2m_max==null||day.temperature_2m_min==null) return '';
    const high=Number(day.temperature_2m_max),low=Number(day.temperature_2m_min);
    const rain=day.precipitation_probability_max==null?NaN:Number(day.precipitation_probability_max);
    const wind=day.wind_speed_10m_max==null?NaN:Number(day.wind_speed_10m_max);
    if(!Number.isFinite(high)||!Number.isFinite(low)) return '';
    return `<div class="weather-place"><div class="weather-place-head"><span class="weather-icon" aria-hidden="true">${icon}</span><div><strong>${place.name}</strong><small>${condition}</small></div></div><b class="weather-temp">${weatherDegrees(low)}～${weatherDegrees(high)}°C</b><div class="weather-metrics"><span>最高降水概率 ${Number.isFinite(rain)?Math.round(rain)+'%':'暂无'}</span><span>最大风速 ${Number.isFinite(wind)?Math.round(wind)+' km/h':'暂无'}</span></div></div>`;
  }).filter(Boolean).join(''):'';
  const message=cards?'':weatherLoading?'正在获取目的地天气…':'目前没有这一天的可靠预报；请稍后刷新。';
  const notice=dayIndex===3?'汉拿山温泉营业时段以商家当天公告为准。':dayIndex===4?'天池附近为模型网格预报，实际风雪和主峰开放以景区公告为准。':'';
  const timeText=weatherUpdatedAt&&cards?`${weatherSource==='实时预报'?'在线读取于':'快照生成于'} ${chinaTime(new Date(weatherUpdatedAt))}`:'天气预报';
  block.innerHTML=`<div class="weather-title"><div><span>DESTINATION WEATHER</span><h4>目的地天气 · ${date.slice(5).replace('-','.')}</h4></div><button type="button" id="weatherRefresh" ${weatherLoading?'disabled':''}>${weatherLoading?'更新中…':'刷新天气'}</button></div>${cards?`<div class="weather-grid">${cards}</div>`:`<p class="weather-empty">${message}</p>`}${notice?`<p class="weather-notice">${notice}</p>`:''}<p class="weather-foot">${timeText} · <a href="https://open-meteo.com/en/docs" target="_blank" rel="noopener">Open-Meteo 数据</a>；预报会变化，出发前再看。</p>`;
}

function updateVisibleWeather() {
  if(typeof activeDayIndex==='number') renderDayWeather(activeDayIndex);
}

async function loadWeatherSnapshot() {
  try {
    const response=await fetch('./weather-snapshot.json',{cache:'no-store'});
    if(!response.ok) return;
    const data=await response.json();
    if(weatherSource==='实时预报') return;
    weatherData=data.places;
    weatherUpdatedAt=data.generated_at;
    weatherSource='预报快照';
    updateVisibleWeather();
  } catch (_) { /* Live forecast can still arrive. */ }
}

async function refreshWeather() {
  if(weatherLoading) return;
  weatherLoading=true;
  updateVisibleWeather();
  const controller=new AbortController();
  const timer=setTimeout(()=>controller.abort(),12000);
  try {
    const params=new URLSearchParams({
      latitude:weatherPlaces.map(p=>p.lat).join(','),
      longitude:weatherPlaces.map(p=>p.lon).join(','),
      daily:'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max',
      timezone:'Asia/Shanghai',
      forecast_days:'16'
    });
    const response=await fetch('https://api.open-meteo.com/v1/forecast?'+params,{signal:controller.signal});
    if(!response.ok) throw new Error('Weather request failed');
    const forecasts=await response.json();
    if(!Array.isArray(forecasts)||forecasts.length!==weatherPlaces.length) throw new Error('Unexpected weather response');
    const next={};
    forecasts.forEach((forecast,index)=>{
      const daily=forecast.daily;
      next[weatherPlaces[index].id]={};
      daily.time.forEach((date,i)=>{
        next[weatherPlaces[index].id][date]={
          weather_code:daily.weather_code[i],
          temperature_2m_max:daily.temperature_2m_max[i],
          temperature_2m_min:daily.temperature_2m_min[i],
          precipitation_probability_max:daily.precipitation_probability_max[i],
          wind_speed_10m_max:daily.wind_speed_10m_max[i]
        };
      });
    });
    weatherData=next;
    weatherUpdatedAt=new Date().toISOString();
    weatherSource='实时预报';
  } catch (_) {
    // A dated snapshot stays visible briefly when mobile networks block the API.
  } finally {
    clearTimeout(timer);
    weatherLoading=false;
    updateVisibleWeather();
  }
}

loadWeatherSnapshot();
refreshWeather();
