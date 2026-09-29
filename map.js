// Coordinates are WGS84 for the day overview. Gaode embeds use GCJ-02.
// Exact Gaode POIs retain their ID and original coordinates where available.
const dayMapPoints = [
  [
    {stops:[0],name:'长春龙嘉国际机场',coord:[125.6915173,43.9963959]},
    {stops:[1],name:'长春吾悦广场景阳大路亚朵见野酒店',coord:[125.267636,43.881793],amap:{id:'B0L12CUAOP',coord:[125.274041,43.884131],address:'景阳大路吴中豪仕广场B区二期2幢1层'}},
    {stops:[3],name:'伪满皇宫博物院',coord:[125.3418854,43.9032769]},
    {stops:[4],name:'这有山',coord:[125.286175,43.8645734]}
  ],
  [
    {stops:[0],name:'长春吾悦广场景阳大路亚朵见野酒店',coord:[125.267636,43.881793],amap:{id:'B0L12CUAOP',coord:[125.274041,43.884131],address:'景阳大路吴中豪仕广场B区二期2幢1层'}},
    {stops:[1],name:'长春站 · 火车站',coord:[125.3181208,43.9088926],amap:{id:'B01AF0ZDGL',coord:[125.324627,43.911282],address:'长春市宽城区长白路5号'}},
    {stops:[2],name:'延吉西站 · 出站口',coord:[129.4067702,42.9016402],amap:{id:'B0FFGZJABL',coord:[129.413933,42.904312],address:'延吉市延三公路北100米'}},
    {stops:[3],name:'延吉延边大学网红墙梨花路亚朵酒店',coord:[129.482342,42.902643],amap:{id:'B0LB2ZM3L1',coord:[129.489346,42.905166],address:'梨花路1555号天池首府9号楼'}},
    {stops:[4],name:'张师傅参鸡汤 · 新华街总店',coord:[129.5037931,42.9007138],amap:{id:'B05990MXSB',coord:[129.510744,42.903192],address:'延吉市新华街195号附近'}},
    {stops:[5],name:'延边博物馆',coord:[129.4164678,42.8877268]},
    {stops:[6],name:'延边大学延吉校区 · 南门',coord:[129.4856574,42.9055483],amap:{id:'B0FFFN46OG',coord:[129.492674,42.908082],address:'延吉市公园路977号'}},
    {stops:[7],name:'延边大学网红弹幕墙',coord:[129.4845125,42.9048922],amap:{id:'B0J1MLWJAW',coord:[129.491533,42.907429],address:'延吉市公园路延边大学南门对面'}},
    {stops:[8],name:'震海贝烤贝 · 海鲜街门店',coord:[129.509173,42.912121],amap:{id:'B0FFFN4L9G',coord:[129.516082,42.914568],address:'延边一中西门海鲜街'}}
  ],
  [
    {stops:[0],name:'延吉西市场',coord:[129.5008938,42.9040206]},
    {stops:[1],name:'十里辣拌花蟹 · 梨花路店',coord:[129.486891,42.902891],amap:{id:'B0H23XRUZP',coord:[129.493879,42.905400],address:'延吉市梨花路锦唐新外滩门市4单元2楼'}},
    {stops:[3],name:'中国朝鲜族民俗园',coord:[129.4884427,42.8746438]},
    {stops:[4,5],name:'长白山璞宣酒店 · 松江河镇',coord:[127.483243,42.164976],amap:{id:'B0L1LHF1MI',coord:[127.489261,42.167344],address:'白山市抚松县松江河镇松山街108号'}}
  ],
  [
    {stops:[0,6],name:'长白山璞宣酒店 · 松江河镇',coord:[127.483243,42.164976],amap:{id:'B0L1LHF1MI',coord:[127.489261,42.167344],address:'白山市抚松县松江河镇松山街108号'}},
    {stops:[1],name:'讷殷古城',coord:[127.557883,41.975788],amap:{id:'B0FFLA7M4B',coord:[127.563641,41.977996],address:'长白山池南区302省道与漫江交汇处'}},
    {stops:[2,3,5],name:'万达度假区 · 佛库伦湖在园内',coord:[127.490272,42.103911],amap:{id:'B01B70M0Y0',coord:[127.496277,42.106282],address:'抚松县松江河镇白云路455号'},approx:true},
    {stops:[4],name:'长白山汉拿山温泉',coord:[127.508115,42.104496],amap:{id:'B0IA17XI2V',coord:[127.514051,42.106814],address:'万达国际度假区南区白云路455号'}}
  ],
  [
    {stops:[0],name:'长白山璞宣酒店 · 松江河镇',coord:[127.483243,42.164976],amap:{id:'B0L1LHF1MI',coord:[127.489261,42.167344],address:'白山市抚松县松江河镇松山街108号'}},
    {stops:[1,8],name:'长白山北坡集散中心云顶市集亚朵酒店',coord:[128.127078,42.418448],amap:{id:'B0MD1DRNC2',coord:[128.133281,42.420958],address:'延边朝鲜族自治州安图县二道白河镇天池街138号'}},
    {stops:[3,4],name:'北景区游客集散中心',coord:[128.1112547,42.4017664]},
    {stops:[5],name:'长白山天池 · 湖区',coord:[128.0550149,42.0058677],approx:true},
    {stops:[6],name:'长白瀑布',coord:[128.0524454,42.0349959]},
    {stops:[7],name:'绿渊潭',coord:[128.0607681,42.0592807]}
  ],
  [
    {stops:[0],name:'长白山北坡集散中心云顶市集亚朵酒店',coord:[128.127078,42.418448],amap:{id:'B0MD1DRNC2',coord:[128.133281,42.420958],address:'延边朝鲜族自治州安图县二道白河镇天池街138号'}},
    {stops:[],name:'军舰山 · 冲刺路线可选',coord:[128.996741,42.096827],amap:{id:'B0599006BE',coord:[129.003175,42.099216],address:'延边朝鲜族自治州和龙市'}},
    {stops:[],name:'南坪镇 · 冲刺路线可选',coord:[129.202475,42.265575],amap:{id:'B05990MICT',coord:[129.209168,42.267975],address:'延边朝鲜族自治州和龙市'}},
    {stops:[3,4,5],name:'延吉朝阳川国际机场 · 机场还车',coord:[129.4500775,42.8828625]}
  ]
];
const defaultPointIndex = [1,0,1,1,0,0];

let activeDayMap = null;
let activeMapMarkers = [];
let activeDayIndex = 0;
let activeMapMode = 'gaode';

function wgsToGcj(lng,lat) {
  const pi=Math.PI,a=6378245,ee=0.006693421622965943;
  const x=lng-105,y=lat-35;
  const dLat=-100+2*x+3*y+0.2*y*y+0.1*x*y+0.2*Math.sqrt(Math.abs(x))+
    (20*Math.sin(6*x*pi)+20*Math.sin(2*x*pi))*2/3+
    (20*Math.sin(y*pi)+40*Math.sin(y/3*pi))*2/3+
    (160*Math.sin(y/12*pi)+320*Math.sin(y*pi/30))*2/3;
  const dLng=300+x+2*y+0.1*x*x+0.1*x*y+0.1*Math.sqrt(Math.abs(x))+
    (20*Math.sin(6*x*pi)+20*Math.sin(2*x*pi))*2/3+
    (20*Math.sin(x*pi)+40*Math.sin(x/3*pi))*2/3+
    (150*Math.sin(x/12*pi)+300*Math.sin(x/30*pi))*2/3;
  const rad=lat*pi/180,magic=1-ee*Math.sin(rad)**2,root=Math.sqrt(magic);
  return [lng+dLng*180/(a/root*Math.cos(rad)*pi),lat+dLat*180/((a*(1-ee))/(magic*root)*pi)];
}

function gaodeEmbedUrl(point) {
  const params=new URLSearchParams();
  const location=point.amap?.coord || wgsToGcj(...point.coord);
  if(point.amap?.id) params.set('id',point.amap.id);
  params.set('name',point.name);
  params.set('lng',location[0].toFixed(6));
  params.set('lat',location[1].toFixed(6));
  if(point.amap?.address) params.set('address',point.amap.address);
  params.set('zoom','16');
  params.set('source','poi_detail');
  params.set('platform','pc');
  return 'https://www.amap.com/ssr/embed/place?'+params.toString();
}

function gaodePlaceUrl(point) {
  const common={src:'dongbei-six-day-trip',callnative:'1'};
  if(point.amap?.id) return 'https://uri.amap.com/poidetail?'+new URLSearchParams({poiid:point.amap.id,...common});
  const location=point.amap?.coord || wgsToGcj(...point.coord);
  const params=new URLSearchParams({
    position:`${location[0].toFixed(6)},${location[1].toFixed(6)}`,
    name:point.name,
    coordinate:'gaode',
    ...common
  });
  return 'https://uri.amap.com/marker?'+params;
}

function selectGaodePoint(pointIndex) {
  const point=dayMapPoints[activeDayIndex][pointIndex];
  const iframe=document.querySelector('#gaodeFrame');
  const url=gaodeEmbedUrl(point);
  if(iframe.src!==url) iframe.src=url;
  iframe.title='高德地图：'+point.name;
  document.querySelector('#selectedPointName').textContent=point.name;
  document.querySelector('#openGaodePlace').href=gaodePlaceUrl(point);
  document.querySelector('#copyPlaceAddress').dataset.address=point.name+(point.amap?.address?'，'+point.amap.address:'');
  document.querySelector('#copyAddressStatus').textContent='';
  document.querySelectorAll('.point-chip').forEach((button,index)=>button.setAttribute('aria-pressed',index===pointIndex?'true':'false'));
}

function showMapMode(mode) {
  activeMapMode=mode;
  document.querySelector('#gaodeMapWrap').hidden=mode!=='gaode';
  document.querySelector('#dayMap').hidden=mode!=='overview';
  document.querySelector('#mapReset').hidden=mode!=='overview';
  document.querySelectorAll('[data-map-mode]').forEach(button=>button.setAttribute('aria-pressed',button.dataset.mapMode===mode?'true':'false'));
  if(mode==='overview') {
    document.querySelector('#dayMapStatus').hidden=false;
    if(!activeDayMap) mountDayMap(activeDayIndex);
    else { document.querySelector('#dayMapStatus').hidden=true; activeDayMap.resize(); fitDayMap(); }
  }
}

function pointForStop(dayIndex, stopIndex) {
  return dayMapPoints[dayIndex].find(point => point.stops.includes(stopIndex));
}

function destroyDayMap() {
  if (activeDayMap) activeDayMap.remove();
  activeDayMap = null;
  activeMapMarkers = [];
}

function fitDayMap() {
  if (!activeDayMap) return;
  const bounds = new maplibregl.LngLatBounds();
  dayMapPoints[activeDayIndex].forEach(point => bounds.extend(point.coord));
  activeDayMap.fitBounds(bounds, {padding:{top:50,bottom:50,left:45,right:45},maxZoom:13,duration:450});
}

function mountDayMap(dayIndex) {
  activeDayIndex = dayIndex;
  const status = document.querySelector('#dayMapStatus');
  if (!window.maplibregl) {
    status.textContent = '当前浏览器无法显示互动地图，请换用手机浏览器查看。';
    return;
  }
  const points = dayMapPoints[dayIndex];
  activeDayMap = new maplibregl.Map({
    container:'dayMap',
    style:'https://tiles.openfreemap.org/styles/liberty',
    center:points[0].coord,
    zoom:10,
    attributionControl:true,
    cooperativeGestures:true
  });
  const map = activeDayMap;
  map.addControl(new maplibregl.NavigationControl({showCompass:false}),'top-right');
  map.scrollZoom.disable();
  points.forEach((point,index) => {
    const pin = document.createElement('button');
    pin.type='button';
    pin.className='real-map-pin' + (point.approx ? ' is-area' : '');
    pin.textContent=String(index+1);
    pin.setAttribute('aria-label',point.name + (point.approx ? '，区域位置' : ''));
    const popup = new maplibregl.Popup({offset:20,closeButton:false}).setHTML(
      `<strong>${point.name}</strong>${point.approx ? '<span>区域标点，具体入口待确认</span>' : ''}`
    );
    const marker = new maplibregl.Marker({element:pin,anchor:'bottom'}).setLngLat(point.coord).setPopup(popup).addTo(map);
    activeMapMarkers.push(marker);
  });
  map.on('load',() => {
    if (activeDayMap !== map) return;
    if (points.length > 1) {
      map.addSource('stop-order',{type:'geojson',data:{type:'Feature',geometry:{type:'LineString',coordinates:points.map(p=>p.coord)}}});
      map.addLayer({id:'stop-order',type:'line',source:'stop-order',paint:{'line-color':'#d87336','line-width':3,'line-opacity':0.9,'line-dasharray':[2,2]}});
    }
    status.hidden=true;
    fitDayMap();
  });
  map.on('error',event => {
    if (activeDayMap === map && !map.loaded() && event.error?.message) {
      status.hidden=false;
      status.textContent='地图正在加载；若持续空白，请检查网络后刷新页面。';
    }
  });
  document.querySelector('#mapReset').addEventListener('click',fitDayMap);
}

function focusDayPointByIndex(index) {
  const point=dayMapPoints[activeDayIndex][index];
  selectGaodePoint(index);
  document.querySelector('#daily-map-block').scrollIntoView({behavior:'smooth',block:'center'});
  if(activeMapMode==='gaode' || !activeDayMap) return;
  activeDayMap.flyTo({center:point.coord,zoom:Math.max(activeDayMap.getZoom(),13),duration:550});
  activeMapMarkers[index].togglePopup();
}

function focusDayPoint(stopIndex) {
  const point=pointForStop(activeDayIndex,stopIndex);
  if(point) {
    if(activeMapMode!=='gaode') showMapMode('gaode');
    focusDayPointByIndex(dayMapPoints[activeDayIndex].indexOf(point));
  }
}
