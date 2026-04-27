import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/5b481862-ab13-400a-b264-6b51541735d6/files/88d55270-7d79-47f4-94b8-75aae57afa23.jpg";

const navLinks = [
  { label: "О банкротстве", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Прайс", href: "#price" },
  { label: "Вопрос — ответ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

const services = [
  {
    icon: "Scale",
    title: "Банкротство физических лиц",
    desc: "Полное сопровождение процедуры банкротства — от подачи заявления до списания долгов.",
  },
  {
    icon: "FileText",
    title: "Подготовка документов",
    desc: "Сбор и оформление полного пакета документов для подачи в Арбитражный суд.",
  },
  {
    icon: "Shield",
    title: "Защита имущества",
    desc: "Разработка стратегии по сохранению активов в рамках законных механизмов.",
  },
  {
    icon: "Users",
    title: "Переговоры с кредиторами",
    desc: "Проведение переговоров и заключение мировых соглашений с банками и коллекторами.",
  },
  {
    icon: "Gavel",
    title: "Судебное представительство",
    desc: "Защита ваших интересов на всех заседаниях Арбитражного суда.",
  },
  {
    icon: "RefreshCw",
    title: "Реструктуризация долгов",
    desc: "Разработка и согласование плана реструктуризации для выхода из долговой нагрузки.",
  },
];

const prices = [
  {
    title: "Консультация",
    price: "Бесплатно",
    desc: "Первичный анализ вашей ситуации",
    features: ["Оценка долговой нагрузки", "Анализ перспектив", "Выбор оптимальной стратегии"],
    accent: false,
  },
  {
    title: "Стандарт",
    price: "от 80 000 ₽",
    desc: "Полное сопровождение под ключ",
    features: [
      "Подготовка всех документов",
      "Представительство в суде",
      "Взаимодействие с управляющим",
      "Сопровождение до завершения",
    ],
    accent: true,
  },
  {
    title: "Бизнес",
    price: "от 150 000 ₽",
    desc: "Для сложных ситуаций",
    features: [
      "Всё из тарифа Стандарт",
      "Защита имущества",
      "Оспаривание сделок",
      "Личный юрист 24/7",
    ],
    accent: false,
  },
];

const faqs = [
  {
    q: "Что такое банкротство физического лица?",
    a: "Банкротство физического лица — это законная процедура, позволяющая гражданину освободиться от долгов, которые он не может погасить. С 2015 года в России действует закон, дающий такое право каждому.",
  },
  {
    q: "Кто может подать на банкротство?",
    a: "На банкротство может подать гражданин, чья задолженность превышает 50 000 ₽ и который не может исполнять финансовые обязательства. При долге свыше 500 000 ₽ подача заявления становится обязательной.",
  },
  {
    q: "Сколько длится процедура банкротства?",
    a: "В среднем процедура банкротства занимает от 6 до 12 месяцев. Точные сроки зависят от сложности дела, объёма имущества и количества кредиторов.",
  },
  {
    q: "Что будет с имуществом при банкротстве?",
    a: "Единственное жильё (если не ипотека), предметы быта, одежда и личные вещи защищены законом и не могут быть изъяты. Мы помогаем выстроить стратегию для максимальной защиты ваших активов.",
  },
  {
    q: "Как банкротство повлияет на кредитную историю?",
    a: "После завершения банкротства в кредитной истории появится соответствующая запись. При этом долги будут официально списаны. Через несколько лет многие клиенты снова получают одобрение на небольшие кредиты.",
  },
  {
    q: "Можно ли сохранить автомобиль при банкротстве?",
    a: "Автомобиль может быть включён в конкурсную массу, если не является единственным средством дохода (например, для работы). Наши юристы прорабатывают все законные способы сохранения транспортного средства.",
  },
];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    time: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-cream font-ibm">
      {/* ── NAV ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{ background: "var(--gold)" }}>
              <Icon name="Scale" size={16} className="text-white" />
            </div>
            <span className="font-cormorant text-xl font-semibold text-white tracking-wide">
              АнтиДолг
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors font-ibm tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#consultation"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-medium transition-colors rounded-sm"
            style={{ background: "var(--gold)", color: "#0f1f3d" }}
          >
            Записаться
          </a>

          {/* Mobile burger */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-navy border-t border-white/10 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#consultation"
              className="text-center py-2 text-sm font-medium rounded-sm"
              style={{ background: "var(--gold)", color: "#0f1f3d" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Записаться на консультацию
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(15,31,61,0.93) 50%, rgba(15,31,61,0.55))",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10" style={{ background: "var(--gold)" }} />
              <span
                className="text-xs uppercase tracking-[0.2em] font-ibm"
                style={{ color: "var(--gold-light)" }}
              >
                Юридический центр
              </span>
            </div>
            <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6">
              Освободитесь
              <br />
              <em className="italic font-light" style={{ color: "var(--gold-light)" }}>
                от долгов
              </em>
              <br />
              законно
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-10 font-ibm font-light max-w-md">
              Профессиональное сопровождение процедуры банкротства физических
              лиц. Более 500 успешных дел с 2015 года.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium rounded-sm transition-opacity hover:opacity-90"
                style={{ background: "var(--gold)", color: "#0f1f3d" }}
              >
                <Icon name="CalendarCheck" size={16} />
                Бесплатная консультация
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium rounded-sm border text-white border-white/30 hover:border-white/60 transition-colors"
              >
                Узнать больше
                <Icon name="ArrowDown" size={16} />
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/15 pt-8">
              {[
                { num: "500+", label: "Дел закрыто" },
                { num: "98%", label: "Долгов списано" },
                { num: "8 лет", label: "На рынке" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="font-cormorant text-3xl font-semibold"
                    style={{ color: "var(--gold-light)" }}
                  >
                    {stat.num}
                  </div>
                  <div className="text-xs text-white/50 mt-1 font-ibm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── О БАНКРОТСТВЕ ── */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10" style={{ background: "var(--gold)" }} />
                <span className="text-xs uppercase tracking-[0.2em] font-ibm text-muted-foreground">
                  О процедуре
                </span>
              </div>
              <h2
                className="font-cormorant text-5xl font-light leading-tight mb-8"
                style={{ color: "var(--navy)" }}
              >
                Что такое
                <br />
                <em className="italic" style={{ color: "var(--gold)" }}>
                  банкротство
                </em>
                ?
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed font-ibm font-light">
                <p>
                  Банкротство физических лиц — это законная процедура,
                  введённая в России в 2015 году. Она позволяет гражданину
                  официально признать себя несостоятельным и освободиться от
                  долговых обязательств.
                </p>
                <p>
                  После завершения процедуры все долги, включая кредиты, займы,
                  налоги и долги ЖКХ —{" "}
                  <strong className="text-foreground font-medium">
                    списываются полностью
                  </strong>
                  . Вы получаете возможность начать финансовую жизнь с чистого
                  листа.
                </p>
                <p>
                  Наша команда сопровождает вас на каждом этапе: от первичного
                  анализа ситуации до получения судебного определения о
                  завершении процедуры.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: "CheckCircle",
                  title: "Законная процедура",
                  desc: "Полностью в рамках Федерального закона №127-ФЗ",
                },
                {
                  icon: "Lock",
                  title: "Защита от коллекторов",
                  desc: "С момента подачи заявления звонки и угрозы прекращаются",
                },
                {
                  icon: "TrendingDown",
                  title: "Прекращение роста долга",
                  desc: "Пени и штрафы перестают начисляться",
                },
                {
                  icon: "Home",
                  title: "Жильё сохраняется",
                  desc: "Единственная квартира не может быть изъята",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-sm border border-border hover:border-yellow-200 transition-colors"
                  style={{ background: "var(--cream)" }}
                >
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center mb-4"
                    style={{ background: "var(--navy)" }}
                  >
                    <Icon name={item.icon} fallback="CircleAlert" size={18} className="text-white" />
                  </div>
                  <h4 className="font-ibm font-medium text-sm mb-2 text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── УСЛУГИ ── */}
      <section id="services" className="py-24" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10" style={{ background: "var(--gold)" }} />
              <span className="text-xs uppercase tracking-[0.2em] font-ibm text-muted-foreground">
                Что мы делаем
              </span>
              <div className="h-px w-10" style={{ background: "var(--gold)" }} />
            </div>
            <h2
              className="font-cormorant text-5xl font-light"
              style={{ color: "var(--navy)" }}
            >
              Наши услуги
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white p-8 rounded-sm border border-border hover:shadow-md transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center mb-6"
                  style={{ background: "var(--navy)" }}
                >
                  <Icon name={s.icon} fallback="CircleAlert" size={20} className="text-white" />
                </div>
                <h3
                  className="font-cormorant text-2xl font-medium mb-3"
                  style={{ color: "var(--navy)" }}
                >
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-ibm font-light">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ПРАЙС ── */}
      <section id="price" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10" style={{ background: "var(--gold)" }} />
              <span className="text-xs uppercase tracking-[0.2em] font-ibm text-muted-foreground">
                Стоимость
              </span>
              <div className="h-px w-10" style={{ background: "var(--gold)" }} />
            </div>
            <h2
              className="font-cormorant text-5xl font-light"
              style={{ color: "var(--navy)" }}
            >
              Прозрачные цены
            </h2>
            <p className="text-muted-foreground mt-4 font-ibm font-light max-w-lg mx-auto">
              Никаких скрытых платежей. Стоимость фиксируется в договоре.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {prices.map((plan) => (
              <div
                key={plan.title}
                className="rounded-sm p-8 border transition-shadow hover:shadow-lg flex flex-col"
                style={
                  plan.accent
                    ? {
                        background: "var(--navy)",
                        borderColor: "var(--navy-light)",
                        color: "#fff",
                      }
                    : { background: "#fff", borderColor: "hsl(var(--border))" }
                }
              >
                <div className="mb-6">
                  <h3
                    className="font-cormorant text-2xl font-medium mb-1"
                    style={{
                      color: plan.accent ? "var(--gold-light)" : "var(--navy)",
                    }}
                  >
                    {plan.title}
                  </h3>
                  <p
                    className="text-xs font-ibm"
                    style={{
                      color: plan.accent
                        ? "rgba(255,255,255,0.6)"
                        : "hsl(var(--muted-foreground))",
                    }}
                  >
                    {plan.desc}
                  </p>
                </div>

                <div className="mb-8">
                  <span
                    className="font-cormorant text-4xl font-semibold"
                    style={{ color: plan.accent ? "#fff" : "var(--navy)" }}
                  >
                    {plan.price}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Icon
                        name="Check"
                        size={15}
                        className="mt-0.5 flex-shrink-0"
                        style={
                          {
                            color: plan.accent
                              ? "var(--gold-light)"
                              : "var(--gold)",
                          } as React.CSSProperties
                        }
                      />
                      <span
                        className="text-sm font-ibm font-light"
                        style={{
                          color: plan.accent
                            ? "rgba(255,255,255,0.8)"
                            : "hsl(var(--muted-foreground))",
                        }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#consultation"
                  className="text-center py-3 text-sm font-medium rounded-sm transition-opacity hover:opacity-90 block"
                  style={
                    plan.accent
                      ? { background: "var(--gold)", color: "#0f1f3d" }
                      : { background: "var(--navy)", color: "#fff" }
                  }
                >
                  Выбрать
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24" style={{ background: "var(--cream)" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10" style={{ background: "var(--gold)" }} />
              <span className="text-xs uppercase tracking-[0.2em] font-ibm text-muted-foreground">
                FAQ
              </span>
              <div className="h-px w-10" style={{ background: "var(--gold)" }} />
            </div>
            <h2
              className="font-cormorant text-5xl font-light"
              style={{ color: "var(--navy)" }}
            >
              Вопрос — ответ
            </h2>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-border rounded-sm overflow-hidden"
              >
                <button
                  className="w-full text-left px-7 py-5 flex items-center justify-between gap-4 hover:bg-muted/30 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-ibm font-medium text-sm text-foreground">
                    {faq.q}
                  </span>
                  <Icon
                    name={openFaq === i ? "ChevronUp" : "ChevronDown"}
                    size={16}
                    className="flex-shrink-0 text-muted-foreground"
                  />
                </button>
                {openFaq === i && (
                  <div className="px-7 pb-6 text-muted-foreground text-sm leading-relaxed font-ibm font-light border-t border-border pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ФОРМА ЗАПИСИ ── */}
      <section
        id="consultation"
        className="py-24"
        style={{ background: "var(--navy)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10" style={{ background: "var(--gold)" }} />
                <span className="text-xs uppercase tracking-[0.2em] font-ibm text-white/50">
                  Запись
                </span>
              </div>
              <h2 className="font-cormorant text-5xl font-light text-white leading-tight mb-6">
                Запишитесь на
                <br />
                <em className="italic" style={{ color: "var(--gold-light)" }}>
                  бесплатную
                </em>
                <br />
                консультацию
              </h2>
              <p className="text-white/60 font-ibm font-light leading-relaxed mb-10">
                Оставьте заявку — наш юрист свяжется с вами в удобное время,
                изучит ситуацию и предложит оптимальное решение.
              </p>

              <div className="space-y-5">
                {[
                  {
                    icon: "MapPin",
                    text: "Оренбургская обл., г. Орск, ул. Краматорская 35, офис 301 (3 этаж)",
                  },
                  { icon: "Phone", text: "8 (922) 558-02-48" },
                  { icon: "Mail", text: "info@antidolg.ru" },
                  { icon: "Clock", text: "Пн–Пт: 9:00–19:00, Сб: 10:00–16:00" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-4">
                    <div
                      className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--navy-light)" }}
                    >
                      <Icon
                        name={item.icon}
                        fallback="CircleAlert"
                        size={15}
                        style={{ color: "var(--gold-light)" } as React.CSSProperties}
                      />
                    </div>
                    <span className="text-white/70 text-sm font-ibm pt-1.5">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-sm p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: "var(--navy)" }}
                  >
                    <Icon name="CheckCircle" size={30} className="text-white" />
                  </div>
                  <h3
                    className="font-cormorant text-3xl font-medium mb-2"
                    style={{ color: "var(--navy)" }}
                  >
                    Заявка принята!
                  </h3>
                  <p className="text-muted-foreground text-sm font-ibm font-light">
                    Мы свяжемся с вами в ближайшее время.
                  </p>
                </div>
              ) : (
                <>
                  <h3
                    className="font-cormorant text-3xl font-medium mb-6"
                    style={{ color: "var(--navy)" }}
                  >
                    Форма записи
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs uppercase tracking-wider text-muted-foreground font-ibm mb-1.5 block">
                        Ваше имя *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Иван Иванов"
                        className="w-full border border-border rounded-sm px-4 py-3 text-sm font-ibm focus:outline-none focus:border-yellow-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-wider text-muted-foreground font-ibm mb-1.5 block">
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+7 (___) ___-__-__"
                        className="w-full border border-border rounded-sm px-4 py-3 text-sm font-ibm focus:outline-none focus:border-yellow-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-wider text-muted-foreground font-ibm mb-1.5 block">
                        Удобное время
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) =>
                          setFormData({ ...formData, time: e.target.value })
                        }
                        className="w-full border border-border rounded-sm px-4 py-3 text-sm font-ibm focus:outline-none focus:border-yellow-400 transition-colors bg-white text-foreground"
                      >
                        <option value="">Выберите время</option>
                        <option value="morning">Утром (9:00–12:00)</option>
                        <option value="afternoon">Днём (12:00–16:00)</option>
                        <option value="evening">Вечером (16:00–19:00)</option>
                        <option value="saturday">Суббота (10:00–16:00)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-wider text-muted-foreground font-ibm mb-1.5 block">
                        Кратко о ситуации
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Общая сумма долга, количество кредиторов..."
                        className="w-full border border-border rounded-sm px-4 py-3 text-sm font-ibm focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 text-sm font-medium rounded-sm transition-opacity hover:opacity-90 mt-2"
                      style={{ background: "var(--navy)", color: "#fff" }}
                    >
                      Отправить заявку
                    </button>

                    <p className="text-xs text-muted-foreground text-center font-ibm">
                      Нажимая кнопку, вы соглашаетесь с политикой
                      конфиденциальности
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── КОНТАКТЫ ── */}
      <section
        id="contacts"
        className="py-20 bg-white border-t border-border"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2
            className="font-cormorant text-4xl font-light mb-3"
            style={{ color: "var(--navy)" }}
          >
            Контакты
          </h2>
          <p className="text-muted-foreground font-ibm font-light text-sm mb-10">
            Мы работаем для вас каждый день
          </p>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "Phone", label: "Телефон", value: "8 (922) 558-02-48" },
              { icon: "Mail", label: "Email", value: "info@antidolg.ru" },
              {
                icon: "MapPin",
                label: "Адрес",
                value: "г. Орск, ул. Краматорская 35, офис 301",
              },
              { icon: "Clock", label: "Режим работы", value: "Пн–Сб, 9:00–19:00" },
            ].map((c) => (
              <div key={c.label} className="text-center">
                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center mx-auto mb-3"
                  style={{ background: "var(--cream)" }}
                >
                  <Icon
                    name={c.icon}
                    fallback="CircleAlert"
                    size={20}
                    style={{ color: "var(--navy)" } as React.CSSProperties}
                  />
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-ibm mb-1">
                  {c.label}
                </div>
                <div className="text-sm font-ibm font-medium text-foreground">
                  {c.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 border-t border-border" style={{ background: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-sm flex items-center justify-center"
              style={{ background: "var(--gold)" }}
            >
              <Icon name="Scale" size={12} className="text-white" />
            </div>
            <span className="font-cormorant text-lg text-white font-semibold">
              АнтиДолг
            </span>
          </div>
          <p className="text-white/40 text-xs font-ibm">
            © 2024 АнтиДолг. Юридический центр по банкротству физических лиц.
          </p>
          <a
            href="#"
            className="text-white/40 text-xs hover:text-white/70 transition-colors font-ibm"
          >
            Политика конфиденциальности
          </a>
        </div>
      </footer>
    </div>
  );
}