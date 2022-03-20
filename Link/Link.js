/*
* Link.js
*/

import Natives from '../Natives/Natives.js'

const natives = new Natives()

export default class Link extends HTMLElement {
    constructor(props){
        super()
        this.id = this.getAttribute('id') || props.id
        this.href = this.getAttribute('href') || props.href
        this.html = this.getAttribute('html') || props.html
    }
    render(){
        const shadow = this.attachShadow({mode: 'open'})

        const fontAwesome = natives.getLinkFA()

        const style = natives.createLinkCSS({
            id: 'linkButton', 
            href: `../Components/Link/Link.css`
        })

        const element = document.createElement('a')
        element.id = this.id
        element.classList.add('link')
        element.href = this.href
        element.setAttribute('html', this.html)
        natives.setHTML(element)

        shadow.appendChild(fontAwesome)
        shadow.appendChild(style)
        shadow.appendChild(element)
    }
    connectedCallback(){
        this.render()
    }
}

customElements.define('link-y', Link)

/*
* Examples
*/

// --- JS ---

/* 
    const link = new Link({
        id: 'link-1',
        href: 'https://github.com/',
        html: 'fa-home'
    })
    document.body.append(breadcrumbs)
*/