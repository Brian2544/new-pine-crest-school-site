export const SITE_URL = "https://pinecrestschool.sc.ke";

export const LOGO_PATH = "/logo.png";

export const SCHOOL = {
  name: "Pine Crest School",
  slogan: "Nourishing Tomorrow's Minds",
  tagline: "A progressive, values-based day school in Ruiru, Kihunguro",
  address: "Kihunguro, behind Ruiru Star High School, Ruiru, Kenya",
  phones: ["0723720839", "0720943968"],
  email: "admin@pinecrestschool.sc.ke",
  hours: "Monday – Friday, 7:30 AM – 4:30 PM",
  whatsapp: "254723720839",
  stats: {
    years: 10,
    students: 500,
    staff: 30,
  },
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Vision, Mission & Values", href: "/about/vision-mission" },
      { label: "Strategic Pillars", href: "/about/strategic-pillars" },
      { label: "Director's Note", href: "/about/directors-note" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Overview", href: "/academics" },
      { label: "Pre-Primary", href: "/academics/pre-primary" },
      { label: "Lower Primary", href: "/academics/lower-primary" },
      { label: "Upper Primary", href: "/academics/upper-primary" },
      { label: "Junior School", href: "/academics/junior-school" },
    ],
  },
  { label: "Co-Curricular", href: "/co-curricular" },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Overview", href: "/admissions" },
      { label: "Apply Online", href: "/admissions/apply" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
] as const;

export const CORE_VALUES = [
  {
    title: "Excellence",
    description:
      "We strive for excellence in all we do, recognizing both relative and absolute standards and producing our best at all times.",
  },
  {
    title: "Integrity",
    description:
      "We value strength of character, honesty, and courage, guided by a strong moral code of behavior.",
  },
  {
    title: "Hard Work",
    description:
      "Hard work builds character, drives success, and empowers future achievements daily.",
  },
  {
    title: "Commitment",
    description:
      "Commitment inspires dedication, fosters growth, and ensures excellence in learning.",
  },
  {
    title: "Respect & Innovation",
    description:
      "We honour diverse learning needs and encourage creativity, engagement, and lifelong learning.",
  },
] as const;

export const PILLARS = [
  {
    title: "Academic Excellence",
    description:
      "We offer learners a firm, all-round foundation through KICD-aligned Competency-Based Education, preparing them for success beyond Junior School.",
    icon: "graduation-cap" as const,
  },
  {
    title: "Spiritual Nourishment",
    description:
      "Rooted in Christian values, we nurture spiritual growth for learners and staff alongside academic and co-curricular development.",
    icon: "heart" as const,
  },
  {
    title: "Technology",
    description:
      "We integrate digital learning resources and ICT to equip learners for Kenya's evolving, technology-driven world.",
    icon: "laptop" as const,
  },
] as const;

export const FACILITIES = [
  {
    title: "Computer Laboratory",
    description:
      "Modern ICT lab supporting digital literacy, coding, research, and interactive learning from an early age.",
    icon: "monitor" as const,
  },
  {
    title: "Science Laboratory",
    description:
      "Well-equipped science lab for safe, hands-on experiments that prepare learners for STEM careers.",
    icon: "school" as const,
  },
  {
    title: "School Transport",
    description:
      "Reliable transport services for learners in surrounding Ruiru and Kihunguro neighbourhoods.",
    icon: "bus" as const,
  },
  {
    title: "Games & Sports",
    description:
      "Football, athletics, and diverse sporting activities that build teamwork, fitness, and character.",
    icon: "trophy" as const,
  },
  {
    title: "Nutritious Meals",
    description:
      "Balanced, wholesome meals to support learners' health, energy, and concentration.",
    icon: "utensils" as const,
  },
] as const;

export const CURRICULUM_LEVELS = [
  {
    title: "Pre-Primary",
    grades: "Play Group, PP1 & PP2",
    ages: "Ages 4–5",
    href: "/academics/pre-primary",
    description:
      "Early Years Education with play-based learning across language, maths, environment, creativity, and religious activities.",
  },
  {
    title: "Lower Primary",
    grades: "Grades 1–3",
    ages: "Ages 6–8",
    href: "/academics/lower-primary",
    description:
      "Foundational literacy, numeracy, and competencies through KICD learning areas, strands, and sub-strands.",
  },
  {
    title: "Upper Primary",
    grades: "Grades 4–6",
    ages: "Ages 9–11",
    href: "/academics/upper-primary",
    description:
      "Deeper subject mastery, critical thinking, and continuous Competency-Based Assessment (CBA) preparation.",
  },
  {
    title: "Junior School",
    grades: "Grades 7–9",
    ages: "Ages 12–14",
    href: "/academics/junior-school",
    description:
      "Integrated Science, Pre-Technical Studies, Life Skills, and pathway exploration ahead of Senior School.",
  },
] as const;

export const GRADE_OPTIONS = [
  "Play Group",
  "PP1",
  "PP2",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
] as const;

export const FAQ_ITEMS = [
  {
    question: "Where is Pine Crest School located?",
    answer:
      "We are located in Ruiru, Kihunguro, behind Ruiru Star High School. Our campus is easily accessible for families in Ruiru and surrounding areas.",
  },
  {
    question: "What curriculum does Pine Crest School follow?",
    answer:
      "We deliver Kenya's Competency-Based Education (CBE), aligned with KICD curriculum designs. Learning is learner-centred, values-based, and assessed through Competency-Based Assessment (CBA) using BE, AE, ME, and EE rubric bands.",
  },
  {
    question: "What education levels do you offer?",
    answer:
      "Pine Crest is a Comprehensive School offering Play Group and Pre-Primary (PP1–PP2), Lower Primary (Grades 1–3), Upper Primary (Grades 4–6), and Junior School (Grades 7–9) under the 2-6-3-3-3 education system.",
  },
  {
    question: "Do you offer school transport?",
    answer:
      "Yes. We provide school transport to a large percentage of learners living in surrounding Ruiru and Kihunguro neighbourhoods.",
  },
  {
    question: "What are your official school hours?",
    answer: "Our school operates Monday to Friday, from 7:30 AM to 4:30 PM.",
  },
  {
    question: "What co-curricular activities are available?",
    answer:
      "Learners participate in sports, games, athletics, cultural activities, clubs, and events that support physical, social, emotional, and creative development.",
  },
  {
    question: "How do I apply for admission?",
    answer:
      "Visit our Apply Online page, complete the admission form, and our admissions office will contact you with next steps. You can also call us or message us on WhatsApp.",
  },
  {
    question: "What is Competency-Based Education (CBE)?",
    answer:
      "CBE (formerly CBC) is Kenya's national education framework focused on developing competencies — skills, values, and knowledge — rather than rote memorisation. Learners progress through structured learning areas with continuous assessment.",
  },
] as const;

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Admissions Flyer 2026",
    category: "Admissions",
    image: "/images/admissions-flyer.jpg",
    alt: "Pine Crest School admissions flyer showcasing modern laboratories and school life",
  },
  {
    id: 2,
    title: "Computer Laboratory",
    category: "Facilities",
    image: "/images/computer-lab.jpg",
    alt: "Learner using a laptop in the Pine Crest School computer laboratory",
  },
  {
    id: 3,
    title: "Science Laboratory",
    category: "Facilities",
    image: "/images/science-lab.jpg",
    alt: "Learners conducting science experiments in lab coats at Pine Crest School",
  },
  {
    id: 4,
    title: "Co-Curricular Life",
    category: "Activities",
    image: "/images/extracurricular.jpg",
    alt: "Sports, music, clubs, culture, and community service at Pine Crest School",
  },
] as const;

export const NEWS_ARTICLES = [
  {
    slug: "what-is-competency-based-education",
    title: "What is Competency-Based Education (CBE)? A Parent's Guide",
    excerpt:
      "Understand Kenya's CBE system, how learners are assessed, and what it means for your child's education journey.",
    date: "2026-03-01",
    category: "Education Guide",
  },
  {
    slug: "why-choose-a-christian-school-in-ruiru",
    title: "Why Choose a Christian School in Ruiru?",
    excerpt:
      "Discover how values-based education shapes character, discipline, and holistic learner development.",
    date: "2026-02-15",
    category: "School Life",
  },
  {
    slug: "preparing-for-junior-school-grades-7-9",
    title: "Preparing Your Child for Junior School: Grades 7–9 Explained",
    excerpt:
      "A practical guide to Junior School learning areas, assessments, and the transition from Upper Primary.",
    date: "2026-01-20",
    category: "Academics",
  },
] as const;
