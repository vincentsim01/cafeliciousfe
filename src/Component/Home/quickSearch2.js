import { useState, useEffect, useRef, useCallback } from "react";

const API_URL = "https://zomato-big-assignment-2-production.up.railway.app/quicksearch";

const PALETTE = [
  { color: "#e8b04b", bg: "#0f0c05" },
  { color: "#e05c3a", bg: "#110600" },
  { color: "#c0392b", bg: "#120303" },
  { color: "#3498db", bg: "#030d18" },
  { color: "#27ae60", bg: "#021208" },
  { color: "#9b59b6", bg: "#0a0514" },
  { color: "#e67e22", bg: "#130800" },
  { color: "#1abc9c", bg: "#021210" },
  { color: "#f39c12", bg: "#120b00" },
  { color: "#e74c3c", bg: "#130202" },
  { color: "#2980b9", bg: "#020b14" },
];

const EMOJIS = ["🍝","🍣","🥟","🍔","🍛","🌮","🍲","🥐","🍜","🫔","🍱"];

const fontImport = `@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&family=Outfit:wght@300;400;500&display=swap');`;

export default function CuisineCarousel() {
  const [cuisines, setCuisines] = useState([]);
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [animKey, setAnimKey] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then((data) => {
        setCuisines(data.map((item, i) => ({ ...item, ...PALETTE[i % PALETTE.length] })));
        setLoading(false);
      })
      .catch(() => { setError("Failed to load cuisines."); setLoading(false); });
  }, []);

  const goTo = useCallback((idx, dir) => {
    if (!cuisines.length) return;
    setDirection(dir);
    setImgLoaded(false);
    setActive(idx);
    setAnimKey((k) => k + 1);
  }, [cuisines.length]);

  const next = useCallback(() => goTo((active + 1) % cuisines.length, 1), [active, cuisines.length, goTo]);
  const prev = useCallback(() => goTo((active - 1 + cuisines.length) % cuisines.length, -1), [active, cuisines.length, goTo]);

  useEffect(() => {
    if (!cuisines.length) return;
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [next, cuisines.length]);

  const handleNav = (fn) => {
    clearInterval(timerRef.current);
    fn();
    timerRef.current = setInterval(next, 5000);
  };

  if (loading) return (
    <div style={{ minHeight:"100vh", background:"#080808", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:18 }}>
      <style>{`${fontImport} @keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <div style={{ width:38, height:38, border:"2px solid rgba(255,255,255,0.08)", borderTop:"2px solid #e8b04b", borderRadius:"50%", animation:"spin 0.8s linear infinite" }} />
      <p style={{ fontFamily:"Outfit,sans-serif", fontSize:12, color:"rgba(255,255,255,0.35)", letterSpacing:"0.15em", textTransform:"uppercase" }}>Loading cuisines…</p>
    </div>
  );

  if (error) return (
    <div style={{ minHeight:"100vh", background:"#080808", display:"flex", alignItems:"center", justifyContent:"center" }}>
      <p style={{ fontFamily:"Outfit,sans-serif", color:"#e74c3c" }}>{error}</p>
    </div>
  );

  const c = cuisines[active];

  return (
    <div style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", background:c.bg, minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"36px 16px", position:"relative", overflow:"hidden", transition:"background 0.9s ease", "--accent": c.color }}>
      <style>{`
        ${fontImport}
        * { box-sizing:border-box; margin:0; padding:0; }
        .glow { position:fixed; border-radius:50%; filter:blur(140px); pointer-events:none; z-index:0; transition:background 0.9s ease; }
        @keyframes slideR { from { opacity:0; transform:translateX(70px) scale(0.97); } to { opacity:1; transform:none; } }
        @keyframes slideL { from { opacity:0; transform:translateX(-70px) scale(0.97); } to { opacity:1; transform:none; } }
        @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:none; } }
        .anim-r { animation: slideR 0.55s cubic-bezier(0.22,1,0.36,1) forwards; }
        .anim-l { animation: slideL 0.55s cubic-bezier(0.22,1,0.36,1) forwards; }
        .header-anim { animation: fadeUp 0.6s ease forwards; }
        .img-wrap { position:relative; overflow:hidden; }
        .img-wrap img { width:100%; height:100%; object-fit:cover; display:block; transition:transform 0.7s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease; }
        .img-wrap:hover img { transform:scale(1.05); }
        .pill { display:inline-block; padding:5px 14px; border-radius:100px; font-family:'Outfit',sans-serif; font-size:11px; font-weight:400; letter-spacing:0.07em; text-transform:uppercase; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.11); color:rgba(255,255,255,0.5); transition:all 0.25s ease; cursor:default; }
        .pill:hover { background:rgba(255,255,255,0.12); color:rgba(255,255,255,0.9); }
        .nav-btn { width:46px; height:46px; border-radius:50%; border:1px solid rgba(255,255,255,0.14); background:rgba(255,255,255,0.05); color:rgba(255,255,255,0.65); cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all 0.2s ease; backdrop-filter:blur(6px); flex-shrink:0; }
        .nav-btn:hover { background:rgba(255,255,255,0.13); color:#fff; border-color:rgba(255,255,255,0.28); transform:scale(1.08); }
        .dot { width:6px; height:6px; border-radius:3px; background:rgba(255,255,255,0.2); border:none; cursor:pointer; padding:0; flex-shrink:0; transition:all 0.35s ease; }
        .dot.on { width:26px; background:var(--accent); }
        .dot:not(.on):hover { background:rgba(255,255,255,0.45); }
        .thumb { width:50px; height:50px; border-radius:11px; overflow:hidden; cursor:pointer; border:2px solid transparent; opacity:0.4; transition:all 0.3s ease; flex-shrink:0; }
        .thumb img { width:100%; height:100%; object-fit:cover; display:block; }
        .thumb.on { opacity:1; transform:scale(1.1); border-color:var(--accent); }
        .thumb:not(.on):hover { opacity:0.72; }
        .divider { width:36px; height:2px; border-radius:2px; background:var(--accent); transition:background 0.6s ease; margin:10px 0 20px; }
        @media(max-width:600px) {
          .cc-grid { grid-template-columns:1fr !important; }
          .img-wrap { min-height:200px !important; max-height:240px !important; }
          .thumb { width:36px; height:36px; border-radius:8px; }
        }
      `}</style>

      {/* Glows */}
      <div className="glow" style={{ width:620, height:620, top:"-15%", right:"-12%", opacity:0.15, background:c.color }} />
      <div className="glow" style={{ width:380, height:380, bottom:"-10%", left:"-8%", opacity:0.09, background:c.color }} />

      {/* Header */}
      <div key={`h${active}`} className="header-anim" style={{ textAlign:"center", marginBottom:32, position:"relative", zIndex:2 }}>
        <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:11, letterSpacing:"0.25em", textTransform:"uppercase", color:c.color, marginBottom:10, transition:"color 0.6s ease" }}>
          World Cuisines
        </p>
        <h1 style={{ fontSize:"clamp(24px,4.5vw,42px)", fontWeight:300, color:"rgba(255,255,255,0.88)", lineHeight:1.15, letterSpacing:"-0.01em" }}>
          A Journey of Flavours
        </h1>
      </div>

      {/* Card */}
      <div style={{ width:"100%", maxWidth:860, position:"relative", zIndex:2 }}>
        <div
          key={animKey}
          className={`cc-grid ${direction > 0 ? "anim-r" : "anim-l"}`}
          style={{ display:"grid", gridTemplateColumns:"1fr 1fr", background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:22, overflow:"hidden", boxShadow:"0 40px 100px rgba(0,0,0,0.55)", minHeight:420 }}
        >
          {/* Image */}
          <div className="img-wrap" style={{ minHeight:300 }}>
            <img
              src={c.meal_image}
              alt={c.foodtype}
              onLoad={() => setImgLoaded(true)}
              style={{ opacity: imgLoaded ? 1 : 0 }}
            />
            <div style={{ position:"absolute", inset:0, background:`linear-gradient(135deg, transparent 25%, ${c.bg}e0 100%)` }} />
            <div style={{ position:"absolute", bottom:18, left:20, fontSize:"clamp(48px,8vw,78px)", fontFamily:"'Cormorant Garamond',serif", fontWeight:700, color:"rgba(255,255,255,0.06)", lineHeight:1, pointerEvents:"none", userSelect:"none" }}>
              {String(active + 1).padStart(2,"0")}
            </div>
          </div>

          {/* Content */}
          <div style={{ padding:"40px 36px", display:"flex", flexDirection:"column", justifyContent:"center", gap:10 }}>
            <div style={{ fontSize:38, marginBottom:4 }}>{EMOJIS[active % EMOJIS.length]}</div>
            <h2 style={{ fontSize:"clamp(28px,4vw,48px)", fontWeight:600, color:"#fff", lineHeight:1, letterSpacing:"-0.02em" }}>
              {c.foodtype}
            </h2>
            <div className="divider" />
            <p style={{ fontStyle:"italic", fontWeight:300, fontSize:"clamp(14px,1.4vw,17px)", color:"rgba(255,255,255,0.5)", lineHeight:1.75, marginBottom:8 }}>
              {c.content}
            </p>
            <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
              <span className="pill">Explore Menu</span>
              <span className="pill">Cuisine #{c.foodtype_id}</span>
            </div>
            <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:11, letterSpacing:"0.14em", color:"rgba(255,255,255,0.22)", marginTop:"auto", paddingTop:20 }}>
              {String(active + 1).padStart(2,"0")} &nbsp;/&nbsp; {String(cuisines.length).padStart(2,"0")}
            </p>
          </div>
        </div>
      </div>

      {/* Dot + Arrow controls */}
      <div style={{ display:"flex", alignItems:"center", gap:14, marginTop:26, position:"relative", zIndex:2 }}>
        <button className="nav-btn" onClick={() => handleNav(prev)} aria-label="Previous">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 14L6 9l5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div style={{ display:"flex", gap:7, alignItems:"center" }}>
          {cuisines.map((_, i) => (
            <button key={i} className={`dot ${i === active ? "on" : ""}`} onClick={() => handleNav(() => goTo(i, i > active ? 1 : -1))} aria-label={cuisines[i].foodtype} />
          ))}
        </div>
        <button className="nav-btn" onClick={() => handleNav(next)} aria-label="Next">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      {/* Thumbnail strip */}
      <div style={{ display:"flex", gap:9, marginTop:18, position:"relative", zIndex:2, flexWrap:"wrap", justifyContent:"center", maxWidth:540 }}>
        {cuisines.map((cu, i) => (
          <div key={cu._id} className={`thumb ${i === active ? "on" : ""}`} onClick={() => handleNav(() => goTo(i, i > active ? 1 : -1))} title={cu.foodtype}>
            <img src={cu.meal_image} alt={cu.foodtype} />
          </div>
        ))}
      </div>
    </div>
  );
}