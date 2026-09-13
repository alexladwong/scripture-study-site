
const data = {
  places: {
    jerusalem: {
      name: "Jerusalem",
      kicker: "Place",
      summary: "A central city across Old Testament history, the life of Jesus, and the early Church.",
      sections: [
        ["Biblical significance", "The supplied atlas repeatedly marks Jerusalem in Old Testament, New Testament, temple and Pauline contexts."],
        ["Explore by era", "Use Jerusalem as a bridge between the kingdom period, the Temple, the ministry of Jesus, and the early Church."],
        ["Reading approach", "The site separates biblical references, historical setting and Christian interpretation so visitors can see what kind of claim they are reading."]
      ]
    },
    nazareth: {name:"Nazareth",kicker:"Place",summary:"Associated with Jesus' childhood and identity as Jesus of Nazareth.",sections:[["In the atlas","Nazareth appears in the childhood-of-Jesus material and New Testament Israel."],["Study path","Compare Bethlehem, Jerusalem, Egypt and Nazareth as the childhood route shown by the source."]]},
    bethlehem: {name:"Bethlehem",kicker:"Place",summary:"Presented in the source as the birthplace of Jesus.",sections:[["Childhood route","The atlas connects Bethlehem with Jerusalem, Egypt and Nazareth."],["Study","Open the infancy narratives and compare the journey sequence with the map."]]},
    sinai: {name:"Mount Sinai",kicker:"Traditional location",summary:"The atlas presents the traditional Sinai region in connection with the Exodus.",sections:[["Important note","The source itself says the exact mountain is not known."],["Teaching value","Use the region to understand terrain, distance and the wilderness setting."]]},
    babylon: {name:"Babylon",kicker:"Empire & city",summary:"A major setting for the exile and the book of Daniel.",sections:[["Biblical context","The source links Babylon, Nebuchadnezzar, Judah's exile and Daniel."],["Historical sequence","Babylon follows Assyria in the source's empire sequence and is later conquered by Persia."]]},
    ephesus: {name:"Ephesus",kicker:"New Testament city",summary:"A major city in Paul's journeys and among the seven churches of Revelation.",sections:[["Paul","The source places Ephesus on Paul's later missionary routes."],["Revelation","Ephesus is listed among the seven churches of Asia in Revelation 2–3."]]},
    corinth: {name:"Corinth",kicker:"New Testament city",summary:"A city associated with Paul's journeys and the Corinthian letters.",sections:[["Acts","The atlas connects Corinth and Athens with Acts 17–18."],["Letters","It also links Corinth with 1 and 2 Corinthians."]]},
    rome: {name:"Rome",kicker:"New Testament destination",summary:"The destination of Paul's final journey represented in the source.",sections:[["Journey","The atlas depicts Paul's route from Caesarea through the Mediterranean, including Malta, toward Rome."],["Empire","Rome also anchors the Roman Empire section of the source."]]}
  },
  timeline: [
    {title:"Origins", desc:"Creation narratives, Eden, Noah and Babel open the atlas' Old Testament sequence.", meta:["Garden of Eden","Noah","Babel"]},
    {title:"Patriarchs", desc:"Abraham, Jacob and Joseph move through Canaan, Egypt and Mesopotamian-connected lands.", meta:["Abraham","Jacob","Joseph"]},
    {title:"Exodus", desc:"Egypt, the Red Sea region, Sinai and the wilderness dominate this stage.", meta:["Egypt","Sinai","Wilderness"]},
    {title:"Settlement", desc:"The atlas moves into Canaan, the twelve tribes and surrounding nations.", meta:["12 Tribes","Canaan","Jericho"]},
    {title:"Kingdom", desc:"Solomon's Israel, worship spaces and Jerusalem become central.", meta:["Solomon","Temple","Jerusalem"]},
    {title:"Division & Exile", desc:"The divided kingdom is followed by Assyrian and Babylonian power.", meta:["Assyria","Babylon","Judah"]},
    {title:"Return & Persia", desc:"Persian rule forms the setting for return, rebuilding and later biblical history.", meta:["Persia","Cyrus","Return"]},
    {title:"Greek World", desc:"Alexander's empire helps explain the spread of Greek language and culture before the New Testament.", meta:["Alexander","Greek","Mediterranean"]},
    {title:"Jesus", desc:"New Testament Israel and the childhood route of Jesus anchor the Gospel-era geography.", meta:["Bethlehem","Nazareth","Jerusalem"]},
    {title:"Early Church", desc:"Paul's journeys, letters and the seven churches connect the eastern Mediterranean world.", meta:["Paul","Rome","Seven Churches"]}
  ],
  journeys: {
    abraham: {
      title:"Abraham's Journey", tag:"Old Testament", summary:"A geographic reading of the patriarchal journey as presented by the atlas.",
      stops:[
        ["Ur / Mesopotamian region","The source identifies Ur of the Chaldeans in the Iraq region as part of Abraham's origin setting.","Genesis 11–12","Broad regional identification"],
        ["Haran","A major stopping point before the journey toward Canaan.","Genesis 12:1–5","Biblical route point"],
        ["Canaan","The atlas presents Canaan as the promised destination.","Genesis 12","Biblical destination"],
        ["Egypt","Famine takes Abram south into Egypt in the source's journey sequence.","Genesis 12:10","Biblical episode"],
        ["Canaan again","The route returns north toward the land where Abram and Lot later separate.","Genesis 13","Biblical episode"]
      ]
    },
    exodus: {
      title:"The Exodus", tag:"Old Testament", summary:"Follow the traditional route structure used by the source, with uncertainty clearly labeled.",
      stops:[
        ["Egypt","The journey begins from the setting of Israelite slavery in Egypt.","Exodus 1–12","Biblical setting"],
        ["Red Sea region","The source maps the route through the Red Sea area.","Exodus 14","Exact crossing location not established by the source"],
        ["Wilderness","The atlas highlights manna and quail during the wilderness period.","Exodus 16","Biblical episode"],
        ["Mount Sinai","The source marks a traditional Sinai location and explicitly notes uncertainty about the exact mountain.","Exodus 19","Traditional region; exact mountain unknown"],
        ["Toward Canaan","The atlas connects the wilderness route with later movement toward the promised land.","Numbers / Joshua","Regional overview"]
      ]
    },
    jesusChildhood: {
      title:"Childhood of Jesus", tag:"New Testament", summary:"A concise route based on the childhood map in the supplied atlas.",
      stops:[
        ["Bethlehem","Presented as the birthplace of Jesus.","Micah 5:2; Gospel infancy narratives","Christian biblical reading"],
        ["Jerusalem","The atlas includes Jesus being taken to Jerusalem as a child.","Luke 2","Biblical episode"],
        ["Egypt","The source maps the family's flight into Egypt.","Matthew 2","Biblical episode"],
        ["Nazareth","The childhood route returns to Nazareth in Galilee.","Matthew 2; Luke 2","Biblical location"],
        ["Jerusalem at age 12","The source includes the Temple visit at age twelve.","Luke 2:41–52","Biblical episode"]
      ]
    },
    paul2: {
      title:"Paul's Second Missionary Journey", tag:"Early Church", summary:"A route through cities later connected with Acts and New Testament letters.",
      stops:[
        ["Antioch","The missionary movement begins from Antioch in the atlas' Pauline geography.","Acts 15:36 onward","Biblical route"],
        ["Philippi","A Macedonian stop later associated with the letter to the Philippians.","Acts 16","Biblical city"],
        ["Thessalonica","A major stop in Macedonia.","Acts 17","Biblical city"],
        ["Athens","The atlas pairs Athens and Corinth in Paul's Greek travels.","Acts 17","Biblical city"],
        ["Corinth","A major ministry center and recipient of Pauline letters.","Acts 18","Biblical city"],
        ["Ephesus / return movement","The source includes Ephesus in the second-journey map and later Pauline routes.","Acts 18","Route overview"]
      ]
    },
    paulRome: {
      title:"Paul's Journey to Rome", tag:"Early Church", summary:"The final journey in the atlas' Pauline sequence, including the Mediterranean voyage and shipwreck.",
      stops:[
        ["Caesarea","The source begins the Rome journey from Paul's Caesarea context.","Acts 27","Biblical departure setting"],
        ["Mediterranean voyage","The route crosses the Mediterranean toward Italy.","Acts 27","Route overview"],
        ["Malta","The source explicitly marks Malta as the shipwreck location.","Acts 27–28","Biblical episode"],
        ["Rome","The journey reaches Rome, heart of the Roman Empire.","Acts 28","Biblical destination"]
      ]
    }
  }
};

const $ = (s, p=document)=>p.querySelector(s);
const $$ = (s, p=document)=>[...p.querySelectorAll(s)];

const modal = $("#detailModal");
function openModal(title, kicker, html){
  $("#modalTitle").textContent = title;
  $("#modalKicker").textContent = kicker;
  $("#modalBody").innerHTML = html;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
}
function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
}
$$("[data-close-modal]").forEach(el=>el.addEventListener("click", closeModal));
document.addEventListener("keydown", e=>{ if(e.key==="Escape"){ closeModal(); closeSearch(); }});

function openPlace(id){
  const p=data.places[id]; if(!p)return;
  const html = `<p class="notice">${p.summary}</p>` + p.sections.map(([h,t])=>`<section class="modal-section"><h3>${h}</h3><p>${t}</p></section>`).join("");
  openModal(p.name,p.kicker,html);
}
$$("[data-open-place]").forEach(b=>b.addEventListener("click",()=>openPlace(b.dataset.openPlace)));

const mapCard=$("#mapCard");
$$(".map-pins button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const p=data.places[btn.dataset.id];
    mapCard.innerHTML=`<span class="map-card-kicker">${p.kicker}</span><h3>${p.name}</h3><p>${p.summary}</p><button data-open-place="${btn.dataset.id}">Explore place →</button>`;
    mapCard.querySelector("button").addEventListener("click",()=>openPlace(btn.dataset.id));
  });
});
$$(".segmented button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    $$(".segmented button").forEach(x=>x.classList.remove("active"));btn.classList.add("active");
    const layer=btn.dataset.layer;
    $$(".map-pins button").forEach(pin=>pin.style.display=(layer==="all"||pin.dataset.kind===layer)?"":"none");
    $$(".route").forEach(r=>{
      if(layer==="all") r.style.opacity=".72";
      else if(layer==="paul") r.style.opacity=r.classList.contains("route-paul")?".9":".08";
      else if(layer==="ot") r.style.opacity=r.classList.contains("route-ot")?".9":".08";
      else r.style.opacity=".15";
    });
  });
});

const tlRange=$("#timelineRange"), tlLabels=$("#timelineLabels"), tlDetail=$("#timelineDetail"), tlFill=$("#timelineFill");
data.timeline.forEach((item,i)=>{
  const b=document.createElement("button");b.textContent=item.title;b.addEventListener("click",()=>{tlRange.value=i;renderTimeline(i)});tlLabels.appendChild(b);
});
function renderTimeline(i){
  const item=data.timeline[i];
  tlFill.style.width=`${i/(data.timeline.length-1)*100}%`;
  $$("#timelineLabels button").forEach((b,x)=>b.classList.toggle("active",x===Number(i)));
  tlDetail.innerHTML=`<div><span class="eyebrow">Era ${Number(i)+1}</span><h3>${item.title}</h3></div><div><p>${item.desc}</p><div class="timeline-meta">${item.meta.map(m=>`<span>${m}</span>`).join("")}</div></div>`;
}
tlRange.addEventListener("input",e=>renderTimeline(e.target.value));
renderTimeline(0);

let currentJourney="abraham", currentStop=0;
const journeyList=$("#journeyList");
Object.entries(data.journeys).forEach(([id,j])=>{
  const b=document.createElement("button");b.dataset.journey=id;b.innerHTML=`<strong>${j.title}</strong><small>${j.tag}</small>`;
  b.addEventListener("click",()=>{currentJourney=id;currentStop=0;renderJourney()});journeyList.appendChild(b);
});
function renderJourney(){
  const j=data.journeys[currentJourney];
  $$("#journeyList button").forEach(b=>b.classList.toggle("active",b.dataset.journey===currentJourney));
  $("#journeyTitle").textContent=j.title;$("#journeyTag").textContent=j.tag;$("#journeySummary").textContent=j.summary;
  $("#journeyTotal").textContent=j.stops.length;$("#journeyStep").textContent=currentStop+1;
  const stops=$("#journeyStops");stops.innerHTML="";
  j.stops.forEach((s,i)=>{
    const b=document.createElement("button");b.textContent=s[0];b.classList.toggle("active",i===currentStop);
    b.addEventListener("click",()=>{currentStop=i;renderJourney()});stops.appendChild(b);
  });
  const s=j.stops[currentStop];
  $("#stopTitle").textContent=s[0];$("#stopText").textContent=s[1];$("#stopRef").textContent=s[2];$("#stopNote").textContent=s[3];
  $("#prevStop").disabled=currentStop===0;$("#nextStop").disabled=currentStop===j.stops.length-1;
}
$("#prevStop").addEventListener("click",()=>{if(currentStop>0){currentStop--;renderJourney()}});
$("#nextStop").addEventListener("click",()=>{if(currentStop<data.journeys[currentJourney].stops.length-1){currentStop++;renderJourney()}});
$$("[data-open-journey]").forEach(b=>b.addEventListener("click",()=>{
  currentJourney=b.dataset.openJourney;currentStop=0;renderJourney();location.hash="journeys";
}));
renderJourney();

const genericViews={
  places:["Bible Lands","Interactive Atlas",`<p class="notice">The supplied atlas organizes major biblical geography across Southern Europe, the Middle East, Asia Minor, North Africa and the Mediterranean.</p>
  <section class="modal-section"><h3>Start with a place</h3><p>Try Jerusalem, Nazareth, Bethlehem, Sinai, Babylon, Ephesus, Corinth or Rome from the interactive overview.</p></section>
  <section class="modal-section"><h3>Design principle</h3><p>Every place can connect to events, people, journeys, Bible references and historical eras.</p></section>`],
  empires:["Biblical Empires","History",`<p class="notice">The source sequence includes Assyria, Babylon, Persia, Alexander's empire and Rome.</p>
  <section class="modal-section"><h3>Compare</h3><p>Use these empires to understand the changing political background around Israel, exile, return and the New Testament world.</p></section>`],
  jesus:["Jesus & the New Testament","Christian study",`<p class="notice">The source includes New Testament Israel and a childhood-of-Jesus route through Bethlehem, Jerusalem, Egypt and Nazareth.</p>
  <section class="modal-section"><h3>Christian perspective</h3><p>The website can present Christian theological reflection while clearly distinguishing it from historical-geographical description.</p></section>`],
  temple:["Tabernacle & Temples","Visual study",`<p class="notice">The source includes diagrams for the Tabernacle, Solomon's Temple and Herod's Temple.</p>
  <section class="modal-section"><h3>Interactive potential</h3><p>A full version can let users select the altar, laver, Holy Place, Most Holy Place, Ark, menorah, table and incense altar.</p></section>
  <section class="modal-section"><h3>Careful interpretation</h3><p>Object descriptions should be distinguished from later Christian theological connections rather than blending them together.</p></section>`]
};
$$("[data-open-view]").forEach(b=>b.addEventListener("click",()=>{const v=genericViews[b.dataset.openView];openModal(v[0],v[1],v[2])}));

$$("[data-answer]").forEach(b=>b.addEventListener("click",()=>{
  $("#quizResult").textContent=b.dataset.answer==="correct"?"Correct — Babylon is the answer used by the source's exile material.":"Not this one. Try again.";
}));
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1800)}
$$("[data-toast]").forEach(b=>b.addEventListener("click",()=>toast(b.dataset.toast)));

const searchOverlay=$("#searchOverlay"), searchInput=$("#searchInput"), searchResults=$("#searchResults");
const searchIndex=[];
Object.entries(data.places).forEach(([id,p])=>searchIndex.push({title:p.name,type:p.kicker,text:p.summary,action:()=>openPlace(id)}));
Object.entries(data.journeys).forEach(([id,j])=>searchIndex.push({title:j.title,type:"Journey",text:j.summary,action:()=>{currentJourney=id;currentStop=0;renderJourney();location.hash="journeys"}}));
data.timeline.forEach((t,i)=>searchIndex.push({title:t.title,type:"Timeline era",text:t.desc,action:()=>{tlRange.value=i;renderTimeline(i);location.hash="timeline"}}));
function renderSearch(q=""){
  const hits=searchIndex.filter(x=>(x.title+" "+x.type+" "+x.text).toLowerCase().includes(q.toLowerCase())).slice(0,12);
  searchResults.innerHTML="";
  hits.forEach(x=>{
    const a=document.createElement("a");a.href="#";a.className="search-item";a.innerHTML=`<strong>${x.title}</strong><small>${x.type} · ${x.text}</small>`;
    a.addEventListener("click",e=>{e.preventDefault();closeSearch();x.action()});searchResults.appendChild(a);
  });
  if(!hits.length)searchResults.innerHTML=`<div class="search-item"><small>No matching item in this prototype.</small></div>`;
}
function openSearch(){searchOverlay.classList.add("open");searchOverlay.setAttribute("aria-hidden","false");renderSearch();setTimeout(()=>searchInput.focus(),20)}
function closeSearch(){searchOverlay.classList.remove("open");searchOverlay.setAttribute("aria-hidden","true")}
$("#searchOpen").addEventListener("click",openSearch);$("#searchClose").addEventListener("click",closeSearch);searchInput.addEventListener("input",e=>renderSearch(e.target.value));
document.addEventListener("keydown",e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();openSearch()}});

const themeToggle=$("#themeToggle");
themeToggle.addEventListener("click",()=>{
  const dark=document.documentElement.dataset.theme==="dark";
  if(dark) delete document.documentElement.dataset.theme; else document.documentElement.dataset.theme="dark";
  localStorage.setItem("atlas-theme",dark?"light":"dark");
});
if(localStorage.getItem("atlas-theme")==="dark")document.documentElement.dataset.theme="dark";

const menuBtn=$("#menuBtn"), mainNav=$("#mainNav");
menuBtn.addEventListener("click",()=>{const open=mainNav.classList.toggle("open");menuBtn.setAttribute("aria-expanded",open)});
$$(".main-nav a").forEach(a=>a.addEventListener("click",()=>{mainNav.classList.remove("open");menuBtn.setAttribute("aria-expanded","false")}));
