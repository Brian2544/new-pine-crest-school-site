"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Leaf,
  Monitor,
  Pause,
  Play,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const HERO = {
  headline: ["NOURISHING", "TOMORROW'S", "MINDS"],
  subtext:
    "A nurturing, innovative and values-driven environment where every learner is inspired to learn, grow and lead with confidence.",
} as const;

const HERO_IMAGES = [
  {
    src: "/images/hero-students-hq.png",
    alt: "Pine Crest School learners in green blazers reading together outside the school",
  },
  {
    src: "/images/hero-caring-teachers.png",
    alt: "A caring Pine Crest School teacher guiding learners during a lesson",
  },
  {
    src: "/images/hero-modern-facilities.png",
    alt: "Pine Crest School learners using the ICT lab, science laboratory and library",
  },
  {
    src: "/images/hero-supportive-environment.png",
    alt: "A Pine Crest School teacher supporting young learners on the school grounds",
  },
  {
    src: "/images/hero-co-curricular.png",
    alt: "Pine Crest School learners participating in music, art, chess and sports",
  },
] as const;

const AUTOPLAY_INTERVAL = 5500;
const SWIPE_THRESHOLD = 60;

const FEATURES = [
  {
    icon: Users,
    title: "Competency-Based Education",
    subtitle: "Preparing lifelong learners",
  },
  {
    icon: GraduationCap,
    title: "Qualified & Caring Teachers",
    subtitle: "Dedicated to excellence",
  },
  {
    icon: Monitor,
    title: "Modern Facilities",
    subtitle: "ICT Labs, Science Lab, Library & more",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Supportive Environment",
    subtitle: "Your child is our priority",
  },
  {
    icon: Trophy,
    title: "Co-Curricular Activities",
    subtitle: "Nurturing talents",
  },
] as const;

function HeroCarousel() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const isPaused = isManuallyPaused || isInteracting;

  const showSlide = useCallback((nextIndex: number, nextDirection: number) => {
    setDirection(nextDirection);
    setActiveIndex((nextIndex + HERO_IMAGES.length) % HERO_IMAGES.length);
  }, []);

  const advance = useCallback(() => {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    if (isPaused || reduceMotion) return;

    const timer = window.setInterval(advance, AUTOPLAY_INTERVAL);
    return () => window.clearInterval(timer);
  }, [advance, isPaused, reduceMotion]);

  const slideVariants = {
    enter: (slideDirection: number) => ({
      x: reduceMotion ? 0 : slideDirection > 0 ? "24%" : "-24%",
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (slideDirection: number) => ({
      x: reduceMotion ? 0 : slideDirection > 0 ? "-24%" : "24%",
      opacity: 0,
    }),
  };

  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-2xl bg-green-950 shadow-2xl shadow-green-950/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onFocusCapture={() => setIsInteracting(true)}
      onBlurCapture={() => setIsInteracting(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          showSlide(activeIndex - 1, -1);
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          showSlide(activeIndex + 1, 1);
        } else if (event.key === " ") {
          event.preventDefault();
          setIsManuallyPaused((paused) => !paused);
        }
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Pine Crest School highlights. Use left and right arrow keys to change slides."
      tabIndex={0}
    >
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={activeIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: reduceMotion ? 0.15 : 0.8, ease: "easeInOut" }}
          drag={reduceMotion ? false : "x"}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={(_, info) => {
            if (info.offset.x < -SWIPE_THRESHOLD) {
              showSlide(activeIndex + 1, 1);
            } else if (info.offset.x > SWIPE_THRESHOLD) {
              showSlide(activeIndex - 1, -1);
            }
          }}
          className="absolute inset-0 cursor-grab touch-pan-y transform-gpu will-change-transform active:cursor-grabbing"
          role="group"
          aria-roledescription="slide"
          aria-label={`${activeIndex + 1} of ${HERO_IMAGES.length}: ${HERO_IMAGES[activeIndex].alt}`}
        >
          <motion.div
            className="relative h-full w-full transform-gpu will-change-transform"
            initial={{ scale: 1 }}
            animate={{ scale: reduceMotion || isPaused ? 1 : 1.08 }}
            transition={{
              duration: isPaused ? 0 : (AUTOPLAY_INTERVAL + 800) / 1000,
              ease: "easeInOut",
            }}
          >
            <Image
              src={HERO_IMAGES[activeIndex].src}
              alt={HERO_IMAGES[activeIndex].alt}
              fill
              priority={activeIndex === 0}
              quality={92}
              className="select-none object-cover object-center"
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 48vw, 50vw"
              draggable={false}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <p className="sr-only" aria-live="polite">
        Slide {activeIndex + 1} of {HERO_IMAGES.length}: {HERO_IMAGES[activeIndex].alt}
      </p>

      <div className="absolute bottom-3 right-3 z-10 flex gap-1.5">
        <button
          type="button"
          onClick={() => showSlide(activeIndex - 1, -1)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-green-950/80 text-white shadow-md backdrop-blur-sm transition hover:bg-green-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          aria-label="Show previous image"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => setIsManuallyPaused((paused) => !paused)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-green-950/80 text-white shadow-md backdrop-blur-sm transition hover:bg-green-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          aria-label={isManuallyPaused ? "Play image carousel" : "Pause image carousel"}
          aria-pressed={isManuallyPaused}
        >
          {isManuallyPaused ? (
            <Play className="h-4 w-4" aria-hidden />
          ) : (
            <Pause className="h-4 w-4" aria-hidden />
          )}
        </button>
        <button
          type="button"
          onClick={() => showSlide(activeIndex + 1, 1)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-green-950/80 text-white shadow-md backdrop-blur-sm transition hover:bg-green-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          aria-label="Show next image"
        >
          <ChevronRight className="h-4 w-4" aria-hidden />
        </button>
      </div>

    </div>
  );
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section aria-label="Welcome to Pine Crest School">
      {/* ── Main hero area ─────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#FDFAF1] via-[#FAF4E4] to-[#F3EAD2]">
        {/* Soft golden glow behind the content */}
        <div
          className="pointer-events-none absolute -left-24 top-0 h-[480px] w-[480px] rounded-full bg-amber-200/40 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-7xl px-4 sm:px-6 md:h-[420px] md:min-h-[420px] md:grid-cols-[minmax(0,46%)_minmax(0,54%)] md:gap-0 lg:h-[440px] lg:min-h-[440px] lg:max-h-[440px] lg:px-8">
          <motion.div
            className="flex max-w-xl flex-col justify-center py-12 sm:py-14 md:h-full md:py-8"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.12 }}
          >
            {/* Headline */}
            <h1 className="font-sans text-5xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-6xl md:text-5xl lg:text-[3.4rem] xl:text-[4rem]">
              <motion.span variants={fadeUp} transition={{ duration: 0.5 }} className="block text-green-950">
                {HERO.headline[0]}
              </motion.span>
              <motion.span variants={fadeUp} transition={{ duration: 0.5 }} className="block text-[#D9A32B]">
                {HERO.headline[1]}
              </motion.span>
              <motion.span
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 text-green-950"
              >
                {HERO.headline[2]}
                <Leaf className="h-9 w-9 text-green-700 sm:h-11 sm:w-11" aria-hidden />
              </motion.span>
            </h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-6 max-w-md text-base leading-relaxed text-slate-700 sm:text-lg"
            >
              {HERO.subtext}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.div whileHover={reduceMotion ? undefined : { scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/admissions/apply"
                  className="inline-flex items-center gap-2 rounded-lg bg-green-950 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-green-950/25 transition-colors hover:bg-green-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
                >
                  Admissions Open
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </motion.div>
              <motion.div whileHover={reduceMotion ? undefined : { scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-green-900 bg-white/90 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-green-950 transition-colors hover:bg-green-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
                >
                  Schedule a Visit
                  <CalendarDays className="h-4 w-4" aria-hidden />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Responsive image carousel: right side on tablet/desktop, below copy on mobile. */}
          <motion.div
            className="relative mb-8 aspect-[3/2] min-h-0 sm:mb-10 md:-ml-4 md:mb-0 md:h-full md:w-[calc(100%+1rem)] md:aspect-auto lg:-ml-16 lg:w-[calc(100%+4rem)] xl:-ml-20 xl:w-[calc(100%+5rem)]"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <HeroCarousel />
          </motion.div>
        </div>
      </div>

      {/* ── Feature strip ──────────────────────────────────────── */}
      <div className="bg-[#0F3D26]">
        <motion.ul
          className="mx-auto grid max-w-7xl grid-cols-2 gap-px sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-green-800/60"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {FEATURES.map((feature) => (
            <motion.li
              key={feature.title}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="flex flex-col items-center px-4 py-7 text-center"
            >
              <feature.icon className="h-8 w-8 text-[#E3A72F]" strokeWidth={1.75} aria-hidden />
              <p className="mt-3 text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
                {feature.title}
              </p>
              <p className="mt-1 text-xs leading-snug text-green-100/90">
                {feature.subtitle}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div
        className="h-12 bg-gradient-to-b from-[#0F3D26] via-[#5F796A] to-[#C8D0C4] sm:h-16"
        aria-hidden
      />
    </section>
  );
}
