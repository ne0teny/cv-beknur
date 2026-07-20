export type Language = 'ru' | 'en';

export interface Translations {
  hero: {
    greeting: string;
    name: string;
    subtitle: string;
    description: string;
    location: string;
    contactBtn: string;
    experienceBtn: string;
  };
  skills: {
    title: string;
  };
  experience: {
    title: string;
  };
  education: {
    title: string;
    degree: string;
    field: string;
  };
  contact: {
    title: string;
    description: string;
    phone: string;
    location: string;
    telegram: string;
    whatsapp: string;
    footer: string;
  };
  jobs: {
    [key: string]: {
      company: string;
      position: string;
      period: string;
      location: string;
      description: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  ru: {
    hero: {
      greeting: 'Привет, я',
      name: 'Beknur Sailaukhan',
      subtitle: 'Fullstack-разработчик',
      description:
        'Fullstack-разработчик с опытом 4 года и 8 месяцев. Создаю веб-сайты, мобильные и десктопные приложения на React, Flutter, NestJS и Tauri. Люблю чистый код и удобные интерфейсы.',
      location: '📍 Казахстан',
      contactBtn: 'Связаться',
      experienceBtn: 'Опыт работы',
    },
    skills: {
      title: 'Навыки',
    },
    experience: {
      title: 'Опыт работы',
    },
    education: {
      title: 'Образование',
      degree: 'Бакалавр технических наук',
      field: 'Компьютерные науки',
    },
    contact: {
      title: 'Контакты',
      description:
        'Открыт для интересных проектов и предложений о работе. Свяжитесь со мной любым удобным способом!',
      phone: 'Телефон',
      location: 'Локация',
      telegram: 'Telegram',
      whatsapp: 'WhatsApp',
      footer: '© 2026 Beknur Sailaukhan. Создано с React, TypeScript и SCSS',
    },
    jobs: {
      nomalytica: {
        company: 'Nomalytica',
        position: 'Fullstack-разработчик',
        period: 'февраль 2026 — июль 2026',
        location: 'Казахстан',
        description:
          'Работал над сайтами и десктопными приложениями на Tauri и мобильными на Flutter.',
      },
      respublica: {
        company: 'Финансовый холдинг «Республика»',
        position: 'Flutter-разработчик / Python-Backend',
        period: 'май 2025 — январь 2026',
        location: 'Казахстан',
        description:
          'Работал мобильным разработчиком на Flutter в финтех-компании, поддерживал существующие проекты на React Native и мигрировал их код на Flutter. Занимался поддержкой сайта на Vue, часто работал с бэкендом из-за отсутствия бэкендера и рефакторил код. Также поддерживал сайты на React.',
      },
      media: {
        company: '1st Media Group',
        position: 'Fullstack-разработчик',
        period: 'сентябрь 2024 — апрель 2025',
        location: 'Казахстан',
        description:
          'Занимался поддержкой существующих проектов, написанных в основном на Vue и NestJS. Также создавал новые проекты на Flutter.',
      },
      ai: {
        company: 'Частная компания AI SYSTEMS LTD.',
        position: 'Мобильный разработчик',
        period: 'март 2024 — август 2024',
        location: 'Казахстан',
        description:
          'Работал на должности Mobile developer, создавал мобильные приложения на Flutter и поддерживал сайты.',
      },
      unity: {
        company: 'Unity Consulting',
        position: 'Frontend-разработчик',
        period: 'апрель 2023 — март 2024',
        location: 'Казахстан',
        description:
          'Занимался вёрсткой сайтов и доработкой существующих. Работал с трафиком в Keitaro. Под конец начал поддержку мобильного приложения на React Native и переписывал его под Flutter. Также занимался дизайном сайтов и приложений.',
      },
      blacktree: {
        company: 'Black Tree Gaming Ltd',
        position: 'Fullstack-разработчик',
        period: 'апрель 2022 — март 2023',
        location: 'Казахстан',
        description:
          'Создавал новые сайты и дорабатывал legacy-проекты. Занимался десктопными приложениями на Electron и мобильными приложениями на Flutter.',
      },
      invivo: {
        company: 'Инвиво, Лаборатория',
        position: 'HTML-верстальщик',
        period: 'декабрь 2021 — март 2022',
        location: 'Казахстан',
        description:
          'Вёрстка лендингов и доработка существующих сайтов. Работал с legacy-кодом и внедрял разные технологии. Также приходилось работать с 3D.',
      },
    },
  },
  en: {
    hero: {
      greeting: 'Hi, I am',
      name: 'Beknur Sailaukhan',
      subtitle: 'Fullstack Developer',
      description:
        'Fullstack developer with 4 years and 8 months of experience. Building websites, mobile and desktop applications with React, Flutter, NestJS and Tauri. I love clean code and user-friendly interfaces.',
      location: '📍 Kazakhstan',
      contactBtn: 'Contact',
      experienceBtn: 'Work Experience',
    },
    skills: {
      title: 'Skills',
    },
    experience: {
      title: 'Work Experience',
    },
    education: {
      title: 'Education',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
    },
    contact: {
      title: 'Contact',
      description:
        'Open to interesting projects and job offers. Contact me in any convenient way!',
      phone: 'Phone',
      location: 'Location',
      telegram: 'Telegram',
      whatsapp: 'WhatsApp',
      footer: '© 2026 Beknur Sailaukhan. Built with React, TypeScript and SCSS',
    },
    jobs: {
      nomalytica: {
        company: 'Nomalytica',
        position: 'Fullstack Developer',
        period: 'February 2026 — July 2026',
        location: 'Kazakhstan',
        description:
          'Worked on websites, desktop applications with Tauri, and mobile apps with Flutter.',
      },
      respublica: {
        company: 'Financial Holding «Respublica»',
        position: 'Flutter Developer / Python Backend',
        period: 'May 2025 — January 2026',
        location: 'Kazakhstan',
        description:
          'Worked as a Flutter mobile developer in a fintech company, maintained existing React Native projects and migrated their code to Flutter. Maintained a Vue website, frequently worked with the backend due to the lack of a backend developer and refactored code. Also maintained React websites.',
      },
      media: {
        company: '1st Media Group',
        position: 'Fullstack Developer',
        period: 'September 2024 — April 2025',
        location: 'Kazakhstan',
        description:
          'Maintained existing projects mostly built with Vue and NestJS. Also created new projects with Flutter.',
      },
      ai: {
        company: 'Private Company AI SYSTEMS LTD.',
        position: 'Mobile Developer',
        period: 'March 2024 — August 2024',
        location: 'Kazakhstan',
        description:
          'Worked as a Mobile developer, created mobile applications with Flutter and maintained websites.',
      },
      unity: {
        company: 'Unity Consulting',
        position: 'Frontend Developer',
        period: 'April 2023 — March 2024',
        location: 'Kazakhstan',
        description:
          'Worked on website layout and improvement of existing sites. Managed traffic in Keitaro. Later started maintaining a React Native mobile app and rewrote it to Flutter. Also worked on website and app design.',
      },
      blacktree: {
        company: 'Black Tree Gaming Ltd',
        position: 'Fullstack Developer',
        period: 'April 2022 — March 2023',
        location: 'Kazakhstan',
        description:
          'Created new websites and improved legacy projects. Worked on desktop applications with Electron and mobile apps with Flutter.',
      },
      invivo: {
        company: 'Invivo Laboratory',
        position: 'HTML Developer',
        period: 'December 2021 — March 2022',
        location: 'Kazakhstan',
        description:
          'Built landing pages and improved existing websites. Worked with legacy code and implemented various technologies. Also worked with 3D.',
      },
    },
  },
};
