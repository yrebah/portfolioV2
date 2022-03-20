/*
* Loader 
*/

import Natives from '../Natives/Natives.js'

const natives = new Natives()

export default class Loader extends HTMLElement {
    constructor(props) {
        super()

        this.id = this.getAttribute('id') || props.id,
        this.position = this.getAttribute('position') || props.position
    }

    render() {
        const shadow = this.attachShadow({ mode: 'open' })

        const style = natives.createLinkCSS({
            id: 'linkLoader', 
            href: `../Components/Loader/Loader.css`
        })

        const element = document.createElement('div')
        element.id = this.id
        element.classList.add('loader-bg')
        element.style.position = this.position

        const loader = document.createElement('div')
        loader.classList.add('loader')
        const logo = document.createElement('div')
        logo.classList.add('logo')
        logo.innerHTML = `<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`
        const text = document.createElement('div')
        text.classList.add('text')
        text.setAttribute('html', 'loading')
        natives.setHTML(text)

        loader.append(logo, text)
        element.append(loader)

        shadow.appendChild(style)
        shadow.appendChild(element)

        return shadow
    }

    connectedCallback() {
        this.render()
    }

}

customElements.define('loader-y', Loader)

/*
* Examples
*/

// --- HTML ---
/* 
    <loader-y id="loader-1" position="fixed"></loader-y>
*/

// --- JS ---
/*
    const loader = new Loader({
        id: `loader-1`,
        position: "fixed" || "absolute"
    })
    document.body.append(loader)
*/