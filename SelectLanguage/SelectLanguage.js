/*
* Translate.js 
*/

import Natives from '../Natives/Natives.js'

const natives = new Natives()

export default class SelectLanguage extends HTMLElement {

    constructor(props) {
        super()
        this.id = this.getAttribute('id') || props.id
        this.pages = this.getAttribute('pages') || props.pages
    }

    render() {
        const shadow = this.attachShadow({ mode: 'open' })

        const style = natives.createLinkCSS({
            id: 'linkTranslate', 
            href: `../Components/SelectLanguage/SelectLanguage.css`
        })

        const element = document.createElement('select')
        element.id = this.id
        element.classList.add('select')
        element.setAttribute('title', 'switchLang')
        natives.setTitle(element)
        element.addEventListener('change', (e) => {
            this.pages.forEach((elem) => {
                if (e.target.value == elem.lang) location.replace(elem.url)
            })
        })

        natives.getAvailableLang().forEach((lang) => {
            const option = document.createElement('option')
            option.value = lang
            option.setAttribute('html', lang)
            option.value == natives.getLang() ? option.selected = 'selected' : ''
            element.append(option)
            natives.setHTML(option)
        })

        shadow.appendChild(style)
        shadow.appendChild(element)
    }

    connectedCallback(){
        this.render()
    }
}

customElements.define('selectlanguage-y', SelectLanguage)

/*
* Examples
*/

// --- HTML ---
/*
    <selectlanguage-y></selectlanguage-y>
*/

// --- JS ---
/* 
    const selectLanguage = new SelectLanguage({
        id: 'selectLanguage',
        pages:[
            {
                lang: 'fr',
                url: 'http://localhost:3000/fr/index.php'
            },
            {
                lang: 'en',
                url: 'http://localhost:3000/en/index.php'
            }
        ]
    })
    document.body.append(selectlanguage)
*/