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
    date:'10.02', week:'周五', city:'延吉', title:'坐火车去延吉，夜里看网红墙', desc:'下午推荐“延边博物馆 + 西市场”组合，离晚上的吃逛节奏更顺。',
    stops:[
      ['早上','长春 → 延吉','按已买车次出发，预留到站取行李与市区交通时间。','长春站'],
      ['12:00','午餐 · 金至参鸡汤（门店待确认）','目前查到的金至朝鲜族参鸡汤在二道白河，尚未核实延吉分店。先确认你们收藏的店；若是二道白河店，可改到 D4 晚餐。','延吉 金至参鸡汤'],
      ['14:00','推荐 · 延边博物馆','看延边历史与朝鲜族文化，建议留 1–1.5 小时；出发前查节假日开放公告。','延边博物馆'],
      ['16:00','西市场闲逛 / 酒店休息','想买零食、打糕和特产就逛西市场；累了直接去酒店。','延吉西市场'],
      ['18:00','延大网红墙','傍晚至入夜看双语招牌亮灯，顺手逛延大周边。','延边大学网红墙'],
      ['19:00','晚餐 · 震海贝烤贝','海鲜街一带，国庆建议提前订位；用餐前确认具体分店。','震海贝烤贝']
    ],
    stay:'延吉延边大学网红墙梨花路亚朵酒店', food:'参鸡汤门店待确认 + 震海贝烤贝', tip:'如果火车到得晚，直接跳过博物馆：酒店休息 → 西市场或咖啡馆 → 网红墙。'
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
    date:'10.04', week:'周日', city:'松江河 ↔ 九溪听泉', title:'去九溪听泉漂流，傍晚返回酒店', desc:'九溪听泉靠近北坡；从松江河往返需跨越两侧，今天以漂流为主。',
    stops:[
      ['07:30','从璞宣酒店出发','松江河到九溪听泉需跨到北坡一侧，不能沿用原先“二道白河半小时到达”的安排；导航以当天路况为准。','长白山璞宣酒店'],
      ['上午','九溪听泉 · 森林漫步','到达后先确认漂流批次、装备和寄存安排，再走溪谷与栈道。','长白山九溪听泉景区'],
      ['按预约','九溪听泉漂流','体验约 40 分钟，连同排队、更衣预留 1.5–2 小时；带防水袋和替换衣物。','长白山九溪听泉漂流'],
      ['漂流后','附近午餐 + 换衣','在北坡一侧吃热饭、换干衣服，再决定是否加逛。','二道白河 朝鲜族汤饭'],
      ['若有时间','美人松空中廊桥公园 · 可选','若漂流结束早、体力够，可顺路去二道白河走走；结束晚就直接返程。','二道白河美人松空中廊桥公园'],
      ['傍晚','返回璞宣酒店','回松江河镇晚餐并休息；第二天仍要再赴北坡。','长白山璞宣酒店']
    ],
    stay:'长白山璞宣酒店 · 松江河镇（第二晚）', food:'漂流后吃热汤饭；晚餐松江河镇自选', tip:'九溪听泉漂流曾在 9 月 7—18 日因河道升级暂停，10 月 4 日复运情况需确认。酒店与景区分处西坡、北坡方向，往返交通会占用较多时间。'
  },
  {
    date:'10.05', week:'周一', city:'松江河 → 北坡', title:'退房转住北坡，按门票时段上山', desc:'早上从璞宣酒店带行李出发，晚上住北坡集散中心云顶市集亚朵酒店，不再折返松江河。',
    stops:[
      ['按票面倒推','璞宣酒店退房，开往北坡集散中心','高德基准：到云顶市集亚朵附近约 85.1 公里、1 小时 19 分；再预留停车、寄存行李及景区换乘时间。若检票早，先去集散中心，游玩后再办理酒店入住。','长白山璞宣酒店'],
      ['按票面','北坡集散中心检票、换乘','门票已购；检票时段优先，按景区指定地点停车和乘车。车上留好当晚入住的行李。','长白山北景区游客集散中心'],
      ['上午','天池主峰 · 天气允许时优先','需核对主峰车票。山顶更冷、风大，带保暖外套和证件。','长白山天池'],
      ['中午','瀑布 + 聚龙温泉群','按景区摆渡车顺序走；可在景区简单补充热食。','长白瀑布'],
      ['下午','绿渊潭 / 小天池 / 地下森林','根据排队、体力与天气取舍，不必为了打卡每处而赶路。','绿渊潭'],
      ['傍晚','入住云顶市集亚朵酒店','酒店在二道白河镇天池街 138 号；取回行李后办理入住，不再开车返回松江河。','长白山北坡集散中心云顶市集亚朵酒店'],
      ['晚上','云顶市集附近晚餐 · 可选','若体力允许就近吃饭散步，早点休息，为次日返程留精力。','云顶市集']
    ],
    stay:'长白山北坡集散中心云顶市集亚朵酒店 · 二道白河镇天池街 138 号（10.05–10.06）', food:'景区简餐 + 北坡酒店附近晚餐', tip:'高德显示璞宣酒店到新亚朵酒店约 85.1 公里、1 小时 19 分。景区游玩、停车和换乘另算；具体出发时间按已购门票检票时段倒推。'
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
  const button=document.createElement('button');button.className='day-tab';button.type='button';button.setAttribute('role','tab');button.innerHTML=`<b>D${i+1} · ${d.date}</b><span>${d.week} ${d.city}</span>`;button.addEventListener('click',()=>selectDay(i));nav.appendChild(button);
});
nav.setAttribute('role','tablist');
function selectDay(i){
  destroyDayMap();
  activeDayIndex=i;
  const d=days[i];[...nav.children].forEach((b,j)=>{b.setAttribute('aria-selected',j===i?'true':'false');b.tabIndex=j===i?0:-1});
  const pointButtons=dayMapPoints[i].map((point,index)=>`<button type="button" data-map-point="${index}" class="point-chip" aria-pressed="false"><b>${index+1}</b>${escapeHtml(point.name)}</button>`).join('');
  const adventureHtml=i===5?`<section class="adventure-card" aria-label="D6 军舰山南坪镇绕行方案"><div class="adventure-label">OPTION B · 特种兵可选</div><h4>军舰山 → 南坪镇 → 延吉机场</h4><p>建议 <strong>05:30 起床、06:00 从云顶市集亚朵出发</strong>。高德当前基准：酒店→军舰山 132.1 公里 / 2 小时 23 分，军舰山→南坪镇 39.4 公里 / 44 分，南坪镇→延吉机场 114.8 公里 / 1 小时 44 分。三段纯驾驶约 4 小时 51 分、共 286.3 公里；国庆路况、停车和机场门店交车时间另算。相比酒店直返机场基准 1 小时 41 分，绕行多约 3 小时 10 分车程。</p><div class="adventure-steps"><div><time>05:30</time><span>起床、退房，检查油量、证件和实时路况。</span></div><div><time>06:00</time><span>离开云顶市集亚朵；驾驶员须睡足，清晨山路放慢车速。</span></div><div><time>08:25–08:45</time><span>军舰山短停看景，以可通行道路和正规停车位置为准。<button type="button" data-map-point="1">地图定位 ↗</button></span></div><div><time>09:30–09:45</time><span>南坪镇短停，边境区域按现场标识通行和拍摄。<button type="button" data-map-point="2">地图定位 ↗</button></span></div><div><time>11:30 目标</time><span>到延吉机场租车门店；最晚 12:00 应抵达机场区域。<button type="button" data-map-point="3">地图定位 ↗</button></span></div><div><time>13:00</time><span>完成还车；17:45 航班，留足值机和安检时间。</span></div></div><div class="adventure-cutoff"><strong>撤退线</strong>：06:30 仍未发车、09:00 仍未离开军舰山、10:00 仍未离开南坪，或高德预报到机场晚于 12:00，就停止下一站打卡，直奔机场。天气差、道路管制或司机疲劳时，改用上面的直返方案。</div></section>`:'';
  const mapRouteNote=i===5?'D6 虚线表示可选冲刺绕行，直返请用高德实时驾车导航。':'';
  content.innerHTML=`<div class="day-head"><div><small>DAY ${String(i+1).padStart(2,'0')} / ${d.date} ${d.week}</small><h3>${escapeHtml(d.title)}</h3><p>${escapeHtml(d.desc)}</p></div><span class="city-badge">${escapeHtml(d.city)}</span></div><section id="weatherBlock" class="weather-block" aria-label="目的地天气"></section><div class="daily-map-block" id="daily-map-block"><div class="daily-map-heading"><div><span>当日实际地图</span><h4>高德地图直接看地点</h4></div><button type="button" id="mapReset" class="map-reset" hidden>查看全部地点</button></div><div class="map-mode-toggle" role="group" aria-label="地图显示方式"><button type="button" data-map-mode="gaode" aria-pressed="true">高德定位</button><button type="button" data-map-mode="overview" aria-pressed="false">当天总览</button></div><div id="gaodeMapWrap"><p class="gaode-current">当前地点：<strong id="selectedPointName"></strong></p><iframe id="gaodeFrame" class="gaode-map-frame" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen title="高德地点地图"></iframe><div class="navigation-actions"><a id="driveNavigation" class="navigation-primary">高德 App 直接导航 ↗</a><a id="routePreview" class="navigation-secondary" target="_blank" rel="noopener">驾车路线预览 ↗</a><a id="walkNavigation" class="navigation-secondary" target="_blank" rel="noopener">步行路线 ↗</a><a id="didiRide" class="navigation-didi" href="diditaxi://">尝试打开滴滴 App ↗</a><a id="didiWeb" class="navigation-didi-web" href="https://webapp.didi.cn/" target="_blank" rel="noopener">滴滴网页版备用 ↗</a></div><p class="navigation-help">高德导航以手机当前位置为起点。滴滴按钮会尝试唤起已安装的 App，并复制所选目的地；若被内置浏览器拦截，请用系统浏览器打开本页或点网页版备用。叫车仍需在滴滴中确认上车点和订单。</p><p id="didiStatus" class="didi-status" role="status"></p></div><div id="dayMap" class="daily-real-map" aria-label="${escapeHtml(d.date)} ${escapeHtml(d.city)}当天地点总览" hidden></div><p id="dayMapStatus" class="map-load-status" role="status" hidden>地图加载中…</p><div class="map-point-list">${pointButtons}</div><p class="map-disclaimer">点击地点可在上方高德地图定位；“当天总览”显示全部标点，虚线仅表示站点顺序，不是驾车路线。${mapRouteNote}未选定门店的餐馆与租车点暂不落点。</p></div><div class="day-body"><div class="timeline">${d.stops.map((s,j)=>{const point=pointForStop(i,j);return `<article class="stop"><time>${escapeHtml(s[0])}</time><div><h4>${escapeHtml(s[1])}</h4><p>${escapeHtml(s[2])}</p>${point?`<button class="place-link" type="button" data-map-stop="${j}">在上方高德地图定位 ↑</button>`:''}</div></article>`}).join('')}</div><aside class="day-side"><div class="side-card"><span>WHERE TO STAY</span><h4>今晚住哪</h4><p>${escapeHtml(d.stay)}</p></div><div class="side-card"><span>WHAT TO EAT</span><h4>今天吃什么</h4><p>${escapeHtml(d.food)}</p></div><div class="tip"><strong>行程提醒</strong><p>${escapeHtml(d.tip)}</p></div></aside></div>${adventureHtml}`;
  renderDayWeather(i);
  activeMapMode='gaode';
  selectGaodePoint(defaultPointIndex[i]);
}
content.addEventListener('click',event=>{
  if(event.target.closest('#weatherRefresh')){refreshWeather();return}
  const didiLink=event.target.closest('#didiRide,#didiWeb');
  if(didiLink){
    const destination=didiLink.dataset.destination;
    const status=document.querySelector('#didiStatus');
    if(navigator.clipboard?.writeText) navigator.clipboard.writeText(destination).then(()=>{status.textContent='目的地已复制：'+destination+'；打开滴滴后粘贴并确认订单。'}).catch(()=>{status.textContent='请在滴滴中搜索目的地：'+destination;});
    else status.textContent='请在滴滴中搜索目的地：'+destination;
    return;
  }
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
days.forEach((day,index)=>{const button=document.createElement('button');button.type='button';button.className='overview-day-link';button.innerHTML=`<span>D${index+1} · ${escapeHtml(day.city)}</span><span>↑</span>`;button.addEventListener('click',()=>{selectDay(index);document.querySelector('#schedule').scrollIntoView({behavior:'smooth'})});linkRoot.appendChild(button)});
