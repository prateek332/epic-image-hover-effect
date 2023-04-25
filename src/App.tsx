import "./App.css";

function App() {
  return (
    <main
      className={`w-screen h-screen flex flex-col gap-10 justify-center items-center`}
    >
      <h1>Hover Over Image for Cool Epic Effect</h1>
      <div
        id="card"
        className={`group cursor-pointer
          overflow-hidden border-4 border-slate-500 rounded-md w-full h-full max-w-lg max-h-[400px]
        `}
      >
        <img
          src="/aqua-cry.jpg"
          className={`
            w-full h-full object-cover
            group-hover:animate-scaleAndReset
          `}
          style={{ filter: "url(#noise)" }}
        />
        <svg style={{ display: "hidden" }}>
          <defs>
            <filter id="noise">
              <feTurbulence
                baseFrequency="0.7, 0.8"
                seed="0"
                type="fractalNoise"
                result="static"
              >
                <animate
                  attributeName="seed"
                  values="0;100"
                  dur="800ms"
                  repeatCount="1"
                  begin="card.mouseenter"
                />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="static" scale="0">
                <animate
                  attributeName="scale"
                  values="0;40;0"
                  dur="800ms"
                  repeatCount="1"
                  begin="card.mouseenter"
                />
              </feDisplacementMap>
            </filter>
          </defs>
        </svg>
      </div>
    </main>
  );
}

export default App;
