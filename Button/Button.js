/*
* Button.js
*/

import Natives from '../Natives/Natives.js'

const natives = new Natives()

export default class Button extends HTMLElement {
    constructor(props) {
        super()
        this.id = this.getAttribute('id') || props.id
        this.class = this.getAttribute('class') || props.class
        this.html = this.getAttribute('html') || props.html
        this.title = this.getAttribute('title') || props.title
        this.icon = this.getAttribute('icon') || props.icon
        if (this.class == "disabled") this.style.pointerEvents = "none"
    }

    render() {
        const shadow = this.attachShadow({ mode: 'open' })

        const fontAwesome = natives.getLinkFA()

        const style = natives.createLinkCSS({
            id: 'linkButton', 
            href: `../Components/Button/Button.css`
        })

        const element = document.createElement('button')
        element.id = this.id
        element.classList.add('button', this.class)
        element.setAttribute('html', this.html)
        element.setAttribute('title', this.title)
        element.setAttribute('icon', this.icon)
        natives.setHTML(element)
        natives.setTitle(element)
        natives.setIcon(element)

        shadow.appendChild(fontAwesome)
        shadow.appendChild(style)
        shadow.appendChild(element)
    }

    connectedCallback() {
        this.render()
    }

}

customElements.define('button-y', Button)

/*
* Examples
*/

// --- Preset ---
/*
    back / cancel / disabled / validate
*/

// --- HTML ---
/*
    <button-y id="button-1" class="validate" data-html="validate" data-icon="-1" data-title="validate"></button-y>
*/

// --- JS ---
/*
    const button = new Button({
        id: "button-1",
        class:"validate",
        html:"validate",
        title:"validate"
    })
    button.addEventListener("click",(e)=>{
        console.log(e.target.id)
    })
    document.body.append(button)
*/