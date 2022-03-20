/*
* Natives.js
*/

export default class Natives {

    createLinkCSS(props) {
        const link = document.createElement('link')
        link.id = props.id
        link.type = 'text/css'
        link.rel = 'stylesheet'
        link.href = props.href
        return link
    }

    createScriptJS(props) {
        const script = document.createElement('script')
        script.id = props.id
        typeof (props.defer) != 'undefined' && props.defer == 'defer' ? script.setAttribute('defer', 'defer') : ''
        typeof (props.type) != 'undefined' ? script.type = props.type : ''
        script.src = props.src
        return script
    }

    getSearchList() {
        return this.getArrayFromLocalStorage('searchList_x79i')
    }

    setSearchList(value) {
        this.setArrayToLocalStorage('searchList_x79i', value)
    }

    replaceSearchList(array) {
        this.replaceArrayToLocalStorage('searchList_x79i', array)
    }

    setTheme(theme) {
        localStorage.setItem('theme_x79i', theme)
    }

    getTheme() {
        return localStorage.getItem('theme_x79i')
    }

    getLinkFA() {
        const style = this.createLinkCSS({
            id: 'linkFA',
            href: '../Components/Fontawesome/css/all.min.css'
        })
        return style
    }

    setLang(lang) {
        localStorage.setItem('lang_x79i', lang)
    }

    getLang() {
        return localStorage.getItem('lang_x79i')
    }

    getAvailableLang() {
        return ["fr", "en"]
    }

    show(element) {
        element.classList.remove('display-none')
    }

    hide(element) {
        element.classList.add('display-none')
    }

    isMail(value) {
        const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
        return regex.test(value)
    }

    isTel(value) {
        const regex = new RegExp('^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$')
        return regex.test(value)
    }

    isAlive(element) {
        if (typeof (element) != 'undefined' && element != null) return element
        return null
    }

    isNull(element) {
        if (element == null) return null
    }

    isUndefined(element) {
        return typeof (element) == "undefined"
    }

    getLocalDateTime() {
        return new Date(Date.now()).toLocaleString()
    }

    getLocalDate() {
        return new Date(Date.now()).toLocaleString().split(',')[0]
    }

    getArrayFromLocalStorage(key) {
        if (key) return JSON.parse(localStorage.getItem(key))
    }

    setArrayToLocalStorage(key, value) {
        if (key && value) {
            let array = []
            if (typeof (localStorage.getItem(key)) != "undefined" && localStorage.getItem(key) != null) {
                array = JSON.parse(localStorage.getItem(key))
            }
            if (!array.includes(value)) {
                array.push(value)
                localStorage.setItem(key, JSON.stringify(array))
            }
        }
    }

    replaceArrayToLocalStorage(key, array) {
        if (key && array) {
            localStorage.setItem(key, JSON.stringify(array))
        }
    }

    async getTranslations() {
        const response = await fetch(`../Components/Languages/${this.getLang()}.json`)
        let data = response.json()
        return data
    }

    async setHTML(element) {
        const data = await this.getTranslations()
        if (element) element.innerHTML = data[element.getAttribute('html')]
    }

    async setTitle(element) {
        const data = await this.getTranslations()
        if (element) element.title = data[element.getAttribute('title')]
    }

    async setIcon(element) {
        const data = await this.getTranslations()
        if (element) element.innerHTML = data[element.getAttribute('icon')]
    }

    async setPlaceholder(element) {
        const data = await this.getTranslations()
        if (element) element.placeholder = data[element.getAttribute('placeholder')]
    }

    async setValue(element) {
        const data = await this.getTranslations()
        if (element) element.value = data[element.getAttribute('value')]
    }

    async setMeta(element) {
        const data = await this.getTranslations()
        if (element) {
            element.content = data[element.getAttribute('meta')]
        }
    }

    async init() {
        const data = await this.getTranslations()
        const html = document.querySelectorAll('[data-html]')
        const title = document.querySelectorAll('[data-title]')
        const placeholder = document.querySelectorAll('[data-placeholder]')
        const value = document.querySelectorAll('[data-value]')

        if (html) {
            html.forEach((element) => {
                element.innerHTML = data[element.getAttribute('data-html')]
            })
        }

        if (title) {
            title.forEach((element) => {
                element.title = data[element.getAttribute('data-title')]
            })
        }

        if (placeholder) {
            placeholder.forEach((element) => {
                element.placeholder = data[element.getAttribute('data-placeholder')]
            })
        }

        if (value) {
            value.forEach((element) => {
                element.value = data[element.getAttribute('data-value')]
            })
        }
    }
}