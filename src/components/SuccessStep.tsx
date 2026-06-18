import { Check, Headphones, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { QuizAnswers } from '../types';

interface SuccessStepProps {
  answers: QuizAnswers;
  onFinish: () => void;
  onBack: () => void;
}

export function SuccessStep({ answers, onFinish, onBack }: SuccessStepProps) {
  // Let's log the details to the console to ensure they are captured securely!
  console.log('🎉 Lead capturado exitosamente en Honne Inmobiliaria:', {
    timestamp: new Date().toISOString(),
    details: answers
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col flex-grow w-full max-w-xl mx-auto px-4 py-2 md:py-6 text-center animate-fade-in h-full justify-between overflow-hidden"
    >
      {/* Icon check mark bubble centered */}
      <div className="mx-auto w-10 h-10 md:w-16 md:h-16 rounded-full bg-honne-yellow flex items-center justify-center text-neutral-900 border-2 border-white shadow-3xs mb-2 md:mb-6 mt-1 md:mt-3 flex-shrink-0">
        <Check className="stroke-[3.5] w-5 h-5 md:w-8 md:h-8" />
      </div>

      <h1 className="text-xl md:text-3xl font-black text-[#0d162a] tracking-tight leading-tight mb-0.5 md:mb-2">
        ¡Gracias!
      </h1>
      <h2 className="text-sm md:text-lg font-black text-[#0d162a] tracking-tight leading-snug mb-2 md:mb-4">
        Hemos recibido tu información
      </h2>

      {/* Styled yellow elegant divider */}
      <div className="w-12 md:w-16 h-1 bg-honne-yellow mx-auto rounded-full mb-3 md:mb-6"></div>

      <p className="text-[11px] md:text-sm text-neutral-600 leading-relaxed font-semibold max-w-md mx-auto mb-4 md:mb-8 px-2">
        Un asesor especialista se pondrá en contacto contigo muy pronto para brindarte una evaluación personalizada de tu propiedad.
      </p>

      {/* Contact card helper */}
      <div className="bg-amber-50/20 rounded-2xl border border-neutral-100 p-3 md:p-5 shadow-3xs flex text-left gap-3 md:gap-4 max-w-md mx-auto mb-4 md:mb-8 items-center flex-shrink-0">
        <div className="w-9 h-9 md:w-12 md:h-12 flex-shrink-0 bg-amber-50 rounded-full flex items-center justify-center text-honne-yellow border border-amber-100 shadow-3xs">
          <Headphones size={16} className="stroke-[2.2] md:w-5 md:h-5" />
        </div>
        <div>
          <h4 className="text-xs md:text-sm font-black text-[#0d162a]">Te contactaremos pronto</h4>
          <p className="text-[10px] md:text-xs text-neutral-500 mt-0.5 leading-snug font-semibold">
            Revisaremos tu información y te llamaremos o escribiremos para continuar con la evaluación.
          </p>
        </div>
      </div>

      {/* Security lock card */}
      <div className="flex flex-col items-center justify-center gap-1 mb-4 md:mb-8 flex-shrink-0">
        <ShieldCheck className="text-honne-yellow stroke-[2.2] w-5 h-5 md:w-6 md:h-6" />
        <h5 className="text-[10px] md:text-xs font-black text-[#0d162a]">Tu información está segura</h5>
        <p className="text-[9px] md:text-[10px] text-neutral-400 font-semibold">
          No compartimos tus datos con terceros.
        </p>
      </div>

      {/* FINALIZAR yellow action button */}
      <div className="mt-auto flex-shrink-0">
        <button
          onClick={onFinish}
          className="w-full bg-[#f8b500] hover:bg-[#e0a300] text-neutral-900 font-extrabold py-3 md:py-4 px-6 rounded-xl transition-all duration-200 shadow-md flex items-center justify-center gap-2 group tracking-wider uppercase text-xs cursor-pointer border border-amber-400 h-11 md:h-13"
          id="btn-finalizar"
        >
          <span>FINALIZAR</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform stroke-[2.5]" />
        </button>
      </div>
    </motion.div>
  );
}
