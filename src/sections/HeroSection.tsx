"use client";

import { motion, useReducedMotion } from "framer-motion";
import { 
  FilePlus2, 
  ArrowLeft, 
  CheckCircle,
  FileText,
  Clock
} from "lucide-react";

interface HeroSectionProps {
  onPrimaryClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function HeroSection({ onPrimaryClick }: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    prefersReducedMotion
      ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section
      dir="rtl"
      aria-label="الرئيسية - منصة حماية المستهلك"
      className="relative py-16 md:py-24 border-b border-[#e8ded1] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="container-page relative z-10">
        
        {/* الجزء العلوي: العنوان والوصف */}
        <div className="max-w-3xl">
          <motion.h1
            {...fadeUp(0.08)}
            className="mt-5 text-4xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#1a0f07] leading-[1.3]"
          >
            منصة حماية المستهلك <br />
            <span className="text-[#8c4d1c] font-medium inline-block whitespace-nowrap">
              لرفع وتقديم شكاوى المستهلك
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="mt-6 text-base sm:text-xl text-[#3d2c1e] leading-relaxed max-w-2xl font-normal"
          >
            منصة رقمية لتقديم شكاوى المستهلكين وملاحظاتهم بسهولة<br /> مع تنظيم بيانات الشكوى وتسهيل متابعة الطلب من مكان واحد.
          </motion.p>
        </div>

        {/* الجزء الأوسط: زر تقديم الشكوى بتصميم رسمي رزين */}
        <motion.div
          {...fadeUp(0.24)}
          className="mt-10 flex items-center gap-4"
        >
          <a
            href="#complaint-form"
            onClick={onPrimaryClick}
            className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#1a0f07] px-8 py-4 text-base font-semibold text-[#fdfbf7] border border-[#3d2c1e] shadow-md transition-all duration-200 hover:bg-[#8c4d1c] hover:border-[#8c4d1c] active:scale-[0.98]"
          >
            <FilePlus2 className="h-5 w-5 text-[#d2c2b0] transition-colors group-hover:text-white" />
            <span>تقديم شكوى جديدة</span>
            <ArrowLeft className="h-4 w-4 text-[#d2c2b0] transition-all duration-200 group-hover:text-white group-hover:-translate-x-1" />
          </a>
        </motion.div>

        {/* الجزء السفلي: 3 بطاقات */}
        <motion.div
          {...fadeUp(0.32)}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl"
        >
          <div className="rounded-xl bg-white p-5 border border-[#d2c2b0] shadow-sm flex items-start gap-4 transition-transform hover:-translate-y-1">
            <div className="rounded-lg bg-[#f5efe8] p-2.5 text-[#9b6131] shrink-0 border border-[#e2d5c5]">
              <FileText className="h-5 w-5 text-[#9b6131]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#2d1a0a]">تأطير الشكوى</h3>
              <p className="text-xs text-[#524336] mt-1 leading-relaxed">
                تنظيم البيانات والمرفقات وتجهيزها للعرض الفوري.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-white p-5 border border-[#d2c2b0] shadow-sm flex items-start gap-4 transition-transform hover:-translate-y-1">
            <div className="rounded-lg bg-[#f5efe8] p-2.5 text-[#9b6131] shrink-0 border border-[#e2d5c5]">
              <Clock className="h-5 w-5 text-[#9b6131]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#2d1a0a]">متابعة لحظية</h3>
              <p className="text-xs text-[#524336] mt-1 leading-relaxed">
                معرفة مرحلة الشكوى والتحديثات عبر رقم الطلب.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-white p-5 border border-[#d2c2b0] shadow-sm flex items-start gap-4 transition-transform hover:-translate-y-1">
            <div className="rounded-lg bg-[#f5efe8] p-2.5 text-[#9b6131] shrink-0 border border-[#e2d5c5]">
              <CheckCircle className="h-5 w-5 text-[#9b6131]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#2d1a0a]">معالجة عادلة</h3>
              <p className="text-xs text-[#524336] mt-1 leading-relaxed">
                ضمان إيصال ملاحظاتك للجهات المختصة بحيادية.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}