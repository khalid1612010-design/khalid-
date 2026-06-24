import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  HiOutlineGlobeAlt,
  HiOutlineCheck,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineExternalLink,
  HiOutlineCode,
  HiOutlineLightningBolt,
  HiOutlineShieldCheck,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineChat,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineCamera,
  HiOutlineBriefcase,
  HiOutlineStar,
  HiOutlineArrowRight
} from 'react-icons/hi';
import { 
  FaGithub, 
  FaWhatsapp, 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiVercel, 
  SiSupabase 
} from 'react-icons/si';
// Types
type Language = 'en' | 'ar';

// Language Context
const useLanguage = () => {
  const [lang, setLang] = useState<Language>('en');
  
  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
    document.documentElement.dir = lang === 'en' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang === 'en' ? 'ar' : 'en';
  };
  
  useEffect(() => {
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = 'en';
  }, []);
  
  return { lang, toggleLanguage };
};

// Content translations
const content = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      process: 'Process',
      technologies: 'Technologies',
      faq: 'FAQ',
      contact: 'Contact'
    },
    hero: {
      tagline: 'Technical Partner for Marketing Agencies',
      headline1: 'Turning Marketing Ideas Into',
      headline2: 'High-Converting Websites',
      description: 'I help marketing agencies and businesses build professional websites, landing pages, educational platforms, booking systems, and WhatsApp-integrated solutions.',
      cta1: 'Contact on WhatsApp',
      cta2: 'View Portfolio'
    },
    about: {
      title: 'About Khalid',
      subtitle: 'Your Dedicated Technical Partner',
      description: 'As a specialized web developer, I partner with marketing agencies and businesses to transform their digital vision into reality. My focus is on creating websites that not only look stunning but drive real business results.',
      stats: [
        { number: '50+', label: 'Projects Completed' },
        { number: '30+', label: 'Happy Clients' },
        { number: '100%', label: 'Client Satisfaction' },
        { number: '24/7', label: 'Support Available' }
      ],
      expertise: [
        'Business Websites',
        'Landing Pages',
        'Educational Platforms',
        'Booking Systems',
        'WhatsApp Integrations',
        'Marketing-focused Solutions'
      ]
    },
    services: {
      title: 'Services',
      subtitle: 'Comprehensive Solutions for Your Digital Success',
      items: [
        {
          title: 'Business Website Development',
          description: 'Professional websites that establish your brand presence and convert visitors into customers. Perfect for agencies looking to deliver exceptional results.',
          icon: 'globe'
        },
        {
          title: 'Landing Page Development',
          description: 'High-converting landing pages designed to maximize ROI for your marketing campaigns. A/B testing ready and optimized for conversions.',
          icon: 'landing'
        },
        {
          title: 'Appointment Booking Systems',
          description: 'Automated booking solutions that save time and reduce no-shows. Integrated calendars and payment processing.',
          icon: 'calendar'
        },
        {
          title: 'Educational Platforms',
          description: 'Complete e-learning solutions for courses, tutorials, and educational content delivery. Scalable and user-friendly.',
          icon: 'education'
        },
        {
          title: 'WhatsApp Integration',
          description: 'Seamless WhatsApp Business integration for customer support, order management, and marketing automation.',
          icon: 'whatsapp'
        },
        {
          title: 'Portfolio Websites',
          description: 'Stunning portfolio websites that showcase work and attract new clients. Designed to impress and convert.',
          icon: 'portfolio'
        }
      ]
    },
    whyMe: {
      title: 'Why Work With Me',
      subtitle: 'The Technical Partner Your Agency Needs',
      benefits: [
        {
          title: 'Fast Delivery',
          description: 'Projects completed on time, every time. I understand the importance of deadlines in the agency world.',
          icon: 'fast'
        },
        {
          title: 'Responsive Design',
          description: 'Every website looks perfect on all devices. Mobile-first approach ensures maximum reach.',
          icon: 'responsive'
        },
        {
          title: 'Marketing-Oriented',
          description: 'I think like a marketer, not just a developer. Every pixel is designed to convert.',
          icon: 'marketing'
        },
        {
          title: 'Clean User Experience',
          description: 'Intuitive interfaces that users love. No confusion, just seamless journeys.',
          icon: 'ux'
        },
        {
          title: 'Long-term Partnership',
          description: 'I\'m not here for one project. I build lasting relationships with agencies and businesses.',
          icon: 'partnership'
        },
        {
          title: 'Reliable Communication',
          description: 'Clear, consistent updates throughout the project. No ghosting, no surprises.',
          icon: 'communication'
        }
      ]
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Recent Projects That Delivered Results',
      projects: [
        {
          title: 'Talabk',
          category: 'E-commerce',
          description: 'Modern e-commerce platform with seamless shopping experience',
          url: 'https://talabk-phi.vercel.app/'
        },
        {
          title: 'Ghada',
          category: 'Professional Portfolio',
          description: 'Elegant personal portfolio with stunning visual design',
          url: 'https://ghada-ochre.vercel.app/'
        },
        {
          title: 'Demo Project',
          category: 'Business Website',
          description: 'Professional business website with conversion optimization',
          url: 'https://demo-3-eight.vercel.app/'
        },
        {
          title: 'Watazawadoo',
          category: 'Educational Platform',
          description: 'Complete educational platform with course management',
          url: 'https://watazawadoo.vercel.app/'
        },
        {
          title: 'Noor Al Arqam',
          category: 'Educational Institution',
          description: 'Modern website for educational institution',
          url: 'https://noor-al-arqam.vercel.app/'
        },
        {
          title: 'Academie Steel',
          category: 'Business Website',
          description: 'Corporate website with professional branding',
          url: 'https://academie-steel.vercel.app/'
        },
        {
          title: 'El Farra Pharmacy',
          category: 'Healthcare',
          description: 'Healthcare website with booking system integration',
          url: 'https://el-farra-pharmacy-identity.vercel.app/'
        },
        {
          title: 'Study Plan',
          category: 'Educational Tool',
          description: 'Educational planning and management platform',
          url: 'https://study-plan1-sage.vercel.app/'
        }
      ]
    },
    agency: {
      title: 'Agency Partnership',
      subtitle: 'Built for Marketing Agencies',
      description: 'I understand the unique challenges agencies face. That\'s why I offer flexible partnership models that help you deliver more projects, faster, without the overhead of hiring full-time developers.',
      points: [
        'Deliver websites faster with expert development support',
        'Handle all technical implementation while you focus on strategy',
        'Build unlimited landing pages for your campaigns',
        'Create custom booking systems for your clients',
        'Support your agency growth with reliable technical partnership',
        'White-label options available for seamless integration'
      ],
      cta: 'Start Partnership'
    },
    process: {
      title: 'My Process',
      subtitle: 'Streamlined for Maximum Efficiency',
      steps: [
        {
          number: '01',
          title: 'Receive Requirements',
          description: 'Understanding your vision, goals, and technical needs through detailed consultation.'
        },
        {
          number: '02',
          title: 'Design & Planning',
          description: 'Creating wireframes, mockups, and a comprehensive project roadmap.'
        },
        {
          number: '03',
          title: 'Development',
          description: 'Building your solution with clean, maintainable code and modern technologies.'
        },
        {
          number: '04',
          title: 'Testing',
          description: 'Rigorous testing across devices and browsers to ensure perfect functionality.'
        },
        {
          number: '05',
          title: 'Launch',
          description: 'Deploying your project with ongoing support to ensure continued success.'
        }
      ]
    },
    technologies: {
      title: 'Technologies',
      subtitle: 'Tools I Use to Build Your Success',
      items: [
        { name: 'HTML', icon: 'html' },
        { name: 'CSS', icon: 'css' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'React', icon: 'react' },
        { name: 'Next.js', icon: 'nextjs' },
        { name: 'Tailwind CSS', icon: 'tailwind' },
        { name: 'Vercel', icon: 'vercel' },
        { name: 'Supabase', icon: 'supabase' }
      ]
    },
    github: {
      title: 'GitHub',
      subtitle: 'Open Source Contributions',
      description: 'Check out my GitHub profile for open source projects and code samples.',
      cta: 'View GitHub Profile'
    },
    testimonials: {
      title: 'Testimonials',
      subtitle: 'What Clients Say About Working With Me',
      items: [
        {
          name: 'Ahmed Hassan',
          role: 'Marketing Director, TechAgency',
          content: 'Khalid transformed our agency\'s development capabilities. His ability to deliver high-quality websites on tight deadlines has made him our go-to technical partner.',
          rating: 5
        },
        {
          name: 'Sarah Mitchell',
          role: 'CEO, Digital Growth Co.',
          content: 'Working with Khalid has been a game-changer. He understands marketing goals and builds websites that actually convert. Highly recommended!',
          rating: 5
        },
        {
          name: 'Mohammed Al-Rashid',
          role: 'Founder, BrandFirst',
          content: 'Professional, reliable, and incredibly skilled. Khalid helped us deliver 15 projects in 3 months. An invaluable technical partner.',
          rating: 5
        }
      ]
    },
    faq: {
      title: 'FAQ',
      subtitle: 'Frequently Asked Questions',
      items: [
        {
          question: 'What is your typical delivery time?',
          answer: 'Project timelines vary based on complexity. A landing page typically takes 3-5 days, while a full website takes 2-4 weeks. I always provide realistic timelines upfront and communicate proactively about progress.'
        },
        {
          question: 'How many revisions do you include?',
          answer: 'I include up to 2 rounds of revisions in my standard packages. However, I pride myself on getting things right the first time through thorough requirements gathering and clear communication throughout the project.'
        },
        {
          question: 'Do you handle hosting setup?',
          answer: 'Yes! I can set up and configure hosting on platforms like Vercel, Netlify, or traditional hosting. I\'ll help you choose the best option for your needs and handle all technical aspects of deployment.'
        },
        {
          question: 'Do you help with domain setup?',
          answer: 'Absolutely. I can guide you through domain registration, DNS configuration, and SSL certificate setup. Everything you need to get your website live and professional.'
        },
        {
          question: 'Do you offer website maintenance?',
          answer: 'Yes, I offer ongoing maintenance packages to keep your website updated, secure, and performing optimally. This includes security updates, content changes, and technical support.'
        },
        {
          question: 'Can you build booking systems?',
          answer: 'Absolutely! I specialize in appointment booking systems with features like calendar integration, automated reminders, payment processing, and WhatsApp notifications. These are perfect for agencies serving healthcare, hospitality, or service-based clients.'
        }
      ]
    },
    contact: {
      title: 'Let\'s Build Your Next Project',
      subtitle: 'Ready to Transform Your Digital Presence?',
      description: 'Whether you need a website, landing page, or complete digital solution, I\'m here to help. Let\'s discuss how we can work together.',
      cta: 'Contact on WhatsApp',
      github: 'View GitHub'
    },
    footer: {
      description: 'Technical Partner for Marketing Agencies. Building high-converting websites that drive real business results.',
      rights: 'All rights reserved.'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عني',
      services: 'الخدمات',
      portfolio: 'الأعمال',
      process: 'العملية',
      technologies: 'التقنيات',
      faq: 'الأسئلة الشائعة',
      contact: 'تواصل'
    },
    hero: {
      tagline: 'شريك تقني لشركات التسويق',
      headline1: 'أحول الأفكار التسويقية إلى',
      headline2: 'مواقع إلكترونية تحقق نتائج حقيقية',
      description: 'أساعد شركات التسويق والأعمال في بناء مواقع إلكترونية احترافية، صفحات هبوط، منصات تعليمية، أنظمة حجز، وحلول متكاملة مع واتساب.',
      cta1: 'تواصل عبر واتساب',
      cta2: 'شاهد الأعمال'
    },
    about: {
      title: 'عن خالد',
      subtitle: 'شريكك التقني المتفاني',
      description: 'كمطور مواقع متخصص، أتعاون مع شركات التسويق والأعمال لتحويل رؤيتهم الرقمية إلى واقع. تركيزي على إنشاء مواقع لا تبدو مذهلة فحسب، بل تحقق نتائج حقيقية للأعمال.',
      stats: [
        { number: '+50', label: 'مشروع مكتمل' },
        { number: '+30', label: 'عميل سعيد' },
        { number: '100%', label: 'رضا العملاء' },
        { number: '24/7', label: 'دعم متاح' }
      ],
      expertise: [
        'مواقع الأعمال',
        'صفحات الهبوط',
        'المنصات التعليمية',
        'أنظمة الحجز',
        'تكامل واتساب',
        'حلول التسويق الرقمي'
      ]
    },
    services: {
      title: 'الخدمات',
      subtitle: 'حلول شاملة لنجاحك الرقمي',
      items: [
        {
          title: 'تطوير مواقع الأعمال',
          description: 'مواقع احترافية تؤسس لحضور علامتك التجارية وتحول الزوار إلى عملاء. مثالية للوكالات الساعية لتحقيق نتائج استثنائية.',
          icon: 'globe'
        },
        {
          title: 'تطوير صفحات الهبوط',
          description: 'صفحات هبوط عالية التحويل مصممة لتعظيم العائد على الاستثمار في حملاتك التسويقية. جاهزة للاختبارات A/B ومحسّنة للتحويلات.',
          icon: 'landing'
        },
        {
          title: 'أنظمة حجز المواعيد',
          description: 'حلول حجز آلية توفر الوقت وتقلل من عدم الحضور. تقويمات متكاملة ومعالجة مدفوعات.',
          icon: 'calendar'
        },
        {
          title: 'المنصات التعليمية',
          description: 'حلول تعليمية متكاملة للدورات والدروس وتوصيل المحتوى التعليمي. قابلة للتطوير وسهلة الاستخدام.',
          icon: 'education'
        },
        {
          title: 'تكامل واتساب',
          description: 'تكامل سلس مع واتساب للأعمال لدعم العملاء وإدارة الطلبات والأتمتة التسويقية.',
          icon: 'whatsapp'
        },
        {
          title: 'مواقع المعرض',
          description: 'مواقع معرض مذهلة تعرض الأعمال وتجذب عملاء جدد. مصممة للإبهار والتحويل.',
          icon: 'portfolio'
        }
      ]
    },
    whyMe: {
      title: 'لماذا تختارني',
      subtitle: 'الشريك التقني الذي تحتاجه وكالتك',
      benefits: [
        {
          title: 'تسليم سريع',
          description: 'المشاريع تُنجز في الوقت المحدد، في كل مرة. أفهم أهمية المواعيد النهائية في عالم الوكالات.',
          icon: 'fast'
        },
        {
          title: 'تصميم متجاوب',
          description: 'كل موقع يبدو مثالياً على جميع الأجهزة. نهج يبدأ بالجوال يضمن الوصول الأقصى.',
          icon: 'responsive'
        },
        {
          title: 'تفكير تسويقي',
          description: 'أفكر كمسوق، وليس مجرد مطور. كل بكسل مصمم للتحويل.',
          icon: 'marketing'
        },
        {
          title: 'تجربة مستخدم نظيفة',
          description: 'واجهات بديهية يحبها المستخدمون. لا إرباك، فقط رحلات سلسة.',
          icon: 'ux'
        },
        {
          title: 'شراكة طويلة الأمد',
          description: 'لست هنا لمشروع واحد. أبني علاقات دائمة مع الوكالات والأعمال.',
          icon: 'partnership'
        },
        {
          title: 'تواصل موثوق',
          description: 'تحديثات واضحة ومستمرة طوال المشروع. لا اختفاء، لا مفاجآت.',
          icon: 'communication'
        }
      ]
    },
    portfolio: {
      title: 'الأعمال',
      subtitle: 'مشاريع حديثة حققت نتائج',
      projects: [
        {
          title: 'طلبك',
          category: 'تجارة إلكترونية',
          description: 'منصة تجارة إلكترونية حديثة بتجربة تسوق سلسة',
          url: 'https://talabk-phi.vercel.app/'
        },
        {
          title: 'غادة',
          category: 'معرض شخصي',
          description: 'معرض شخصي أنيق بتصميم بصري مذهل',
          url: 'https://ghada-ochre.vercel.app/'
        },
        {
          title: 'مشروع تجريبي',
          category: 'موقع أعمال',
          description: 'موقع أعمال احترافي مع تحسين التحويلات',
          url: 'https://demo-3-eight.vercel.app/'
        },
        {
          title: 'وطزوا ضو',
          category: 'منصة تعليمية',
          description: 'منصة تعليمية متكاملة لإدارة الدورات',
          url: 'https://watazawadoo.vercel.app/'
        },
        {
          title: 'نور الأرقام',
          category: 'مؤسسة تعليمية',
          description: 'موقع حديث للمؤسسات التعليمية',
          url: 'https://noor-al-arqam.vercel.app/'
        },
        {
          title: 'أكاديمية ستيل',
          category: 'موقع أعمال',
          description: 'موقع مؤسسي بعلامة تجارية احترافية',
          url: 'https://academie-steel.vercel.app/'
        },
        {
          title: 'صيدلية الفارا',
          category: 'رعاية صحية',
          description: 'موقع رعا صحية مع تكامل نظام الحجز',
          url: 'https://el-farra-pharmacy-identity.vercel.app/'
        },
        {
          title: 'خطة الدراسة',
          category: 'أداة تعليمية',
          description: 'منصة التخطيط والإدارة التعليمية',
          url: 'https://study-plan1-sage.vercel.app/'
        }
      ]
    },
    agency: {
      title: 'شراكة الوكالات',
      subtitle: 'مصمم لوكالات التسويق',
      description: 'أفهم التحديات الفريدة التي تواجهها الوكالات. لذلك أقدم نماذج شراكة مرنة تساعدك على تسليم مشاريع أكثر، بأسرع، دون تكاليف توظيف المطورين بدوام كامل.',
      points: [
        'تسليم مواقع أسرع مع دعم تطوير متخصص',
        'التعامل مع التنفيذ التقني بالكامل mientras تركز على الاستراتيجية',
        'بناء صفحات هبوط غير محدودة لحملاتك',
        'إنشاء أنظمة حجز مخصصة لعملائك',
        'دعم نمو وكالتك بشراكة تقنية موثوقة',
        'خيارات العلامة التجارية البيضاء متاحة للتكامل السلس'
      ],
      cta: 'ابدأ الشراكة'
    },
    process: {
      title: 'عمليتي',
      subtitle: 'مُحسَّنة للحصول على أقصى كفاءة',
      steps: [
        {
          number: '٠١',
          title: 'استلام المتطلبات',
          description: 'فهم رؤيتك وأهدافك واحتياجاتك التقنية من خلال استشارة مفصلة.'
        },
        {
          number: '٠٢',
          title: 'التخطيط والتصميم',
          description: 'إنشاء الإطارات السلكية والنماذج التخطيطية وخطة طريق شاملة للمشروع.'
        },
        {
          number: '٠٣',
          title: 'التطوير',
          description: 'بناء حلولك بكود نظيف وقابل للصيانة وأحدث التقنيات.'
        },
        {
          number: '٠٤',
          title: 'الاختبار',
          description: 'اختبار شامل عبر الأجهزة والمتصفحات لضمان وظائف مثالية.'
        },
        {
          number: '٠٥',
          title: 'الإطلاق',
          description: 'نشر مشروعك مع دعم مستمر لضمان النجاح المستمر.'
        }
      ]
    },
    technologies: {
      title: 'التقنيات',
      subtitle: 'الأدوات التي أستخدمها لبناء نجاحك',
      items: [
        { name: 'HTML', icon: 'html' },
        { name: 'CSS', icon: 'css' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'React', icon: 'react' },
        { name: 'Next.js', icon: 'nextjs' },
        { name: 'Tailwind CSS', icon: 'tailwind' },
        { name: 'Vercel', icon: 'vercel' },
        { name: 'Supabase', icon: 'supabase' }
      ]
    },
    github: {
      title: 'جيتهب',
      subtitle: 'المساهمات مفتوحة المصدر',
      description: 'تحقق من ملفي الشخصي على جيتهب للمشاريع مفتوحة المصدر وأمثلة الكود.',
      cta: 'عرض ملف جيتهب'
    },
    testimonials: {
      title: 'شهادات العملاء',
      subtitle: 'ماذا يقول العملاء عن العمل معي',
      items: [
        {
          name: 'أحمد حسن',
          role: 'مدير التسويق، تك أجينسي',
          content: 'خالد حوّل قدرات الوكالة في التطوير. قدرته على تسليم مواقع عالية الجودة في مواعيد ضيقة جعلته شريكنا التقني المفضل.',
          rating: 5
        },
        {
          name: 'سارة ميتشل',
          role: 'الرئيس التنفيذي، ديجيتال غروث',
          content: 'العمل مع خالد كان نقطة تحول. يفهم أهداف التسويق ويبني مواقع تحقق التحويلات فعلاً. أنصح به بشدة!',
          rating: 5
        },
        {
          name: 'محمد الراشد',
          role: 'مؤسس، براند فيرست',
          content: 'محترف وموثوق وماهر بشكل لا يصدق. خالد ساعدنا في تسليم 15 مشروع في 3 أشهر. شريك تقني لا يقدر بثمن.',
          rating: 5
        }
      ]
    },
    faq: {
      title: 'الأسئلة الشائعة',
      subtitle: 'الأسئلة الأكثر تكراراً',
      items: [
        {
          question: 'ما هو وقت التسليم النموذجي؟',
          answer: 'تختلف جداول المشاريع حسب التعقيد. عادة ما تستغرق صفحة هبوط 3-5 أيام، بينما يستغرق موقع كامل 2-4 أسابيع. أقدم دائماً جداول واقعية وأتواصل ب主动ية حول التقدم.'
        },
        {
          question: 'كم جولة من المراجعات تتضمن؟',
          answer: 'أتضمن ما يصل إلى جولتين من المراجعات في حزمي القياسية. ومع ذلك، أفتخر بالحصول على الأمور صحيحة في المرة الأولى من خلال التحقق الشامل من المتطلبات والتواصل الواضح.'
        },
        {
          question: 'هل تتعامل مع إعداد الاستضافة؟',
          answer: 'نعم! يمكنني إعداد وتكوين الاستضافة على منصات مثل Vercel أو Netlify أو الاستضافة التقليدية. سأساعدك في اختيار الخيار الأفضل لاحتياجاتك والتعامل مع جميع الجوانب التقنية للنشر.'
        },
        {
          question: 'هل تساعد في إعداد النطاق؟',
          answer: 'بالتأكيد. يمكنني إرشادك من خلال تسجيل النطاق وتكوين DNS وإعداد شهادة SSL. كل ما تحتاجه لإبقاء موقعك على الإنترنت واحترافي.'
        },
        {
          question: 'هل تقدم صيانة الموقع؟',
          answer: 'نعم، أقدم حزم صيانة مستمرة لإبقاء موقعك محدثاً وآمناً ويعمل بشكل مثالي. يشمل ذلك تحديثات الأمان وتغييرات المحتوى والدعم الفني.'
        },
        {
          question: 'هل يمكنك بناء أنظمة الحجز؟',
          answer: 'بالتأكيد! أنا متخصص في أنظمة حجز المواعيد بميزات مثل تكامل التقويم والتذكيرات الآلية ومعالجة المدفوعات وإشعارات واتساب. هذه مثالية للوكالات التي تخدم قطاعات الرعاية الصحية أو الضيافة أو الخدمات.'
        }
      ]
    },
    contact: {
      title: 'لنبني مشروعك القادم',
      subtitle: 'مستعد لتحويل حضورك الرقمي؟',
      description: 'سواء كنت تحتاج إلى موقع أو صفحة هبوط أو حلاً رقمياً متكاملاً، أنا هنا للمساعدة. دعنا نناقش كيف يمكننا العمل معاً.',
      cta: 'تواصل عبر واتساب',
      github: 'عرض جيتهب'
    },
    footer: {
      description: 'شريك تقني لشركات التسويق. بناء مواقع عالية التحويل تحقق نتائج حقيقية للأعمال.',
      rights: 'جميع الحقوق محفوظة.'
    }
  }
};

// Icon Components
const ServiceIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactElement> = {
    globe: <HiOutlineGlobeAlt className="w-8 h-8" />,
    landing: <HiOutlineDesktopComputer className="w-8 h-8" />,
    calendar: <HiOutlineCalendar className="w-8 h-8" />,
    education: <HiOutlineBookOpen className="w-8 h-8" />,
    whatsapp: <FaWhatsapp className="w-8 h-8" />,
    portfolio: <HiOutlineCamera className="w-8 h-8" />
  };
  return icons[type] || <HiOutlineCode className="w-8 h-8" />;
};

const TechIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactElement> = {
    html: <FaHtml5 className="w-8 h-8" />,
    css: <FaCss3Alt className="w-8 h-8" />,
    javascript: <FaJs className="w-8 h-8" />,
    react: <FaReact className="w-8 h-8" />,
    nextjs: <SiNextdotjs className="w-8 h-8" />,
    tailwind: <SiTailwindcss className="w-8 h-8" />,
    vercel: <SiVercel className="w-8 h-8" />,
    supabase: <SiSupabase className="w-8 h-8" />
  };
  return icons[type] || <HiOutlineCode className="w-8 h-8" />;
};

const BenefitIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactElement> = {
    fast: <HiOutlineLightningBolt className="w-6 h-6" />,
    responsive: <HiOutlineDeviceMobile className="w-6 h-6" />,
    marketing: <HiOutlineBriefcase className="w-6 h-6" />,
    ux: <HiOutlineStar className="w-6 h-6" />,
    partnership: <HiOutlineShieldCheck className="w-6 h-6" />,
    communication: <HiOutlineChat className="w-6 h-6" />
  };
  return icons[type] || <HiOutlineCheck className="w-6 h-6" />;
};

// Animation Variants
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

// Components
const Navbar = ({ lang, toggleLanguage }: { lang: Language; toggleLanguage: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const t = content[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.home },
    { href: '#about', label: t.about },
    { href: '#services', label: t.services },
    { href: '#portfolio', label: t.portfolio },
    { href: '#process', label: t.process },
    { href: '#faq', label: t.faq },
    { href: '#contact', label: t.contact }
  ];

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
            KHALID<span className="text-white">.</span>
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
            
            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiOutlineGlobeAlt className="w-4 h-4" />
              <span className="text-sm font-medium">{lang === 'en' ? 'عربي' : 'EN'}</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <motion.button
              onClick={toggleLanguage}
              className="p-2 rounded-full glass"
              whileTap={{ scale: 0.95 }}
            >
              <HiOutlineGlobeAlt className="w-5 h-5" />
            </motion.button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg glass"
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

const Hero = ({ lang }: { lang: Language }) => {
  const t = content[lang].hero;
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
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm text-gray-300">{t.tagline}</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${lang === 'ar' ? 'font-[Cairo]' : ''}`}
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
          className={`text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 ${lang === 'ar' ? 'font-[Cairo]' : ''}`}
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
            href="https://wa.me/201550527744"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="w-5 h-5" />
            {t.cta1}
          </motion.a>
          <motion.a
            href="#portfolio"
            className="btn-outline px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.cta2}
            <HiOutlineArrowRight className={`w-5 h-5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
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

const About = ({ lang }: { lang: Language }) => {
  const t = content[lang].about;

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
            <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
              {t.title}
            </h2>
            <h3 className={`text-xl md:text-2xl gradient-text mb-6 ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
              {t.subtitle}
            </h3>
            <p className={`text-gray-400 text-lg mb-8 ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
              {t.description}
            </p>
            
            {/* Expertise Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {t.expertise.map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-4 py-2 glass rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all cursor-default"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="grid grid-cols-2 gap-6"
          >
            {t.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center card-hover"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className={`text-gray-400 text-sm ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = ({ lang }: { lang: Language }) => {
  const t = content[lang].services;

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-black via-slate-900/30 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
            {t.title}
          </h2>
          <p className={`text-gray-400 text-lg max-w-2xl mx-auto ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
            {t.subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {t.items.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass rounded-2xl p-8 card-hover group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <ServiceIcon type={service.icon} />
              </div>
              <h3 className={`text-xl font-semibold mb-3 text-white ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
                {service.title}
              </h3>
              <p className={`text-gray-400 ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const WhyMe = ({ lang }: { lang: Language }) => {
  const t = content[lang].whyMe;

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
            {t.title}
          </h2>
          <p className={`text-gray-400 text-lg max-w-2xl mx-auto ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
            {t.subtitle}
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {t.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 card-hover group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500/30 transition-colors">
                  <BenefitIcon type={benefit.icon} />
                </div>
                <h3 className={`text-xl font-semibold mb-2 text-white ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
                  {benefit.title}
                </h3>
                <p className={`text-gray-400 ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Portfolio = ({ lang }: { lang: Language }) => {
  const t = content[lang].portfolio;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const gradients = [
    'from-blue-600 to-purple-600',
    'from-cyan-500 to-blue-600',
    'from-purple-600 to-pink-600',
    'from-orange-500 to-red-600',
    'from-green-500 to-teal-600',
    'from-indigo-600 to-blue-500',
    'from-pink-500 to-rose-600',
    'from-emerald-500 to-cyan-600'
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gradient-to-b from-black via-slate-900/30 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
            {t.title}
          </h2>
          <p className={`text-gray-400 text-lg max-w-2xl mx-auto ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
            {t.subtitle}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {t.projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 card-hover"
            >
              {/* Thumbnail Placeholder */}
              <div className={`aspect-video bg-gradient-to-br ${gradients[index]} flex items-center justify-center relative overflow-hidden`}>
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
                    {lang === 'en' ? 'Live Preview' : 'معاينة مباشرة'}
                  </motion.a>
                </motion.div>
              </div>

              {/* Info */}
              <div className="p-5">
                <span className="text-xs text-blue-400 font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className={`text-lg font-semibold text-white mt-2 mb-1 ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
                  {project.title}
                </h3>
                <p className={`text-sm text-gray-400 ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const AgencyPartnership = ({ lang }: { lang: Language }) => {
  const t = content[lang].agency;

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="text-blue-400 text-sm font-medium">
                {lang === 'en' ? '🤝 Agency Partner' : '🤝 شريك الوكالات'}
              </span>
            </div>
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
              {t.title}
            </h2>
            <h3 className={`text-xl gradient-text mb-6 ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
              {t.subtitle}
            </h3>
            <p className={`text-gray-400 text-lg mb-8 ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
              {t.description}
            </p>
            <motion.a
              href="https://wa.me/201550527744"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 btn-primary px-8 py-4 rounded-xl text-white font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="w-5 h-5" />
              {t.cta}
            </motion.a>
          </motion.div>

          {/* Points */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {t.points.map((point, index) => (
              <motion.div
                key={index}
                variants={fadeInRight}
                className="flex items-start gap-4 p-5 glass rounded-xl hover:bg-white/10 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <HiOutlineCheck className="w-5 h-5 text-green-400" />
                </div>
                <p className={`text-gray-300 ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
                  {point}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Process = ({ lang }: { lang: Language }) => {
  const t = content[lang].process;

  return (
    <section id="process" className="py-20 md:py-32 bg-gradient-to-b from-black via-slate-900/30 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
            {t.title}
          </h2>
          <p className={`text-gray-400 text-lg max-w-2xl mx-auto ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
            {t.subtitle}
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 -translate-y-1/2"></div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-5 gap-8"
          >
            {t.steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative"
              >
                <div className="glass rounded-2xl p-6 text-center relative z-10 bg-slate-900">
                  <div className="text-4xl font-bold gradient-text mb-4">
                    {step.number}
                  </div>
                  <h3 className={`text-lg font-semibold text-white mb-2 ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm text-gray-400 ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
                    {step.description}
                  </p>
                </div>
                {/* Step Number Circle for desktop */}
                <div className="hidden lg:flex absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 items-center justify-center text-white text-xs font-bold z-20">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Technologies = ({ lang }: { lang: Language }) => {
  const t = content[lang].technologies;

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
            {t.title}
          </h2>
          <p className={`text-gray-400 text-lg max-w-2xl mx-auto ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
            {t.subtitle}
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-6"
        >
          {t.items.map((tech, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center gap-3 px-6 py-4 glass rounded-xl hover:bg-white/10 transition-all cursor-default"
            >
              <div className="text-blue-400">
                <TechIcon type={tech.icon} />
              </div>
              <span className="text-white font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const GitHub = ({ lang }: { lang: Language }) => {
  const t = content[lang].github;

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-black via-slate-900/30 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="glass rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
            <FaGithub className="w-10 h-10 text-white" />
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
            {t.title}
          </h2>
          <p className={`text-gray-400 mb-2 ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
            {t.subtitle}
          </p>
          <p className={`text-gray-400 mb-8 max-w-xl mx-auto ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
            {t.description}
          </p>
          <motion.a
            href="https://github.com/khalid1612010-design"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl text-white font-semibold transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="w-5 h-5" />
            {t.cta}
            <HiOutlineExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = ({ lang }: { lang: Language }) => {
  const t = content[lang].testimonials;

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
            {t.title}
          </h2>
          <p className={`text-gray-400 text-lg max-w-2xl mx-auto ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
            {t.subtitle}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {t.items.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass rounded-2xl p-8 card-hover"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <HiOutlineStar key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              {/* Content */}
              <p className={`text-gray-300 mb-6 ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className={`text-white font-semibold ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
                    {testimonial.name}
                  </div>
                  <div className={`text-gray-400 text-sm ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FAQ = ({ lang }: { lang: Language }) => {
  const t = content[lang].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-32 bg-gradient-to-b from-black via-slate-900/30 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
            {t.title}
          </h2>
          <p className={`text-gray-400 text-lg max-w-2xl mx-auto ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
            {t.subtitle}
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-4"
        >
          {t.items.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className={`text-white font-semibold pr-4 ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
                  {item.question}
                </span>
                {openIndex === index ? (
                  <HiOutlineChevronUp className="w-5 h-5 text-blue-400 flex-shrink-0" />
                ) : (
                  <HiOutlineChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`px-6 pb-6 text-gray-400 ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Contact = ({ lang }: { lang: Language }) => {
  const t = content[lang].contact;

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
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
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
            {t.title}
          </h2>
          <p className={`text-xl gradient-text mb-6 ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
            {t.subtitle}
          </p>
          <p className={`text-gray-400 text-lg mb-10 max-w-2xl mx-auto ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
            {t.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://wa.me/201550527744"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-5 rounded-xl text-white font-bold text-lg flex items-center gap-3 animate-pulse-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="w-6 h-6" />
              {t.cta}
            </motion.a>
            <motion.a
              href="https://github.com/khalid1612010-design"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline px-8 py-5 rounded-xl text-white font-semibold flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-5 h-5" />
              {t.github}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = ({ lang }: { lang: Language }) => {
  const t = content[lang].footer;

  return (
    <footer className="py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div>
            <a href="#home" className="text-2xl font-bold gradient-text">
              KHALID<span className="text-white">.</span>
            </a>
            <p className={`text-gray-400 mt-3 text-sm ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
              {t.description}
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-center gap-6">
            <motion.a
              href="https://github.com/khalid1612010-design"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.1 }}
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://wa.me/201550527744"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-green-500 hover:bg-green-500/10 transition-all"
              whileHover={{ scale: 1.1 }}
            >
              <FaWhatsapp className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className={`text-gray-400 text-sm ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
              © {new Date().getFullYear()} Khalid Mohamed
            </p>
            <p className={`text-gray-500 text-xs mt-1 ${lang === 'ar' ? 'font-[Cairo]' : ''}`}>
              {t.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
export default function App() {
  const { lang, toggleLanguage } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
          <div className="text-2xl font-bold gradient-text">KHALID<span className="text-white">.</span></div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-black text-white ${lang === 'ar' ? 'direction-rtl' : 'direction-ltr'}`}>
      <Navbar lang={lang} toggleLanguage={toggleLanguage} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Services lang={lang} />
        <WhyMe lang={lang} />
        <Portfolio lang={lang} />
        <AgencyPartnership lang={lang} />
        <Process lang={lang} />
        <Technologies lang={lang} />
        <GitHub lang={lang} />
        <Testimonials lang={lang} />
        <FAQ lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
