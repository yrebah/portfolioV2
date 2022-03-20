/*
* Search.js
*/

import Natives from '../Natives/Natives.js'

const natives = new Natives()

export default class Search extends HTMLElement {
    constructor(props) {
        super()
        this.id = this.getAttribute('id') || props.id
        this.icon = this.getAttribute('icon') || props.icon
        this.items = this.getAttribute('items') || props.items
    }
    render() {

        const shadow = this.attachShadow({ mode: "open" })

        const fontAwesome = natives.getLinkFA()

        const style = natives.createLinkCSS({
            id: 'linkSearch', 
            href: `../Components/Search/Search.css`
        })

        const element = document.createElement('div')
        element.id = this.id
        element.classList.add('search')

        const wrapper = document.createElement('div')
        wrapper.classList.add('wrapper')

        const icon = document.createElement('div')
        icon.classList.add('icon')
        icon.setAttribute('icon', this.icon)
        natives.setIcon(icon)

        const input = document.createElement('input')
        input.type = 'search'
        input.setAttribute('placeholder', 'search')
        natives.setPlaceholder(input)

        const list = document.createElement('ul')
        list.classList.add('search-list')
        this.updateSearchList(list, input)

        input.addEventListener('focus', () => {
            this.showSearchList(list)
        })

        input.addEventListener('focusout', () => {
            this.hideSearchList(list)
        })

        input.addEventListener("keyup", (e) => {
            if (e.key === 'Enter') {
                e.preventDefault()
                if (input.value) {
                    this.hideSearchList(list)
                    natives.setSearchList(input.value)
                    this.updateSearchList(list, input)
                    this.initSearch(input.value, this.items)
                }
            }
        })

        input.addEventListener("input", () => {
            if (input.value == '') {
                this.showSearchList(list)
                this.initSearch('', this.items)
            }
            if (input.value && natives.getSearchList()) {
                let filter = natives.getSearchList().filter((value) => value.startsWith(input.value))
                if (filter) {
                    list.innerHTML = ""
                    filter.forEach((elem) => {
                        this.createSearchList(list, input, elem)
                    })
                }
            } else if (natives.getSearchList()) {
                list.innerHTML = ""
                natives.getSearchList().slice(-7).reverse().forEach((elem) => {
                    this.createSearchList(list, input, elem)
                })
            }
        })

        wrapper.append(icon, input)
        element.append(wrapper, list)
        shadow.appendChild(fontAwesome)
        shadow.appendChild(style)
        shadow.appendChild(element)
    }

    connectedCallback() {
        this.render()
    }

    deleteValue(value, list, input){
        let array = natives.getSearchList()
        let index = array.indexOf(value)
        if(array.includes(value)){
            array.splice(index, 1)
            natives.replaceSearchList(array)
            this.updateSearchList(list, input)
            setTimeout(() => {
                this.showSearchList(list)
            },150)
        }
    }

    createSearchList(list, input, elem) {
        const li = document.createElement('li')
        const btn = document.createElement('div')
        btn.classList.add('btn')
        const icon = document.createElement('div')
        icon.classList.add('icon')
        icon.setAttribute('icon', 'fa-search')
        natives.setIcon(icon)
        const text = document.createElement('div')
        text.classList.add('text')
        text.append(elem)
        btn.append(icon, text)
        btn.onclick = () => {
            input.value = text.innerHTML
            this.initSearch(input.value, this.items)
        }
        const btnDelete = document.createElement('div')
        btnDelete.classList.add('btn', 'btn-delete')
        btnDelete.setAttribute('html', 'delete')
        btnDelete.onclick = () => this.deleteValue(text.innerHTML, list, input)
        natives.setHTML(btnDelete)
        li.append(btn, btnDelete)
        list.append(li)
    }

    updateSearchList(list, input) {
        if (natives.getSearchList()) {
            list.innerHTML = ""
            natives.getSearchList().slice(-7).reverse().forEach((elem) => {
                this.createSearchList(list, input, elem)
            })
        }
    }

    showSearchList(list) {
        list.classList.add('active')
    }

    hideSearchList(list) {
        setTimeout(() => {
            list.classList.remove('active')
        }, 300)
    }

    initSearch(val, items) {

        let elements = items != "-1" ? document.querySelectorAll(`${items}[data-filter="true"]`) : document.querySelectorAll(`[data-filter="true"]`)
        let array = []

        if (val != '') {
            for (var i = 0; i < elements.length; i++) {
                for (var j = 0; j < elements[i].children.length; j++) {
                    array.push({
                        "parent": elements[i].id,
                        "child": elements[i].children[j].innerHTML.toLowerCase()
                    })
                }
            }

            elements.forEach((elem) => {
                //elem.classList.add('display-none')
                natives.hide(elem)
            })

            const filtered = array.filter(({ child }) => child.startsWith(val.toLowerCase()))

            for (var i = 0; i < filtered.length; i++) {
                //document.querySelector(`#${filtered[i].parent}`).classList.remove('display-none')
                natives.show(document.querySelector(`#${filtered[i].parent}`))
            }
        }
        if (val == '') {
            elements.forEach((elem) => {
                //elem.classList.remove('display-none')
                natives.show(elem)
            })
        }
    }

}

customElements.define('search-y', Search)

/*
* Examples
*/

// --- HTML ---
/*
    <search-y id="search" style="width:100%;" items=".class-name"></search-y>

    OR

    <search-y id="search" style="width:100%;" items="-1"></search-y>
*/

// --- JS ---
/*
    const search = new Search({
        id: "search-1",
        width: "300px",
        items: ".classNames" || could be "-1" (no class select / all [data-filter="true"] are selected)
    })

    document.body.append(search)
*/