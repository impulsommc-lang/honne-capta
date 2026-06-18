import {
  FileText,
  Lightbulb,
  ArrowRight,
  TrendingUp,
  Target,
  Globe,
  MessageSquare,
  Eye,
  Rocket,
  Users,
  Check,
  Bot,
  CalendarDays,
  Handshake,
  Star,
  Users2,
  Camera,
  PlayCircle,
  Home
} from 'lucide-react';
import { motion } from 'motion/react';

export function NavigationFooter({
  onBack,
  onNext,
  nextText = "Siguiente paso",
  nextTheme = "black", // "black" or "yellow"
}: {
  onBack?: () => void;
  onNext: () => void;
  nextText?: string;
  nextTheme?: 'black' | 'yellow';
}) {
  return (
    <div className="flex items-center gap-3 mt-auto pt-6 w-full select-none">
      {onBack && (
        <button
          onClick={onBack}
          className="flex items-center justify-center gap-2 px-5 rounded-xl border border-neutral-200 text-[#0d162a] bg-white hover:bg-neutral-50 active:bg-neutral-100 font-extrabold transition-all text-xs shadow-3xs cursor-pointer uppercase tracking-wider h-12 min-w-[110px]"
          id="btn-nav-back"
        >
          <span className="text-sm font-black text-[#0d162a]">←</span>
          <span>Anterior</span>
        </button>
      )}

      {nextTheme === 'yellow' ? (
        <button
          onClick={onNext}
          className="flex-1 bg-[#f8b500] hover:bg-[#e0a300] text-neutral-900 font-extrabold rounded-xl transition-all duration-200 shadow-md flex items-center justify-center gap-1.5 group tracking-wider uppercase text-xs cursor-pointer border border-[#f8b500] h-12"
          id="btn-nav-next"
        >
          <span>{nextText}</span>
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform stroke-[2.5]" />
        </button>
      ) : (
        <button
          onClick={onNext}
          className="flex-1 bg-[#0d162a] hover:bg-neutral-800 text-[#f8b500] font-black rounded-xl transition-all duration-200 shadow-md flex items-center justify-center gap-1.5 group tracking-wider uppercase text-xs cursor-pointer border border-[#0d162a] h-12"
          id="btn-nav-next"
        >
          <span>{nextText}</span>
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform stroke-[2.5] text-[#f8b500]" />
        </button>
      )}
    </div>
  );
}

// --------------------- STEP 1: PRECIO CORRECTO --------------------
export function MethodStep1({ onBack, onNext }: { onBack: () => void; onNext: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col flex-grow w-full max-w-xl mx-auto px-4 md:px-5 py-2 md:py-3 bg-white h-full justify-between overflow-hidden"
    >
      <div className="flex-shrink-0">
        <h2 className="text-lg md:text-2xl font-black text-[#0d162a] tracking-tight text-left leading-none mb-1 md:mb-2">
          1. Precio correcto
        </h2>
        <p className="text-[10px] md:text-xs text-neutral-500 text-left mb-2 md:mb-4 leading-relaxed font-bold max-w-md">
          Realizamos un Análisis de Comparativo de Mercado (ACM) para definir el precio ideal de tu propiedad.
        </p>
      </div>

      {/* Bell Curve Layout with floating cards matching image */}
      <div className="w-full relative bg-white py-1 mb-1.5 md:mb-4 select-none flex-grow flex flex-col justify-center">
        <h3 className="text-center font-extrabold text-[11px] md:text-sm text-[#0d162a] mb-1.5 md:mb-4 leading-none">
          La curva del precio ideal
        </h3>

        {/* Outer relative canvas for absolute floats - height is compact on mobile */}
        <div className="w-full relative h-[105px] md:h-[180px] flex items-end">
          
          {/* SVG representation of Bell Curve */}
          <svg className="w-full h-full text-neutral-100 pl-10 pr-2 pb-4 md:pb-6" viewBox="0 0 340 160" preserveAspectRatio="none">
            {/* Left shaded grey region */}
            <path
              d="M 12,140 C 60,140 100,140 120,95 L 120,140 Z"
              fill="#f1f3f6"
            />
            {/* Right shaded grey region */}
            <path
              d="M 215,95 C 240,140 280,140 322,140 L 215,140 Z"
              fill="#f1f3f6"
            />
            {/* Central golden/amber shaded region */}
            <path
              d="M 120,141 L 120,95 C 135,60 150,40 167,40 C 185,40 200,60 215,95 L 215,141 Z"
              fill="#fdf3cb"
            />
            {/* The main elegant stroke */}
            <path
              d="M 12,140 C 100,140 125,40 167,40 C 210,40 235,140 322,140"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="2.5"
            />

            {/* Dash limit markers */}
            <line x1="120" y1="95" x2="120" y2="140" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="3,3" />
            <line x1="215" y1="95" x2="215" y2="140" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="3,3" />
            
            {/* Center yellow dash vertical */}
            <line x1="167" y1="40" x2="167" y2="140" stroke="#f8b500" strokeWidth="2" strokeDasharray="3,3" />

            {/* Custom axis lines directly rendered */}
            <line x1="12" y1="30" x2="12" y2="140" stroke="#cbd5e1" strokeWidth="1.2" />
            <line x1="12" y1="140" x2="330" y2="140" stroke="#cbd5e1" strokeWidth="1.2" />

            {/* Y axis ticks and descriptors */}
            <text x="-1" y="32" className="text-[9px] font-black fill-neutral-400">Alto</text>
            <text x="-90" y="5" className="text-[9px] font-black fill-neutral-400 tracking-wider uppercase" transform="rotate(-90)">Recomendado</text>
            <text x="-1" y="142" className="text-[9px] font-black fill-neutral-400">Bajo</text>

            {/* Highlighted dots on the curve */}
            <circle cx="85" cy="133" r="5.5" fill="#ef4444" stroke="white" strokeWidth="1.5" />
            <circle cx="255" cy="133" r="5.5" fill="#ef4444" stroke="white" strokeWidth="1.5" />
            
            {/* Gold center dot sitting exact on horizontal axis */}
            <circle cx="167" cy="140" r="6" fill="#f8b500" stroke="white" strokeWidth="1.5" />

            {/* Directed dashed pointers matching absolute coordinates */}
            <line x1="85" y1="133" x2="55" y2="92" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2" />
            <line x1="255" y1="133" x2="285" y2="92" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2" />
          </svg>

          {/* Absolute boxes overlaid with responsive percentage widths to prevent wrapping or overlap-clash */}
          <div className="absolute left-[2%] top-[2%] bg-white/95 border border-neutral-100 rounded-xl p-1 md:p-2.5 w-[44%] max-w-[120px] text-left shadow-3xs select-none">
            <div className="flex items-center gap-0.5 text-red-600 mb-0.5">
              <div className="w-3 h-3 rounded-full bg-red-100 flex items-center justify-center text-[7px] font-black flex-shrink-0">
                ↓
              </div>
              <span className="text-[7.5px] md:text-[9.5px] font-black uppercase tracking-wider whitespace-nowrap">Precio bajo</span>
            </div>
            <p className="text-[8px] md:text-[10.5px] font-extrabold text-[#0d162a] leading-tight">Pierdes dinero.</p>
          </div>

          <div className="absolute right-[2%] top-[2%] bg-white/95 border border-neutral-100 rounded-xl p-1 md:p-2.5 w-[44%] max-w-[120px] text-left shadow-3xs select-none">
            <div className="flex items-center gap-0.5 text-red-600 mb-0.5">
              <div className="w-3 h-3 rounded-full bg-red-100 flex items-center justify-center text-[7px] font-black flex-shrink-0">
                ↑
              </div>
              <span className="text-[7.5px] md:text-[9.5px] font-black uppercase tracking-wider whitespace-nowrap">Precio alto</span>
            </div>
            <p className="text-[8px] md:text-[10.5px] font-extrabold text-[#0d162a] leading-tight">Menos interesados.</p>
          </div>
        </div>

        {/* Central bottom price indicator */}
        <div className="text-center mt-1.5 md:mt-3 select-none flex-shrink-0">
          <span className="text-[10px] md:text-[13px] font-black text-[#f8b500] uppercase tracking-wide block">Precio ideal</span>
          <p className="text-[9px] md:text-[11.5px] text-neutral-500 font-extrabold leading-tight mt-0.5">
            Máximo interés, mejores ofertas y menor tiempo de venta.
          </p>
        </div>
      </div>

      {/* Estudio Legal Box - Full width clean border */}
      <div className="flex gap-2.5 p-2 md:p-3.5 bg-white rounded-xl md:rounded-2xl border border-neutral-100 mb-1.5 md:mb-4 shadow-3xs items-center flex-shrink-0">
        <div className="w-7 h-7 md:w-11 md:h-11 flex-shrink-0 bg-[#fdf3cb] rounded-full flex items-center justify-center text-[#0d162a] border border-amber-100/10">
          <FileText size={14} className="stroke-[2.5] md:w-5 md:h-5" />
        </div>
        <div className="text-left">
          <h4 className="text-[11px] md:text-sm font-extrabold text-[#0d162a] leading-none">Estudio legal</h4>
          <p className="text-[9.5px] md:text-[11px] text-neutral-500 mt-0.5 leading-snug font-bold">
            Revisamos la documentación y la situación legal de tu propiedad para asegurar una venta segura.
          </p>
        </div>
      </div>

      {/* Callout yellow banner */}
      <div className="p-2 md:p-3 bg-[#fdf3cb]/40 border border-amber-200/20 rounded-xl md:rounded-2xl flex gap-2.5 w-full mt-auto mb-2 items-center flex-shrink-0">
        <div className="w-6.5 h-6.5 flex-shrink-0 bg-[#fdf3cb] rounded-full flex items-center justify-center text-[#0d162a]">
          <Lightbulb size={13} className="stroke-[2.5] md:w-4.5 md:h-4.5" />
        </div>
        <p className="text-[9.5px] md:text-[11px] text-[#0d162a] font-bold leading-tight text-left">
          Un <strong>precio correcto desde el inicio</strong> es clave para vender mejor y más rápido.
        </p>
      </div>

      <NavigationFooter onBack={onBack} onNext={onNext} />
    </motion.div>
  );
}

// --------------------- STEP 2: MATERIAL AUDIOVISUAL ---------------------
export function MethodStep2({ onBack, onNext }: { onBack: () => void; onNext: () => void }) {
  const mediaItems = [
    {
      title: 'Fotografía profesional',
      img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=350',
      icon: (
        <svg className="w-3.5 h-3.5 md:w-5 md:h-5 text-neutral-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      )
    },
    {
      title: 'Video inmobiliario',
      img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=350',
      icon: (
        <svg className="w-3.5 h-3.5 md:w-5 md:h-5 text-neutral-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 7l-7 5 7 5V7z" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      )
    },
    {
      title: 'Tomas drone',
      img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=350',
      icon: (
        <svg className="w-3.5 h-3.5 md:w-5 md:h-5 text-neutral-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="11" r="2" />
          <path d="M12 8V4M12 14v4" />
          <path d="M5 11h14" />
          <path d="M7 6l1.5 1.5M17 6l-1.5 1.5M7 16l1.5-1.5M17 16l-1.5-1.5" />
          <path d="M5 4h4M15 4h4M5 18h4M15 18h4" />
        </svg>
      )
    },
    {
      title: 'Recorrido 360°',
      img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=350',
      icon: (
        <svg className="w-3.5 h-3.5 md:w-5 md:h-5 text-neutral-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
          <path d="M21 3v5h-5" />
          <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
          <path d="M3 21v-5h5" />
        </svg>
      )
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col flex-grow w-full max-w-xl mx-auto px-4 md:px-5 py-2 md:py-3 bg-white h-full justify-between overflow-hidden"
    >
      <div className="flex-shrink-0">
        <h2 className="text-lg md:text-2xl font-black text-[#0d162a] tracking-tight text-left leading-none mb-1 md:mb-2">
          2. Material audiovisual profesional
        </h2>
        <p className="text-[10px] md:text-xs text-neutral-500 text-left mb-2 md:mb-4 leading-relaxed font-bold max-w-md">
          Creamos contenido que resalta lo mejor de tu propiedad y atrae a más compradores desde el primer vistazo.
        </p>
      </div>

      {/* Modern 4-column horizontal layout matching the mockup exactly */}
      <div className="grid grid-cols-4 gap-1.5 md:gap-3 mb-2 md:mb-4 flex-grow max-h-[140px] md:max-h-[220px]">
        {mediaItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-neutral-100 rounded-xl md:rounded-2xl shadow-3xs flex flex-col justify-between overflow-hidden text-center h-full hover:border-amber-200 transition-colors"
          >
            {/* Top section: badge circle icon & title */}
            <div className="p-1 px-1.5 pt-1.5 md:p-3 flex flex-col items-center">
              <div className="w-6 h-6 md:w-9 md:h-9 rounded-full bg-[#fdf2b3] flex items-center justify-center text-neutral-800 flex-shrink-0 mb-0.5 border border-amber-200/50">
                {item.icon}
              </div>
              <span className="text-[7px] md:text-xs font-black text-[#0d162a] tracking-tight leading-tight block select-none h-4 md:h-7 flex items-center justify-center">
                {item.title}
              </span>
            </div>

            {/* Bottom section: photo */}
            <div className="relative aspect-[3/4] md:aspect-[3/4] w-full overflow-hidden mt-auto">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover rounded-t-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/5" />

              {/* Video play overlay icon */}
              {item.title === 'Video inmobiliario' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                  <div className="w-4 h-4 md:w-8 md:h-8 rounded-full bg-white/20 backdrop-blur-3xs border border-white/60 flex items-center justify-center text-white shadow-sm">
                    <svg className="w-2 h-2 md:w-4 md:h-4 fill-white text-white ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              )}

              {/* VR 360 overlay icon */}
              {item.title === 'Recorrido 360°' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                  <div className="relative flex items-center justify-center text-white">
                    <svg className="w-5 h-5 md:w-10 md:h-10 text-white drop-shadow-md stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                      <path d="M21 3v5h-5" />
                      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
                      <path d="M3 21v-5h5" />
                    </svg>
                    <span className="text-[6px] md:text-xs font-extrabold absolute tracking-tighter drop-shadow-md select-none mt-0.5">360°</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Yellow stats counter container with filled bar-chart vector */}
      <div className="p-2 md:p-3.5 bg-[#fef7da]/70 border border-amber-200/30 rounded-2xl flex items-center gap-3 w-full shadow-3xs mb-2 md:mb-4 flex-shrink-0">
        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#f8b500] flex-shrink-0 flex items-center justify-center text-[#0d162a] border border-white shadow-3xs">
          <svg className="w-4 h-4 md:w-6 md:h-6 text-[#0d162a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="14" width="3" height="6" rx="0.5" fill="currentColor" stroke="none" />
            <rect x="9" y="10" width="3" height="10" rx="0.5" fill="currentColor" stroke="none" />
            <rect x="15" y="5" width="3" height="15" rx="0.5" fill="currentColor" stroke="none" />
            <path d="M4 12c4-4 8-8 15-8M14 4h5v5" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <h4 className="text-[10px] md:text-sm font-black text-[#0d162a] leading-tight select-none">
            Más visualizaciones, más interés, más ofertas.
          </h4>
          <p className="text-[9px] md:text-xs text-neutral-600 leading-normal font-semibold mt-0.5">
            El contenido profesional aumenta hasta en un <strong className="text-neutral-800 font-extrabold">80%</strong> la atención de compradores potenciales.
          </p>
        </div>
      </div>

      {/* Where is it published? */}
      <div className="bg-white rounded-xl py-1 mb-2.5 select-none flex-shrink-0">
        <h4 className="text-center text-[10px] md:text-xs font-black text-[#0d162a] mb-1.5">
          ¿Dónde se publica tu propiedad?
        </h4>

        {/* 5 column platform cards matching the mockup layout precisely */}
        <div className="grid grid-cols-5 gap-1 md:gap-2 mb-1">
          {/* Card 1: Portales */}
          <div className="bg-white border border-neutral-100 rounded-xl p-1 md:p-2 flex flex-col items-center justify-between text-center shadow-3xs min-h-[50px] md:min-h-[80px]">
            <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-green-50 border border-green-200 text-green-600 flex items-center justify-center flex-shrink-0">
              <svg className="w-3.5 h-3.5 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <span className="text-[5.5px] md:text-[9px] font-black text-neutral-700 leading-none mt-0.5">
              Portales
            </span>
          </div>

          {/* Card 2: Instagram */}
          <div className="bg-white border border-neutral-100 rounded-xl p-1 md:p-2 flex flex-col items-center justify-between text-center shadow-3xs min-h-[50px] md:min-h-[80px]">
            <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-pink-50 border border-pink-150 text-pink-600 flex items-center justify-center flex-shrink-0">
              <svg className="w-3.5 h-3.5 md:w-5 md:h-5 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <span className="text-[5.5px] md:text-[9px] font-black text-neutral-700 leading-none mt-0.5">
              Instagram
            </span>
          </div>

          {/* Card 3: Facebook */}
          <div className="bg-white border border-neutral-100 rounded-xl p-1 md:p-2 flex flex-col items-center justify-between text-center shadow-3xs min-h-[50px] md:min-h-[80px]">
            <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-blue-50 border border-blue-150 text-blue-600 flex items-center justify-center flex-shrink-0">
              <svg className="w-3.5 h-3.5 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
              </svg>
            </div>
            <span className="text-[5.5px] md:text-[9px] font-black text-neutral-700 leading-none mt-0.5">
              Facebook
            </span>
          </div>

          {/* Card 4: TikTok */}
          <div className="bg-white border border-neutral-100 rounded-xl p-1 md:p-2 flex flex-col items-center justify-between text-center shadow-3xs min-h-[50px] md:min-h-[80px]">
            <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-neutral-900 border border-neutral-950 flex items-center justify-center text-white flex-shrink-0">
              <svg className="w-3 h-3 md:w-4.5 md:h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1-.01 2.92 0 5.85-.01 8.77-.02 1.91-.51 3.89-1.78 5.3-1.48 1.75-3.86 2.63-6.14 2.51-2.43-.05-4.88-1.18-6.19-3.23-1.44-2.18-1.52-5.25-.35-7.58C3.51 11.36 5.86 9.61 8.52 9.5c.03.8.01 1.6.01 2.4-1.28.11-2.61.76-3.26 1.89-.92 1.54-.7 3.73.54 5.03 1.17 1.28 3.19 1.63 4.5 1.05 1.48-.62 2.22-2.31 2.22-3.89V0c0 .02.01.02.01.02z" />
              </svg>
            </div>
            <span className="text-[5.5px] md:text-[9px] font-black text-neutral-700 leading-none mt-0.5">
              TikTok
            </span>
          </div>

          {/* Card 5: Google */}
          <div className="bg-white border border-neutral-100 rounded-xl p-1 md:p-2 flex flex-col items-center justify-between text-center shadow-3xs min-h-[50px] md:min-h-[80px]">
            <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3 md:w-4.5 md:h-4.5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22-.03-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  fill="#EA4335"
                />
              </svg>
            </div>
            <span className="text-[5.5px] md:text-[9px] font-black text-neutral-700 leading-none mt-0.5">
              Google
            </span>
          </div>
        </div>
      </div>

      <NavigationFooter onBack={onBack} onNext={onNext} />
    </motion.div>
  );
}

// --------------------- STEP 3: MAXIMA EXPOSICIÓN ---------------------
export function MethodStep3({ onBack, onNext }: { onBack: () => void; onNext: () => void }) {
  const steps = [
    {
      title: '+700 mil seguidores',
      body: 'La comunidad inmobiliaria más grande del país.',
      icon: Users
    },
    {
      title: 'Campañas digitales',
      body: 'Promoción dirigida al comprador ideal.',
      icon: Target
    },
    {
      title: '12 portales inmobiliarios',
      body: 'Presencia simultánea en los principales portales.',
      icon: Globe
    },
    {
      title: 'Más consultas',
      body: 'Atraemos más interesados a tu propiedad.',
      icon: MessageSquare
    },
    {
      title: 'Más visitas',
      body: 'Convertimos el interés en visitas reales.',
      icon: Eye
    },
    {
      title: 'Más oportunidades de venta',
      body: 'Más alcance, más compradores potenciales.',
      icon: TrendingUp
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col flex-grow w-full max-w-xl mx-auto px-4 md:px-5 py-2 md:py-3 bg-white h-full justify-between overflow-hidden"
    >
      <div className="flex-shrink-0">
        <h2 className="text-lg md:text-2xl font-black text-[#0d162a] tracking-tight text-left leading-tight mb-1 md:mb-2">
          3. Alcance que nadie más puede ofrecer
        </h2>
        <p className="text-[10px] md:text-xs text-neutral-500 text-left mb-2 md:mb-4 leading-relaxed font-bold max-w-md">
          Tenemos la comunidad inmobiliaria más grande del país para que tu propiedad llegue más lejos.
        </p>
      </div>

      {/* Styled connection vertical timeline matching mockup exactly */}
      <div className="relative border border-neutral-100 rounded-2xl md:rounded-3xl p-3 md:p-6 mb-2 bg-white w-full shadow-3xs flex-grow flex flex-col justify-center">
        {/* Timeline Line ending exact at center of first/last items */}
        <div className="absolute left-[24px] md:left-[44px] top-[24px] bottom-[24px] md:top-[44px] md:bottom-[44px] w-[1px] bg-neutral-200" />

        <div className="flex flex-col gap-2 md:gap-5 justify-between h-full">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative flex items-center gap-2.5 md:gap-5 flex-1 max-h-[36px] md:max-h-none">
                {/* Yellow circle badge */}
                <div className="relative z-10 w-6.5 h-6.5 md:w-10 md:h-10 rounded-full bg-[#fdf2b3] flex items-center justify-center text-neutral-800 flex-shrink-0 border border-amber-200/50 shadow-3xs">
                  <Icon className="w-3.5 h-3.5 md:w-5 md:h-5 stroke-[2.2] text-neutral-800" />
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0 text-left">
                  <h4 className="text-[10px] md:text-sm font-black text-[#0d162a] tracking-tight leading-none mb-0.5 select-none">
                    {step.title}
                  </h4>
                  <p className="text-[8.5px] md:text-xs text-neutral-500 font-semibold leading-none select-none">
                    {step.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Yellow rocket banner */}
      <div className="p-2 md:p-3.5 bg-[#fef7da]/70 border border-amber-200/30 rounded-xl md:rounded-2xl flex items-center gap-2.5 w-full shadow-3xs mt-auto mb-2 select-none flex-shrink-0">
        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#f8b500] flex-shrink-0 flex items-center justify-center text-[#0d162a] border border-white shadow-3xs">
          <Rocket className="w-4 h-4 md:w-6 md:h-6 text-[#0d162a] fill-[#0d162a] stroke-[1.2]" />
        </div>
        <div className="text-left">
          <p className="text-[10.5px] md:text-[13px] font-black text-[#0d162a] leading-tight select-none">
            Tu propiedad merece <span className="text-[#f8b500]">más visibilidad</span> que una publicación tradicional.
          </p>
        </div>
      </div>

      <NavigationFooter onBack={onBack} onNext={onNext} />
    </motion.div>
  );
}

// --------------------- STEP 4: RED COMERCIAL DE AGENTES ---------------------
export function MethodStep4({ onBack, onNext }: { onBack: () => void; onNext: () => void }) {
  const agentFlow = [
    {
      title: 'IA comercial disponible 24/7',
      body: 'Responde consultas y califica interesados al instante.',
      icon: Bot
    },
    {
      title: 'Coordinación de visitas',
      body: 'Organizamos y confirmamos visitas con interesados calificados.',
      icon: Home
    },
    {
      title: 'Negociación de ofertas',
      body: 'Buscamos el mejor acuerdo para ambas partes.',
      icon: Handshake
    },
    {
      title: 'Acompañamiento integral',
      body: 'Acompañamiento legal, contable y comercial hasta la entrega.',
      icon: Star
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col flex-grow w-full max-w-xl mx-auto px-4 md:px-5 py-2 md:py-3 bg-white h-full justify-between overflow-hidden"
    >
      <div className="flex-shrink-0">
        <h2 className="text-lg md:text-2xl font-black text-[#0d162a] tracking-tight text-left leading-tight mb-1 md:mb-2">
          4. Tu propiedad no será gestionada por una sola persona
        </h2>
        <p className="text-[10px] md:text-xs text-neutral-500 text-left mb-2 md:mb-4 leading-relaxed font-bold max-w-md">
          Contamos con una red comercial, tecnológica y humana trabajando para generar más oportunidades de venta.
        </p>
      </div>

      {/* Bento badge section - Dual Column Cream Card */}
      <div className="bg-[#faf6f0]/50 border border-neutral-100 rounded-2xl p-2 md:p-4 flex items-center justify-around select-none mb-2 md:mb-4 shadow-3xs flex-shrink-0">
        {/* Left Column: Honne agents */}
        <div className="flex items-center gap-2 md:gap-3 flex-1 justify-center">
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#fdf2b3] flex items-center justify-center text-neutral-800 flex-shrink-0 border border-amber-200/50">
            <Users size={16} className="stroke-[2.2] text-[#0d162a] md:w-5 md:h-5" />
          </div>
          <div className="text-left">
            <span className="text-base md:text-xl font-black text-[#0d162a] block leading-none">+50</span>
            <span className="text-[9px] md:text-xs text-neutral-500 font-bold block mt-0.5 whitespace-nowrap">agentes Honne</span>
          </div>
        </div>

        {/* Vertical thin gray divider */}
        <div className="w-[1px] bg-neutral-200/60 self-stretch my-1 mx-1.5" />

        {/* Right Column: External agents */}
        <div className="flex items-center gap-2 md:gap-3 flex-1 justify-center">
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#fdf2b3] flex items-center justify-center text-neutral-800 flex-shrink-0 border border-amber-200/50">
            <Globe size={16} className="stroke-[2.2] text-[#0d162a] md:w-5 md:h-5" />
          </div>
          <div className="text-left">
            <span className="text-base md:text-xl font-black text-[#0d162a] block leading-none">+10,000</span>
            <span className="text-[9px] md:text-xs text-neutral-500 font-bold block mt-0.5 whitespace-nowrap">agentes externos</span>
          </div>
        </div>
      </div>

      {/* Connected arrows flow chart - flex grow scroll free */}
      <div className="flex flex-col mb-2 md:mb-4 pl-1.5 flex-grow justify-center">
        {agentFlow.map((flow, idx) => {
          const Icon = flow.icon;
          return (
            <div key={idx} className="flex flex-col">
              <div className="flex gap-2.5 md:gap-4 items-center">
                {/* Yellow circle badge */}
                <div className="w-7 h-7 md:w-11 md:h-11 rounded-full bg-[#fdf2b3] flex items-center justify-center text-neutral-800 flex-shrink-0 border border-amber-200/50 shadow-3xs">
                  <Icon className="w-4 h-4 md:w-5.5 md:h-5.5 stroke-[2.2] text-neutral-800" />
                </div>
                <div className="text-left">
                  <h4 className="text-[10px] md:text-sm font-black text-[#0d162a] leading-tight select-none">
                    {flow.title}
                  </h4>
                  <p className="text-[8.5px] md:text-xs text-neutral-500 font-bold select-none mt-0.5 leading-none">
                    {flow.body}
                  </p>
                </div>
              </div>
              {idx < agentFlow.length - 1 && (
                <div className="w-7 md:w-11 flex justify-center text-neutral-400 my-0.5 md:my-1 select-none">
                  <svg className="w-2.5 h-2.5 text-neutral-400 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Yellow stats counter container with filled bar-chart vector */}
      <div className="p-2 md:p-3.5 bg-[#fef7da]/70 border border-amber-200/30 rounded-xl md:rounded-2xl flex items-center gap-3 w-full shadow-3xs mt-auto mb-2 select-none flex-shrink-0">
        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#f8b500] flex-shrink-0 flex items-center justify-center text-[#0d162a] border border-white shadow-3xs">
          <svg className="w-4 h-4 md:w-6 md:h-6 text-[#0d162a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="14" width="3" height="6" rx="0.5" fill="currentColor" stroke="none" />
            <rect x="9" y="10" width="3" height="10" rx="0.5" fill="currentColor" stroke="none" />
            <rect x="15" y="5" width="3" height="15" rx="0.5" fill="currentColor" stroke="none" />
            <path d="M4 12c4-4 8-8 15-8M14 4h5v5" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="flex-1 min-w-0 text-left">
          <p className="text-[10px] md:text-sm font-black text-[#0d162a] leading-tight select-none">
            Más personas <span className="text-[#f8b500] font-black">promoviendo</span> tu propiedad.
          </p>
          <p className="text-[9px] md:text-xs text-neutral-500 font-bold leading-normal mt-0.5">
            Multiplicamos por mil las probabilidades de encontrar al comprador ideal.
          </p>
        </div>
      </div>

      <NavigationFooter onBack={onBack} onNext={onNext} />
    </motion.div>
  );
}

// --------------------- STEP 5: DECISION / CALL TO ACTION ---------------------
export function MethodDecision({ onBack, onNext }: { onBack: () => void; onNext: () => void }) {
  const properties = [
    'Precio correcto y propiedad en regla',
    'Material audiovisual profesional',
    'Alcance que nadie más puede igualar',
    'Gestión comercial integral'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="flex flex-col flex-grow w-full max-w-xl mx-auto px-4 md:px-6 py-1.5 md:py-3.5 bg-white h-full justify-between overflow-hidden"
    >
      {/* Big yellow circle badge with a check marked house inside matching screenshot */}
      <div className="mx-auto w-10 h-10 md:w-[72px] md:h-[72px] rounded-full bg-[#f8b500] flex items-center justify-center border-0 shadow-3xs mb-1.5 md:mb-4 select-none flex-shrink-0 text-neutral-900">
        <svg className="w-5.5 h-5.5 md:w-9 md:h-9 text-[#0d162a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10.5V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V10.5M2 11l10-8 10 8" />
          <path d="m9 13.5 2 2 4-4" strokeWidth="3" />
        </svg>
      </div>

      <h1 className="text-base md:text-[22px] font-black text-[#0d162a] tracking-tight text-center leading-tight mb-1 md:mb-2 max-w-sm mx-auto">
        ¿Te gustaría comercializar tu propiedad bajo el <span className="text-[#f8b500]">Método Honne?</span>
      </h1>

      <p className="text-[10px] md:text-xs text-neutral-500 font-bold text-center mb-1.5 md:mb-4 select-none">
        Ya conoces cómo trabajamos:
      </p>

      {/* 4 vertically stacked cream-colored checklist cards */}
      <div className="flex flex-col gap-1.5 md:gap-2.5 w-full mb-2 md:mb-4">
        {properties.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 px-3 py-2 md:py-3 bg-[#faf6f0]/50 rounded-lg md:rounded-xl border border-neutral-100 shadow-3xs"
          >
            {/* Golden circle badge with black tick */}
            <div className="w-5.5 h-5.5 md:w-8 md:h-8 rounded-full bg-[#f8b500] flex items-center justify-center text-neutral-900 shadow-3xs flex-shrink-0">
              <Check className="w-3.5 h-3.5 md:w-4.5 md:h-4.5 stroke-[4.5] text-[#0d162a]" />
            </div>
            <p className="text-[10.5px] md:text-sm font-black text-neutral-800 leading-none">
              {item}
            </p>
          </div>
        ))}
      </div>

      {/* Custom thin golden line divider */}
      <div className="w-10 h-[1.5px] bg-[#f8b500]/40 rounded-full mx-auto my-1.5 md:my-4 select-none flex-shrink-0" />

      {/* Team Assessment section details */}
      <div className="text-center max-w-sm mx-auto select-none mb-3 md:mb-6">
        {/* Custom yellow/orange double persona with chat bubble overlay SVG */}
        <svg className="w-7 h-7 md:w-11 md:h-11 text-[#f8b500] mx-auto mb-1.5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Left Person outline */}
          <path d="M16 28C19.3137 28 22 30.6863 22 34V38H10V34C10 30.6863 12.6863 28 16 28Z" stroke="#f8b500" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="16" cy="21" r="4.5" stroke="#f8b500" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Right Person outline */}
          <path d="M32 28C35.3137 28 38 30.6863 38 34V38H26V34C26 30.6863 28.6863 28 32 28Z" stroke="#f8b500" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="32" cy="21" r="4.5" stroke="#f8b500" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Chat bubble overlay top right */}
          <path d="M29 15H35C37.2091 15 39 13.2091 39 11C39 8.79086 37.2091 7 35 7H29C26.7909 7 25 8.79086 25 11C25 11.8564 25.2688 12.6501 25.7265 13.3033L24.5 16.5L27.6967 15.2735C28.0967 15.3934 28.5217 15.45 28.95 15.45L29 15Z" stroke="#f8b500" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Dots inside bubble */}
          <circle cx="29" cy="11" r="0.75" fill="#f8b500"/>
          <circle cx="32" cy="11" r="0.75" fill="#f8b500"/>
          <circle cx="35" cy="11" r="0.75" fill="#f8b500"/>
        </svg>

        <p className="text-[10px] md:text-xs text-neutral-600 leading-normal font-bold px-2">
          Ahora queremos conocer un poco más sobre tu propiedad para <span className="font-black text-[#0d162a]">evaluar si podemos ayudarte.</span>
        </p>
      </div>

      {/* Large yellow CTA action button */}
      <div className="w-full select-none flex-shrink-0">
        <button
          onClick={onNext}
          className="w-full bg-[#f8b500] hover:bg-[#e0a300] text-neutral-900 font-extrabold h-10 px-4 rounded-xl transition-all duration-200 shadow-md flex items-center justify-center gap-1.5 group tracking-wide uppercase text-[10.5px] md:text-xs cursor-pointer border border-[#f8b500] select-none font-black"
          id="btn-evaluar-propiedad"
        >
          <span>Quiero que evalúen mi propiedad</span>
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform stroke-[2.5] text-neutral-900" />
        </button>
      </div>

      {/* Custom matching footer: Back button left, contacts right, fine print centered */}
      <div className="flex flex-col mt-auto pt-2.5 md:pt-4 w-full select-none border-t border-neutral-100/40 flex-shrink-0">
        <div className="flex items-center justify-between w-full h-9 mb-1">
          {/* Back button */}
          <button
            onClick={onBack}
            className="flex items-center justify-center gap-1.5 px-3 h-8.5 rounded-lg border border-neutral-200 text-[#0d162a] bg-white hover:bg-neutral-50 active:bg-neutral-100 font-extrabold transition-all text-[10px] uppercase tracking-wide cursor-pointer select-none"
            id="btn-nav-back"
          >
            <span className="text-xs">←</span>
            <span>Anterior</span>
          </button>

          {/* Phone and Email custom contacts layout matching mock-up */}
          <div className="flex items-center gap-1.5 text-neutral-400">
            <a href="tel:+" className="hover:text-neutral-700 transition-colors cursor-pointer p-1">
              <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <span className="text-neutral-300 text-[10px] select-none">|</span>
            <a href="mailto:hola@honne.com" className="hover:text-neutral-700 transition-colors cursor-pointer p-1">
              <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Gray fine print copyright line centered */}
        <p className="text-[8px] text-neutral-400 font-bold tracking-normal text-center select-none leading-none">
          © 2018 - 2024 HONNE INMOBILIARIA
        </p>
      </div>
    </motion.div>
  );
}

