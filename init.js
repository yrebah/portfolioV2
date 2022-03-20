import Natives from '../Components/Natives/Natives.js'

const natives = new Natives()

// Set lang to local storage (use lang tag)
natives.setLang(document.documentElement.lang)

// Load scripts and links to html page
document.getElementsByTagName(`HEAD`)[0].append(
    natives.createLinkCSS({ id: 'linkFontawesome', href: '../Components/Fontawesome/css/all.min.css' }),
    natives.createLinkCSS({ id: 'linkTheme', href: `../Components/Themes/${natives.getTheme()}.css` }),
    natives.createLinkCSS({ id: 'linkPreset', href: '../Components/CSS/Preset.css' }),
    natives.createLinkCSS({ id: 'linkIndex', href: '../index.css' }),
    natives.createLinkCSS({ id: 'linkBreakpoint', href: '../Components/CSS/Breakpoints.css' }),
    natives.createScriptJS({ id: 'scriptIndex', defer: 'defer', src: '../index.js', type: 'module' })
)

// Set meta tags
const metaDescription = document.querySelector('meta[name="description"]')
const metaKeywords = document.querySelector('meta[name="keywords"]')
const metaAuthor = document.querySelector('meta[name="author"]')

metaDescription.setAttribute('meta', 'metaDescription')
natives.setMeta(metaDescription)

metaKeywords.setAttribute('meta', 'metaKeywords')
natives.setMeta(metaKeywords)

metaAuthor.setAttribute('meta', 'metaAuthor')
natives.setMeta(metaAuthor)