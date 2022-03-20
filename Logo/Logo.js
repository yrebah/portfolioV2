/*
* Logo.js
*/

import Natives from '../Natives/Natives.js'

const natives = new Natives()

export default class Logo extends HTMLElement {

    constructor(props) {
        super()
        this.id = this.getAttribute('id') || props.id
        this.href = this.getAttribute('href') || props.href
        this.title = this.getAttribute('title') || props.title
    }

    render() {
        const shadow = this.attachShadow({ mode: 'open' })

        const fontAwesome = natives.getLinkFA()

        const googleFont = natives.createLinkCSS({
            id: 'linkGoogleFont', 
            href: "https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap"
        })

        const style = natives.createLinkCSS({
            id: 'linkLogo', 
            href: `../Components/Logo/Logo.css`
        })

        const element = document.createElement('a')
        element.id = this.id
        element.classList.add('logo')
        element.href = this.href
        element.setAttribute('title', this.title)
        natives.setTitle(element)

        const icon = document.createElement('div')
        icon.classList.add('icon')
        icon.setAttribute('html', 'fa-logo')
        natives.setHTML(icon)

        const text = document.createElement('div')
        text.classList.add('text')
        text.setAttribute('html', 'siteTitle')
        natives.setHTML(text)

        element.append(icon, text)

        shadow.appendChild(fontAwesome)
        shadow.appendChild(googleFont)
        shadow.appendChild(style)
        shadow.appendChild(element)
    }

    connectedCallback() {
        this.render()
    }
}

customElements.define('logo-y', Logo)

/*
* Examples
*/

// --- HTML ---
/*
    <logo-y id="logo-1" href="https://example.com" title="homePage"></logo-y>
*/

// --- JS ---
/*
    const logo = new Logo({
        id: "logo-1",
        href:"https://example.com",
        title:"homePage"
    })
    document.body.append(logo)
*/