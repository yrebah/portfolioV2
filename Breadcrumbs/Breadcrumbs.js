/*
* Breadcrumbs.js
*/

import Natives from '../Natives/Natives.js'

const natives = new Natives()

export default class Breadcrumbs extends HTMLElement {
    constructor(props) {
        super()
        this.id = this.getAttribute('id') || props.id
        this.links = this.getAttribute('links') || props.links
        this.fontSize = this.getAttribute('fontSize') || props.fontSize
        this.count = 0
    }
    render() {
        const shadow = this.attachShadow({ mode: 'open' })

        const fontAwesome = natives.getLinkFA()

        const style = natives.createLinkCSS({
            id: 'linkBreadcrumbs',
            href: `../Components/Breadcrumbs/Breadcrumbs.css`
        })

        const element = document.createElement('div')
        element.classList.add('breadcrumbs')

        this.links.forEach((elem) => {
            this.count++
            const link = document.createElement('a')
            link.id = `link-${this.id}-${this.count}`
            link.classList.add('breadcrumbs-link')
            link.style.fontSize = this.fontSize
            link.href = elem.href
            link.setAttribute('html', elem.html)
            natives.setHTML(link)
            element.append(link)
        })

        shadow.appendChild(fontAwesome)
        shadow.appendChild(style)
        shadow.appendChild(element)
    }
    connectedCallback() {
        this.render()
    }
}

customElements.define('breadcrumbs-y', Breadcrumbs)

/*
* Examples
*/

// --- JS ---

/* 
    const breadcrumbs = new Breadcrumbs({
        id: 'breadcrumbs',
        fontSize: '18px',
        links: [
            {
                href: 'https://github.com/',
                html: 'fa-home'
            },
            {
                href: 'https://github.com/',
                html: 'thisIsTest'
            },
            {
                href: 'https://github.com/',
                html: 'thisIsTest'
            }
        ]
        })
    document.body.append(breadcrumbs)
*/