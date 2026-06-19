import { useState, useEffect } from "react";
import {
  Menu, X, GraduationCap, Stethoscope, Pill, Microscope, HeartPulse,
  Phone, Mail, MapPin, Clock, ChevronRight, Award, Users, BookOpen,
  Building2, CheckCircle2, Globe, Facebook, Instagram, Send, ArrowUp
} from "lucide-react";

// ---------------------------------------------------------------------------
// Translations
// ---------------------------------------------------------------------------
const T = {
  uz: {
    brandTop: "Narpay innovatsion",
    brandBottom: "tibbiyot texnikumi",
    nav: { home: "Bosh sahifa", about: "Biz haqimizda", programs: "Yo'nalishlar", admission: "Qabul", gallery: "Galereya", contact: "Aloqa" },
    apply: "Hujjat topshirish",
    heroBadge: "2026-2027 o'quv yiliga qabul ochiq",
    heroTitle: "Sog'liqni saqlash sohasida kelajak mutaxassislarini tayyorlaymiz",
    heroText: "Zamonaviy tibbiy ta'lim, malakali ustozlar va amaliyotga yo'naltirilgan o'qitish tizimi. Innovatsion yondashuv asosida bilim oling.",
    heroBtn1: "Yo'nalishlarni ko'rish",
    heroBtn2: "Biz bilan bog'lanish",
    stats: [
      { n: "500+", l: "Talabalar" },
      { n: "15 +", l: "Tajribali ustozlar" },
      { n: "3", l: "Mutaxassisliklar" },
      { n: "15+", l: "Yillik tajriba" },
    ],
    aboutTag: "Biz haqimizda",
    aboutTitle: "Innovatsion tibbiy ta'lim markazi",
    aboutText1: "Narpay innovatsion tibbiyot texnikumi — bo'lajak tibbiyot xodimlarini zamonaviy standartlar asosida tayyorlovchi yetakchi o'quv muassasasi. Bizning maqsadimiz — har bir talabaga sifatli ta'lim va keng amaliy ko'nikmalar berish.",
    aboutText2: "Texnikum zamonaviy laboratoriyalar, simulyatsiya xonalari va klinik bazalar bilan jihozlangan. Talabalar nazariy bilimlarni real amaliyot bilan birlashtirib o'rganadilar.",
    aboutFeatures: [
      "Zamonaviy o'quv laboratoriyalari va simulyatsiya markazlari",
      "Klinik bazalarda real amaliyot imkoniyati",
      "Xalqaro standartlarga mos o'quv dasturlari",
      "Bitiruvchilarni ishga joylashtirishda yordam",
    ],
    missionTag: "Bizning qadriyatlarimiz",
    missionTitle: "Nega aynan biz?",
    mission: [
      { t: "Sifatli ta'lim", d: "Xalqaro standartlarga mos zamonaviy o'quv dasturlari va malakali professor-o'qituvchilar." },
      { t: "Amaliy yo'nalganlik", d: "Talabalar o'qishning dastlabki kunidanoq klinik bazalarda amaliyot o'taydilar." },
      { t: "Zamonaviy jihozlar", d: "Simulyatsiya xonalari, laboratoriyalar va raqamli o'quv resurslari." },
      { t: "Karyera qo'llab-quvvatlash", d: "Bitiruvchilarga shifoxona va klinikalarga ishga joylashishda yordam." },
    ],
    programsTag: "Mutaxassisliklar",
    programsTitle: "O'quv yo'nalishlari",
    programsText: "Sog'liqni saqlash sohasining eng talab qilingan kasblari bo'yicha ta'lim oling.",
    programs: [
      { t: "Hamshiralik ishi", d: "Bemorlarni parvarish qilish, tibbiy muolajalar va hamshiralik faoliyati asoslari.", dur: "3 yil" },
      { t: "Davolash ishi", d: "Feldsher tayyorlash, birlamchi tez tibbiy yordam va davolash asoslari.", dur: "3 yil" },
      { t: "Tibbiy brigada hamshirasi", d: "Aholiga birlamchi tibbiy sanitariya yordamini ko‘rsatuvchi birlamchi tibbiyot mutaxassisligi.", dur: "3 yil" },
    ],
    admTag: "Qabul",
    admTitle: "Qabul jarayoni",
    admText: "Texnikumga hujjat topshirish bosqichlari bilan tanishing.",
    admSteps: [
      { t: "Ariza topshirish", d: "Onlayn yoki texnikum qabul bo'limiga shaxsan murojaat qiling." },
      { t: "Hujjatlarni taqdim etish", d: "Pasport, ta'lim hujjati, tibbiy ma'lumotnoma va rasmlar." },
      { t: "Suhbat / Test", d: "Belgilangan fanlardan kirish imtihoni yoki suhbatdan o'tish." },
      { t: "Qabul qilinish", d: "Natijalar e'lon qilinadi va o'qishga qabul shartnomasi tuziladi." },
    ],
    admDocsTitle: "Kerakli hujjatlar",
    admDocs: [
      "Pasport nusxasi",
      "11-sinf ta'lim hujjati (attestat)",
      "Ariza (texnikum namunasi bo'yicha)",
    ],
    galleryTag: "Galereya",
    galleryTitle: "Texnikum hayoti",
    galleryText: "Bizning zamonaviy o'quv muhitimiz va talabalar hayoti.",
    contactTag: "Aloqa",
    contactTitle: "Biz bilan bog'laning",
    contactText: "Savollaringiz bormi? Quyidagi ma'lumotlar orqali murojaat qiling.",
    contactInfo: [
      { t: "Manzil", v: "Samarqand viloyati, Narpay tumani" },
      { t: "Telefon", v: "+998 (90) 948-33-86" },
      { t: "Email", v: "narpayinnovatsiontibbiyottex@gmail.com" },
      { t: "Ish vaqti", v: "Dush-Shan: 8:00 - 17:00" },
    ],
    formName: "Ismingiz",
    formPhone: "Telefon raqamingiz",
    formMsg: "Xabaringiz",
    formBtn: "Yuborish",
    formThanks: "Rahmat! Murojaatingiz qabul qilindi.",
    footerAbout: "Sog'liqni saqlash sohasida malakali kadrlar tayyorlovchi innovatsion ta'lim muassasasi.",
    footerLinks: "Tezkor havolalar",
    footerContact: "Aloqa",
    rights: "Barcha huquqlar himoyalangan.",
  },
  ru: {
    brandTop: "Нарпайский инновационный",
    brandBottom: "медицинский техникум",
    nav: { home: "Главная", about: "О нас", programs: "Направления", admission: "Поступление", gallery: "Галерея", contact: "Контакты" },
    apply: "Подать документы",
    heroBadge: "Открыт приём на 2026-2027 учебный год",
    heroTitle: "Готовим будущих специалистов в сфере здравоохранения",
    heroText: "Современное медицинское образование, квалифицированные преподаватели и практико-ориентированное обучение на основе инновационного подхода.",
    heroBtn1: "Посмотреть направления",
    heroBtn2: "Связаться с нами",
    stats: [
      { n: "500+", l: "Студентов" },
      { n: "15 +", l: "Преподавателей" },
      { n: "3", l: "Специальностей" },
      { n: "15+", l: "Лет опыта" },
    ],
    aboutTag: "О нас",
    aboutTitle: "Центр инновационного медицинского образования",
    aboutText1: "Нарпайский инновационный медицинский техникум — ведущее учебное заведение, готовящее будущих медицинских работников по современным стандартам. Наша цель — дать каждому студенту качественное образование и широкие практические навыки.",
    aboutText2: "Техникум оснащён современными лабораториями, симуляционными кабинетами и клиническими базами. Студенты сочетают теоретические знания с реальной практикой.",
    aboutFeatures: [
      "Современные учебные лаборатории и симуляционные центры",
      "Возможность реальной практики на клинических базах",
      "Учебные программы по международным стандартам",
      "Помощь в трудоустройстве выпускников",
    ],
    missionTag: "Наши ценности",
    missionTitle: "Почему именно мы?",
    mission: [
      { t: "Качественное образование", d: "Современные программы по международным стандартам и квалифицированные преподаватели." },
      { t: "Практическая направленность", d: "Студенты проходят практику на клинических базах с первых дней обучения." },
      { t: "Современное оснащение", d: "Симуляционные кабинеты, лаборатории и цифровые учебные ресурсы." },
      { t: "Поддержка карьеры", d: "Помощь выпускникам в трудоустройстве в больницы и клиники." },
    ],
    programsTag: "Специальности",
    programsTitle: "Учебные направления",
    programsText: "Получите образование по самым востребованным профессиям сферы здравоохранения.",
    programs: [
      { t: "Сестринское дело", d: "Уход за пациентами, медицинские процедуры и основы сестринской деятельности.", dur: "3 года" },
      { t: "Лечебное дело", d: "Подготовка фельдшеров, первичная медпомощь и основы лечения.", dur: "3 года" },
      { t: "Медицинская сестра бригады", d: "Основная медицинская специальность, оказывающая первичную медицинскую и санитарную помощь населению.", dur: "3 года" },
    ],
    admTag: "Поступление",
    admTitle: "Процесс поступления",
    admText: "Ознакомьтесь с этапами подачи документов в техникум.",
    admSteps: [
      { t: "Подача заявления", d: "Подайте заявку онлайн или лично в приёмную комиссию." },
      { t: "Предоставление документов", d: "Паспорт, документ об образовании, медсправка и фотографии." },
      { t: "Собеседование / Тест", d: "Вступительный экзамен или собеседование по предметам." },
      { t: "Зачисление", d: "Объявление результатов и заключение договора об обучении." },
    ],
    admDocsTitle: "Необходимые документы",
    admDocs: [
      "Копия паспорта",
      "Документ об образовании за 11 класс (аттестат)",
      "Заявление (по образцу техникума)",
    ],
    galleryTag: "Галерея",
    galleryTitle: "Жизнь техникума",
    galleryText: "Наша современная учебная среда и студенческая жизнь.",
    contactTag: "Контакты",
    contactTitle: "Свяжитесь с нами",
    contactText: "Есть вопросы? Обращайтесь по указанным ниже контактам.",
    contactInfo: [
      { t: "Адрес", v: "Самаркандская область, Нарпайский район" },
      { t: "Телефон", v: "+998 (90) 948-33-86" },
      { t: "Email", v: "narpayinnovatsiontibbiyottex@gmail.com" },
      { t: "Время работы", v: "Пн-Сб: 8:00 - 17:00" },
    ],
    formName: "Ваше имя",
    formPhone: "Ваш телефон",
    formMsg: "Ваше сообщение",
    formBtn: "Отправить",
    formThanks: "Спасибо! Ваше обращение принято.",
    footerAbout: "Инновационное учебное заведение, готовящее квалифицированные кадры в сфере здравоохранения.",
    footerLinks: "Быстрые ссылки",
    footerContact: "Контакты",
    rights: "Все права защищены.",
  },
  en: {
    brandTop: "Narpay Innovative",
    brandBottom: "Medical College",
    nav: { home: "Home", about: "About", programs: "Programs", admission: "Admissions", gallery: "Gallery", contact: "Contact" },
    apply: "Apply Now",
    heroBadge: "Admissions open for 2026-2027 academic year",
    heroTitle: "Training the future specialists of healthcare",
    heroText: "Modern medical education, qualified instructors and practice-oriented teaching based on an innovative approach. Gain knowledge that matters.",
    heroBtn1: "View Programs",
    heroBtn2: "Get in Touch",
    stats: [
      { n: "500+", l: "Students" },
      { n: "15 +", l: "Instructors" },
      { n: "3", l: "Specialties" },
      { n: "15+", l: "Years of Experience" },
    ],
    aboutTag: "About Us",
    aboutTitle: "A center of innovative medical education",
    aboutText1: "Narpay Innovative Medical College is a leading institution that trains future healthcare workers to modern standards. Our goal is to give every student quality education and broad practical skills.",
    aboutText2: "The college is equipped with modern laboratories, simulation rooms and clinical bases. Students combine theoretical knowledge with real practice.",
    aboutFeatures: [
      "Modern training laboratories and simulation centers",
      "Real practice opportunities at clinical bases",
      "Curricula aligned with international standards",
      "Job placement support for graduates",
    ],
    missionTag: "Our Values",
    missionTitle: "Why choose us?",
    mission: [
      { t: "Quality Education", d: "Modern programs aligned with international standards and qualified faculty." },
      { t: "Practical Focus", d: "Students practice at clinical bases from the very first days of study." },
      { t: "Modern Equipment", d: "Simulation rooms, laboratories and digital learning resources." },
      { t: "Career Support", d: "Help for graduates in finding jobs at hospitals and clinics." },
    ],
    programsTag: "Specialties",
    programsTitle: "Academic Programs",
    programsText: "Get educated in the most in-demand professions of the healthcare sector.",
    programs: [
      { t: "Nursing", d: "Patient care, medical procedures and the fundamentals of nursing.", dur: "3 years" },
      { t: "General Medicine", d: "Paramedic training, primary care and treatment fundamentals.", dur: "3 years" },
      { t: "Medical team nurse", d: "A primary medical specialty that provides primary medical and sanitary assistance to the population.", dur: "3 years" },
    ],
    admTag: "Admissions",
    admTitle: "Admission Process",
    admText: "Learn the steps to submit your documents to the college.",
    admSteps: [
      { t: "Submit Application", d: "Apply online or in person at the admissions office." },
      { t: "Provide Documents", d: "Passport, education certificate, medical certificate and photos." },
      { t: "Interview / Test", d: "Entrance exam or interview on the required subjects." },
      { t: "Enrollment", d: "Results are announced and the study contract is signed." },
    ],
    admDocsTitle: "Required Documents",
    admDocs: [
      "Copy of passport",
      "11th grade education certificate",
      "Application (college template)",
    ],
    galleryTag: "Gallery",
    galleryTitle: "College Life",
    galleryText: "Our modern learning environment and student life.",
    contactTag: "Contact",
    contactTitle: "Get in touch with us",
    contactText: "Have questions? Reach out using the details below.",
    contactInfo: [
      { t: "Address", v: "Samarkand Region, Narpay District" },
      { t: "Phone", v: "+998 (90) 948-33-86" },
      { t: "Email", v: "narpayinnovatsiontibbiyottex@gmail.com" },
      { t: "Working Hours", v: "Mon-Sat: 8:00 - 17:00" },
    ],
    formName: "Your Name",
    formPhone: "Your Phone",
    formMsg: "Your Message",
    formBtn: "Send",
    formThanks: "Thank you! Your message has been received.",
    footerAbout: "An innovative institution training qualified personnel in the healthcare sector.",
    footerLinks: "Quick Links",
    footerContact: "Contact",
    rights: "All rights reserved.",
  },
};

const PROGRAM_ICONS = [Stethoscope, Pill, Microscope, HeartPulse, Award, Users];
const MISSION_ICONS = [BookOpen, Stethoscope, Microscope, GraduationCap];

export default function App() {
  const [lang, setLang] = useState("uz");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const t = T[lang];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      setShowTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "programs", label: t.nav.programs },
    { id: "admission", label: t.nav.admission },
    { id: "gallery", label: t.nav.gallery },
    { id: "contact", label: t.nav.contact },
  ];

  const go = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const langNames = { uz: "O'Z", ru: "РУ", en: "EN" };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased">
      {/* ============ HEADER ============ */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-slate-900/95 shadow-lg backdrop-blur" : "bg-slate-900/80 backdrop-blur"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <button onClick={() => go("home")} className="flex items-center gap-3 text-left">
            <img src="/logo.png" alt="Logo" className="h-11 w-11 shrink-0 rounded-xl object-contain" />
            <div className="leading-tight">
              <div className="text-sm font-bold text-amber-400 sm:text-base">{t.brandTop}</div>
              <div className="text-[11px] font-medium text-slate-300 sm:text-xs">{t.brandBottom}</div>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <button key={l.id} onClick={() => go(l.id)} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-amber-400">
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Lang switch */}
            <div className="relative">
              <button onClick={() => setLangOpen((v) => !v)} className="flex items-center gap-1 rounded-lg border border-white/20 px-2.5 py-2 text-xs font-semibold text-slate-100 transition-colors hover:border-amber-400 hover:text-amber-400">
                <Globe className="h-4 w-4" /> {langNames[lang]}
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-28 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl">
                  {["uz", "ru", "en"].map((l) => (
                    <button key={l} onClick={() => { setLang(l); setLangOpen(false); }} className={`block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-slate-100 ${lang === l ? "font-semibold text-amber-600" : "text-slate-700"}`}>
                      {l === "uz" ? "O'zbekcha" : l === "ru" ? "Русский" : "English"}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => go("admission")} className="hidden rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 shadow transition-colors hover:bg-amber-400 sm:block">
              {t.apply}
            </button>

            <button onClick={() => setMenuOpen((v) => !v)} className="rounded-lg p-2 text-slate-100 hover:bg-white/10 lg:hidden">
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="border-t border-white/10 bg-slate-900 px-4 py-3 lg:hidden">
            {links.map((l) => (
              <button key={l.id} onClick={() => go(l.id)} className="block w-full rounded-lg px-3 py-3 text-left text-sm font-medium text-slate-100 hover:bg-white/10 hover:text-amber-400">
                {l.label}
              </button>
            ))}
            <button onClick={() => go("admission")} className="mt-2 w-full rounded-lg bg-amber-500 px-4 py-3 text-sm font-semibold text-slate-900">
              {t.apply}
            </button>
          </nav>
        )}
      </header>

      {/* ============ HERO ============ */}
      <section id="home" className="relative overflow-hidden bg-slate-900 pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950" />
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-medium text-amber-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" /> {t.heroBadge}
            </span>
            <h1 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              {t.heroTitle}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {t.heroText}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => go("programs")} className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-lg transition-transform hover:scale-[1.02] hover:bg-amber-400">
                {t.heroBtn1} <ChevronRight className="h-4 w-4" />
              </button>
              <button onClick={() => go("contact")} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-amber-400 hover:text-amber-400">
                {t.heroBtn2}
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-xl">
                  <Stethoscope className="h-16 w-16 text-white/90" />
                </div>
                <div className="flex h-28 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 shadow-xl">
                  <Pill className="h-12 w-12 text-slate-900/80" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="flex h-28 items-center justify-center rounded-2xl bg-white/10 shadow-xl backdrop-blur">
                  <Microscope className="h-12 w-12 text-amber-300" />
                </div>
                <div className="flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 shadow-xl">
                  <GraduationCap className="h-16 w-16 text-white/90" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="relative z-10 -mt-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-100 sm:p-8 lg:grid-cols-4">
          {t.stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-extrabold text-slate-900 sm:text-3xl lg:text-4xl">{s.n}</div>
              <div className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section id="about" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex h-48 flex-col justify-end rounded-2xl bg-gradient-to-br from-blue-700 to-blue-900 p-5 text-white shadow-lg">
              <Building2 className="mb-2 h-9 w-9 text-amber-300" />
              <span className="text-sm font-semibold">Bino</span>
            </div>
            <div className="mt-8 flex h-48 flex-col justify-end rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 p-5 text-slate-900 shadow-lg">
              <Microscope className="mb-2 h-9 w-9" />
              <span className="text-sm font-semibold">Laboratoriya</span>
            </div>
            <div className="flex h-48 flex-col justify-end rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 p-5 text-white shadow-lg">
              <Users className="mb-2 h-9 w-9 text-amber-300" />
              <span className="text-sm font-semibold">Talabalar</span>
            </div>
            <div className="mt-8 flex h-48 flex-col justify-end rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-5 text-white shadow-lg">
              <HeartPulse className="mb-2 h-9 w-9 text-amber-300" />
              <span className="text-sm font-semibold">Practice</span>
            </div>
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">{t.aboutTag}</span>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl lg:text-4xl">{t.aboutTitle}</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">{t.aboutText1}</p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{t.aboutText2}</p>
            <ul className="mt-6 space-y-3">
              {t.aboutFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                  <span className="text-sm text-slate-700">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ MISSION / WHY US ============ */}
      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">{t.missionTag}</span>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl lg:text-4xl">{t.missionTitle}</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.mission.map((m, i) => {
              const Icon = MISSION_ICONS[i];
              return (
                <div key={i} className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-amber-400 transition-colors group-hover:bg-amber-500 group-hover:text-slate-900">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{m.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ PROGRAMS ============ */}
      <section id="programs" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">{t.programsTag}</span>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl lg:text-4xl">{t.programsTitle}</h2>
            <p className="mt-4 text-base text-slate-600">{t.programsText}</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.programs.map((p, i) => {
              const Icon = PROGRAM_ICONS[i % PROGRAM_ICONS.length];
              return (
                <div key={i} className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-amber-200 hover:shadow-xl">
                  <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-amber-50 transition-transform group-hover:scale-150" />
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-md">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-slate-900">{p.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.d}</p>
                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                        <Clock className="h-4 w-4 text-amber-500" /> {p.dur}
                      </span>
                      <button onClick={() => go("admission")} className="inline-flex items-center gap-1 text-sm font-semibold text-amber-600 hover:text-amber-700">
                        {t.apply} <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ ADMISSION ============ */}
      <section id="admission" className="bg-slate-900 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-amber-400">{t.admTag}</span>
            <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">{t.admTitle}</h2>
            <p className="mt-4 text-base text-slate-300">{t.admText}</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.admSteps.map((s, i) => (
              <div key={i} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-500 text-lg font-extrabold text-slate-900">{i + 1}</div>
                <h3 className="mt-4 text-base font-bold text-white">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur sm:p-9">
            <h3 className="flex items-center gap-2 text-lg font-bold text-amber-400">
              <BookOpen className="h-5 w-5" /> {t.admDocsTitle}
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {t.admDocs.map((d, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                  <span className="text-sm text-slate-200">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section id="gallery" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">{t.galleryTag}</span>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl lg:text-4xl">{t.galleryTitle}</h2>
            <p className="mt-4 text-base text-slate-600">{t.galleryText}</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { Icon: Building2, c: "from-blue-600 to-blue-800", big: true },
              { Icon: Microscope, c: "from-amber-400 to-amber-600" },
              { Icon: Stethoscope, c: "from-slate-700 to-slate-900" },
              { Icon: Users, c: "from-blue-500 to-blue-700" },
              { Icon: Pill, c: "from-amber-500 to-orange-600" },
              { Icon: HeartPulse, c: "from-blue-700 to-blue-900", big: true },
              { Icon: GraduationCap, c: "from-slate-800 to-slate-900" },
              { Icon: Award, c: "from-amber-400 to-amber-600" },
            ].map((g, i) => {
              const Icon = g.Icon;
              return (
                <div key={i} className={`group flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${g.c} shadow-md transition-transform hover:scale-[1.03] ${g.big ? "col-span-2 h-48 lg:h-64" : "h-40 lg:h-52"}`}>
                  <Icon className="h-14 w-14 text-white/85 transition-transform group-hover:scale-110" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">{t.contactTag}</span>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl lg:text-4xl">{t.contactTitle}</h2>
            <p className="mt-4 text-base text-slate-600">{t.contactText}</p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              {t.contactInfo.map((c, i) => {
                const Icon = [MapPin, Phone, Mail, Clock][i];
                return (
                  <div key={i} className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-amber-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">{c.t}</div>
                      <div className="mt-0.5 text-sm font-medium text-slate-800">{c.v}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); e.target.reset(); setTimeout(() => setSent(false), 4000); }}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="space-y-4">
                <input required placeholder={t.formName} className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-amber-400 focus:ring-2 focus:ring-amber-100" />
                <input required placeholder={t.formPhone} className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-amber-400 focus:ring-2 focus:ring-amber-100" />
                <textarea required rows={4} placeholder={t.formMsg} className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-amber-400 focus:ring-2 focus:ring-amber-100" />
                <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-semibold text-slate-900 shadow transition-colors hover:bg-amber-400">
                  <Send className="h-4 w-4" /> {t.formBtn}
                </button>
                {sent && (
                  <p className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                    <CheckCircle2 className="h-5 w-5" /> {t.formThanks}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-slate-900 px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600">
                  <HeartPulse className="h-6 w-6 text-slate-900" />
                </div>
                <div className="leading-tight">
                  <div className="text-base font-bold text-amber-400">{t.brandTop}</div>
                  <div className="text-xs text-slate-300">{t.brandBottom}</div>
                </div>
              </div>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">{t.footerAbout}</p>
              <div className="mt-5 flex gap-3">
                {[Facebook, Instagram, Send].map((Icon, i) => (
                  <a key={i} href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-slate-300 transition-colors hover:bg-amber-500 hover:text-slate-900">
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">{t.footerLinks}</h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((l) => (
                  <li key={l.id}>
                    <button onClick={() => go(l.id)} className="text-sm text-slate-400 transition-colors hover:text-amber-400">{l.label}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">{t.footerContact}</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" /> {t.contactInfo[0].v}</li>
                <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0 text-amber-500" /> {t.contactInfo[1].v}</li>
                <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0 text-amber-500" /> {t.contactInfo[2].v}</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} {t.brandTop} {t.brandBottom}. {t.rights}
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-slate-900 shadow-lg transition-transform hover:scale-110">
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
