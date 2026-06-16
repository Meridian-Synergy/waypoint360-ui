import '../src/tokens/tokens.css'
// Country flags (WpPatch, WpLocaleSwitcher). Consumer apps load this CSS themselves;
// imported here only so flags render in Storybook.
import 'flag-icons/css/flag-icons.min.css'

// Import the fonts referenced by the tokens (Storybook only).
// Apps consuming this package must load the fonts themselves.
const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = 'https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&family=Barlow+Semi+Condensed:wght@500&family=Space+Mono&display=swap'
document.head.appendChild(link)

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#FFFFFF' },
      { name: 'dark',  value: '#10192C' },
      { name: 'navy',  value: '#1B2B56' },
    ],
  },
}
