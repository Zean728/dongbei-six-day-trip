const days = [
  {
    date:'10.01', week:'周四', city:'长春', title:'落地长春，先吃一锅东北味', desc:'到酒店放好行李，下午认真逛伪满皇宫，晚上去这有山。',
    stops:[
      ['06:25','杭州起飞','09:25 预计落地长春；出机场与进城时间留弹性。','长春龙嘉国际机场'],
      ['11:00','酒店办理入住','长春吾悦广场景阳大路亚朵见野；如房间未好，先寄存行李。','长春吾悦广场景阳大路亚朵见野酒店'],
      ['11:30','午餐 · 铁锅炖','优先选酒店附近可订位的店。现炖通常需要时间，四人最好先电话确认。','长春吾悦广场 铁锅炖'],
      ['13:00','伪满皇宫博物院','建议提前约讲解，游览约 3–4 小时；国庆公告显示延时开放至 19:00。','伪满皇宫博物院'],
      ['17:00','这有山 · 晚餐与逛街','先逛室内山道，再在馆内按实时排队选晚餐。','这有山'],
      ['19:30','可选 · 洗浴放松','体力还有余量再去；第二天早班车，建议别结束太晚。','长春 洗浴中心']
    ],
    stay:'长春吾悦广场景阳大路亚朵见野', food:'铁锅炖 + 这有山馆内晚餐', tip:'13:00 到馆与午餐、酒店休息之间比较紧。若铁锅炖出餐慢，讲解预约可改到 13:30–14:00。'
  },
  {
    date:'10.02', week:'周五', city:'长春 → 延吉', title:'08:52 高铁出发，11:16 到延吉西', desc:'早上从长春酒店去长春站；中午到延吉后吃张师傅参鸡汤，下午看博物馆、逛延边大学校园，夜里看网红墙。',
    stops:[
      ['07:15','长春酒店退房 → 长春站','建议早餐后带行李出发，打车或地铁按当天路况选；目标 08:00 前到长春站，留约 50 分钟安检、检票。','长春吾悦广场景阳大路亚朵见野酒店'],
      ['08:00 前','长春站候车、检票','目的地是长春站（长白路 5 号）；不要走错长春西站。','长春站'],
      ['08:52–11:16','长春站 → 延吉西站 · 高铁','按已购车票乘车；地图总览连线仅表示两站顺序，不是铁路线。','延吉西站'],
      ['11:16–12:15','延吉西站出站 → 延吉酒店','到站后取行李，前往梨花路亚朵酒店寄存；若交通拥堵就直接去张师傅吃饭，酒店稍后再办理。','延吉延边大学网红墙梨花路亚朵酒店'],
      ['约 12:30','午餐 · 张师傅参鸡汤','去新华街总店（新华街 195 号附近）；到店前可电话确认国庆营业与排队情况。','张师傅参鸡汤'],
      ['14:30','推荐 · 延边博物馆','看延边历史与朝鲜族文化，建议留 1–1.5 小时；出发前查节假日开放公告。','延边博物馆'],
      ['16:30','延边大学校园遛弯','从公园路南门到校园里散步，是否能入校以当天门禁为准；若不对游客开放，就沿公园路和网红墙周边走走。','延边大学延吉校区南门'],
      ['18:00','延大网红墙','傍晚至入夜看双语招牌亮灯，顺手逛延大周边。','延边大学网红墙'],
      ['19:00','晚餐 · 震海贝烤贝','海鲜街一带，国庆建议提前订位；用餐前确认具体分店。','震海贝烤贝']
    ],
    stay:'延吉延边大学网红墙梨花路亚朵酒店', food:'张师傅参鸡汤 + 震海贝烤贝', tip:'高铁 08:52 从长春站出发、11:16 到延吉西。07:15 离开酒店和 08:00 到站是建议缓冲时间，以实时路况调整；校园进入以现场规定为准。'
  },
  {
    date:'10.03', week:'周六', city:'延吉 → 松江河', title:'民俗园拍照，然后前往已订酒店', desc:'璞宣酒店实际位于松江河镇（西坡方向），从延吉过去比原计划到二道白河更远。',
    stops:[
      ['上午','睡个懒觉','想出门可去西市场吃早午餐；不赶景点。','延吉西市场'],
      ['11:30','午餐 · 十里辣拌花蟹','高德首条匹配在梨花路锦唐新外滩；公开评价多提到自提或外卖，四人到店堂食请提前确认。留够取车和妆造时间。','延吉 十里辣拌花蟹'],
      ['13:00','取车','现场核对驾照、保险、油量、还车门店及车况，四人行李尽量一次装好。','延吉 租车'],
      ['13:30','民俗园 · 提前到店妆造','先预约摄影/服装，按你们要求 13:30 提前抵达；正式拍摄与游园约 2–3 小时。','中国朝鲜族民俗园'],
      ['16:30','自驾前往松江河镇','目的地是长白山璞宣酒店；国庆夜间行车请以高德实时驾车路线核算时间，拍摄超时就尽早离开。','长白山璞宣酒店'],
      ['晚上','长白山璞宣酒店入住','酒店在松江河镇松山街 108 号。抵达后就近吃晚饭，晚到不再安排夜游。','长白山璞宣酒店']
    ],
    stay:'长白山璞宣酒店 · 松江河镇（10.03–10.05，第一晚）', food:'十里辣拌花蟹；晚餐酒店周边自选', tip:'酒店不在二道白河。民俗园拍摄结束后需另开往松江河；若 17:00 后出发，应直接赶往酒店，不安排小镇散步。'
  },
  {
    date:'10.04', week:'周日', city:'松江河 · 池南 · 万达', title:'古城秋色、湖边散步与汉拿山温泉', desc:'留在松江河及池南一带玩，不跨去北坡；下午和晚上集中在万达度假区。',
    stops:[
      ['09:00','从璞宣酒店出发','早餐后沿池南方向自驾；国庆道路与停车情况以当天地图为准。','长白山璞宣酒店'],
      ['10:00','讷殷古城 · 秋色与满族文化','看古城、三江交汇与博物馆，建议留约 2 小时；如想睡懒觉，可跳过此站，直接去万达度假区。','讷殷古城'],
      ['12:30','午餐 · 漫江或万达度假区','以现场营业的餐馆为准；不为吃饭专程绕远。','长白山万达国际度假区'],
      ['14:00','佛库伦湖 + 度假小镇','在万达度假区湖边拍秋景、逛小镇；天气好再考虑园内其他开放项目。','佛库伦湖'],
      ['16:00','汉拿山温泉','预留约 2 小时泡汤、更衣；四人提前确认 10 月 4 日营业时段、票价及是否需预约，带泳衣。','长白山汉拿山温泉'],
      ['18:30','度假区晚餐','温泉结束后就近吃饭，国庆餐馆可能排队。','长白山万达国际度假区'],
      ['20:00','返回璞宣酒店休息','次日按北坡门票检票时间退房、转住二道白河，今晚早点休息。','长白山璞宣酒店']
    ],
    stay:'长白山璞宣酒店 · 松江河镇（第二晚）', food:'漫江或万达午餐；晚餐度假区自选', tip:'汉拿山温泉在万达国际度假区白云路 455 号。历史资料标注 12:00–22:00，但国庆当天时段与门票请向温泉确认；泡汤后注意补水。'
  },
  {
    date:'10.05', week:'周一', city:'松江河 → 北坡', title:'12:00 北坡检票，优先看天池', desc:'早上从璞宣酒店退房，到二道白河先放行李、吃早午餐；按 12:00 北景区入园票检票，晚上住云顶市集亚朵。',
    stops:[
      ['08:00','璞宣酒店退房，开往二道白河','到云顶市集亚朵附近高德基准约 85.1 公里、1 小时 19 分；按约 2 小时预留国庆路况。出发前在酒店吃好早餐。','长白山璞宣酒店'],
      ['10:00–10:40','云顶市集亚朵寄存行李','先问酒店能否提前寄存；若不能，行李放在锁好的车内并遮挡贵重物品。正式入住留到下山后。','长白山北坡集散中心云顶市集亚朵酒店'],
      ['10:40–11:10','早午餐 + 整理上山装备','在酒店或集散中心附近简单吃，准备身份证、主峰车票、保暖外套、水和便携食物；不安排其他景点。'],
      ['11:30 前','到北景区游客集散中心','按现场指引停车、进入分时预检区；12:00 是计划检票时间，早到也应按预约时段等候。','长白山北景区游客集散中心'],
      ['12:00','按已购时段检票、乘景区车','此版按“12:00 北景区入园票”安排；若订单写的是主峰车 12:00，须按入园票时段重新倒推。不要自驾进景区。','长白山北景区游客集散中心'],
      ['约 13:30 起','优先天池主峰 · 以开放和车票为准','检票、乘车与主峰车排队时间不确定；有主峰车票且天池开放时先去。若未买主峰车票或主峰关闭，直接转瀑布、温泉群。','长白山天池'],
      ['约 15:00 后','瀑布 + 聚龙温泉群','这是第二优先项；按现场换乘和末班车提示安排，排队久就压缩停留。','长白瀑布'],
      ['视余时','绿渊潭可选，尽早返程','只有现场仍允许前往且返程车时间充足才加绿渊潭；小天池、谷底森林不列为当天必走。','绿渊潭'],
      ['下山后','回云顶市集亚朵办理入住','预计傍晚至晚上抵达，以实际排队、景区末班车和天气为准；取寄存行李后入住。','长白山北坡集散中心云顶市集亚朵酒店'],
      ['晚上','酒店附近吃晚餐，早点休息','D6 需要长途开车，今天不再加夜游。']
    ],
    stay:'长白山北坡集散中心云顶市集亚朵酒店 · 二道白河镇天池街 138 号（10.05–10.06）', food:'酒店早餐 + 10:40 早午餐 + 下山后晚餐', tip:'12:00 入园无法稳妥走完北景区全部景点：官方称旺季全程约 6–8 小时，且不含排队。先核对票面是否为北景区入园时段，以及是否买了天池主峰车票；下山车次与当天开放情况以景区公告为准。'
  },
  {
    date:'10.06', week:'周二', city:'二道白河 → 延吉', title:'返程日：直返或军舰山＋南坪冲刺', desc:'从北坡云顶市集亚朵酒店出发；默认直返机场，下方另列绕行方案。',
    stops:[
      ['建议 08:30','云顶市集亚朵退房，直返延吉机场','高德基准：约 143.8 公里、1 小时 41 分；前晚加油，出发时查看实时路况，目标 11:00 前到机场区域。','长白山北坡集散中心云顶市集亚朵酒店'],
      ['约 10:30–11:00','抵达延吉机场方向 · 留缓冲','国庆车流、山路与临时管制会增加时间；若赶路不顺，先完成还车。','延吉朝阳川国际机场'],
      ['视时间','机场附近简单午餐','只有还车时间宽裕再吃；不安排延吉市区远距离折返。','延吉朝阳川国际机场'],
      ['13:00','延吉机场门店按约还车','拍照留存车况和油量，确认还车完成；门店具体柜台或停车点以租车订单为准。','延吉朝阳川国际机场'],
      ['15:45 前','完成值机与安检','已在机场还车，按航司要求提前办理手续。','延吉朝阳川国际机场'],
      ['17:45','延吉飞杭州','行程结束，带着照片回家。','延吉朝阳川国际机场']
    ],
    stay:'返程 · 10.06 云顶市集亚朵退房', food:'机场附近简餐视时间而定', tip:'机场还车地点的具体柜台或停车位置需按租车订单确认。下方绕行方案按高德基准车程倒推；国庆车流、天气或边境路段管制仍可能使其失效。'
  }
];

const nav = document.querySelector('#dayNav');
const content = document.querySelector('#dayContent');
const escapeHtml = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
days.forEach((d,i)=>{
  const button=document.createElement('button');button.className='day-tab';button.type='button';button.setAttribute('role','tab');button.innerHTML=`<b>D${i+1} · ${d.date}</b><span>${d.week} ${d.city}</span>`;button.addEventListener('click',()=>{selectDay(i);if(window.matchMedia('(max-width:760px)').matches)content.scrollIntoView({behavior:'smooth',block:'start'})});nav.appendChild(button);
});
nav.setAttribute('role','tablist');
function selectDay(i){
  destroyDayMap();
  activeDayIndex=i;
  const d=days[i];[...nav.children].forEach((b,j)=>{b.setAttribute('aria-selected',j===i?'true':'false');b.tabIndex=j===i?0:-1});
  const pointButtons=dayMapPoints[i].map((point,index)=>`<button type="button" data-map-point="${index}" class="point-chip" aria-pressed="false"><b>${index+1}</b>${escapeHtml(point.name)}</button>`).join('');
  const adventureHtml=i===5?`<section class="adventure-card" aria-label="D6 军舰山南坪镇绕行方案"><div class="adventure-label">OPTION B · 特种兵可选</div><h4>军舰山 → 南坪镇 → 延吉机场</h4><p>建议 <strong>05:30 起床、06:00 从云顶市集亚朵出发</strong>。高德当前基准：酒店→军舰山 132.1 公里 / 2 小时 23 分，军舰山→南坪镇 39.4 公里 / 44 分，南坪镇→延吉机场 114.8 公里 / 1 小时 44 分。三段纯驾驶约 4 小时 51 分、共 286.3 公里；国庆路况、停车和机场门店交车时间另算。相比酒店直返机场基准 1 小时 41 分，绕行多约 3 小时 10 分车程。</p><div class="adventure-steps"><div><time>05:30</time><span>起床、退房，检查油量、证件和实时路况。</span></div><div><time>06:00</time><span>离开云顶市集亚朵；驾驶员须睡足，清晨山路放慢车速。</span></div><div><time>08:25–08:45</time><span>军舰山短停看景，以可通行道路和正规停车位置为准。<button type="button" data-map-point="1">地图定位 ↗</button></span></div><div><time>09:30–09:45</time><span>南坪镇短停，边境区域按现场标识通行和拍摄。<button type="button" data-map-point="2">地图定位 ↗</button></span></div><div><time>11:30 目标</time><span>到延吉机场租车门店；最晚 12:00 应抵达机场区域。<button type="button" data-map-point="3">地图定位 ↗</button></span></div><div><time>13:00</time><span>完成还车；17:45 航班，留足值机和安检时间。</span></div></div><div class="adventure-cutoff"><strong>撤退线</strong>：06:30 仍未发车、09:00 仍未离开军舰山、10:00 仍未离开南坪，或高德预报到机场晚于 12:00，就停止下一站打卡，直奔机场。天气差、道路管制或司机疲劳时，改用上面的直返方案。</div></section>`:'';
  const mapRouteNote=i===1?'D2 跨城虚线不表示实际铁路线。':i===5?'D6 虚线表示可选冲刺绕行，直返请用高德实时驾车导航。':'';
  const transitHtml=i===1?'<div class="journey-legs" aria-label="D2 交通路径"><div><b>01</b><span>长春酒店 → 长春站</span><small>07:15 出发</small></div><div><b>02</b><span>长春站 → 延吉西站</span><small>高铁 08:52–11:16</small></div><div><b>03</b><span>延吉西站 → 延吉酒店</span><small>到站后市内交通</small></div></div>':'';
  content.innerHTML=`<div class="day-head"><div><small>DAY ${String(i+1).padStart(2,'0')} / ${d.date} ${d.week}</small><h3>${escapeHtml(d.title)}</h3><p>${escapeHtml(d.desc)}</p></div><span class="city-badge">${escapeHtml(d.city)}</span></div><section id="weatherBlock" class="weather-block" aria-label="目的地天气"></section><div class="daily-map-block" id="daily-map-block"><div class="daily-map-heading"><div><span>当日实际地图</span><h4>高德地图直接看地点</h4></div><button type="button" id="mapReset" class="map-reset" hidden>查看全部地点</button></div><div class="map-mode-toggle" role="group" aria-label="地图显示方式"><button type="button" data-map-mode="gaode" aria-pressed="true">高德定位</button><button type="button" data-map-mode="overview" aria-pressed="false">当天总览</button></div>${transitHtml}<div id="gaodeMapWrap"><p class="gaode-current">当前地点：<strong id="selectedPointName"></strong></p><iframe id="gaodeFrame" class="gaode-map-frame" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen title="高德地点地图"></iframe><div class="navigation-actions"><a id="openGaodePlace" class="navigation-primary" target="_blank" rel="noopener">打开高德目的地 ↗</a><button type="button" id="copyPlaceAddress" class="navigation-copy">复制地址</button></div><p id="copyAddressStatus" class="copy-address-status" role="status" aria-live="polite"></p><p class="navigation-help">在高德地点页自行选择驾车或步行。手机浏览器会尝试打开高德 App；若被内置浏览器拦截，可在系统浏览器打开本页。</p></div><div id="dayMap" class="daily-real-map" aria-label="${escapeHtml(d.date)} ${escapeHtml(d.city)}当天地点总览" hidden></div><p id="dayMapStatus" class="map-load-status" role="status" hidden>地图加载中…</p><div class="map-point-list">${pointButtons}</div><p class="map-disclaimer">点击地点可在上方高德地图定位；“当天总览”显示全部标点，虚线仅表示站点顺序，不是驾车路线。${mapRouteNote}未选定门店的餐馆与租车点暂不落点。</p></div><div class="day-body"><div class="timeline">${d.stops.map((s,j)=>{const point=pointForStop(i,j);return `<article class="stop"><time>${escapeHtml(s[0])}</time><div><h4>${escapeHtml(s[1])}</h4><p>${escapeHtml(s[2])}</p>${point?`<button class="place-link" type="button" data-map-stop="${j}">在上方高德地图定位 ↑</button>`:''}</div></article>`}).join('')}</div><aside class="day-side"><div class="side-card"><span>WHERE TO STAY</span><h4>今晚住哪</h4><p>${escapeHtml(d.stay)}</p></div><div class="side-card"><span>WHAT TO EAT</span><h4>今天吃什么</h4><p>${escapeHtml(d.food)}</p></div><div class="tip"><strong>行程提醒</strong><p>${escapeHtml(d.tip)}</p></div></aside></div>${adventureHtml}`;
  renderDayWeather(i);
  activeMapMode='gaode';
  selectGaodePoint(defaultPointIndex[i]);
}
content.addEventListener('click',async event=>{
  const copyButton=event.target.closest('#copyPlaceAddress');
  if(copyButton){
    const address=copyButton.dataset.address;
    const status=copyButton.closest('#gaodeMapWrap').querySelector('#copyAddressStatus');
    let copied=false;
    try{await navigator.clipboard.writeText(address);copied=true}catch{}
    if(!copied){
      const field=document.createElement('textarea');
      field.value=address;
      field.setAttribute('readonly','');
      field.style.position='fixed';field.style.opacity='0';
      document.body.appendChild(field);field.select();
      try{copied=document.execCommand('copy')}catch{}
      field.remove();
    }
    status.textContent=copied?'已复制：'+address:'复制失败，请长按选择：'+address;
    return;
  }
  if(event.target.closest('#weatherRefresh')){refreshWeather();return}
  const modeButton=event.target.closest('[data-map-mode]');
  if(modeButton){showMapMode(modeButton.dataset.mapMode);return}
  const pointButton=event.target.closest('[data-map-point]');
  if(pointButton){focusDayPointByIndex(Number(pointButton.dataset.mapPoint));return}
  const stopButton=event.target.closest('[data-map-stop]');
  if(stopButton)focusDayPoint(Number(stopButton.dataset.mapStop));
});
nav.addEventListener('keydown',e=>{let i=[...nav.children].findIndex(b=>b.getAttribute('aria-selected')==='true');if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();i=(i+(e.key==='ArrowRight'?1:days.length-1))%days.length;nav.children[i].focus();selectDay(i)}});
selectDay(0);

const linkRoot=document.querySelector('#mapLinks');
days.forEach((day,index)=>{const button=document.createElement('button');button.type='button';button.className='overview-day-link';button.innerHTML=`<span>D${index+1} · ${escapeHtml(day.city)}</span><span>↑</span>`;button.addEventListener('click',()=>{selectDay(index);(window.matchMedia('(max-width:760px)').matches?content:document.querySelector('#schedule')).scrollIntoView({behavior:'smooth',block:'start'})});linkRoot.appendChild(button)});
