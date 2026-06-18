import { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import { AppStep, QuizAnswers } from './types';
import { MethodIntro } from './components/MethodIntro';
import {
  MethodStep1,
  MethodStep2,
  MethodStep3,
  MethodStep4,
  MethodDecision
} from './components/MethodSteps';
import { QuizSteps } from './components/QuizSteps';
import { SuccessStep } from './components/SuccessStep';

const INITIAL_ANSWERS: QuizAnswers = {
  operationType: null,
  propertyType: null,
  location: '',
  expectedPrice: '',
  timeline: '',
  personalInfo: {
    fullName: '',
    phoneNumber: '',
    email: '',
    district: ''
  }
};

export default function App() {
  const [step, setStep] = useState<AppStep>('intro');
  const [answers, setAnswers] = useState<QuizAnswers>(INITIAL_ANSWERS);

  // Flow State Actions
  const handleNext = () => {
    switch (step) {
      case 'intro':
        setStep('method_1');
        break;
      case 'method_1':
        setStep('method_2');
        break;
      case 'method_2':
        setStep('method_3');
        break;
      case 'method_3':
        setStep('method_4');
        break;
      case 'method_4':
        setStep('method_decision');
        break;
      case 'method_decision':
        setStep('quiz_1_operation');
        break;
      case 'quiz_1_operation':
        setStep('quiz_2_property_type');
        break;
      case 'quiz_2_property_type':
        setStep('quiz_3_location');
        break;
      case 'quiz_3_location':
        setStep('quiz_4_expectation');
        break;
      case 'quiz_4_expectation':
        setStep('quiz_5_timeline');
        break;
      case 'quiz_5_timeline':
        setStep('quiz_6_contact');
        break;
      case 'quiz_6_contact':
        setStep('success');
        break;
      case 'success':
        // Finished, go back to top
        handleFinish();
        break;
      default:
        break;
    }
  };

  const handleBack = () => {
    switch (step) {
      case 'method_1':
        setStep('intro');
        break;
      case 'method_2':
        setStep('method_1');
        break;
      case 'method_3':
        setStep('method_2');
        break;
      case 'method_4':
        setStep('method_3');
        break;
      case 'method_decision':
        setStep('method_4');
        break;
      case 'quiz_1_operation':
        setStep('method_decision');
        break;
      case 'quiz_2_property_type':
        setStep('quiz_1_operation');
        break;
      case 'quiz_3_location':
        setStep('quiz_2_property_type');
        break;
      case 'quiz_4_expectation':
        setStep('quiz_3_location');
        break;
      case 'quiz_5_timeline':
        setStep('quiz_4_expectation');
        break;
      case 'quiz_6_contact':
        setStep('quiz_5_timeline');
        break;
      case 'success':
        setStep('quiz_6_contact');
        break;
      default:
        break;
    }
  };

  const handleFinish = () => {
    setStep('intro');
    setAnswers(INITIAL_ANSWERS);
  };

  // Helper calculating headers text and progress lines representation
  const renderHeaderRight = () => {
    switch (step) {
      case 'intro':
        return null;
      case 'method_1':
        return { label: '2 / 4', percent: 50 };
      case 'method_2':
        return { label: '3 / 4', percent: 75 };
      case 'method_3':
        return { label: '4 / 4', percent: 100 };
      case 'method_4':
        return { label: '4 / 4', percent: 100 };
      case 'method_decision':
        return { label: '5 / 14', percent: 35.7 };
      case 'quiz_1_operation':
        return { label: '1 de 6', percent: 16.6 };
      case 'quiz_2_property_type':
        return { label: '2 de 6', percent: 33.3 };
      case 'quiz_3_location':
        return { label: '3 de 6', percent: 50 };
      case 'quiz_4_expectation':
        return { label: '4 de 6', percent: 66.6 };
      case 'quiz_5_timeline':
        return { label: '5 de 6', percent: 83.3 };
      case 'quiz_6_contact':
        return { label: '6 de 6', percent: 100 };
      case 'success':
        return { label: '¡Listo!', percent: 100 };
      default:
        return null;
    }
  };

  const progressInfo = renderHeaderRight();

  return (
    <div className="h-[100dvh] md:h-auto md:min-h-screen bg-slate-50 flex items-center justify-center p-0 md:p-6 transition-colors duration-300 overflow-hidden md:overflow-visible">
      {/* Premium responsive container wrapper simulating exact smartphone aspect ratios */}
      <div className="w-full max-w-md md:max-w-xl bg-white md:rounded-3xl md:shadow-2xl border border-neutral-100 flex flex-col h-full md:min-h-[850px] md:h-[850px] overflow-hidden relative">
        {/* Top Header */}
        <header className={`flex items-center justify-between px-5 py-3 md:py-5 bg-white sticky top-0 z-50 ${step === 'intro' ? 'border-b-0 pb-1' : 'border-b border-neutral-100'}`}>
          {/* Logo brand left */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={handleFinish}>
            <div className="w-[3px] h-4.5 bg-honne-yellow rounded-full"></div>
            <span className="font-extrabold text-[#0d162a] tracking-[0.3em] text-[13px] md:text-sm font-sans select-none">
              HONNE
            </span>
          </div>

          {/* Progress label right with small bar style below */}
          {progressInfo && (
            <div className="flex flex-col items-end min-w-[70px]">
              <span className="text-xs font-black text-[#0d162a] tracking-tight mb-1 select-none">
                {progressInfo.label}
              </span>
              <div className="w-16 h-1 bg-neutral-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-honne-yellow transition-all duration-300"
                  style={{ width: `${progressInfo.percent}%` }}
                />
              </div>
            </div>
          )}
        </header>

        {/* Core Screen Component switch case */}
        <main className={`flex-grow flex flex-col py-1.5 overflow-y-auto md:overflow-visible ${step === 'intro' ? 'bg-white' : 'bg-[#fafbfc]'}`}>
          {step === 'intro' && (
            <MethodIntro onNext={handleNext} />
          )}

          {step === 'method_1' && (
            <MethodStep1 onBack={handleBack} onNext={handleNext} />
          )}

          {step === 'method_2' && (
            <MethodStep2 onBack={handleBack} onNext={handleNext} />
          )}

          {step === 'method_3' && (
            <MethodStep3 onBack={handleBack} onNext={handleNext} />
          )}

          {step === 'method_4' && (
            <MethodStep4 onBack={handleBack} onNext={handleNext} />
          )}

          {step === 'method_decision' && (
            <MethodDecision onBack={handleBack} onNext={handleNext} />
          )}

          {/* Quiz pages mapping step number indexes cleanly */}
          {step.startsWith('quiz_') && (
            <QuizSteps
              currentStep={
                step === 'quiz_1_operation'
                  ? 1
                  : step === 'quiz_2_property_type'
                  ? 2
                  : step === 'quiz_3_location'
                  ? 3
                  : step === 'quiz_4_expectation'
                  ? 4
                  : step === 'quiz_5_timeline'
                  ? 5
                  : 6
              }
              answers={answers}
              setAnswers={setAnswers}
              onBack={handleBack}
              onNext={handleNext}
            />
          )}

          {step === 'success' && (
            <SuccessStep
              answers={answers}
              onFinish={handleFinish}
              onBack={handleBack}
            />
          )}
        </main>

        {/* Global sticky/floating clean tiny Footer brand credentials */}
        <footer className="bg-white border-t border-neutral-100 px-5 py-2.5 md:py-4 flex items-center justify-between mt-auto">
          <p className="text-[9px] md:text-[10px] text-neutral-400 font-bold select-none tracking-wide">
            © 2018 - 2026 HONNE INMOBILIARIA
          </p>

          <div className="flex items-center gap-3">
            <a
              href="tel:+51999999999"
              className="p-1 px-2 hover:bg-neutral-50 rounded-md transition-colors text-neutral-500 hover:text-neutral-700"
              title="Llámanos"
            >
              <Phone size={15} />
            </a>
            <span className="text-neutral-200 text-xs">|</span>
            <a
              href="mailto:contacto@honneinmobiliaria.com"
              className="p-1 px-2 hover:bg-neutral-50 rounded-md transition-colors text-neutral-500 hover:text-neutral-700"
              title="Contáctanos"
            >
              <Mail size={15} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
