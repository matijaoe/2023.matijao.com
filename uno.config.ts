import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { theme } from '@unocss/preset-mini'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: {
          name: 'Satoshi',
          provider: 'fontshare',
        },
        display: {
          name: 'Palmtick',
          provider: 'none',
        },
        mono: {
          name: 'DM Mono',
          provider: 'google',
        },
      },
    }),
  ],
  theme: {
    colors: {
      accent: theme.colors?.orange,
      default: theme.colors?.neutral,
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  shortcuts: {
    'max-text': 'max-w-460px',
    'row': 'w-full max-w-940px mx-auto px-5 sm:px-8',
    'text-primary': 'text-default-8 dark:text-default-2',
    'text-dimmed': 'text-default-7 dark:text-default-4',
    'hyperlink': 'transition -mx-0.5 -my-0.5 py-0.5 px-1 rounded-sm underline decoration-default-8/20 dark:decoration-default-2/20 decoration-offset-2 hover:(!decoration-accent)',
    'hyperlink-wavy': 'transition -mx-0.5 -my-0.5 py-0.5 px-1 rounded-sm underline decoration-default-8/20 dark:decoration-default-2/20 decoration-offset-3 decoration-wavy hover:(!decoration-accent-4)',
  },
})
