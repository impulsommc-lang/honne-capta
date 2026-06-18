import {
  Tag,
  Camera,
  Megaphone,
  Handshake,
  ArrowRight,
  FileText,
  PlayCircle,
  Users,
  Globe,
  User,
  Cpu
} from 'lucide-react';
import { motion } from 'motion/react';

interface MethodIntroProps {
  onNext: () => void;
}

export function MethodIntro({ onNext }: MethodIntroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col flex-grow w-full max-w-xl mx-auto px-4 md:px-5 py-1.5 md:py-2 bg-white h-full justify-between overflow-hidden"
    >
      {/* Top Section: Side-by-Side Hero */}
      <div className="relative flex justify-between gap-2 md:gap-2.5 mb-1.5 md:mb-2 pt-1 md:pt-2 items-center flex-shrink-0">
        {/* Left side text */}
        <div className="w-[58%] flex flex-col">
          <h1 className="text-base md:text-2xl font-black text-[#0d162a] tracking-tight leading-tight mb-1.5 md:mb-2 text-left">
            ¿Quieres vender <br />
            tu propiedad en <br />
            <span className="text-[#f8b500]">Lima Top o Moderna?</span>
          </h1>
          <p className="text-[10px] md:text-[12px] text-neutral-500 font-bold leading-normal max-w-[210px] text-left">
            Conoce los 4 pasos que aplicamos para vender tu propiedad mejor y más rápido.
          </p>
        </div>

        {/* Right side cutout image */}
        <div className="w-[42%] h-[110px] md:h-[170px] rounded-bl-[50px] md:rounded-bl-[85px] overflow-hidden shadow-sm border border-neutral-100 flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600"
            alt="Luxury apartment in Lima"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Title Divider bar */}
      <div className="flex items-center gap-2.5 justify-center my-2 md:my-4 select-none flex-shrink-0">
        <div className="w-10 h-[1.5px] bg-[#f8b500] rounded-full"></div>
        <span className="text-[9px] md:text-[11px] font-black tracking-widest text-[#0d162a] uppercase">
          Nuestro método en 4 pasos
        </span>
        <div className="w-10 h-[1.5px] bg-[#f8b500] rounded-full"></div>
      </div>

      {/* 4 Steps split-cards container */}
      <div className="space-y-2 md:space-y-3 mb-2.5 md:mb-6 flex-grow flex flex-col justify-between">
        
        {/* Step 1: Precio correcto */}
        <div className="bg-white rounded-xl md:rounded-2xl border border-neutral-100 flex items-center p-2.5 md:p-3 shadow-3xs gap-2 md:gap-3 hover:border-neutral-200 transition-colors flex-grow h-full min-h-[50px] md:min-h-[64px]" id="step-preview-1">
          {/* Left partition */}
          <div className="flex items-center gap-2 md:gap-3 w-[45%] flex-shrink-0 pr-1.5 border-r border-neutral-100 h-9 md:h-12">
            <div className="w-8 h-8 md:w-11 md:h-11 rounded-full bg-[#fdf3cb] flex items-center justify-center text-[#0d162a] flex-shrink-0 border border-amber-200/20">
              <Tag size={14} className="stroke-[2.5] md:w-5 md:h-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-[#0d162a] text-[10.5px] md:text-sm leading-none md:leading-tight">
                Precio
              </span>
              <span className="font-extrabold text-[#0d162a] text-[10.5px] md:text-sm leading-none md:leading-tight mt-0.5">
                correcto
              </span>
            </div>
          </div>
          {/* Right partition */}
          <div className="flex-1 pl-1.5 flex items-center gap-1.5 md:gap-2.5">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#fdf3cb]/75 flex items-center justify-center text-[#0d162a] flex-shrink-0">
              <FileText size={11} className="stroke-[2] md:w-4.5 md:h-4.5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[9px] md:text-[11px] text-neutral-500 font-extrabold leading-tight">
                Análisis de mercado
              </span>
              <span className="text-[9px] md:text-[11px] text-neutral-500 font-extrabold leading-tight mt-0.5">
                y revisión legal
              </span>
            </div>
          </div>
        </div>

        {/* Step 2: Material audiovisual profesional */}
        <div className="bg-white rounded-xl md:rounded-2xl border border-neutral-100 flex items-center p-2.5 md:p-3 shadow-3xs gap-2 md:gap-3 hover:border-neutral-200 transition-colors flex-grow h-full min-h-[50px] md:min-h-[64px]" id="step-preview-2">
          {/* Left partition */}
          <div className="flex items-center gap-2 md:gap-3 w-[45%] flex-shrink-0 pr-1.5 border-r border-neutral-100 h-9 md:h-12">
            <div className="w-8 h-8 md:w-11 md:h-11 rounded-full bg-[#fdf3cb] flex items-center justify-center text-[#0d162a] flex-shrink-0 border border-amber-200/20">
              <Camera size={14} className="stroke-[2.5] md:w-5 md:h-5" />
            </div>
            <div className="flex flex-col text-left justify-center">
              <span className="font-extrabold text-[#0d162a] text-[10.5px] md:text-sm leading-none md:leading-tight">
                Material
              </span>
              <span className="font-extrabold text-[#0d162a] text-[10.5px] md:text-sm leading-none md:leading-tight mt-0.5">
                audiovisual
              </span>
            </div>
          </div>
          {/* Right partition */}
          <div className="flex-1 pl-1.5 flex items-center gap-1.5 md:gap-2.5">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#fdf3cb]/75 flex items-center justify-center text-[#0d162a] flex-shrink-0">
              <PlayCircle size={11} className="stroke-[2] md:w-4.5 md:h-4.5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[9px] md:text-[11px] text-neutral-500 font-extrabold leading-tight">
                Fotos, videos, dron
              </span>
              <span className="text-[9px] md:text-[11px] text-neutral-500 font-extrabold leading-tight mt-0.5">
                y recorridos 360°
              </span>
            </div>
          </div>
        </div>

        {/* Step 3: Máxima exposición */}
        <div className="bg-white rounded-xl md:rounded-2xl border border-neutral-100 flex items-center p-2.5 md:p-3 shadow-3xs gap-2 md:gap-3 hover:border-neutral-200 transition-colors flex-grow h-full min-h-[50px] md:min-h-[64px]" id="step-preview-3">
          {/* Left partition */}
          <div className="flex items-center gap-2 md:gap-3 w-[45%] flex-shrink-0 pr-1.5 border-r border-neutral-100 h-9 md:h-12">
            <div className="w-8 h-8 md:w-11 md:h-11 rounded-full bg-[#fdf3cb] flex items-center justify-center text-[#0d162a] flex-shrink-0 border border-amber-200/20">
              <Megaphone size={14} className="stroke-[2.5] md:w-5 md:h-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-[#0d162a] text-[10.5px] md:text-sm leading-none md:leading-tight">
                Máxima
              </span>
              <span className="font-extrabold text-[#0d162a] text-[10.5px] md:text-sm leading-none md:leading-tight mt-0.5">
                exposición
              </span>
            </div>
          </div>
          {/* Right partition */}
          <div className="flex-1 pl-1.5 flex flex-col gap-1 justify-center">
            {/* Row 1 */}
            <div className="flex items-center gap-1.5">
              <div className="w-4.5 h-4.5 md:w-6 md:h-6 rounded-full bg-[#fdf3cb]/75 flex items-center justify-center text-[#0d162a] flex-shrink-0">
                <Users size={9} className="stroke-[2.5]" />
              </div>
              <p className="text-[8.5px] md:text-[10.5px] text-neutral-500 leading-none text-left">
                <strong className="font-black text-neutral-800">+700 mil</strong> seguidores
              </p>
            </div>
            {/* Row 2 */}
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className="w-4.5 h-4.5 md:w-6 md:h-6 rounded-full bg-[#fdf3cb]/75 flex items-center justify-center text-[#0d162a] flex-shrink-0">
                <Globe size={9} className="stroke-[2.5]" />
              </div>
              <p className="text-[8.5px] md:text-[10.5px] text-neutral-500 leading-none text-left">
                <strong className="font-black text-neutral-800">12 portales</strong> de venta
              </p>
            </div>
          </div>
        </div>

        {/* Step 4: Gestión comercial completa */}
        <div className="bg-white rounded-xl md:rounded-2xl border border-neutral-100 flex items-center p-2.5 md:p-3 shadow-3xs gap-2 md:gap-3 hover:border-neutral-200 transition-colors flex-grow h-full min-h-[50px] md:min-h-[64px]" id="step-preview-4">
          {/* Left partition */}
          <div className="flex items-center gap-2 md:gap-3 w-[45%] flex-shrink-0 pr-1.5 border-r border-neutral-100 h-9 md:h-12">
            <div className="w-8 h-8 md:w-11 md:h-11 rounded-full bg-[#fdf3cb] flex items-center justify-center text-[#0d162a] flex-shrink-0 border border-amber-200/20">
              <Handshake size={14} className="stroke-[2.5] md:w-5 md:h-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-[#0d162a] text-[10.5px] md:text-sm leading-none md:leading-tight">
                Gestión
              </span>
              <span className="font-extrabold text-[#0d162a] text-[10.5px] md:text-sm leading-none md:leading-tight mt-0.5">
                integral
              </span>
            </div>
          </div>
          {/* Right partition */}
          <div className="flex-1 pl-1.5 flex flex-col gap-1.5 justify-center">
            {/* Row 1 */}
            <div className="flex items-center gap-1.5">
              <div className="w-4.5 h-4.5 md:w-6 md:h-6 rounded-full bg-[#fdf3cb]/75 flex items-center justify-center text-[#0d162a] flex-shrink-0">
                <User size={9} className="stroke-[2.5]" />
              </div>
              <p className="text-[8.5px] md:text-[10.5px] text-neutral-500 leading-none text-left">
                <strong className="font-black text-neutral-800">+50</strong> agentes Honne
              </p>
            </div>
            {/* Row 2 */}
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className="w-4.5 h-4.5 md:w-6 md:h-6 rounded-full bg-[#fdf3cb]/75 flex items-center justify-center text-[#0d162a] flex-shrink-0">
                <Cpu size={9} className="stroke-[2.5]" />
              </div>
              <p className="text-[8.5px] md:text-[10.5px] text-[#737373] leading-none text-left">
                Tecnología e IA activa
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Button Action */}
      <div className="mt-auto pt-1 md:pt-2 flex-shrink-0">
        <button
          onClick={onNext}
          className="w-full bg-[#0d162a] hover:bg-neutral-800 text-[#f8b500] font-black py-3 px-6 rounded-xl transition-all duration-200 shadow-md flex items-center justify-center gap-2 group tracking-widest uppercase text-xs cursor-pointer border border-[#0d162a] mb-0.5 md:mb-1 h-11 md:h-13"
          id="btn-ver-como-funcione"
        >
          <span>VER CÓMO FUNCIONA</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform stroke-[3]" />
        </button>
      </div>
    </motion.div>
  );
}
