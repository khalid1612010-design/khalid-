import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  HiOutlineCheck,
  HiOutlineExternalLink,
  HiOutlineCode,
  HiOutlineDesktopComputer,
  HiOutlineBriefcase,
  HiOutlineArrowRight,
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineAcademicCap,
  HiOutlineCog,
  HiOutlineSearch,
  HiOutlineLightBulb,
  HiOutlineChip
} from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaWhatsapp, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiSupabase } from 'react-icons/si';

// ---------------------------------------------------------------------------
// Contact details
// ---------------------------------------------------------------------------
// Add your email address here and the Email button will appear automatically
// in the Contact section and the footer. Leave it empty to hide it.
const CONTACT_EMAIL: string = '';

const GITHUB_URL = 'https://github.com/khalid1612010-design';
const LINKEDIN_URL = 'https://www.linkedin.com/in/khaled-mohamed-3725143a9/';
const WHATSAPP_URL = 'https://wa.me/201550527744';

const contactLinks = [
  ...(CONTACT_EMAIL
    ? [{ label: 'Email', href: `mailto:${CONTACT_EMAIL}`, icon: <HiOutlineMail className="w-5 h-5" /> }]
    : []),
  { label: 'LinkedIn', href: LINKEDIN_URL, icon: <FaLinkedin className="w-5 h-5" /> },
  { label: 'GitHub', href: GITHUB_URL, icon: <FaGithub className="w-5 h-5" /> },
  { label: 'WhatsApp', href: WHATSAPP_URL, icon: <FaWhatsapp className="w-5 h-5" /> }
];

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------
const content = {
  nav: [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#philosophy', label: 'Philosophy' },
    { href: '#contact', label: 'Contact' }
  ],
  hero: {
    tagline: 'Web Developer | Building Real-World Digital Solutions',
    headline1: 'Building Digital Solutions',
    headline2: 'That Solve Real Problems.',
    description:
      "I'm Khaled Mohamed, a Web Developer with hands-on experience building responsive websites, web applications, and business systems. I enjoy solving problems, learning new technologies, and turning ideas into practical digital products.",
    cta1: 'Explore My Projects',
    cta2: 'Contact Me'
  },
  about: {
    title: 'About Me',
    subtitle: 'Web Developer Based in Egypt',
    paragraphs: [
      "I'm a Web Developer based in Egypt with practical experience working in a marketing agency environment at KAIZEN. There I worked on real-world websites, educational platforms, portfolios, and business systems.",
      'My experience includes frontend development, database integration, and backend functionality using Supabase. I\'ve also studied React.js and Node.js, and I\'m continuously expanding my technical skills.',
      'I enjoy learning, experimenting, and solving technical problems, and I\'m looking to keep growing by contributing to a team on real development challenges.'
    ],
    facts: [
      { label: 'Based in', value: 'Egypt', icon: 'location' },
      { label: 'Experience', value: 'KAIZEN (Marketing Agency)', icon: 'briefcase' },
      { label: 'Focus', value: 'Frontend & Supabase', icon: 'code' },
      { label: 'Studying', value: 'React.js & Node.js', icon: 'learning' }
    ]
  },
  skills: {
    title: 'Technical Skills',
    subtitle: 'The technologies and tools I work with',
    categories: [
      {
        title: 'Frontend Development',
        icon: 'frontend',
        items: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design']
      },
      {
        title: 'Backend & Database',
        icon: 'backend',
        items: ['Supabase', 'Database Integration', 'Authentication', 'CRUD Operations']
      },
      {
        title: 'Tools & Workflow',
        icon: 'tools',
        items: ['Git & GitHub', 'Vercel', 'AI-Assisted Development Tools', 'API Integration']
      }
    ],
    learning: {
      title: 'Currently Learning',
      note: "Technologies I've studied and am building hands-on experience with.",
      items: [
        { name: 'React.js', icon: 'react' },
        { name: 'Node.js', icon: 'node' }
      ]
    }
  },
  experience: {
    title: 'Professional Experience',
    subtitle: 'Practical experience in a real business environment',
    role: 'Web Developer',
    company: 'KAIZEN',
    type: 'Marketing Agency',
    description:
      'Contributed to website and business-system development in a marketing and business environment, working on practical tools that support how a company operates and serves its clients.',
    highlightsTitle: 'Areas I worked on',
    highlights: [
      'Internal business management systems',
      'Employee task tracking',
      'Client follow-up systems',
      'Digital product catalogs',
      'Inventory management workflows'
    ],
    skillsTitle: 'Skills applied',
    skills: ['Frontend development', 'Database integration', 'Backend functionality with Supabase']
  },
  projects: {
    title: 'Featured Projects',
    subtitle: 'Real websites I built, with the problem each one addresses',
    labels: { problem: 'Problem', solution: 'Solution', role: 'My role', live: 'View live site' },
    items: [
      {
        title: 'Kaizen Adv. Agency Platform',
        category: 'Business Platform',
        problem:
          'A printing and promotional-products agency needed an online catalog and a simple way to receive quote requests and manage its own content.',
        solution:
          'A bilingual storefront with a filterable product catalog, WhatsApp quote requests, user accounts, and an admin dashboard for managing products, services, portfolio items, and requests.',
        stack: ['Supabase', 'Authentication', 'CRUD Operations', 'Image Uploads', 'Admin Dashboard'],
        role: 'Built the front end and the Supabase-backed functionality.',
        url: 'https://kgroup-theta.vercel.app/'
      },
      {
        title: 'Abdulrahman Editor',
        category: 'Creative Portfolio',
        problem:
          'A video editor needed a professional place to showcase his work and receive project requests from clients.',
        solution:
          'A portfolio with services, reviews, and a project request form that sends the inquiry straight to WhatsApp, plus an admin page.',
        stack: ['Form Validation', 'WhatsApp Integration', 'Admin Page', 'Responsive Design'],
        role: 'Designed and developed the website.',
        url: 'https://abdulrahman-editor.vercel.app/'
      },
      {
        title: 'Watazawadoo',
        category: 'Educational Platform',
        problem:
          'An online academy needed to present its courses and make enrolling easy for students and parents in different time zones.',
        solution:
          'A bilingual (Arabic/English) site with a course catalog, a booking page, testimonials, an FAQ, and WhatsApp enrollment links.',
        stack: ['Bilingual UI', 'Multi-page Site', 'Booking Flow', 'WhatsApp Integration'],
        role: 'Designed and developed the website.',
        url: 'https://watazawadoo.vercel.app/'
      },
      {
        title: 'Noor Al Arqam',
        category: 'Educational Institution',
        problem:
          'A Quran academy needed to build trust with new students and turn visitors into free-trial bookings.',
        solution:
          'An Arabic site presenting programs, statistics, testimonials, and an FAQ, with a free-trial booking page and a pre-filled WhatsApp inquiry.',
        stack: ['RTL Layout', 'SEO Metadata', 'Responsive Design', 'WhatsApp Deep Links'],
        role: 'Designed and developed the website.',
        url: 'https://noor-al-arqam.vercel.app/'
      },
      {
        title: 'Academie Steel',
        category: 'Landing Page',
        problem:
          'A private math and physics tutor needed an online presence to reach students and take session bookings.',
        solution:
          'An Arabic landing page covering services, benefits, and student testimonials, with booking buttons that open WhatsApp with a ready message.',
        stack: ['RTL Layout', 'Responsive Design', 'WhatsApp Deep Links'],
        role: 'Designed and developed the website.',
        url: 'https://academie-steel.vercel.app/'
      },
      {
        title: 'Nasser Sameh',
        category: 'Professional Portfolio',
        problem:
          'A script writer and marketing strategist needed a bilingual site to present his services and drive bookings.',
        solution:
          'A portfolio with services, work process, client results, and an FAQ, available in Arabic and English with booking calls to action.',
        stack: ['Bilingual UI', 'RTL Support', 'Image Lightbox', 'Accessibility'],
        role: 'Designed and developed the website.',
        url: 'https://nassersameh.vercel.app/'
      }
    ]
  },
  philosophy: {
    title: 'My Development Philosophy',
    subtitle: 'How I think about building software',
    paragraphs: [
      "Software development is not just about writing code. It's about understanding problems, finding effective solutions, and using the right tools to build better products.",
      'I believe modern developers should know how to leverage AI and emerging technologies to improve productivity and development speed without compromising quality.'
    ],
    pillars: [
      { title: 'Understand the problem', icon: 'search' },
      { title: 'Find effective solutions', icon: 'idea' },
      { title: 'Use the right tools', icon: 'tools' }
    ]
  },
  contact: {
    title: "Let's Build Something Meaningful Together.",
    description:
      "I'm always open to connecting with developers, teams, and companies looking for someone motivated to learn, contribute, and grow through real-world development challenges."
  },
  footer: {
    description: 'Web Developer focused on building practical, real-world digital solutions.',
    rights: 'All rights reserved.'
  }
};

// ---------------------------------------------------------------------------
// Icon helpers
// ---------------------------------------------------------------------------
const FactIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactElement> = {
    location: <HiOutlineLocationMarker className="w-6 h-6" />,
    briefcase: <HiOutlineBriefcase className="w-6 h-6" />,
    code: <HiOutlineCode className="w-6 h-6" />,
    learning: <HiOutlineAcademicCap className="w-6 h-6" />
  };
  return icons[type] || <HiOutlineCode className="w-6 h-6" />;
};

const SkillCategoryIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactElement> = {
    frontend: <HiOutlineDesktopComputer className="w-7 h-7" />,
    backend: <SiSupabase className="w-7 h-7" />,
    tools: <HiOutlineCog className="w-7 h-7" />
  };
  return icons[type] || <HiOutlineCode className="w-7 h-7" />;
};

const LearningIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactElement> = {
    react: <FaReact className="w-6 h-6" />,
    node: <FaNodeJs className="w-6 h-6" />
  };
  return icons[type] || <HiOutlineCode className="w-6 h-6" />;
};

const PillarIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactElement> = {
    search: <HiOutlineSearch className="w-6 h-6" />,
    idea: <HiOutlineLightBulb className="w-6 h-6" />,
    tools: <HiOutlineChip className="w-6 h-6" />
  };
  return icons[type] || <HiOutlineCode className="w-6 h-6" />;
};

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className="text-center mb-16"
  >
    <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
    <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
  </motion.div>
);

// ---------------------------------------------------------------------------
// Components
// ---------------------------------------------------------------------------
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = content.nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-strong shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-xl md:text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            KHALED<span className="text-white">.</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg glass"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-strong rounded-b-xl"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  const t = content.hero;
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/50 to-black"></div>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 text-center"
      >
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></span>
          <span className="text-sm text-gray-300">{t.tagline}</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">{t.headline1}</span>
          <br />
          <span className="gradient-text">{t.headline2}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10"
        >
          {t.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            className="btn-primary px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.cta1}
            <HiOutlineArrowRight className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#contact"
            className="btn-outline px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.cta2}
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  const t = content.about;

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.title}</h2>
            <h3 className="text-xl md:text-2xl gradient-text mb-6">{t.subtitle}</h3>
            <div className="space-y-4">
              {t.paragraphs.map((p, index) => (
                <p key={index} className="text-gray-400 text-lg">
                  {p}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Quick facts */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="grid sm:grid-cols-2 gap-6"
          >
            {t.facts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-blue-400 mb-4">
                  <FactIcon type={fact.icon} />
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{fact.label}</div>
                <div className="text-white font-semibold">{fact.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const t = content.skills;

  return (
    <section id="skills" className="py-20 md:py-32 bg-gradient-to-b from-black via-slate-900/30 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={t.title} subtitle={t.subtitle} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {t.categories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass rounded-2xl p-8 card-hover group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <SkillCategoryIcon type={category.icon} />
              </div>
              <h3 className="text-xl font-semibold mb-5 text-white">{category.title}</h3>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <HiOutlineCheck className="w-5 h-5 text-green-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Currently Learning */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-6 relative p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
          <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="md:max-w-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-3">
                <HiOutlineAcademicCap className="w-4 h-4 text-cyan-400" />
                <span className="text-xs text-cyan-400 font-medium uppercase tracking-wider">In progress</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t.learning.title}</h3>
              <p className="text-gray-400 text-sm">{t.learning.note}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              {t.learning.items.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="flex items-center gap-3 px-6 py-4 glass rounded-xl hover:bg-white/10 transition-all cursor-default"
                >
                  <div className="text-blue-400">
                    <LearningIcon type={tech.icon} />
                  </div>
                  <span className="text-white font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Experience = () => {
  const t = content.experience;

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={t.title} subtitle={t.subtitle} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative pl-8 md:pl-10"
        >
          {/* Timeline line + dot */}
          <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500"></div>
          <div className="absolute -left-[7px] top-2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 animate-pulse-glow"></div>

          <div className="glass rounded-2xl p-8 md:p-10 card-hover">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {t.role} <span className="gradient-text">– {t.company}</span>
                </h3>
                <p className="text-gray-400 mt-1">{t.type}</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                <HiOutlineBriefcase className="w-6 h-6" />
              </div>
            </div>

            <p className="text-gray-300 text-lg mb-8">{t.description}</p>

            <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-4">{t.highlightsTitle}</h4>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {t.highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 glass rounded-xl">
                  <div className="w-6 h-6 rounded-md bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <HiOutlineCheck className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-4">{t.skillsTitle}</h4>
            <div className="flex flex-wrap gap-3">
              {t.skills.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 glass rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Projects = () => {
  const t = content.projects;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const gradients = [
    'from-blue-600 to-purple-600',
    'from-cyan-500 to-blue-600',
    'from-purple-600 to-pink-600',
    'from-emerald-500 to-cyan-600',
    'from-indigo-600 to-blue-500',
    'from-orange-500 to-red-600'
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-black via-slate-900/30 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={t.title} subtitle={t.subtitle} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {t.items.map((project, index) => (
            <motion.div
              key={project.url}
              variants={fadeInUp}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 card-hover flex flex-col"
            >
              {/* Thumbnail Placeholder */}
              <div className={`aspect-video bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-white font-bold text-2xl opacity-30">
                  {project.title.charAt(0)}
                </div>
                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center"
                >
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: hoveredIndex === index ? 1 : 0.8 }}
                    className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <HiOutlineExternalLink className="w-5 h-5" />
                    Live Preview
                  </motion.a>
                </motion.div>
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs text-blue-400 font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-white mt-2 mb-4">{project.title}</h3>

                <div className="space-y-3 text-sm mb-4">
                  <p className="text-gray-400">
                    <span className="text-gray-200 font-medium">{t.labels.problem}: </span>
                    {project.problem}
                  </p>
                  <p className="text-gray-400">
                    <span className="text-gray-200 font-medium">{t.labels.solution}: </span>
                    {project.solution}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-gray-400 mb-5">
                  <span className="text-gray-200 font-medium">{t.labels.role}: </span>
                  {project.role}
                </p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {t.labels.live}
                  <HiOutlineExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  const t = content.philosophy;

  return (
    <section id="philosophy" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={t.title} subtitle={t.subtitle} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="gradient-border rounded-3xl p-8 md:p-12"
        >
          <div className="text-6xl leading-none font-serif gradient-text mb-4 select-none">“</div>
          <div className="space-y-6">
            {t.paragraphs.map((p, index) => (
              <p
                key={index}
                className={index === 0 ? 'text-xl md:text-2xl text-white leading-relaxed' : 'text-lg text-gray-400 leading-relaxed'}
              >
                {p}
              </p>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-10">
            {t.pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 glass rounded-xl"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <PillarIcon type={pillar.icon} />
                </div>
                <span className="text-sm text-gray-200 font-medium">{pillar.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  const t = content.contact;

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-black via-slate-900/30 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">{t.title}</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">{t.description}</p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`${
                  index === 0 ? 'btn-primary animate-pulse-glow' : 'btn-outline'
                } px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-3 w-full sm:w-auto justify-center`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  const t = content.footer;

  return (
    <footer className="py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div>
            <a href="#home" className="text-2xl font-bold gradient-text">
              KHALED<span className="text-white">.</span>
            </a>
            <p className="text-gray-400 mt-3 text-sm">{t.description}</p>
          </div>

          {/* Links */}
          <div className="flex justify-center gap-6">
            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.1 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Khaled Mohamed</p>
            <p className="text-gray-500 text-xs mt-1">{t.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
          <div className="text-2xl font-bold gradient-text">KHALED<span className="text-white">.</span></div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
