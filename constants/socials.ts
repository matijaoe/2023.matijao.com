import type { SocialLink } from '~/models'

export const socials: Record<string, SocialLink> = {
  github: {
    label: 'GitHub',
    username: '@mat2ja',
    icon: 'ph:github-logo-duotone',
    href: 'https://github.com/mat2ja',
    color: '#171515',
    colorDark: '#fafaf9',
  },
  twitter: {
    label: 'Twitter',
    username: '@matijao_',
    icon: 'ph:twitter-logo-duotone',
    href: 'https://twitter.com/matijao_',
    color: '#1F9CEA',
  },
  linkedin: {
    label: 'LinkedIn',
    username: '@matijao',
    icon: 'ph:linkedin-logo-duotone',
    href: 'https://linkedin.com/in/matijao',
    color: '#0277B5',
  },
  email: {
    label: 'Email',
    username: 'contact@matijao.com',
    icon: 'ph:envelope-duotone',
    href: 'mailto:contact@matijao.com',
    color: '#DB4437',
  },
  mastodon: {
    label: 'Mastodon',
    username: '@matijao',
    icon: 'bxl:mastodon',
    href: 'https://elk.zone/fosstodon.org/@matijao',
    color: '#CC7D23',
  },
  goodreads: {
    label: 'Goodreads',
    username: '@matijao',
    icon: 'ph:goodreads-logo-duotone',
    href: 'https://www.goodreads.com/matijao',
    color: '#372212',
    colorDark: '#EEECDD',
  },
  wakatime: {
    label: 'WakaTime',
    username: '@matijao',
    icon: 'simple-icons:wakatime',
    href: 'https://wakatime.com/@matijao',
    color: '#000',
  },
  website: {
    label: 'Website',
    username: '@matijao',
    icon: 'tabler:seeding',
    href: 'https://matijao.com',
    to: '/',
    color: 'var(--accent)',
  },
  vsMarketplace: {
    label: 'VS Marketplace',
    username: '@matijao',
    icon: 'simple-icons:visualstudiocode',
    href: 'https://marketplace.visualstudio.com/publishers/matijao',
    color: '#22A5F1',
  },
  wellfound: {
    label: 'Wellfound',
    username: '@matijao',
    icon: 'fa6-brands:angellist',
    href: 'https://wellfound.com/u/matijao',
    color: '#000',
  },
  linktree: {
    label: 'Linktree',
    username: '@matijao',
    icon: 'simple-icons:linktree',
    href: 'https://linktr.ee/matijao',
    color: '#44E660',
  },
  readCv: {
    label: 'ReadCV',
    username: '@matijao',
    icon: 'ph:read-cv-logo',
    href: 'https://read.cv/matijao',
    color: '#000',
  },
  resume: {
    label: 'Resume',
    username: '',
    icon: 'academicons:cv',
    href: 'https://cv.matijao.com',
    color: 'var(--accent)',
  },
}
