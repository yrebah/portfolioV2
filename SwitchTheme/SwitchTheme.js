/*
* SwitchTheme.js
*/

import Natives from '../Natives/Natives.js'

const natives = new Natives()

export default class Switch extends HTMLElement {

    constructor(props) {
        super()
        this.id = this.getAttribute('id') || props.id
        this.title = this.getAttribute('title') || props.title
        this.theme = this.getAttribute('theme') || props.theme
        this.showText = this.getAttribute('showText') || props.showText
    }

    render() {
        const shadow = this.attachShadow({ mode: 'open' })

        if (!natives.getTheme()) natives.setTheme(this.theme)

        document.querySelector('#linkTheme').href = `../themes/${natives.getTheme()}.css`

        const style = natives.createLinkCSS({
            id: 'linkSwitchTheme',
            href: `../Components/SwitchTheme/SwitchTheme.css`
        })

        const container = document.createElement('div')
        container.classList.add(`container`)
        container.setAttribute('title', this.title)
        natives.setTitle(container)

        const element = document.createElement(`div`)
        element.id = this.id
        element.classList.add(`switch`)

        const text = document.createElement('div')
        text.classList.add(`text`)
        text.setAttribute('html', 'darkMode')
        natives.setHTML(text)

        const input = document.createElement(`input`)
        input.type = `checkbox`
        if (natives.getTheme() == 'light') {
            input.checked = false
            this.setAttribute('theme', natives.getTheme())
        }
        if (natives.getTheme() == 'dark') {
            input.checked = true
            this.setAttribute('theme', natives.getTheme())
        }

        const label = document.createElement(`label`)

        element.onclick = () => {
            if (input.checked) {
                input.checked = false
                this.setAttribute('theme', 'light')
            } else {
                input.checked = true
                this.setAttribute('theme', 'dark')
            }
            style.setAttribute('href', `../Components/SwitchTheme/SwitchTheme.css`)
        }

        element.append(input, label)
        this.showText == true ? container.append(text, element) : container.append(element)
        shadow.appendChild(style)
        shadow.appendChild(container)
    }

    connectedCallback() {
        this.render()
    }

    static get observedAttributes() {
        return ['theme']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (this.getAttribute('theme') == 'dark') {
            natives.setTheme('dark')
        }
        if (this.getAttribute("theme") == 'light') {
            natives.setTheme('light')
        }
        document.querySelector('#linkTheme').href = `../Components/Themes/${natives.getTheme()}.css`
    }
}

customElements.define('switchtheme-y', Switch)

/*
* Examples
*/

// --- HTML ---
/*
    <switchtheme-y id="switch-1" title="switch" theme="regular"></switchTheme-y>
*/

// --- JS ---
/*
    const switchTheme = new SwitchTheme({
        id: "switch-theme",
        title:"switchTheme",
        theme: 'dark'
    })
    document.body.append(switchTheme)
*/