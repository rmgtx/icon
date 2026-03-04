import { useState, useEffect } from "react";

// ─── EMBEDDED IMAGES ───
const WO_IMG = "data:image/jpeg;base64,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";
const PP_IMG = "data:image/jpeg;base64,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";
const LOGO_URL = "https://cdn.prod.website-files.com/6491700ecd0e6561755ffb6d/67097ae2068c235482f24d16_ICON%20AERO%20-%20White%201.png";

// ─── ICON AEROSPACE BRAND ───
const B = {
  black: "#000000", blue: "#1570bf", blueDark: "#0e5a9e", blueLight: "#e8f2fc",
  g50: "#f9fafb", g100: "#f3f4f6", g200: "#e5e7eb", g300: "#d1d5db",
  g400: "#9ca3af", g500: "#6b7280", g600: "#4b5563", g700: "#374151", g800: "#1f2937",
  white: "#fff", green: "#059669", greenLt: "#d1fae5", amber: "#d97706", amberLt: "#fef3c7",
};

// ─── SIMULATED AI EXTRACTION (matches real work order + part label) ───
const EXTRACTED = {
  roNumber: "RO-2026-0224",
  roDate: "2026-02-24",
  customer: "Velo Aviation LLC",
  customerPO: "VELO-2026-1847",
  shipVia: "VELO — FOR PICK UP",
  warranty: "No",
  partNumber: "HG1050AE15",
  partDescription: "Inertial Reference Unit (IRU) — HG1050AE",
  serialNumber: "07082300",
  boeingBCD: "S242T1B1-121",
  oem: "Honeywell International Inc.",
  weight: "41.98 lbs",
  incomingCondition: "AR",
  workScope: "Test and Inspect",
  certRequired: "FAA 8130-3 (Dual Release)",
  receivedDate: "2026-03-04",
  notes: "All units must ship with shop report and original 8130-3. Dual release 8130-3 required for all certified components. Do not disassemble without prior written authorization.",
};

const INITIAL_QUEUE = [
  { id:1, ro:"RO-2026-0219", customer:"Southwest Airlines", parts:5, status:"completed", time:"07:12 AM" },
  { id:2, ro:"RO-2026-0220", customer:"Delta TechOps", parts:3, status:"completed", time:"07:34 AM" },
  { id:3, ro:"RO-2026-0221", customer:"Atlas Air", parts:1, status:"completed", time:"08:01 AM" },
  { id:4, ro:"RO-2026-0222", customer:"Velo Aviation LLC", parts:1, status:"in-progress", time:"08:15 AM" },
  { id:5, ro:"RO-2026-0223", customer:"AAR Corp", parts:8, status:"pending", time:"—" },
  { id:6, ro:"RO-2026-0224", customer:"Velo Aviation LLC", parts:1, status:"pending", time:"—" },
  { id:7, ro:"RO-2026-0225", customer:"Empire Airlines", parts:4, status:"pending", time:"—" },
  { id:8, ro:"RO-2026-0226", customer:"Aviall Services", parts:12, status:"pending", time:"—" },
];

// ─── ICONS ───
const I = {
  Camera: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>,
  Check: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>,
  Scan: () => <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/></svg>,
  Zap: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  ArrowLeft: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>,
  Plus: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
};

// ─── STEP INDICATOR ───
function Steps({ steps, current }) {
  return (
    <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:0, margin:"24px 0" }}>
      {steps.map((label, i) => {
        const done = i < current, active = i === current;
        return (
          <div key={i} style={{ display:"flex", alignItems:"center" }}>
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", minWidth:80 }}>
              <div className="step-circle" style={{ width:36, height:36, borderRadius:"50%", background:done?B.green:active?B.blue:B.g200,
                color:done||active?B.white:B.g500, display:"flex", alignItems:"center", justifyContent:"center",
                fontWeight:700, fontSize:14, transition:"all 0.3s", boxShadow:active?`0 0 0 4px ${B.blueLight}`:"none" }}>
                {done ? <I.Check /> : i + 1}
              </div>
              <span className="step-label" style={{ fontSize:11, marginTop:6, fontWeight:active?600:400, color:active?B.blue:done?B.green:B.g400 }}>{label}</span>
            </div>
            {i < steps.length - 1 && <div className="step-connector" style={{ width:60, height:2, margin:"0 4px", background:done?B.green:B.g200, marginBottom:20, transition:"background 0.3s" }} />}
          </div>
        );
      })}
    </div>
  );
}

// ─── PHOTO CAPTURE WITH REAL IMAGES ───
function PhotoCapture({ onDone }) {
  const [docPhoto, setDocPhoto] = useState(false);
  const [partPhoto, setPartPhoto] = useState(false);
  const [flash, setFlash] = useState(null);
  const [extraDoc, setExtraDoc] = useState(0);
  const [extraPart, setExtraPart] = useState(0);

  const capture = (type) => {
    setFlash(type);
    setTimeout(() => { setFlash(null); type === "doc" ? setDocPhoto(true) : setPartPhoto(true); }, 400);
  };

  const card = (captured, type) => ({
    flex:1, minHeight:220, border:`2px dashed ${captured?B.green:B.g300}`, borderRadius:12,
    display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
    cursor:captured?"default":"pointer", background:flash===type?"white":captured?B.greenLt:B.g50,
    transition:"all 0.3s", overflow:"hidden", position:"relative", WebkitTapHighlightColor:"transparent",
  });

  return (
    <div style={{ padding:"0 20px" }}>
      <p style={{ textAlign:"center", color:B.g600, margin:"0 0 20px", fontSize:15 }}>
        Tap each area to simulate capturing a photo with your device camera
      </p>
      <div className="mobile-col" style={{ display:"flex", gap:16, marginBottom:24 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          <div className="photo-card" style={card(docPhoto, "doc")} onClick={() => !docPhoto && capture("doc")}>
            {docPhoto ? (
              <div style={{ textAlign:"center", width:"100%" }}>
                <img src={WO_IMG} alt="Work Order" style={{ width:"80%", maxWidth:220, borderRadius:6, border:`1px solid ${B.g200}`, marginBottom:8 }} />
                <div style={{ color:B.green, fontWeight:600, fontSize:12 }}>✓ Repair Order Captured</div>
                {extraDoc > 0 && <div style={{ color:B.g600, fontSize:12, marginTop:4 }}>+{extraDoc} Additional File{extraDoc > 1 ? 's' : ''}</div>}
              </div>
            ) : (
              <div style={{ textAlign:"center" }}>
                <div style={{ color:B.blue, marginBottom:8 }}><I.Camera /></div>
                <div style={{ fontWeight:600, color:B.g700, fontSize:14 }}>Repair Order / Work Order</div>
                <div style={{ fontSize:12, color:B.g400, marginTop:4 }}>Packing slip, RO, or BOL</div>
              </div>
            )}
          </div>
          {docPhoto && (
            <button onClick={() => setExtraDoc(d => d + 1)} style={{ padding:"12px", background:"transparent", border:`1px solid ${B.g300}`, borderRadius:8, color:B.g600, fontSize:13, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:6, animation:"slideIn 0.3s ease" }}>
              <I.Plus /> Add Additional Document
            </button>
          )}
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          <div className="photo-card" style={card(partPhoto, "part")} onClick={() => !partPhoto && capture("part")}>
            {partPhoto ? (
              <div style={{ textAlign:"center", width:"100%" }}>
                <img src={PP_IMG} alt="Part" style={{ width:"80%", maxWidth:220, borderRadius:6, border:`1px solid ${B.g200}`, marginBottom:8 }} />
                <div style={{ color:B.green, fontWeight:600, fontSize:12 }}>✓ Part Photo Captured</div>
                {extraPart > 0 && <div style={{ color:B.g600, fontSize:12, marginTop:4 }}>+{extraPart} Additional Image{extraPart > 1 ? 's' : ''}</div>}
              </div>
            ) : (
              <div style={{ textAlign:"center" }}>
                <div style={{ color:B.blue, marginBottom:8 }}><I.Camera /></div>
                <div style={{ fontWeight:600, color:B.g700, fontSize:14 }}>Part / Component</div>
                <div style={{ fontSize:12, color:B.g400, marginTop:4 }}>Photo of the received unit</div>
              </div>
            )}
          </div>
          {partPhoto && (
            <button onClick={() => setExtraPart(p => p + 1)} style={{ padding:"12px", background:"transparent", border:`1px solid ${B.g300}`, borderRadius:8, color:B.g600, fontSize:13, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:6, animation:"slideIn 0.3s ease" }}>
              <I.Plus /> Add Additional Part Photo
            </button>
          )}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", padding:"0 4px" }}>
        <button
          className="photo-submit-btn"
          onClick={onDone}
          disabled={!docPhoto || !partPhoto}
          style={{
            padding:"14px 40px", background: (docPhoto && partPhoto) ? B.blue : B.g200,
            color: (docPhoto && partPhoto) ? B.white : B.g400, border:"none", borderRadius:10,
            fontSize:16, fontWeight:600, cursor: (docPhoto && partPhoto) ? "pointer" : "not-allowed",
            fontFamily:"inherit", display:"flex", alignItems:"center", justifyContent:"center", gap:8,
            opacity: (docPhoto && partPhoto) ? 1 : 0.5, transition:"all 0.3s",
          }}>
          <I.Zap /> Submit to Agent
        </button>
      </div>
    </div>
  );
}

// ─── AI PROCESSING ───
function AIProcessing({ onComplete }) {
  const [stage, setStage] = useState(0);
  const stages = [
    "Running OCR on repair order...",
    "Reading part nameplate / data tag...",
    "Extracting P/N, S/N, and OEM data...",
    "Cross-referencing customer PO...",
    "Identifying work scope and cert requirements...",
    "Populating intake form...",
  ];
  useEffect(() => {
    const timers = stages.map((_, i) => setTimeout(() => setStage(i+1), (i+1)*700));
    const done = setTimeout(onComplete, (stages.length+1)*700);
    return () => { timers.forEach(clearTimeout); clearTimeout(done); };
  }, []);

  return (
    <div className="ai-proc-container" style={{ padding:"40px 20px", textAlign:"center" }}>
      <style>{`
        @keyframes pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.08);opacity:0.85}}
        @keyframes spin{to{transform:rotate(360deg)}}
      `}</style>
      <div className="ai-proc-spinner" style={{ width:80, height:80, borderRadius:"50%", background:`linear-gradient(135deg,${B.blue},${B.blueDark})`,
        display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 24px", animation:"pulse 1.5s ease-in-out infinite", color:B.white }}>
        <I.Scan />
      </div>
      <h3 style={{ color:B.g800, marginBottom:24, fontWeight:600 }}>AI Processing Documents</h3>
      <div style={{ maxWidth:340, margin:"0 auto", textAlign:"left" }}>
        {stages.map((text, i) => {
          if (stage <= i) return null;
          const done = stage > i+1 || (stage === stages.length && i === stages.length-1);
          return (
            <div key={i} style={{ display:"flex", alignItems:"center", gap:10, padding:"8px 0", animation:"slideIn 0.3s ease" }}>
              {done ? <div style={{ color:B.green, flexShrink:0 }}><I.Check /></div>
                : <div style={{ width:20, height:20, border:`2px solid ${B.blue}`, borderTopColor:"transparent", borderRadius:"50%", animation:"spin 0.6s linear infinite", flexShrink:0 }} />}
              <span style={{ fontSize:13, color:!done?B.blue:B.g600, fontWeight:!done?600:400 }}>{text}</span>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop:24, height:4, background:B.g200, borderRadius:2, maxWidth:300, margin:"24px auto 0", overflow:"hidden" }}>
        <div style={{ height:"100%", background:B.blue, borderRadius:2, width:`${(stage/stages.length)*100}%`, transition:"width 0.5s" }} />
      </div>
    </div>
  );
}

// ─── INTAKE FORM ───
function IntakeForm({ data, onBack, onLog }) {
  const [fd, setFd] = useState(data);
  const [hl, setHl] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => { const t = setTimeout(() => setHl(false), 3000); return () => clearTimeout(t); }, []);

  const fs = (val) => ({
    width:"100%", padding:"12px 14px", border:`1.5px solid ${hl&&val?B.blue:B.g300}`, borderRadius:8,
    fontSize:14, fontFamily:"inherit", background:hl&&val?B.blueLight:B.white, transition:"all 0.5s", outline:"none", boxSizing:"border-box",
    WebkitAppearance:"none",
  });
  const ls = { display:"block", fontSize:12, fontWeight:600, color:B.g600, marginBottom:4, textTransform:"uppercase", letterSpacing:"0.05em" };
  const tag = <span style={{ display:"inline-flex", alignItems:"center", gap:3, fontSize:9, background:B.blueLight, color:B.blue,
    padding:"2px 6px", borderRadius:4, fontWeight:600, marginLeft:6, opacity:hl?1:0, transition:"opacity 0.5s" }}><I.Zap /> AI</span>;

  if (done) return (
    <div style={{ textAlign:"center", padding:"60px 20px" }}>
      <div style={{ width:72, height:72, borderRadius:"50%", background:B.greenLt, display:"flex", alignItems:"center",
        justifyContent:"center", margin:"0 auto 20px", color:B.green }}>
        <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h3 style={{ color:B.g800, marginBottom:8 }}>Intake Complete</h3>
      <p style={{ color:B.g500, fontSize:14, marginBottom:4 }}>{fd.partNumber} — {fd.partDescription}</p>
      <p style={{ color:B.g400, fontSize:13, marginBottom:4 }}>Customer: {fd.customer}</p>
      <p style={{ color:B.g400, fontSize:13, marginBottom:24 }}>Logged at {new Date().toLocaleTimeString()}</p>
      <button className="completion-btn" onClick={onBack} style={{ padding:"14px 32px", background:B.blue, color:B.white, border:"none", borderRadius:8, fontSize:15, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>
        Process Next Shipment
      </button>
    </div>
  );

  const F = ({ label, field, type="text", options, wide }) => (
    <div style={{ gridColumn:wide?"1/-1":undefined }}>
      <label style={ls}>{label}{tag}</label>
      {options ? (
        <select style={fs(fd[field])} value={fd[field]} onChange={e => setFd(d => ({...d,[field]:e.target.value}))}>
          {options.map(o => <option key={o.v} value={o.v}>{o.l}</option>)}
        </select>
      ) : type === "textarea" ? (
        <textarea rows={3} style={{...fs(fd[field]), resize:"vertical"}} value={fd[field]} onChange={e => setFd(d => ({...d,[field]:e.target.value}))} />
      ) : (
        <input type={type} style={fs(fd[field])} value={fd[field]} onChange={e => setFd(d => ({...d,[field]:e.target.value}))} />
      )}
    </div>
  );

  return (
    <div style={{ padding:"0 20px" }}>
      <div style={{ display:"flex", alignItems:"center", gap:8, background:B.blueLight, padding:"10px 14px", borderRadius:8, marginBottom:20,
        opacity:hl?1:0.6, transition:"opacity 0.5s" }}>
        <span style={{ color:B.blue }}><I.Zap /></span>
        <span style={{ fontSize:13, color:B.blue, fontWeight:500 }}>All fields auto-populated from AI document extraction. Review and submit.</span>
      </div>

      {/* Section: Customer & RO Info */}
      <div style={{ fontSize:12, fontWeight:700, color:B.blue, textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:10, marginTop:4 }}>
        Repair Order Info
      </div>
      <div className="mobile-grid-1" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"14px 16px", marginBottom:20 }}>
        <F label="RO Number" field="roNumber" />
        <F label="RO Date" field="roDate" type="date" />
        <F label="Customer" field="customer" wide />
        <F label="Customer PO #" field="customerPO" />
        <F label="Ship Via" field="shipVia" />
        <F label="Warranty" field="warranty" options={[{v:"No",l:"No"},{v:"Yes",l:"Yes"}]} />
        <F label="Received Date" field="receivedDate" type="date" />
      </div>

      {/* Section: Part Info */}
      <div style={{ fontSize:12, fontWeight:700, color:B.blue, textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:10 }}>
        Part / Component Details
      </div>
      <div className="mobile-grid-1" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"14px 16px", marginBottom:20 }}>
        <F label="Part Number" field="partNumber" />
        <F label="Serial Number" field="serialNumber" />
        <F label="Part Description" field="partDescription" wide />
        <F label="OEM / Manufacturer" field="oem" wide />
        <F label="Boeing BCD #" field="boeingBCD" />
        <F label="Weight" field="weight" />
        <F label="Incoming Condition" field="incomingCondition" options={[
          {v:"AR",l:"AR — As Removed"},{v:"NE",l:"NE — New"},{v:"OH",l:"OH — Overhauled"},
          {v:"SV",l:"SV — Serviceable"},{v:"RP",l:"RP — Repaired"},{v:"US",l:"US — Unserviceable"},
        ]} />
        <F label="Cert Required" field="certRequired" options={[
          {v:"FAA 8130-3 (Dual Release)",l:"FAA 8130-3 (Dual Release)"},
          {v:"FAA 8130-3",l:"FAA 8130-3"},{v:"EASA Form 1",l:"EASA Form 1"},
          {v:"COC",l:"Certificate of Conformity"},{v:"Other",l:"Other"},
        ]} />
      </div>

      {/* Section: Work Scope */}
      <div style={{ fontSize:12, fontWeight:700, color:B.blue, textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:10 }}>
        Work Scope & Notes
      </div>
      <div className="mobile-grid-1" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"14px 16px", marginBottom:20 }}>
        <F label="Work Scope" field="workScope" wide />
        <F label="Customer Notes / Special Instructions" field="notes" type="textarea" wide />
      </div>

      <div className="form-buttons" style={{ display:"flex", justifyContent:"space-between", paddingTop:16, borderTop:`1px solid ${B.g200}` }}>
        <button onClick={onBack} style={{ display:"flex", alignItems:"center", gap:6, padding:"12px 20px", background:"transparent",
          color:B.g500, border:`1px solid ${B.g300}`, borderRadius:8, fontSize:14, cursor:"pointer", fontFamily:"inherit", justifyContent:"center" }}>
          <I.ArrowLeft /> Back
        </button>
        <button onClick={() => { setDone(true); if (onLog) onLog(fd); }} style={{ display:"flex", alignItems:"center", gap:8, padding:"14px 32px",
          background:B.blue, color:B.white, border:"none", borderRadius:8, fontSize:15, fontWeight:600, cursor:"pointer", fontFamily:"inherit", justifyContent:"center" }}>
          <I.Check /> Confirm & Log to System
        </button>
      </div>
    </div>
  );
}

// ─── DASHBOARD ───
function Dashboard({ queue, onNew }) {
  const completed = queue.filter(r => r.status==="completed").length;
  const pending = queue.filter(r => r.status==="pending").length;
  const totalParts = queue.reduce((s,r) => s+r.parts, 0);

  const Stat = ({ label, value, sub, color }) => (
    <div className="stat-card" style={{ background:B.white, borderRadius:10, padding:"16px 20px", border:`1px solid ${B.g200}`, flex:1 }}>
      <div style={{ fontSize:11, color:B.g500, fontWeight:500, textTransform:"uppercase", letterSpacing:"0.04em" }}>{label}</div>
      <div className="stat-value" style={{ fontSize:28, fontWeight:700, color:color||B.g800, marginTop:4 }}>{value}</div>
      <div style={{ fontSize:12, color:B.g400, marginTop:2 }}>{sub}</div>
    </div>
  );

  const badge = (s) => {
    const c = { completed:{bg:B.greenLt,c:B.green,l:"Complete"}, "in-progress":{bg:B.blueLight,c:B.blue,l:"In Progress"}, pending:{bg:B.g100,c:B.g500,l:"Pending"} }[s];
    return <span style={{ display:"inline-block", padding:"3px 10px", borderRadius:99, fontSize:11, fontWeight:600, background:c.bg, color:c.c }}>{c.l}</span>;
  };

  return (
    <div style={{ padding:"0 20px" }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
        <div>
          <h2 className="dash-title" style={{ margin:0, fontSize:20, color:B.g800, fontWeight:700 }}>Receiving Dashboard</h2>
          <div style={{ display:"inline-flex", alignItems:"center", gap:6, background:B.greenLt, padding:"4px 12px", borderRadius:99, marginTop:6 }}>
            <div style={{ width:7, height:7, borderRadius:"50%", background:B.green, animation:"blink 2s ease-in-out infinite", flexShrink:0 }} />
            <span style={{ fontSize:11, fontWeight:700, color:B.green, textTransform:"uppercase", letterSpacing:"0.04em" }}>Agent Active</span>
          </div>
          <p style={{ margin:"4px 0 0", fontSize:13, color:B.g400 }}>
            {new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}
          </p>
        </div>
        <button className="new-intake-btn" onClick={onNew} style={{ display:"flex", alignItems:"center", gap:8, padding:"12px 24px", background:B.blue,
          color:B.white, border:"none", borderRadius:8, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit",
          boxShadow:`0 2px 8px rgba(21,112,191,0.25)` }}>
          <I.Plus /> New Intake
        </button>
      </div>

      <div className="stat-grid" style={{ display:"flex", gap:12, marginBottom:24 }}>
        <Stat label="Today's ROs" value={queue.length} sub="repair orders received" />
        <Stat label="Processed" value={completed} sub={`of ${queue.length} orders`} color={B.green} />
        <Stat label="Pending" value={pending} sub="awaiting intake" color={B.amber} />
        <Stat label="Total Units" value={totalParts} sub="across all ROs" color={B.blue} />
      </div>

      {/* Desktop/tablet table */}
      <div className="queue-table" style={{ background:B.white, borderRadius:10, border:`1px solid ${B.g200}`, overflowX:"auto" }}>
        <div style={{ padding:"14px 20px", borderBottom:`1px solid ${B.g200}`, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <span style={{ fontWeight:600, fontSize:14, color:B.g800 }}>Receiving Queue</span>
          <span style={{ fontSize:12, color:B.g400 }}>Sorted by arrival</span>
        </div>
        <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
          <thead><tr style={{ background:B.g50 }}>
            {["RO Number","Customer","Units","Time","Status"].map(h => (
              <th key={h} style={{ padding:"10px 16px", textAlign:"left", fontSize:11, fontWeight:600, color:B.g500,
                textTransform:"uppercase", letterSpacing:"0.05em", borderBottom:`1px solid ${B.g200}` }}>{h}</th>
            ))}
          </tr></thead>
          <tbody>{queue.map(r => (
            <tr key={r.id} style={{ borderBottom:`1px solid ${B.g100}`, background:r.status==="in-progress"?B.blueLight:"transparent" }}>
              <td style={{ padding:"12px 16px", fontWeight:600, color:B.g800 }}>{r.ro}</td>
              <td style={{ padding:"12px 16px", color:B.g600 }}>{r.customer}</td>
              <td style={{ padding:"12px 16px", color:B.g600 }}>{r.parts}</td>
              <td style={{ padding:"12px 16px", color:B.g400, fontSize:12 }}>{r.time}</td>
              <td style={{ padding:"12px 16px" }}>{badge(r.status)}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>

      {/* Mobile card view */}
      <div className="queue-cards" style={{ display:"none" }}>
        <div style={{ padding:"14px 0 10px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <span style={{ fontWeight:600, fontSize:14, color:B.g800 }}>Receiving Queue</span>
          <span style={{ fontSize:12, color:B.g400 }}>Sorted by arrival</span>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
          {queue.map(r => (
            <div key={r.id} style={{ background:r.status==="in-progress"?B.blueLight:B.white, borderRadius:10, border:`1px solid ${B.g200}`, padding:"14px 16px" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:6 }}>
                <span style={{ fontWeight:700, fontSize:14, color:B.g800 }}>{r.ro}</span>
                {badge(r.status)}
              </div>
              <div style={{ fontSize:13, color:B.g600, marginBottom:4 }}>{r.customer}</div>
              <div style={{ display:"flex", justifyContent:"space-between", fontSize:12, color:B.g400 }}>
                <span>{r.parts} unit{r.parts !== 1 ? 's' : ''}</span>
                <span>{r.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop:20, background:B.g50, borderRadius:10, padding:"16px 20px", display:"flex", alignItems:"center", gap:12, border:`1px solid ${B.g200}` }}>
        <span style={{ color:B.blue }}><I.Zap /></span>
        <div>
          <div style={{ fontSize:13, fontWeight:600, color:B.g700 }}>AI-Assisted Intake Active</div>
          <div style={{ fontSize:12, color:B.g400 }}>Avg processing: 47 sec/order vs 5+ min manual — saving ~14 hrs/day at 200 orders</div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN APP ───
export default function App() {
  const [view, setView] = useState("dashboard");
  const [step, setStep] = useState(0);
  const [queue, setQueue] = useState(INITIAL_QUEUE);

  const start = () => { setView("intake"); setStep(0); };
  const back = () => { setView("dashboard"); setStep(0); };

  const handleLog = (data) => {
    setQueue(q => q.map(item => 
      item.ro === data.roNumber 
        ? { ...item, status: "completed", time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) } 
        : item
    ));
  };

  return (
    <div style={{ fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif', maxWidth:900, margin:"0 auto", background:B.g50, minHeight:"100dvh", paddingBottom:"env(safe-area-inset-bottom, 0px)" }}>
      {/* HEADER */}
      <style>{`
        @keyframes blink {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }
        @keyframes slideIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}

        /* Tablet portrait */
        @media (max-width: 768px) {
          .stat-grid { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 10px !important; }
        }

        /* Small tablet / large phone */
        @media (max-width: 650px) {
          .mobile-col { flex-direction: column !important; }
          .mobile-grid-1 { grid-template-columns: 1fr !important; }
          .header-title-mobile { display: none !important; }
          .header-bar { padding: 0 16px !important; height: 48px !important; }
          .header-right { gap: 10px !important; }
          .step-connector { width: 36px !important; }
          .step-circle { width: 32px !important; height: 32px !important; font-size: 13px !important; }
          .step-label { font-size: 11px !important; }
          .content-card { margin: 0 12px !important; padding: 20px 0 !important; }
          .intake-title { font-size: 18px !important; }
          .photo-submit-btn { width: 100% !important; padding: 16px !important; }
          .form-buttons { flex-direction: column-reverse !important; gap: 10px !important; }
          .form-buttons button { width: 100% !important; justify-content: center !important; }
          .queue-table { display: none !important; }
          .queue-cards { display: block !important; }
          .dash-title { font-size: 18px !important; }
          .new-intake-btn { padding: 10px 16px !important; font-size: 13px !important; }
          .ai-proc-container { padding: 24px 16px !important; }
          .ai-proc-spinner { width: 56px !important; height: 56px !important; }
          .back-to-dash { padding: 8px 12px !important; }
          .completion-btn { width: 100% !important; }
        }

        /* Phone */
        @media (max-width: 430px) {
          .header-bar { padding: 0 12px !important; }
          .section-padding { padding: 0 12px !important; }
          .content-card { margin: 0 8px !important; padding: 16px 0 !important; }
          .photo-card { min-height: 180px !important; }
          .step-connector { width: 24px !important; }
          .stat-value { font-size: 22px !important; }
          .stat-card { padding: 12px 14px !important; }
        }
      `}</style>
      <div className="header-bar" style={{ background:B.black, padding:"0 24px", height:56, display:"flex", alignItems:"center", justifyContent:"space-between", boxShadow:"0 2px 8px rgba(0,0,0,0.15)" }}>
        <img src={LOGO_URL} alt="ICON Aerospace" style={{ height:28, cursor:"pointer" }} title="Reset Prototype" onClick={() => { setView("dashboard"); setStep(0); setQueue(INITIAL_QUEUE); }} />
        <div className="header-right" style={{ display:"flex", alignItems:"center", gap:16 }}>
          <span className="header-title-mobile" style={{ fontSize:12, color:B.g400 }}>Receiving Dept.</span>
          <div style={{ width:32, height:32, borderRadius:"50%", background:B.blue, display:"flex", alignItems:"center", justifyContent:"center", color:B.white, fontSize:13, fontWeight:700, flexShrink:0 }}>MR</div>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ padding:"20px 0 40px" }}>
        {view === "dashboard" && <Dashboard queue={queue} onNew={start} />}
        {view === "intake" && (
          <>
            <div style={{ padding:"0 20px", marginBottom:8 }}>
              <button className="back-to-dash" onClick={back} style={{ display:"flex", alignItems:"center", gap:6, background:"none", border:"none", color:B.g400, fontSize:13, cursor:"pointer", padding:"8px 0", fontFamily:"inherit" }}>
                <I.ArrowLeft /> Back to Dashboard
              </button>
            </div>
            <div style={{ textAlign:"center", marginBottom:4 }}>
              <h2 className="intake-title" style={{ margin:0, fontSize:20, color:B.g800, fontWeight:700 }}>New Shipment Intake</h2>
              <p style={{ margin:"4px 0 0", fontSize:13, color:B.g400 }}>AI-powered document scanning and form auto-population</p>
            </div>
            <Steps steps={["Capture Photos","AI Processing","Review & Submit"]} current={step} />
            <div className="content-card" style={{ background:B.white, borderRadius:12, margin:"0 20px", border:`1px solid ${B.g200}`, padding:"24px 0", boxShadow:"0 1px 3px rgba(0,0,0,0.04)" }}>
              {step===0 && <PhotoCapture onDone={() => setStep(1)} />}
              {step===1 && <AIProcessing onComplete={() => setStep(2)} />}
              {step===2 && <IntakeForm data={EXTRACTED} onBack={back} onLog={handleLog} />}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
