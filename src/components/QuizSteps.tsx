import React, { useState } from 'react';
import {
  Home,
  Key,
  Building,
  MapPin,
  DollarSign,
  Calendar,
  User,
  Phone,
  Mail,
  Building2,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { QuizAnswers } from '../types';
import { NavigationFooter } from './MethodSteps';

interface QuizStepsProps {
  currentStep: number; // 1 to 6
  answers: QuizAnswers;
  setAnswers: React.Dispatch<React.SetStateAction<QuizAnswers>>;
  onBack: () => void;
  onNext: () => void;
}

export function QuizSteps({
  currentStep,
  answers,
  setAnswers,
  onBack,
  onNext
}: QuizStepsProps) {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(true);

  // Helper handling option selections
  const handleSelectOperation = (type: 'vender' | 'alquilar') => {
    setAnswers((prev) => ({ ...prev, operationType: type }));
    setErrorMsg(null);
    onNext(); // Auto transition is very smooth for options
  };

  const handleSelectPropertyType = (type: 'departamento' | 'casa' | 'terreno' | 'local_comercial') => {
    setAnswers((prev) => ({ ...prev, propertyType: type }));
    setErrorMsg(null);
    onNext(); // Auto transition
  };

  const handleSelectTimeline = (timelineStr: string) => {
    setAnswers((prev) => ({ ...prev, timeline: timelineStr }));
    setErrorMsg(null);
    onNext(); // Auto transition
  };

  // expectation currency helper
  const [currency, setCurrency] = useState<'S/' | 'US$'>('S/');
  const [priceNum, setPriceNum] = useState<string>('');

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/[^0-9]/g, '');
    setPriceNum(rawVal);
    const formatted = rawVal ? `${currency} ${Number(rawVal).toLocaleString('es-PE')}` : '';
    setAnswers((prev) => ({ ...prev, expectedPrice: formatted }));
    setErrorMsg(null);
  };

  const handleCurrencyToggle = (curr: 'S/' | 'US$') => {
    setCurrency(curr);
    const formatted = priceNum ? `${curr} ${Number(priceNum).toLocaleString('es-PE')}` : '';
    setAnswers((prev) => ({ ...prev, expectedPrice: formatted }));
  };

  // Field validation wrappers
  const validateAndProceed = () => {
    if (currentStep === 1 && !answers.operationType) {
      setErrorMsg('Por favor selecciona una opción para continuar.');
      return;
    }
    if (currentStep === 2 && !answers.propertyType) {
      setErrorMsg('Por favor selecciona el tipo de propiedad.');
      return;
    }
    if (currentStep === 3 && !answers.location.trim()) {
      setErrorMsg('La ubicación o distrito es requerida.');
      return;
    }
    if (currentStep === 4 && !answers.expectedPrice) {
      setErrorMsg('Por favor indica un monto estimado.');
      return;
    }
    if (currentStep === 5 && !answers.timeline) {
      setErrorMsg('Por favor selecciona un periodo.');
      return;
    }
    if (currentStep === 6) {
      if (!answers.personalInfo.fullName.trim()) {
        setErrorMsg('Nombres y apellidos son requeridos.');
        return;
      }
      if (!answers.personalInfo.phoneNumber.trim()) {
        setErrorMsg('Número de celular es requerido.');
        return;
      }
      if (!answers.personalInfo.email.trim() || !answers.personalInfo.email.includes('@')) {
        setErrorMsg('Por favor ingresa un correo electrónico válido.');
        return;
      }
      if (!answers.personalInfo.district.trim()) {
        setErrorMsg('Por favor indica el distrito donde resides.');
        return;
      }
    }

    setErrorMsg(null);
    onNext();
  };

  return (
    <div className="flex flex-col flex-grow w-full max-w-xl mx-auto px-4 py-2 md:py-6 h-full justify-between overflow-hidden">
      <AnimatePresence mode="wait">
        {errorMsg && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="mb-2 bg-red-50 text-red-600 p-2.5 rounded-lg text-xs font-semibold text-center border border-red-100 flex-shrink-0"
          >
            ⚠️ {errorMsg}
          </motion.div>
        )}
      </AnimatePresence>

      {/* QUIZ STEP 1: OPERATION TYPE */}
      {currentStep === 1 && (
        <motion.div
          key="quiz-st-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="flex flex-col flex-grow h-full justify-between"
        >
          <div className="flex flex-col items-center flex-shrink-0">
            {/* House Check Centered Icon */}
            <div className="mx-auto w-10 h-10 md:w-16 md:h-16 rounded-full bg-honne-yellow flex items-center justify-center text-neutral-900 shadow-3xs mb-2 md:mb-6 border-2 border-white flex-shrink-0 text-neutral-900">
              <Home size={20} className="md:size-7 stroke-[2.2]" />
            </div>

            <h1 className="text-lg md:text-2xl font-black text-[#0d162a] tracking-tight text-center leading-tight mb-0.5 md:mb-2 max-w-sm">
              Cuéntanos sobre tu propiedad
            </h1>
            <p className="text-[10px] md:text-sm text-neutral-400 text-center mb-3 md:mb-6 font-bold uppercase tracking-wider">
              Comencemos con lo más importante
            </p>

            <h3 className="text-center font-bold text-neutral-800 text-xs md:text-base mb-2 md:mb-4">
              ¿Qué deseas hacer?
            </h3>
          </div>

          {/* Cards for grid layout option choice */}
          <div className="grid grid-cols-2 gap-3 mb-3 md:mb-8">
            <button
              onClick={() => handleSelectOperation('vender')}
              className={`flex flex-col items-center p-4 md:p-6 bg-white rounded-xl md:rounded-2xl border transition-all text-center group cursor-pointer ${
                answers.operationType === 'vender'
                  ? 'border-honne-yellow ring-2 ring-honne-yellow/20 shadow-md bg-amber-50/10'
                  : 'border-neutral-150 hover:border-neutral-300 shadow-2xs'
              }`}
              id="opt-operation-vender"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-50 text-honne-yellow flex items-center justify-center text-lg md:text-xl group-hover:scale-105 transition-transform border border-amber-100 mb-2 md:mb-4 shadow-3xs">
                🏠
              </div>
              <span className="text-sm md:text-base font-black text-[#0d162a] block">Vender</span>
              <span className="text-[10px] md:text-xs text-neutral-400 font-bold block mt-0.5 leading-none">mi propiedad</span>
            </button>

            <button
              onClick={() => handleSelectOperation('alquilar')}
              className={`flex flex-col items-center p-4 md:p-6 bg-white rounded-xl md:rounded-2xl border transition-all text-center group cursor-pointer ${
                answers.operationType === 'alquilar'
                  ? 'border-honne-yellow ring-2 ring-honne-yellow/20 shadow-md bg-amber-50/10'
                  : 'border-neutral-150 hover:border-neutral-300 shadow-2xs'
              }`}
              id="opt-operation-alquilar"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-50 text-honne-yellow flex items-center justify-center text-lg md:text-xl group-hover:scale-105 transition-transform border border-amber-100 mb-2 md:mb-4 shadow-3xs">
                🔑
              </div>
              <span className="text-sm md:text-base font-black text-[#0d162a] block">Alquilar</span>
              <span className="text-[10px] md:text-xs text-neutral-400 font-bold block mt-0.5 leading-none">mi propiedad</span>
            </button>
          </div>

          <p className="text-[10px] md:text-xs text-neutral-400 text-center mt-auto mb-2 font-bold flex-shrink-0 select-none">
            Nos ayudará a personalizar la asesoría que recibas.
          </p>

          <div className="flex-shrink-0">
            <NavigationFooter onBack={onBack} onNext={validateAndProceed} nextText="CONTINUAR" nextTheme="yellow" />
          </div>
        </motion.div>
      )}

      {/* QUIZ STEP 2: PROPERTY TYPE */}
      {currentStep === 2 && (
        <motion.div
          key="quiz-st-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="flex flex-col flex-grow h-full justify-between"
        >
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="mx-auto w-10 h-10 md:w-16 md:h-16 rounded-full bg-honne-yellow flex items-center justify-center text-neutral-900 shadow-3xs mb-2 md:mb-6 border-2 border-white flex-shrink-0">
              <Building className="stroke-[2.2] size-5 md:size-6" />
            </div>

            <h1 className="text-base md:text-2xl font-black text-[#0d162a] tracking-tight text-center leading-tight mb-2 md:mb-6">
              ¿Qué tipo de propiedad es?
            </h1>
          </div>

          {/* List items with right chevron and beautiful round icon highlights */}
          <div className="space-y-1.5 md:space-y-3 mb-2 md:mb-8">
            {[
              { id: 'departamento', label: 'Departamento', icon: '🏢' },
              { id: 'casa', label: 'Casa', icon: '🏡' },
              { id: 'terreno', label: 'Terreno', icon: '🌳' },
              { id: 'local_comercial', label: 'Local comercial', icon: '🏪' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelectPropertyType(item.id as any)}
                className={`flex items-center gap-3 p-2.5 md:p-4 bg-white rounded-xl md:rounded-2xl border text-left w-full transition-all group cursor-pointer ${
                  answers.propertyType === item.id
                    ? 'border-honne-yellow bg-[#faf9f6]/30 ring-2 ring-honne-yellow/10 shadow-md translate-x-1'
                    : 'border-neutral-100 hover:border-neutral-250 shadow-3xs'
                }`}
                id={`opt-propety-type-${item.id}`}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-50 text-honne-yellow border border-amber-100 flex items-center justify-center text-base md:text-xl shadow-3xs group-hover:scale-105 transition-transform flex-shrink-0">
                  {item.icon}
                </div>
                <span className="flex-1 font-bold text-[#0d162a] text-xs md:text-sm">
                  {item.label}
                </span>
                <ChevronRight size={15} className="text-neutral-300 group-hover:text-neutral-500 transition-colors" />
              </button>
            ))}
          </div>

          <div className="mt-auto flex-shrink-0">
            <NavigationFooter onBack={onBack} onNext={validateAndProceed} nextText="CONTINUAR" nextTheme="yellow" />
          </div>
        </motion.div>
      )}

      {/* QUIZ STEP 3: LOCATION */}
      {currentStep === 3 && (
        <motion.div
          key="quiz-st-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="flex flex-col flex-grow h-full justify-between"
        >
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="mx-auto w-10 h-10 md:w-16 md:h-16 rounded-full bg-honne-yellow flex items-center justify-center text-neutral-900 shadow-3xs mb-2.5 md:mb-6 border-2 border-white flex-shrink-0">
              <MapPin className="stroke-[2.2] size-5 md:size-6" />
            </div>

            <h2 className="text-base md:text-2xl font-black text-[#0d162a] tracking-tight text-center leading-tight mb-1.5 md:mb-2">
              ¿Dónde está ubicada tu propiedad?
            </h2>

            <div className="p-2.5 bg-amber-50/55 rounded-xl border border-amber-100/10 flex gap-2 w-full max-w-sm mx-auto mb-3 md:mb-6 flex-shrink-0">
              <MapPin size={14} className="text-honne-yellow flex-shrink-0 mt-0.5" />
              <p className="text-[10px] md:text-xs text-neutral-500 leading-snug">
                Cuéntanos la dirección o el distrito donde se encuentra tu propiedad.
              </p>
            </div>
          </div>

          {/* Form address entry block */}
          <div className="bg-white rounded-xl md:rounded-2xl border border-neutral-100 p-4 md:p-5 shadow-xs mb-3 md:mb-8 flex-shrink-0">
            <label className="text-[10px] md:text-[11px] font-black uppercase text-neutral-400 tracking-wider block mb-1.5">
              Dirección o Distrito
            </label>
            <div className="relative">
              <MapPin size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-300" />
              <input
                type="text"
                value={answers.location}
                onChange={(e) => setAnswers((p) => ({ ...p, location: e.target.value }))}
                placeholder="Ej.: Av. Reducto 123, Miraflores o Miraflores"
                className="w-full pl-10 pr-4 py-2.5 md:py-4 rounded-xl border border-neutral-200 focus:border-honne-yellow focus:outline-hidden text-xs md:text-sm placeholder:text-neutral-300 focus:bg-[#faf9f6]/30 font-semibold"
                id="input-location"
              />
            </div>
          </div>

          <div className="mt-auto flex-shrink-0">
            <NavigationFooter onBack={onBack} onNext={validateAndProceed} nextText="CONTINUAR" nextTheme="yellow" />
          </div>
        </motion.div>
      )}

      {/* QUIZ STEP 4: EXPECTATION */}
      {currentStep === 4 && (
        <motion.div
          key="quiz-st-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="flex flex-col flex-grow h-full justify-between"
        >
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="mx-auto w-10 h-10 md:w-16 md:h-16 rounded-full bg-honne-yellow flex items-center justify-center text-neutral-900 shadow-3xs mb-2.5 md:mb-6 border-2 border-white flex-shrink-0">
              <DollarSign className="stroke-[2.2] size-5 md:size-6" />
            </div>

            <h2 className="text-base md:text-2xl font-black text-[#0d162a] tracking-tight text-center leading-tight mb-2">
              ¿Cuál es tu expectativa económica?
            </h2>

            <div className="p-2.5 bg-amber-50/55 rounded-xl border border-amber-100/10 flex gap-2 w-full max-w-sm mx-auto mb-3 md:mb-6 flex-shrink-0">
              <span className="text-honne-yellow font-extrabold flex-shrink-0 mt-0.5 text-xs">💰</span>
              <p className="text-[10px] md:text-xs text-neutral-500 leading-snug">
                Indícanos el monto aproximado que esperas obtener por tu propiedad.
              </p>
            </div>
          </div>

          {/* Form expectation block */}
          <div className="bg-white rounded-xl md:rounded-2xl border border-neutral-100 p-4 md:p-5 shadow-xs mb-3 md:mb-8 flex-shrink-0">
            <div className="flex justify-between items-center mb-2.5">
              <label className="text-[10px] md:text-[11px] font-black uppercase text-neutral-400 tracking-wider">
                Monto esperado
              </label>

              {/* Currency togglers */}
              <div className="flex gap-1 bg-neutral-100 p-0.5 rounded-lg flex-shrink-0">
                <button
                  type="button"
                  onClick={() => handleCurrencyToggle('S/')}
                  className={`px-2 py-0.5 rounded-md text-[10px] md:text-xs font-black transition-all cursor-pointer ${
                    currency === 'S/' ? 'bg-white text-[#0d162a] shadow-3xs' : 'text-neutral-400 hover:text-neutral-600'
                  }`}
                >
                  Soles
                </button>
                <button
                  type="button"
                  onClick={() => handleCurrencyToggle('US$')}
                  className={`px-2 py-0.5 rounded-md text-[10px] md:text-xs font-black transition-all cursor-pointer ${
                    currency === 'US$' ? 'bg-white text-[#0d162a] shadow-3xs' : 'text-neutral-400 hover:text-neutral-600'
                  }`}
                >
                  Dólares
                </button>
              </div>
            </div>

            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm md:text-lg font-black text-[#0d162a]">
                {currency}
              </span>
              <input
                type="text"
                pattern="[0-9]*"
                value={priceNum}
                onChange={handlePriceChange}
                placeholder="0"
                className="w-full pl-12 pr-4 py-2.5 md:py-4 rounded-xl border border-neutral-200 focus:border-honne-yellow focus:outline-hidden text-sm md:text-lg font-black placeholder:text-neutral-300 focus:bg-[#faf9f6]/30"
                id="input-expected-price"
              />
            </div>

            <p className="text-[9.5px] md:text-[11px] text-neutral-400 text-center mt-2 font-bold select-none leading-none">
              Puedes escribir el monto en soles (S/) o dólares (US$).
            </p>
          </div>

          <div className="mt-auto flex-shrink-0">
            <NavigationFooter onBack={onBack} onNext={validateAndProceed} nextText="CONTINUAR" nextTheme="yellow" />
          </div>
        </motion.div>
      )}

      {/* QUIZ STEP 5: TIMELINE */}
      {currentStep === 5 && (
        <motion.div
          key="quiz-st-5"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="flex flex-col flex-grow h-full justify-between"
        >
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="mx-auto w-10 h-10 md:w-16 md:h-16 rounded-full bg-honne-yellow flex items-center justify-center text-neutral-900 shadow-3xs mb-2.5 md:mb-6 border-2 border-white flex-shrink-0">
              <Calendar className="stroke-[2.2] size-5 md:size-6" />
            </div>

            <h2 className="text-base md:text-2xl font-black text-[#0d162a] tracking-tight text-center leading-tight mb-2">
              ¿Cuándo planeas realizar la operación?
            </h2>

            <div className="p-2.5 bg-amber-50/55 rounded-xl border border-amber-100/10 flex gap-2 w-full max-w-sm mx-auto mb-3 md:mb-6 flex-shrink-0">
              <Calendar size={14} className="text-honne-yellow flex-shrink-0 mt-0.5" />
              <p className="text-[10px] md:text-xs text-neutral-500 leading-snug">
                Selecciona el periodo que mejor se ajuste a tus planes de venta o alquiler.
              </p>
            </div>
          </div>

          {/* Vertical radio selections */}
          <div className="space-y-1.5 md:space-y-2.5 mb-2.5 md:mb-8">
            {[
              'En los próximos 3 meses',
              'Entre 3 y 6 meses',
              'Entre 6 meses y 1 año',
              'Más de 1 año',
              'Aún no lo tengo definido'
            ].map((optionStr) => (
              <button
                key={optionStr}
                onClick={() => handleSelectTimeline(optionStr)}
                className={`flex items-center gap-3 p-2.5 md:p-4 bg-white rounded-lg md:rounded-xl border text-left w-full transition-all group cursor-pointer ${
                  answers.timeline === optionStr
                    ? 'border-honne-yellow bg-[#faf9f6]/30 ring-2 ring-honne-yellow/10 shadow-md translate-x-1'
                    : 'border-neutral-100 hover:border-neutral-250 shadow-3xs'
                }`}
                id={`opt-timeline-${optionStr.replace(/\s+/g, '-').toLowerCase()}`}
              >
                <div
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                    answers.timeline === optionStr
                      ? 'border-honne-yellow bg-honne-yellow/10'
                      : 'border-neutral-300'
                  }`}
                >
                  {answers.timeline === optionStr && (
                    <div className="w-2 h-2 rounded-full bg-honne-yellow" />
                  )}
                </div>
                <span className="flex-1 font-bold text-[#0d162a] text-xs">
                  {optionStr}
                </span>
                <span className="text-neutral-300 group-hover:text-neutral-500 transition-colors font-bold text-sm">
                  ›
                </span>
              </button>
            ))}
          </div>

          <div className="mt-auto flex-shrink-0">
            <NavigationFooter onBack={onBack} onNext={validateAndProceed} nextText="CONTINUAR" nextTheme="yellow" />
          </div>
        </motion.div>
      )}

      {/* QUIZ STEP 6: CONTACT INFORMATION */}
      {currentStep === 6 && (
        <motion.div
          key="quiz-st-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="flex flex-col flex-grow h-full justify-between"
        >
          {/* Avatar icon shown compactly on mobile and large on desktop */}
          <div className="mx-auto w-10 h-10 md:w-16 md:h-16 rounded-full bg-honne-yellow flex items-center justify-center text-neutral-900 shadow-sm mb-1.5 md:mb-6 border-2 border-white flex-shrink-0">
            <User className="stroke-[2.2] w-5 h-5 md:w-7 md:h-7" />
          </div>

          <h2 className="text-lg md:text-[25px] font-black text-[#0d162a] tracking-tight text-center leading-tight mb-2 select-none">
            Para finalizar, cuéntanos sobre ti
          </h2>

          {/* Compactly hidden on mobile to perfectly avoid scroll and fit small screens beautifully */}
          <div className="hidden md:flex p-3 bg-amber-50/50 rounded-xl border border-amber-100/10 gap-2.5 w-full max-w-sm mx-auto mb-6">
            <User size={16} className="text-honne-yellow flex-shrink-0 mt-0.5" />
            <p className="text-xs text-neutral-500 leading-snug">
              Esta información nos permitirá brindarte una atención personalizada inmediata.
            </p>
          </div>

          {/* Form input fields with compact styling */}
          <div className="space-y-2.5 md:space-y-4 mb-3 md:mb-6 bg-white rounded-2xl border border-neutral-100 p-3.5 md:p-5 shadow-3xs flex-shrink-0">
            {/* Input 1: Nombres y apellidos */}
            <div className="relative">
              <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-300" />
              <input
                type="text"
                value={answers.personalInfo.fullName}
                onChange={(e) =>
                  setAnswers((prev) => ({
                    ...prev,
                    personalInfo: { ...prev.personalInfo, fullName: e.target.value }
                  }))
                }
                placeholder="Nombres y apellidos"
                className="w-full pl-10 pr-4 py-2.5 md:py-3.5 rounded-xl border border-neutral-200 focus:border-honne-yellow focus:outline-hidden text-xs md:text-sm font-semibold placeholder:text-neutral-400 focus:bg-[#faf9f6]/10"
                id="input-fullName"
              />
            </div>

            {/* Input 2: Número de celular */}
            <div className="relative">
              <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-300" />
              <input
                type="tel"
                value={answers.personalInfo.phoneNumber}
                onChange={(e) =>
                  setAnswers((prev) => ({
                    ...prev,
                    personalInfo: { ...prev.personalInfo, phoneNumber: e.target.value }
                  }))
                }
                placeholder="Número de celular"
                className="w-full pl-10 pr-10 py-2.5 md:py-3.5 rounded-xl border border-neutral-200 focus:border-honne-yellow focus:outline-hidden text-xs md:text-sm font-semibold placeholder:text-neutral-400 focus:bg-[#faf9f6]/10"
                id="input-phoneNumber"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#25d366]" title="WhatsApp disponible">
                🟢
              </span>
            </div>

            {/* Input 3: Correo electrónico */}
            <div className="relative">
              <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-300" />
              <input
                type="email"
                value={answers.personalInfo.email}
                onChange={(e) =>
                  setAnswers((prev) => ({
                    ...prev,
                    personalInfo: { ...prev.personalInfo, email: e.target.value }
                  }))
                }
                placeholder="Correo electrónico"
                className="w-full pl-10 pr-4 py-2.5 md:py-3.5 rounded-xl border border-neutral-200 focus:border-honne-yellow focus:outline-hidden text-xs md:text-sm font-semibold placeholder:text-neutral-400 focus:bg-[#faf9f6]/10"
                id="input-email"
              />
            </div>

            {/* Input 4: ¿En qué distrito vives? */}
            <div className="relative">
              <Building2 size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-300" />
              <input
                type="text"
                value={answers.personalInfo.district}
                onChange={(e) =>
                  setAnswers((prev) => ({
                    ...prev,
                    personalInfo: { ...prev.personalInfo, district: e.target.value }
                  }))
                }
                placeholder="¿En qué distrito vives?"
                className="w-full pl-10 pr-4 py-2.5 md:py-3.5 rounded-xl border border-neutral-200 focus:border-honne-yellow focus:outline-hidden text-xs md:text-sm font-semibold placeholder:text-neutral-400 focus:bg-[#faf9f6]/10"
                id="input-district"
              />
            </div>
          </div>

          {/* Privacy Policy checkbox layout matching screenshot */}
          <div className="flex items-center gap-2 mb-2 px-1 justify-center select-none flex-shrink-0">
            <input
              type="checkbox"
              id="privacy"
              checked={acceptedPrivacy}
              onChange={(e) => {
                setAcceptedPrivacy(e.target.checked);
                setErrorMsg(null);
              }}
              className="w-4 h-4 rounded text-neutral-800 border-neutral-300 focus:ring-amber-500 cursor-pointer accent-[#f8b500]"
            />
            <label htmlFor="privacy" className="text-[10px] md:text-xs text-neutral-500 font-bold cursor-pointer leading-tight">
              Acepto la <span className="underline font-black text-neutral-700">política de privacidad</span> y el <span className="underline font-black text-neutral-700">tratamiento de datos</span>.
            </label>
          </div>

          {/* GREEN SEND BY WHATSAPP BUTTON WITH PHONE ICON AND SVG REDIRECT DETAILED IN MOCKUP */}
          <div className="mt-auto flex-shrink-0">
            <button
              onClick={() => {
                if (!answers.personalInfo.fullName.trim()) {
                  setErrorMsg('Nombres y apellidos son requeridos.');
                  return;
                }
                if (!answers.personalInfo.phoneNumber.trim()) {
                  setErrorMsg('Número de celular es requerido.');
                  return;
                }
                if (!answers.personalInfo.email.trim() || !answers.personalInfo.email.includes('@')) {
                  setErrorMsg('Por favor ingresa un correo electrónico válido.');
                  return;
                }
                if (!answers.personalInfo.district.trim()) {
                  setErrorMsg('Por favor indica el distrito donde resides.');
                  return;
                }
                if (!acceptedPrivacy) {
                  setErrorMsg('Debes aceptar la política de privacidad.');
                  return;
                }

                setErrorMsg(null);

                // Compile WhatsApp Message
                const op = answers.operationType === 'vender' ? 'VENDER' : 'ALQUILAR';
                const prop = answers.propertyType ? answers.propertyType.toUpperCase() : '-';
                const loc = answers.location || '-';
                const price = answers.expectedPrice || '-';
                const time = answers.timeline || '-';
                const name = answers.personalInfo.fullName || '-';
                const phone = answers.personalInfo.phoneNumber || '-';
                const email = answers.personalInfo.email || '-';
                const dist = answers.personalInfo.district || '-';

                const message = `Hola Honne Inmobiliaria 🏠, me gustaría evaluar mi propiedad para el Método Honne. Aquí los detalles del formulario:

*Tipo de Operación:* En ${op}
*Tipo de Propiedad:* ${prop}
*Dirección/Distrito de la propiedad:* ${loc}
*Precio Estimado / Expectativa:* ${price}
*Plazo para Operación:* ${time}

*Información de Contacto:*
*Nombres y Apellidos:* ${name}
*Número de Celular:* ${phone}
*Correo Electrónico:* ${email}
*Distrito de Residencia:* ${dist}

¡Quedo atento a la evaluación! Muchas gracias.`;

                const encodedMessage = encodeURIComponent(message);
                const honneNumber = '51922142073';
                const whatsappUrl = `https://api.whatsapp.com/send?phone=${honneNumber}&text=${encodedMessage}`;

                try {
                  const link = document.createElement('a');
                  link.href = whatsappUrl;
                  link.target = '_blank';
                  link.rel = 'noopener noreferrer';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                } catch (e) {
                  console.warn('Error opening WhatsApp:', e);
                }

                // Proceed to validation finish step
                onNext();
              }}
              className="w-full bg-[#00c853] hover:bg-[#00b248] active:bg-[#009624] text-white font-extrabold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-md flex items-center justify-between group tracking-widest cursor-pointer border-0 select-none"
              id="btn-enviar-whatsapp"
            >
              <div className="flex items-center gap-2.5 mx-auto">
                {/* Phone icon */}
                <svg className="w-5 h-5 text-white stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-[11.5px] md:text-xs font-black uppercase tracking-wider">ENVIAR POR WHATSAPP</span>
              </div>
              <span className="font-bold text-base text-white group-hover:translate-x-1 transition-transform select-none">→</span>
            </button>
          </div>

          {/* Yellow warning redirect info box */}
          <div className="mt-2.5 text-center select-none flex-shrink-0">
            <p className="text-[9px] md:text-[10px] text-neutral-400 font-bold leading-normal max-w-sm mx-auto flex items-start justify-center gap-1.5 px-3">
              <span className="text-[#f8b500] text-xs leading-none">⚠️</span>
              <span className="text-left leading-relaxed">Al presionar, ingresarás a la pantalla de redirección y se abrirá tu chat de WhatsApp automáticamente.</span>
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
