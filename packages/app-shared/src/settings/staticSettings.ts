import type { StaticSettings } from './staticSettings.type';

export const staticSettings: StaticSettings = {
  admin: {
    email: 'vaino.tuovinen@proqet.com'
  },
  appVersion: {
    version: 1,
    requireUserDataVersion: 1,
    source: 'https://github.com/OpenVAA/voting-advice-application'
  },
  dataAdapter: {
    type: 'strapi',
    supportsCandidateApp: true,
    supportsAdminApp: true
  },
  colors: {
    light: {
      primary: '#234430',
      secondary: '#666666',
      accent: '#234430',
      neutral: '#333333',
      'base-100': '#ffffff',
      'base-200': '#b7d6c3',
      'base-300': '#91bea2',
      warning: '#a82525',
      'line-color': '#ffffff'
    },
    dark: {
      primary: '#457357',
      secondary: '#8c8c8c',
      accent: '#457357',
      neutral: '#cccccc',
      'base-100': '#000000',
      'base-200': '#202323',
      'base-300': '#2c3031',
      warning: '#e16060',
      'line-color': '#262626'
    }
  },
  font: {
    name: 'Inter',
    url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap',
    style: 'sans'
  },
  supportedLocales: [
    {
      code: 'en',
      name: 'English',
      isDefault: true
    },
    {
      code: 'fi',
      name: 'Suomi'
    },
    {
      code: 'sv',
      name: 'Svenska'
    }
  ],
  analytics: {
    trackEvents: true,
    platform: {
      name: 'umami',
      code: '9a49520a-e353-4e6f-9579-b21fc88bad25',
      infoUrl: 'https://umami.is'
    },
  },
  preRegistration: {
    enabled: false
  }
};
