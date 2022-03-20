/*
* Picture.js
*/

export default class Picture extends HTMLElement {
    constructor(props) {
        super()
        this.alt = props.alt
        this.src = props.src
        this.srcset = props.srcset
    }
    render() {
        const shadow = this.attachShadow({ mode: 'open' })

        const element = document.createElement('picture')

        this.srcset.forEach((elem) => {
            const source = document.createElement('source')
            source.type = `image/${elem.type}`
            source.srcset = elem.url
            element.append(source)
        })

        const img = document.createElement('img')
        img.src = this.src
        img.alt = this.alt

        element.append(img)
        shadow.appendChild(element)

        return shadow
    }
    connectedCallback() {
        this.render()
    }
}

customElements.define('picture-y', Picture)

/*
* Examples
*/

// --- JS ---
/*
    const picture = new Picture({
        id: "picture-1",
        alt: "picture-1",
        src: "./img/test.jpg",
        srcset: [
            {
                url: "./img/test.jpg",
                type: "jpg"
            },
            {
                url: "./img/test.webp",
                type: "webp"
            }
        ]
    })
    document.body.append(picture)
*/