"use client"

export default function DemoPage() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>Eburon / Ye Demo – Dialer + IVR</title>
  <style>
    :root{
      --bg-dark:#121212; --bg-panel:#1e1e1e; --text:#fff; --text-dim:#b3b3b3;
      --green:#1DB954; --green-h:#1ed760; --red:#e53935; --red-h:#f44336;
      --key:#2a2a2a; --key-a:#404040; --border:#2a2a2a;
    }
    html,body{height:100%;margin:0;background:var(--bg-dark);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;-webkit-tap-highlight-color:transparent;overflow:hidden}
    .app{display:grid;grid-template-columns:minmax(320px,480px) 1fr;height:100vh}
    .panel{border-left:1px solid var(--border);padding:14px;overflow:auto;background:#0f0f10}
    .panel h2{margin:8px 0 12px 0}
    .group{border:1px solid var(--border);border-radius:10px;padding:12px;margin-bottom:12px;background:var(--bg-panel)}
    .row{display:grid;grid-template-columns:1fr 1fr;gap:8px}
    .row-1{display:grid;grid-template-columns:1fr;gap:8px}
    label{font-size:12px;color:var(--text-dim)}
    input,textarea,select{width:100%;padding:10px;border-radius:8px;border:1px solid var(--border);background:#141414;color:var(--text)}
    textarea{min-height:84px;resize:vertical}
    .btn{padding:10px 14px;border-radius:10px;border:1px solid var(--border);background:#1b1b1b;color:#fff;cursor:pointer}
    .btn.primary{background:var(--green);border-color:#159e49}
    .btn.primary:hover{background:var(--green-h)}
    .btn.warn{background:var(--red);border-color:#c32724}
    .btn.warn:hover{background:var(--red-h)}
    .mini{font-size:12px;color:var(--text-dim)}
    .log{white-space:pre-wrap;background:#0b0b0c;border:1px solid var(--border);border-radius:8px;padding:8px;min-height:90px}
    .split-footer{display:flex;gap:8px;justify-content:flex-end;margin-top:8px}
    .phone-wrap{position:relative;display:flex;align-items:center;justify-content:center}
    .phone{
      position:relative;background:linear-gradient(180deg,#161a24,#0e1016);
      width:360px;height:720px;border-radius:28px;border:1px solid #1f2431;box-shadow:0 10px 30px rgba(0,0,0,.45);
      overflow:hidden
    }
    .screen{position:absolute;inset:0;background:#121212;display:flex;flex-direction:column;transition:opacity .25s ease,transform .25s ease}
    .screen.hidden{opacity:0;pointer-events:none;transform:scale(0.98)}
    .topbar{display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:rgba(255,255,255,.06);font-size:12px}
    .center{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:12px;text-align:center}
    .center-dark{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:16px;background:rgba(0,0,0,.28);border-radius:16px;margin:12px}
    .bottom{position:absolute;left:12px;right:12px;bottom:16px;display:flex;justify-content:center;gap:10px}
    .keypad{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:16px 24px}
    .key{display:flex;flex-direction:column;align-items:center;justify-content:center;background:var(--key);border:none;border-radius:50%;color:#fff;font-size:1.8em;cursor:pointer;aspect-ratio:1/1;transition:background-color .08s}
    .key:active{background:var(--key-a)}
    .sub{font-size:.35em;color:var(--text-dim);margin-top:2px}
    .actions{display:flex;justify-content:space-around;align-items:center;padding:16px 24px}
    .act{width:70px;height:70px;border-radius:50%;border:none;display:grid;place-items:center;cursor:pointer}
    #call-btn{background:var(--green)}
    #call-btn:hover{background:var(--green-h)}
    .ghost{width:70px;height:70px;opacity:.3}
    .avatar{width:110px;height:110px;border-radius:50%;background:#1c2430;display:grid;place-items:center;margin:6px auto}
    .incall-grid{flex:1;display:grid;grid-template-columns:repeat(3,1fr);gap:10px;padding:28px 22px;align-content:center}
    .incall-act{display:flex;flex-direction:column;align-items:center;gap:6px;background:none;border:none;color:#fff;cursor:pointer}
    .incall-act .icon{width:60px;height:60px;border-radius:50%;background:var(--key);display:grid;place-items:center}
    .incall-act:active .icon{background:var(--key-a)}
    .incall-act.disabled{opacity:.4;pointer-events:none}
    .end{background:var(--red)}
    .end:hover{background:var(--red-h)}
    .overlay{position:absolute;inset:0;background:rgba(0,0,0,.82);backdrop-filter:blur(10px);z-index:5;display:flex;flex-direction:column}
    .overlay.hidden{opacity:0;pointer-events:none}
    .pulse-dot{width:16px;height:16px;border-radius:50%;background:#22d3ee;animation:pulse 1.5s ease-in-out infinite}
    .loader{width:52px;height:52px;border-radius:50%;border:5px solid rgba(255,255,255,.18);border-top-color:#22d3ee;animation:spin 1s linear infinite}
    @keyframes pulse{0%{transform:scale(1);opacity:.75}50%{transform:scale(1.25);opacity:1}100%{transform:scale(1);opacity:.75}}
    @keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}
    .statusbar{position:absolute;left:0;right:0;bottom:0;padding:6px 10px;background:rgba(0,0,0,.3);font-size:12px;color:#c7c7c7}
  </style>
</head>
<body>
  <div class="app">
    <div class="phone-wrap">
      <div class="phone" id="phone">
        <div class="topbar"><span>EBURON LTE</span><span id="battery">🔋 86%</span></div>
        <div id="dialer-screen" class="screen">
          <div class="center">
            <div style="font-size:13px;color:#a1a1a1">Voix Caller</div>
            <div id="dialer-display" style="font-size:32px;letter-spacing:2px;min-height:36px"></div>
            <div id="dialer-display-sub" style="font-size:13px;color:var(--green);min-height:18px"></div>
          </div>
          <div class="keypad" id="dialpad-grid">
            <button class="key" data-key="1">1</button>
            <button class="key" data-key="2">2<span class="sub">ABC</span></button>
            <button class="key" data-key="3">3<span class="sub">DEF</span></button>
            <button class="key" data-key="4">4<span class="sub">GHI</span></button>
            <button class="key" data-key="5">5<span class="sub">JKL</span></button>
            <button class="key" data-key="6">6<span class="sub">MNO</span></button>
            <button class="key" data-key="7">7<span class="sub">PQRS</span></button>
            <button class="key" data-key="8">8<span class="sub">TUV</span></button>
            <button class="key" data-key="9">9<span class="sub">WXYZ</span></button>
            <button class="key" data-key="*">*</button>
            <button class="key" data-key="0">0<span class="sub">+</span></button>
            <button class="key" data-key="#">#</button>
          </div>
          <div class="actions">
            <div class="ghost"></div>
            <button class="act" id="call-btn">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/></svg>
            </button>
            <div class="ghost"></div>
          </div>
        </div>
        <div id="incall-screen" class="screen hidden">
          <div id="call-status" style="text-align:center;margin-top:14px;color:#9ee7b0">Calling…</div>
          <div class="avatar"><svg width="52" height="52" viewBox="0 0 24 24" fill="currentColor"><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/></svg></div>
          <div id="caller-name" style="font-size:20px;font-weight:700">Alice (IVR)</div>
          <div id="caller-number" style="color:#bfbfbf;margin-top:4px"></div>
          <div class="incall-grid">
            <button class="incall-act disabled">
              <span class="icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M12,4A3,3 0 0,0 9,7L9,11A3,3 0 0,0 12,14A3,3 0 0,0 15,11L15,7A3,3 0 0,0 12,4M17,11C17,14.41 14.41,17 11,17C7.59,17 5,14.41 5,11H7A5,5 0 0,1 12,16A5,5 0 0,1 17,11Z"/></svg></span>
              Mute
            </button>
            <button class="incall-act" id="keypad-toggle-btn">
              <span class="icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5,12.5C15.5,11.3 15.2,10.2 14.7,9.2L16.2,7.7C17.2,9.2 17.7,10.8 17.7,12.5C17.7,13.1 17.6,13.7 17.5,14.3L15.9,12.7C15.5,12.6 15.5,12.6 15.5,12.5M19.8,22L22,19.8L12.5,10.2L10.3,8L4.2,2L2,4.2L7.3,9.5C6.8,10.4 6.5,11.4 6.5,12.5C6.5,15.2 8,17.5 10.3,18.5V22H14.3V18.5C14.8,18.4 15.3,18.2 15.8,18L19.8,22M12.5,6C13.1,6 13.7,6.1 14.3,6.3L12.2,4.2C12.3,4.1 12.4,4.1 12.5,4C15.2,4 17.5,5.5 18.5,7.7H22V11.7H18.5C18.4,12.2 18.2,12.7 18,13.2L16,11.2C16.3,10.2 16.5,9.2 16.5,8.2C16.5,6.9 16,5.8 15.2,4.9L13.8,6.4C13.4,6.2 12.9,6 12.5,6"/></svg></span>
              Keypad
            </button>
            <button class="incall-act disabled">
              <span class="icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M3,9H7V15H3V9M12,9H16V15H12V9M9.5,9H11.5V15H9.5V9M19,12A2,2 0 0,0 17,10V14A2,2 0 0,0 19,12Z"/></svg></span>
              Speaker
            </button>
            <button class="incall-act disabled">
              <span class="icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M13,6V11H18V6M13,13V18H18V13M6,6V11H11V6M6,13V18H11V13Z"/></svg></span>
              Add Call
            </button>
            <button class="incall-act disabled">
              <span class="icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z"/></svg></span>
              Video
            </button>
            <button class="incall-act disabled">
              <span class="icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/></svg></span>
              Contacts
            </button>
          </div>
          <div class="bottom">
            <button class="act end" id="end-call-btn">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" style="transform:rotate(135deg)"><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/></svg>
            </button>
          </div>
        </div>
        <div id="incall-keypad-overlay" class="overlay hidden">
          <div class="keypad" id="incall-keypad-grid">
            <button class="key" data-key="1">1</button>
            <button class="key" data-key="2">2<span class="sub">ABC</span></button>
            <button class="key" data-key="3">3<span class="sub">DEF</span></button>
            <button class="key" data-key="4">4<span class="sub">GHI</span></button>
            <button class="key" data-key="5">5<span class="sub">JKL</span></button>
            <button class="key" data-key="6">6<span class="sub">MNO</span></button>
            <button class="key" data-key="7">7<span class="sub">PQRS</span></button>
            <button class="key" data-key="8">8<span class="sub">TUV</span></button>
            <button class="key" data-key="9">9<span class="sub">WXYZ</span></button>
            <button class="key" data-key="*">*</button>
            <button class="key" data-key="0">0<span class="sub">+</span></button>
            <button class="key" data-key="#">#</button>
          </div>
          <div class="bottom">
            <button class="act" id="hide-keypad-btn" style="background:#1f2937">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5,12.5C15.5,11.3 15.2,10.2 14.7,9.2L16.2,7.7C17.2,9.2 17.7,10.8 17.7,12.5C17.7,13.1 17.6,13.7 17.5,14.3L15.9,12.7C15.5,12.6 15.5,12.6 15.5,12.5M19.8,22L22,19.8L12.5,10.2L10.3,8L4.2,2L2,4.2L7.3,9.5C6.8,10.4 6.5,11.4 6.5,12.5C6.5,15.2 8,17.5 10.3,18.5V22H14.3V18.5C14.8,18.4 15.3,18.2 15.8,18L19.8,22M12.5,6C13.1,6 13.7,6.1 14.3,6.3L12.2,4.2C12.3,4.1 12.4,4.1 12.5,4C15.2,4 17.5,5.5 18.5,7.7H22V11.7H18.5C18.4,12.2 18.2,12.7 18,13.2L16,11.2C16.3,10.2 16.5,9.2 16.5,8.2C16.5,6.9 16,5.8 15.2,4.9L13.8,6.4C13.4,6.2 12.9,6 12.5,6"/></svg>
            </button>
          </div>
        </div>
        <div class="statusbar" id="statusbar">Ready</div>
      </div>
    </div>
    <div class="panel">
      <h2>Callcenter AI – Config & Telephony</h2>
      <div class="group">
        <div class="row">
          <div>
            <label>Persona Name</label>
            <input id="personaName" value="Ayla" />
          </div>
          <div>
            <label>IVR Voice</label>
            <select id="ivrVoice">
              <option value="Alice" selected>Alice</option>
              <option value="June">June</option>
              <option value="base">Model "base" (default)</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div>
            <label>Roles</label>
            <input id="personaRoles" value="Turkish Airlines Customer Service Representative" />
          </div>
          <div>
            <label>Language (API)</label>
            <input id="apiLanguage" value="en" />
          </div>
        </div>
        <div class="row-1">
          <label>Description / System Prompt Addendum</label>
          <textarea id="personaDesc">Embodies world-class hospitality, efficiency, and professionalism; solves requests with empathy and ownership.</textarea>
        </div>
      </div>
      <div class="group">
        <div class="row">
          <div>
            <label>Telephone Number (E.164)</label>
            <input id="telNumber" value="+15551234567" />
          </div>
          <div>
            <label>Background Track</label>
            <select id="bgTrack">
              <option value="office" selected>office</option>
              <option value="none">none</option>
              <option value="cafe">cafe</option>
              <option value="restaurant">restaurant</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div>
            <label>API Key</label>
            <input id="apiKey" placeholder="sk-..." />
          </div>
          <div>
            <label>Endpoint</label>
            <input id="apiEndpoint" value="https://api.bland.ai" />
          </div>
        </div>
        <div class="row">
          <div>
            <label>Max Duration (minutes)</label>
            <input id="maxDuration" type="number" min="1" max="60" value="12" />
          </div>
          <div>
            <label>Pathway ID (optional)</label>
            <input id="pathwayId" value="" />
          </div>
        </div>
        <div class="row-1">
          <label>First Sentence (greeting)</label>
          <input id="firstSentence" value="Hello, thank you for calling Turkish Airlines. My name is Ayla. How may I help you today?" />
        </div>
        <div class="split-footer">
          <button class="btn" id="simulateBtn">▶️ Simulate Only</button>
          <button class="btn primary" id="callApiBtn">📞 Send via API</button>
          <button class="btn warn" id="clearLogBtn">🧹 Clear Log</button>
        </div>
        <div class="mini">Telephone number in use: <span id="numberPreview">+15551234567</span></div>
      </div>
      <div class="group">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div><b>Console Log</b></div>
          <div class="mini">Also see browser DevTools</div>
        </div>
        <div id="consoleLog" class="log"></div>
      </div>
    </div>
  </div>
  <script>
    const $ = (id)=>document.getElementById(id);
    const logBox = $("consoleLog");
    const statusbar = $("statusbar");
    function log(msg){ const t=new Date().toLocaleTimeString(); logBox.textContent += \`[\${t}] \${msg}\\n\`; logBox.scrollTop = logBox.scrollHeight; console.log(msg); }
    function setStatus(s){ statusbar.textContent = s }
    const dialerScreen = $("dialer-screen");
    const incallScreen = $("incall-screen");
    const overlay = $("incall-keypad-overlay");
    const dialpadGrid = $("dialpad-grid");
    const incallKeypadGrid = $("incall-keypad-grid");
    const display = $("dialer-display");
    const subDisplay = $("dialer-display-sub");
    const callBtn = $("call-btn");
    const endCallBtn = $("end-call-btn");
    const keypadToggleBtn = $("keypad-toggle-btn");
    const hideKeypadBtn = $("hide-keypad-btn");
    const callStatus = $("call-status");
    const callerName = $("caller-name");
    const callerNumber = $("caller-number");
    const personaName = $("personaName");
    const personaRoles = $("personaRoles");
    const personaDesc = $("personaDesc");
    const ivrVoice = $("ivrVoice");
    const apiLanguage = $("apiLanguage");
    const telNumber = $("telNumber");
    const numberPreview = $("numberPreview");
    const bgTrack = $("bgTrack");
    const apiKey = $("apiKey");
    const apiEndpoint = $("apiEndpoint");
    const maxDuration = $("maxDuration");
    const pathwayId = $("pathwayId");
    const firstSentence = $("firstSentence");
    const callApiBtn = $("callApiBtn");
    const simulateBtn = $("simulateBtn");
    const clearLogBtn = $("clearLogBtn");
    numberPreview.textContent = telNumber.value;
    telNumber.addEventListener("input", ()=> numberPreview.textContent = telNumber.value || "—");
    let currentNumber = "";
    let callTimerInterval = null;
    let callDuration = 0;
    let ivrIdleTimer = null;
    const DTMF = {
      "1":[697,1209], "2":[697,1336], "3":[697,1477],
      "4":[770,1209], "5":[770,1336], "6":[770,1477],
      "7":[852,1209], "8":[852,1336], "9":[852,1477],
      "*":[941,1209], "0":[941,1336], "#":[941,1477]
    };
    let ctx, master;
    function ensureCtx(){
      if(!ctx){
        ctx = new (window.AudioContext||window.webkitAudioContext)();
        master = ctx.createGain(); master.gain.value = 0.9; master.connect(ctx.destination);
      }
    }
    async function resumeCtx(){ ensureCtx(); if(ctx.state==="suspended") await ctx.resume(); }
    function playPickupClick(){
      ensureCtx();
      const g=ctx.createGain(); g.connect(master); g.gain.value=0.6;
      const o=ctx.createOscillator(); o.type="square"; o.frequency.value=900; o.connect(g);
      const t=ctx.currentTime;
      g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(.7,t+.01); g.gain.linearRampToValueAtTime(0,t+.05);
      o.start(t); o.stop(t+.06);
    }
    function playRingCadence(count=3){
      ensureCtx();
      let i=0;
      const one=()=>{
        if(i>=count) return;
        i++;
        const g=ctx.createGain(); g.connect(master);
        const a=ctx.createOscillator(), b=ctx.createOscillator();
        a.type="sine"; b.type="sine"; a.frequency.value=440; b.frequency.value=480; a.connect(g); b.connect(g);
        const t=ctx.currentTime;
        g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(.7,t+.02);
        g.gain.setValueAtTime(.7,t+1.98); g.gain.linearRampToValueAtTime(0,t+2.0);
        a.start(t); b.start(t); a.stop(t+2.02); b.stop(t+2.02);
        setTimeout(one,6000);
      };
      one();
    }
    let bgNodes=null;
    async function startOfficeBG(vol=.16){
      await resumeCtx(); if(bgNodes) return;
      const noise=ctx.createBuffer(1, ctx.sampleRate*2, ctx.sampleRate);
      const data=noise.getChannelData(0);
      for(let i=0;i<data.length;i++) data[i] = Math.random()*2-1;
      const src=ctx.createBufferSource(); src.buffer=noise; src.loop=true;
      const bp1=ctx.createBiquadFilter(); bp1.type="bandpass"; bp1.frequency.value=1000; bp1.Q.value=.8;
      const bp2=ctx.createBiquadFilter(); bp2.type="bandpass"; bp2.frequency.value=600; bp2.Q.value=.7;
      const g=ctx.createGain(); g.gain.value=vol;
      const mod=ctx.createOscillator(); mod.type="sine"; mod.frequency.value=.25;
      const mg=ctx.createGain(); mg.gain.value=.15;
      src.connect(bp1); bp1.connect(bp2); bp2.connect(g); g.connect(master);
      mod.connect(mg); mg.connect(g.gain);
      src.start(); mod.start();
      bgNodes={src,mod};
    }
    function stopOfficeBG(){ if(!bgNodes) return; try{bgNodes.src.stop();}catch{} try{bgNodes.mod.stop();}catch{} bgNodes=null; }
    let holdNodes=null;
    async function startHoldMusic(){
      await resumeCtx(); if(holdNodes) return;
      const g=ctx.createGain(); g.connect(master); g.gain.value=.25;
      const a=ctx.createOscillator(); const b=ctx.createOscillator();
      a.type="sine"; b.type="triangle"; a.connect(g); b.connect(g);
      const seqA=[440,494,523,587,523,494,440,392];
      const seqB=[220,262,247,262,220,196,220,247];
      const t0=ctx.currentTime;
      seqA.forEach((f,i)=>{ const t=t0+i*1.0; a.frequency.setValueAtTime(f,t); b.frequency.setValueAtTime(seqB[i],t); });
      g.gain.setValueAtTime(0,t0); g.gain.linearRampToValueAtTime(.25,t0+.4);
      a.start(t0); b.start(t0);
      const loop = ()=>{ if(!holdNodes) return; const base=ctx.currentTime; seqA.forEach((f,i)=>{const t=base+i; a.frequency.linearRampToValueAtTime(f,t); b.frequency.linearRampToValueAtTime(seqB[i],t);}); setTimeout(loop,800); };
      setTimeout(loop,800);
      holdNodes={a,b,g};
    }
    function stopHoldMusic(){ if(!holdNodes) return; try{holdNodes.a.stop();}catch{} try{holdNodes.b.stop();}catch{} holdNodes=null; }
    async function playDTMF(key, ms=180, gain=.6){
      await resumeCtx();
      const pair = DTMF[key]; if(!pair) return;
      const g=ctx.createGain(); g.connect(master); g.gain.value=gain;
      const o1=ctx.createOscillator(), o2=ctx.createOscillator();
      o1.type="sine"; o2.type="sine"; o1.frequency.value=pair[0]; o2.frequency.value=pair[1];
      o1.connect(g); o2.connect(g);
      const t=ctx.currentTime, t1=t+ms/1000;
      g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(gain,t+.01); g.gain.setValueAtTime(gain,t1-.01); g.gain.linearRampToValueAtTime(0,t1);
      o1.start(t); o2.start(t); o1.stop(t1+.01); o2.stop(t1+.01);
    }
    function playBusyTone(seconds=5){
      ensureCtx();
      const endAt = performance.now() + seconds*1000;
      const tick = ()=>{
        if(performance.now() > endAt) return;
        const g=ctx.createGain(); g.connect(master);
        const a=ctx.createOscillator(), b=ctx.createOscillator();
        a.type="sine"; b.type="sine"; a.frequency.value=480; b.frequency.value=620; a.connect(g); b.connect(g);
        const t=ctx.currentTime;
        g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(.8,t+.01); g.gain.setValueAtTime(.8,t+.49); g.gain.linearRampToValueAtTime(0,t+.5);
        a.start(t); b.start(t); a.stop(t+.52); b.stop(t+.52);
        setTimeout(tick, 500);
      };
      tick();
    }
    function updateDisplay(){ display.textContent = currentNumber }
    function formatTime(s){ const m = String(Math.floor(s/60)).padStart(2,"0"); const ss = String(s%60).padStart(2,"0"); return \`\${m}:\${ss}\` }
    function resetCall(){
      currentNumber=""; updateDisplay(); subDisplay.textContent="";
      clearInterval(callTimerInterval); callTimerInterval=null; callDuration=0;
      dialerScreen.classList.remove("hidden"); incallScreen.classList.add("hidden"); overlay.classList.add("hidden");
      callerName.textContent="Alice (IVR)"; callerNumber.textContent="";
      setStatus("Ready");
      stopHoldMusic(); stopOfficeBG();
    }
    function startTimer(){
      callTimerInterval = setInterval(()=>{ callDuration++; callStatus.textContent = formatTime(callDuration); }, 1000);
    }
    function startIvrIdleWatch(){
      clearTimeout(ivrIdleTimer);
      ivrIdleTimer = setTimeout(()=>{
        log("IVR idle timeout → play BUSY tone, end call after 5s");
        playBusyTone(5);
        setTimeout(()=>{ endCall(); }, 5200);
      }, 10000);
    }
    function ackIvrInteraction(){
      clearTimeout(ivrIdleTimer);
      startIvrIdleWatch();
    }
    dialpadGrid.addEventListener("click", async (e)=>{
      const btn = e.target.closest(".key"); if(!btn) return;
      const key = btn.dataset.key;
      currentNumber += key; updateDisplay();
      playDTMF(key, 120, .5);
    });
    incallKeypadGrid.addEventListener("click", async (e)=>{
      const btn = e.target.closest(".key"); if(!btn) return;
      const key = btn.dataset.key;
      await playDTMF(key, 180, .6);
      log(\`IVR DTMF sent: \${key}\`);
      ackIvrInteraction();
    });
    callBtn.addEventListener("click", async ()=>{
      if(!currentNumber){ subDisplay.textContent = "Enter a number first"; return; }
      await resumeCtx();
      setStatus("Dialing…"); log(\`Simulating call to: \${currentNumber}\`);
      dialerScreen.classList.add("hidden"); incallScreen.classList.remove("hidden");
      callerNumber.textContent = currentNumber;
      callStatus.textContent = "Calling…";
      playRingCadence(2);
      setTimeout(async ()=>{
        playPickupClick(); await startOfficeBG(.10);
        callStatus.textContent = formatTime(0); startTimer();
        setStatus("Connected to IVR (Alice)"); log("Connected → IVR (Alice). Press keypad to navigate.");
        overlay.classList.remove("hidden");
        startIvrIdleWatch();
      }, 6000*1);
    });
    keypadToggleBtn.addEventListener("click", ()=>{
      overlay.classList.remove("hidden");
      startIvrIdleWatch();
    });
    hideKeypadBtn.addEventListener("click", ()=>{
      overlay.classList.add("hidden");
      clearTimeout(ivrIdleTimer);
    });
    function endCall(){
      log("Call ended.");
      setStatus("Ended");
      resetCall();
    }
    endCallBtn.addEventListener("click", endCall);
    function buildSystemPrompt(){
      const base = \`SYSTEM PROMPT — \${personaName.value.toUpperCase()} (\${personaRoles.value})

ROLE & BRAND
You are \${personaName.value}, \${personaRoles.value}. \${personaDesc.value}

PRIMARY OBJECTIVE
Resolve the caller's need quickly with empathy and ownership. Greeting and closing must be warmly branded.\`;
      return base;
    }
    async function sendBlandCall(){
      const endpoint = (apiEndpoint.value||"").replace(/\\/+$/,"");
      const url = \`\${endpoint}/v1/calls\`;
      const payload = {
        phone_number: telNumber.value,
        voice: ivrVoice.value || "Alice",
        wait_for_greeting: true,
        record: true,
        answered_by_enabled: true,
        noise_cancellation: false,
        interruption_threshold: 500,
        block_interruptions: false,
        max_duration: Number(maxDuration.value)||12,
        model: "base",
        language: apiLanguage.value||"en",
        background_track: bgTrack.value||"office",
        endpoint: endpoint,
        voicemail_action: "hangup",
        task: buildSystemPrompt(),
        first_sentence: firstSentence.value || "Hello, thank you for calling.",
      };
      if(pathwayId.value) payload.pathway_id = pathwayId.value;
      log("POST " + url);
      log("Payload:\\n" + JSON.stringify(payload,null,2));
      try{
        const res = await fetch(url, {
          method:"POST",
          headers:{
            "Content-Type":"application/json",
            "Authorization": \`Bearer \${apiKey.value||""}\`
          },
          body: JSON.stringify(payload)
        });
        const data = await res.json().catch(()=> ({}));
        log("API Response:\\n" + JSON.stringify(data,null,2));
        if(!res.ok){
          log("⚠️ API error (check CORS / API key / endpoint). This page calls the API client-side.");
        }else{
          log("✅ Call initiated.");
        }
      }catch(err){
        log("❌ Network/Fetch error: " + (err && err.message ? err.message : err));
        log("Note: If blocked by CORS, trigger from a server or proxy.");
      }
    }
    callApiBtn.addEventListener("click", sendBlandCall);
    simulateBtn.addEventListener("click", ()=>{ log("Simulation mode only (no API call)."); });
    clearLogBtn.addEventListener("click", ()=>{ logBox.textContent=""; });
    (function init(){
      resetCall();
      setStatus("Ready");
      log("Loaded. Dial a number, press Call. Use Keypad for IVR DTMF. Idle 10s → Busy tone + end.");
    })();
  </script>
</body>
</html>`,
      }}
    />
  )
}
