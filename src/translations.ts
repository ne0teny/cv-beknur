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
      subtitle: 'Middle Frontend Developer',
      description: 'Фронтенд-разработчик с 4-летним опытом. Создаю веб и мобильные приложения на React, React Native, Vue и Flutter. Люблю чистый код и удобные интерфейсы.',
      location: '📍 Алматы, Казахстан',
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
      description: 'Открыт для интересных проектов и предложений о работе. Свяжитесь со мной любым удобным способом!',
      phone: 'Телефон',
      location: 'Локация',
      footer: '© 2026 Beknur Sailaukhan. Создано с React, TypeScript и SCSS',
    },
    jobs: {
      resmi: {
        company: 'Group of Companies Resmi',
        position: 'Flutter Developer',
        period: 'май 2025 - декабрь 2025',
        location: 'Алматы, Казахстан',
        description: 'Работал мобильным разработчиком на Flutter в финтех компании, поддерживал существующие проекты на React Native и мигрировал его код на Flutter. Занимался поддержкой сайта на Vue, работал с бэкендом и рефакторил код.',
      },
      media: {
        company: '1st Media Group',
        position: 'Frontend Web Developer',
        period: 'сентябрь 2024 - апрель 2025',
        location: 'Алматы, Казахстан',
        description: 'Занимался поддержкой существующих проектов на Vue и React Native. Создавал новые проекты на Vue и Flutter.',
      },
      ai: {
        company: 'AI SYSTEMS LTD',
        position: 'Frontend Developer',
        period: 'март 2024 - август 2024',
        location: 'Алматы, Казахстан',
        description: 'Создавал веб-сайты и мобильные приложения на Flutter и React Native.',
      },
      unity: {
        company: 'Unity consulting',
        position: 'Frontend Web Developer',
        period: 'апрель 2023 - март 2024',
        location: 'Алматы, Казахстан',
        description: 'Занимался версткой сайтов и доработкой существующих. Работал с трафиком в Keitaro. Поддерживал мобильное приложение на React Native и переписывал его под Flutter. Занимался дизайном.',
      },
      blacktree: {
        company: 'BLACK TREE GAMING LIMITED',
        position: 'Frontend Web Developer',
        period: 'апрель 2022 - март 2023',
        location: 'Лондон, Великобритания',
        description: 'Создавал новые сайты и дорабатывал легаси. Занимался десктопными и мобильными приложениями. Десктоп писали на Electron.',
      },
      invivo: {
        company: 'ТОО «INVIVO»',
        position: 'HTML-верстальщик',
        period: 'декабрь 2021 - март 2022',
        location: 'Алматы, Казахстан',
        description: 'Верстал лендинги и дорабатывал существующие сайты. Работал с legacy кодом и внедрял разные технологии. Работал с 3D.',
      },
    },
  },
  en: {
    hero: {
      greeting: 'Hi, I am',
      name: 'Beknur Sailaukhan',
      subtitle: 'Middle Frontend Developer',
      description: 'Frontend developer with 4 years of experience. Creating web and mobile applications with React, React Native, Vue and Flutter. I love clean code and user-friendly interfaces.',
      location: '📍 Almaty, Kazakhstan',
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
      description: 'Open to interesting projects and job offers. Contact me in any convenient way!',
      phone: 'Phone',
      location: 'Location',
      footer: '© 2026 Beknur Sailaukhan. Built with React, TypeScript and SCSS',
    },
    jobs: {
      resmi: {
        company: 'Group of Companies Resmi',
        position: 'Flutter Developer',
        period: 'May 2025 - December 2025',
        location: 'Almaty, Kazakhstan',
        description: 'Worked as a mobile developer on Flutter in a fintech company, maintained existing React Native projects and migrated their code to Flutter. Maintained a Vue website, worked with backend and refactored code.',
      },
      media: {
        company: '1st Media Group',
        position: 'Frontend Web Developer',
        period: 'September 2024 - April 2025',
        location: 'Almaty, Kazakhstan',
        description: 'Maintained existing Vue and React Native projects. Created new projects on Vue and Flutter.',
      },
      ai: {
        company: 'AI SYSTEMS LTD',
        position: 'Frontend Developer',
        period: 'March 2024 - August 2024',
        location: 'Almaty, Kazakhstan',
        description: 'Created websites and mobile applications on Flutter and React Native.',
      },
      unity: {
        company: 'Unity consulting',
        position: 'Frontend Web Developer',
        period: 'April 2023 - March 2024',
        location: 'Almaty, Kazakhstan',
        description: 'Worked on website layout and improvement of existing ones. Worked with traffic in Keitaro. Maintained a React Native mobile app and rewrote it to Flutter. Worked on design.',
      },
      blacktree: {
        company: 'BLACK TREE GAMING LIMITED',
        position: 'Frontend Web Developer',
        period: 'April 2022 - March 2023',
        location: 'London, UK',
        description: 'Created new websites and improved legacy code. Worked on desktop and mobile applications. Desktop apps were written on Electron.',
      },
      invivo: {
        company: 'INVIVO LLP',
        position: 'HTML Developer',
        period: 'December 2021 - March 2022',
        location: 'Almaty, Kazakhstan',
        description: 'Created landing pages and improved existing websites. Worked with legacy code and implemented various technologies. Worked with 3D.',
      },
    },
  },
};
