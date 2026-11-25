(function(){
'use strict';
var SITE=window.SITE||{};
var LANGS=[['ru','RU'],['uk','UK'],['en','EN']];
var D={
ru:{
nav_features:'Возможности',nav_download:'Скачать',nav_faq:'Вопросы',nav_privacy:'Конфиденциальность',
hero_tag:'Плеер для вашей музыки с 3D-обложками',
hero_sub:'Слушайте файлы со своего устройства: mp3, FLAC, WAV и другие. Плейлисты, тексты песен, избранное и никакого аккаунта.',
btn_win:'Скачать для Windows',btn_win_s:'установщик .exe',btn_and:'Скачать для Android',btn_and_s:'файл .apk',btn_web:'Открыть в браузере',btn_web_s:'без установки',
feat_title:'Всё, что нужно для своей музыки',feat_lead:'Coverly играет файлы с вашего устройства. Красивый интерфейс, а не просто список.',
priv_title:'Ваша музыка остаётся у вас',priv_text:'Нет аккаунтов и серверов автора: файлы, плейлисты и настройки хранятся только на вашем устройстве. Поиск обложек и текстов в интернете можно выключить одним переключателем.',priv_link:'Политика конфиденциальности',
dl_title:'Скачать Coverly',dl_lead:'Всегда последняя версия: ссылки подтягиваются автоматически из свежего релиза.',
dl_win_btn:'Скачать установщик',dl_and_btn:'Скачать APK',dl_play:'Google Play',dl_store:'Microsoft Store',
dl_win_note:'Windows 10 и 11. Установщик пока без цифровой подписи: если Windows покажет предупреждение SmartScreen, нажмите «Подробнее» → «Выполнить в любом случае».',
dl_and_note:'Android 7.0 и новее. Разрешите установку из этого источника, когда телефон спросит. В Android-версии показывается небольшой рекламный баннер.',
legacy:'Старый телефон (Android 5.1 и 6.0)? Скачайте <a href="{u}">версию для старых устройств</a>.',
v_line:'Версия {v} · {d}',v_loading:'Загрузка сведений о версии…',v_none:'Релиз ещё не опубликован. Загляните позже.',v_all:'Все версии и история изменений на GitHub',
size:'{s} МБ',missing:'Файл для этой платформы пока не опубликован.',
faq_title:'Вопросы и ответы',
foot_mail:'Написать автору',
f:[['Cover Flow','Листайте обложки в 3D, как в классическом плеере. Свайп, колесо мыши или клавиши со стрелками.','M3 7h4v10H3zM10 5h4v14h-4zM17 7h4v10h-4z'],
['Все форматы','mp3, FLAC, WAV, M4A, OGG и Opus. Название, исполнитель и обложка читаются из тегов.','M9 18V5l11-2v13M9 18a3 3 0 11-6 0 3 3 0 016 0zM20 16a3 3 0 11-6 0 3 3 0 016 0z'],
['Плейлисты','Перетаскивайте треки и плейлисты, выбирайте свои обложки, создавайте плейлист из папки.','M4 6h16M4 12h16M4 18h10'],
['Тексты песен','Синхронная подсветка строк из файла .lrc или автоматический поиск текста.','M4 5h16v11H9l-5 4zM8 9h8M8 12h5'],
['Обложки','Из тегов, из папки или найдутся в интернете. Свою можно выбрать долгим нажатием.','M4 5h16v14H4zM4 15l5-5 4 4 3-3 4 4M9 9h.01'],
['Очередь и избранное','«Играть следом», выбор нескольких треков, перенос и копирование между плейлистами.','M12 21s-7.5-4.6-9.6-9.2A5.4 5.4 0 0112 6.2a5.4 5.4 0 019.6 5.6C19.5 16.4 12 21 12 21z'],
['Темы и цвета','Тёмная и светлая темы, свой цвет акцента или цвет из обложки текущего трека.','M12 3a9 9 0 100 18zM12 3v18'],
['12 языков','Русский, украинский, английский, испанский, немецкий, французский и ещё шесть.','M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18']],
q:[['Это бесплатно?','Да. В Android-версии показывается небольшой рекламный баннер (сеть Start.io), в Windows и в браузере рекламы нет.'],
['Нужен ли аккаунт?','Нет. Приложение работает без регистрации и входа.'],
['Куда сохраняются мои файлы?','Копии добавленных файлов хранятся внутри приложения на вашем устройстве и никуда не отправляются. При удалении плейлиста копии тоже удаляются.'],
['Что отправляется в интернет?','Только поиск обложек и текстов: название и исполнитель трека уходят в Apple (iTunes) и LRCLIB. Это можно выключить в настройках. Кроме того, Android-версия показывает рекламу: рекламная сеть Start.io получает рекламный идентификатор устройства. Подробности в политике конфиденциальности.'],
['Как не потерять плейлисты?','В Настройках → Резервная копия можно сохранить плейлисты и настройки в один файл (с музыкой или только плейлисты) и позже восстановить их, в том числе на другом устройстве.'],
['Можно установить без магазина?','Да. Откройте веб-версию в Chrome или Edge и нажмите «Установить приложение» (на телефоне: «Добавить на главный экран»). Она работает и без интернета.']]
},
uk:{
nav_features:'Можливості',nav_download:'Завантажити',nav_faq:'Питання',nav_privacy:'Конфіденційність',
hero_tag:'Плеєр для вашої музики з 3D-обкладинками',
hero_sub:'Слухайте файли зі свого пристрою: mp3, FLAC, WAV та інші. Плейлисти, тексти пісень, обране і жодного акаунта.',
btn_win:'Завантажити для Windows',btn_win_s:'інсталятор .exe',btn_and:'Завантажити для Android',btn_and_s:'файл .apk',btn_web:'Відкрити в браузері',btn_web_s:'без встановлення',
feat_title:'Усе потрібне для вашої музики',feat_lead:'Coverly грає файли з вашого пристрою. Гарний інтерфейс, а не просто список.',
priv_title:'Ваша музика залишається у вас',priv_text:'Немає акаунтів і серверів автора: файли, плейлисти та налаштування зберігаються лише на вашому пристрої. Пошук обкладинок і текстів в інтернеті можна вимкнути одним перемикачем.',priv_link:'Політика конфіденційності',
dl_title:'Завантажити Coverly',dl_lead:'Завжди остання версія: посилання підтягуються автоматично зі свіжого релізу.',
dl_win_btn:'Завантажити інсталятор',dl_and_btn:'Завантажити APK',dl_play:'Google Play',dl_store:'Microsoft Store',
dl_win_note:'Windows 10 і 11. Інсталятор поки без цифрового підпису: якщо Windows покаже попередження SmartScreen, натисніть «Докладніше» → «Все одно виконати».',
dl_and_note:'Android 7.0 і новіші. Дозвольте встановлення з цього джерела, коли телефон запитає. В Android-версії показується невеликий рекламний банер.',
legacy:'Старий телефон (Android 5.1 і 6.0)? Завантажте <a href="{u}">версію для старих пристроїв</a>.',
v_line:'Версія {v} · {d}',v_loading:'Завантаження відомостей про версію…',v_none:'Реліз ще не опубліковано. Зазирніть пізніше.',v_all:'Усі версії та історія змін на GitHub',
size:'{s} МБ',missing:'Файл для цієї платформи поки не опубліковано.',
faq_title:'Питання та відповіді',
foot_mail:'Написати автору',
f:[['Cover Flow','Гортайте обкладинки в 3D, як у класичному плеєрі. Свайп, колесо миші або стрілки.','M3 7h4v10H3zM10 5h4v14h-4zM17 7h4v10h-4z'],
['Усі формати','mp3, FLAC, WAV, M4A, OGG та Opus. Назва, виконавець і обкладинка читаються з тегів.','M9 18V5l11-2v13M9 18a3 3 0 11-6 0 3 3 0 016 0zM20 16a3 3 0 11-6 0 3 3 0 016 0z'],
['Плейлисти','Перетягуйте треки й плейлисти, обирайте власні обкладинки, створюйте плейлист із теки.','M4 6h16M4 12h16M4 18h10'],
['Тексти пісень','Синхронне підсвічування рядків із файлу .lrc або автоматичний пошук тексту.','M4 5h16v11H9l-5 4zM8 9h8M8 12h5'],
['Обкладинки','З тегів, із теки або знайдуться в інтернеті. Власну можна обрати довгим натисканням.','M4 5h16v14H4zM4 15l5-5 4 4 3-3 4 4M9 9h.01'],
['Черга й обране','«Грати наступним», вибір кількох треків, перенесення й копіювання між плейлистами.','M12 21s-7.5-4.6-9.6-9.2A5.4 5.4 0 0112 6.2a5.4 5.4 0 019.6 5.6C19.5 16.4 12 21 12 21z'],
['Теми й кольори','Темна і світла теми, власний колір акценту або колір з обкладинки поточного треку.','M12 3a9 9 0 100 18zM12 3v18'],
['12 мов','Українська, російська, англійська, іспанська, німецька, французька та ще шість.','M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18']],
q:[['Це безкоштовно?','Так. В Android-версії показується невеликий рекламний банер (мережа Start.io), у Windows і в браузері реклами немає.'],
['Чи потрібен акаунт?','Ні. Застосунок працює без реєстрації та входу.'],
['Куди зберігаються мої файли?','Копії доданих файлів зберігаються всередині застосунку на вашому пристрої й нікуди не надсилаються. Під час видалення плейлиста копії теж видаляються.'],
['Що надсилається в інтернет?','Лише пошук обкладинок і текстів: назва та виконавець треку йдуть до Apple (iTunes) і LRCLIB. Це можна вимкнути в налаштуваннях. Крім того, Android-версія показує рекламу: рекламна мережа Start.io отримує рекламний ідентифікатор пристрою. Докладніше в політиці конфіденційності.'],
['Як не втратити плейлисти?','У Налаштуваннях → Резервна копія можна зберегти плейлисти й налаштування в один файл (з музикою або лише плейлисти) та пізніше відновити їх, зокрема на іншому пристрої.'],
['Чи можна встановити без магазину?','Так. Відкрийте веб-версію в Chrome або Edge і натисніть «Встановити застосунок» (на телефоні: «Додати на головний екран»). Вона працює й без інтернету.']]
},
en:{
nav_features:'Features',nav_download:'Download',nav_faq:'FAQ',nav_privacy:'Privacy',
hero_tag:'A music player with 3D covers for your own library',
hero_sub:'Play files from your device: mp3, FLAC, WAV and more. Playlists, synced lyrics, favorites and no account.',
btn_win:'Download for Windows',btn_win_s:'.exe installer',btn_and:'Download for Android',btn_and_s:'.apk file',btn_web:'Open in browser',btn_web_s:'no install',
feat_title:'Everything for your own music',feat_lead:'Coverly plays the files on your device, with a beautiful interface instead of a plain list.',
priv_title:'Your music stays with you',priv_text:'No accounts and no servers run by the author: files, playlists and settings live only on your device. Online search for covers and lyrics can be turned off with one switch.',priv_link:'Privacy Policy',
dl_title:'Download Coverly',dl_lead:'Always the latest version: links are pulled automatically from the newest release.',
dl_win_btn:'Download installer',dl_and_btn:'Download APK',dl_play:'Google Play',dl_store:'Microsoft Store',
dl_win_note:'Windows 10 and 11. The installer is not code-signed yet: if Windows shows a SmartScreen warning, choose “More info” → “Run anyway”.',
dl_and_note:'Android 7.0 and newer. Allow installing from this source when your phone asks. The Android version shows a small ad banner.',
legacy:'Older phone (Android 5.1 or 6.0)? Get the <a href="{u}">version for older devices</a>.',
v_line:'Version {v} · {d}',v_loading:'Loading version info…',v_none:'No release has been published yet. Please check back soon.',v_all:'All versions and changelog on GitHub',
size:'{s} MB',missing:'The file for this platform has not been published yet.',
faq_title:'Questions & answers',
foot_mail:'Contact the author',
f:[['Cover Flow','Flip through covers in 3D like a classic player. Swipe, mouse wheel or arrow keys.','M3 7h4v10H3zM10 5h4v14h-4zM17 7h4v10h-4z'],
['All formats','mp3, FLAC, WAV, M4A, OGG and Opus. Title, artist and cover come from the tags.','M9 18V5l11-2v13M9 18a3 3 0 11-6 0 3 3 0 016 0zM20 16a3 3 0 11-6 0 3 3 0 016 0z'],
['Playlists','Drag tracks and playlists, pick your own covers, create a playlist from a folder.','M4 6h16M4 12h16M4 18h10'],
['Lyrics','Synced line highlighting from an .lrc file or automatic lyrics search.','M4 5h16v11H9l-5 4zM8 9h8M8 12h5'],
['Covers','From tags, from the folder, or found online. Long-press to choose your own.','M4 5h16v14H4zM4 15l5-5 4 4 3-3 4 4M9 9h.01'],
['Queue & favorites','“Play next”, multi-select, move and copy tracks between playlists.','M12 21s-7.5-4.6-9.6-9.2A5.4 5.4 0 0112 6.2a5.4 5.4 0 019.6 5.6C19.5 16.4 12 21 12 21z'],
['Themes & colors','Dark and light themes, your own accent color or one taken from the current cover.','M12 3a9 9 0 100 18zM12 3v18'],
['12 languages','English, Russian, Ukrainian, Spanish, German, French and six more.','M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18']],
q:[['Is it free?','Yes. The Android version shows a small ad banner (Start.io network); Windows and the browser version have no ads.'],
['Do I need an account?','No. The app works without signing up or signing in.'],
['Where are my files stored?','Copies of the files you add are kept inside the app on your device and are never uploaded. Deleting a playlist deletes its copies too.'],
['What is sent over the internet?','Only the cover and lyrics search: a track’s title and artist go to Apple (iTunes) and LRCLIB. You can turn this off in Settings. The Android version also shows ads, so the Start.io ad network receives the device’s advertising ID. See the Privacy Policy for details.'],
['How do I avoid losing my playlists?','In Settings → Backup you can save playlists and settings into one file (with music or playlists only) and restore them later, including on another device.'],
['Can I install it without a store?','Yes. Open the web version in Chrome or Edge and choose “Install app” (on a phone: “Add to Home screen”). It also works offline.']]
}};
function supported(l){return D[l]?l:null}
var lang=(function(){try{var s=localStorage.getItem('coverly_site_lang');if(supported(s))return s}catch(e){}
 var n=((navigator.languages&&navigator.languages[0])||navigator.language||'en').toLowerCase().slice(0,2);
 return supported(n)||'en'})();
function T(k,v){var s=(D[lang]&&D[lang][k])||D.en[k]||k;if(v)for(var x in v)s=s.replace('{'+x+'}',v[x]);return s}
function $(id){return document.getElementById(id)}
function setLang(l){lang=l;try{localStorage.setItem('coverly_site_lang',l)}catch(e){}render()}
var rel=null,relState='loading';
function render(){
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-i]').forEach(function(e){e.textContent=T(e.getAttribute('data-i'))});
  var lg=$('lang');if(lg){lg.textContent='';LANGS.forEach(function(p){var b=document.createElement('button');b.textContent=p[1];b.className=lang===p[0]?'on':'';b.onclick=function(){setLang(p[0])};lg.appendChild(b)})}
  var g=$('featGrid');
  if(g){g.textContent='';D[lang].f.forEach(function(f){
    var c=document.createElement('div');c.className='card';
    c.innerHTML='<div class="ico"><svg viewBox="0 0 24 24"><path d="'+f[2]+'"/></svg></div><h3></h3><p></p>';
    c.querySelector('h3').textContent=f[0];c.querySelector('p').textContent=f[1];g.appendChild(c)})}
  var fl=$('faqList');
  if(fl){fl.textContent='';D[lang].q.forEach(function(q){var d=document.createElement('details');var s=document.createElement('summary');s.textContent=q[0];var p=document.createElement('p');p.textContent=q[1];d.appendChild(s);d.appendChild(p);fl.appendChild(d)})}
  var o=$('owner');if(o)o.textContent=SITE.owner||'Coverly';
  var m=$('mailLink');if(m){m.href='mailto:'+SITE.email;m.textContent=T('foot_mail')}
  var gh=$('ghLink');if(gh)gh.href=repoOk()?'https://github.com/'+SITE.repo:'#';
  document.querySelectorAll('[data-email]').forEach(function(e){e.textContent=SITE.email;if(e.tagName==='A')e.href='mailto:'+SITE.email});
  document.querySelectorAll('[data-owner]').forEach(function(e){e.textContent=SITE.owner||'Coverly'});
  paintRelease();
}
function repoOk(){return SITE.repo&&SITE.repo.indexOf('/')>0&&SITE.repo.indexOf('OWNER')<0}
function pick(assets){
  var o={win:null,and:null,legacy:null};
  (assets||[]).forEach(function(a){
    var n=a.name.toLowerCase();
    if(/\.exe$/.test(n))o.win=o.win||a;
    else if(/\.apk$/.test(n)){if(/legacy/.test(n))o.legacy=o.legacy||a;else o.and=o.and||a}
  });
  return o;
}
function fmtDate(s){try{return new Date(s).toLocaleDateString(lang,{year:'numeric',month:'long',day:'numeric'})}catch(e){return s}}
function mb(n){return T('size',{s:(n/1048576).toFixed(1)})}
function paintRelease(){
  var rl=repoOk()?'https://github.com/'+SITE.repo+'/releases/latest':'#';
  var hv=$('heroVer');
  var as=rel?pick(rel.assets):{win:null,and:null,legacy:null};
  function setBtn(id,a){var b=$(id);if(!b)return;b.href=a?a.browser_download_url:rl;b.removeAttribute('download');b.classList.toggle('dim',!a)}
  setBtn('winBtn',as.win);setBtn('andBtn',as.and);
  var hw=$('heroWin'),ha=$('heroAnd');
  if(hw&&as.win)hw.href=as.win.browser_download_url;
  if(ha&&as.and)ha.href=as.and.browser_download_url;
  var wm=$('winMeta'),am=$('andMeta');
  if(relState==='ok'&&rel){
    var ver=String(rel.tag_name||rel.name||'').replace(/^v/i,'');
    var line=T('v_line',{v:ver,d:fmtDate(rel.published_at)});
    if(hv)hv.textContent=line;
    if(wm)wm.textContent=as.win?line+' · '+mb(as.win.size):T('missing');
    if(am)am.textContent=as.and?line+' · '+mb(as.and.size):T('missing');
  }else{
    var msg=relState==='loading'&&repoOk()?T('v_loading'):T('v_none');
    if(hv)hv.textContent=msg;if(wm)wm.textContent=msg;if(am)am.textContent=msg;
  }
  var lr=$('legacyRow');if(lr){lr.innerHTML='';if(as.legacy){lr.innerHTML=T('legacy',{u:as.legacy.browser_download_url})}}
  var al=$('allLink');if(al){al.innerHTML='';if(repoOk()){var a=document.createElement('a');a.href='https://github.com/'+SITE.repo+'/releases';a.rel='noopener';a.textContent=T('v_all');al.appendChild(a)}}
  var pb=$('playBtn');if(pb){pb.hidden=!SITE.playUrl;if(SITE.playUrl)pb.href=SITE.playUrl}
  var sb=$('storeBtn');if(sb){sb.hidden=!SITE.storeUrl;if(SITE.storeUrl)sb.href=SITE.storeUrl}
}
function loadRelease(){
  if(!repoOk()){relState='none';paintRelease();return}
  fetch('https://api.github.com/repos/'+SITE.repo+'/releases/latest',{headers:{Accept:'application/vnd.github+json'}})
   .then(function(r){if(!r.ok)throw new Error(r.status);return r.json()})
   .then(function(j){rel=j;relState='ok';paintRelease()})
   .catch(function(){relState='none';paintRelease()});
}
render();
if($('winBtn'))loadRelease();
})();
