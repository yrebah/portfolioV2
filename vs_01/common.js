const getDefaultLanguage = () => {

    let navigatorLanguage = navigator.language

    if(navigatorLanguage.length > 2){
        navigatorLanguage = navigatorLanguage.split('-')[0]
    }

    switch(navigatorLanguage) {
        case "de": return "de"
        case "en": return "en"
        case "fr": return "fr"
        case "es": return "es"
        default: return "en";
    }
}

const setLanguageLocalStorage = () => {
    if(localStorage.getItem(`lang`) == null){
        localStorage.setItem(`lang`, getDefaultLanguage())
    }
}

const setFirstConnectionLocalStorage = () => {
    if(localStorage.getItem(`firstCo`) == null){
        localStorage.setItem(`firstCo`, 1)
    } else{
        localStorage.setItem(`firstCo`, -1)
    }
}

const setAcceptCookiesLocalStorage = () => {
    if(localStorage.getItem(`acceptCookies`) == null){
        localStorage.setItem(`acceptCookies`, -1)
    }
}

const getAvailablesLanguages = () => {
    $.post('./request.php', {request: "getLanguages"}, function (data) {
        let availableLanguages = JSON.parse(data)
        appendSelectLanguage(availableLanguages)
        setLanguageLocalStorage()
    })
}

const getAvailablesThemes = () => {
    $.post('./request.php', {request: "getThemes"}, function (data) {
        let availableThemes = JSON.parse(data)
        setThemesChoicesIntoList(availableThemes)
        setThemeChoiceFunctions()
        getThemeChoice()
    })
}

// fetch data from local json
async function getData(url) {
    const response = await fetch(url)
    return response.json()
}

// get translations
async function getTranslations() {
    if(localStorage.getItem(`lang`) != null){
        return await getData(`./languages/${localStorage.getItem(`lang`)}.json`)
    } else{
        return await getData(`./languages/${getDefaultLanguage()}.json`)
    }
}

const mailIsValid = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const setUnvalidInputMail = (input) => {
    if(input.value && !mailIsValid(input)){
        input.classList.add(`input-error`)
    } else {
        input.classList.remove(`input-error`)
    } 
}

const setInputsError = (elements) => {
    elements.forEach((input)=>{
        if(!input.value){
            input.classList.add(`input-error`)
        } else{
            input.classList.remove(`input-error`)
        } 
    })
}

const clearInputsValue = (elements) => {
    elements.forEach((input)=>{
        input.value = ""
    })
}

// check if DOM element is in viewport (with percent parameter)
const isElementXPercentInViewport = (el, percentVisible) => {
    let
        rect = document.querySelector(el).getBoundingClientRect(),
        windowHeight = (window.innerHeight || document.documentElement.clientHeight)

    return !(
        Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100)) < percentVisible ||
        Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
    )
}

// set active className on DOM elements
const setActiveClassName = (element, className, activeClassName) => {
    document.querySelectorAll(className).forEach((el) => {
        el.classList.remove(activeClassName)
    })
    if (document.querySelector(element) != null) {
        document.querySelector(element).classList.add(activeClassName)
    }
}

// to scroll to top
const scrollToTop = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

// enable body overflow y
const enableBodyOverflow = () => {
    document.body.style.overflowY = 'auto'
}

// disabled body overflow y
const disableBodyOverflow = () => {
    document.body.style.overflowY = 'hidden'
}

// to show modal
const showModal = (id) => {
    document.querySelector(id).classList.add(`active`)
    disableBodyOverflow()
}

// to hide modal
const hideModal = (id) => {
    document.querySelector(id).classList.remove(`active`)
    enableBodyOverflow()
}

// To append select language component
const SelectLanguage = (availableLanguages) => {

    const select = document.createElement(`select`)
    select.classList.add(`select-language`)

    availableLanguages.forEach((language)=>{
        const option = document.createElement(`option`)
        option.value = language.initial
        option.setAttribute(`data-tr`, `${language.lang}`)
        select.append(option)
    })

    select.addEventListener("change",(e)=>{
        localStorage.setItem(`lang`, e.target.value)
        setHtmlTranslations()
    })

    return select
}

let counter = 0

// To append notification
const Notif = (state, data_tr_key) => {

    counter++

    const iconSuccess = document.createElement(`i`)
    iconSuccess.classList.add(`fas`, `fa-check`)

    const iconError = document.createElement(`i`)
    iconError.classList.add(`fas`, `fa-times`)

    const container = document.createElement(`div`)
    container.id = `notif-${counter}`
    container.classList.add(`notification`)
    container.addEventListener("click",()=>{
        document.querySelector(`.notification`).remove()
    })

    const message = document.createElement(`div`)
    message.classList.add(`text`)
    message.setAttribute(`data-tr`, data_tr_key)

    if(state.toLowerCase() === "success"){
        container.append(iconSuccess, message)
        container.style.backgroundColor = `var(--primary-success)`
    }

    if(state.toLowerCase() === "error"){
        container.append(iconError, message)
        container.style.backgroundColor = `var(--primary-error)`
    }

    document.body.append(container)

    setHtmlTranslations()

    setTimeout(() =>{
        if(document.querySelector(`#${container.id}`) != null){
            document.querySelector(`#${container.id}`).remove()
        }
    },3500)
}

// To append confirmation notif
const NotifConfirmation = (data_tr_key, callback) => {

    const container = document.createElement(`div`)
    container.id = `notif-confirmation`
    container.classList.add(`notification`, `confirmation`)

    const message = document.createElement(`div`)
    message.classList.add(`text`)
    message.setAttribute(`data-tr`, data_tr_key)

    const containerBtn = document.createElement(`div`)
    containerBtn.classList.add(`container-btn`)

    const btnValidate = document.createElement(`button`)
    btnValidate.classList.add(`btn-validate`)
    btnValidate.setAttribute(`data-tr`, `confirm`)
    btnValidate.onclick = (e) => {
        document.body.style.pointerEvents = `all`
        e.stopPropagation()
        callback()
        document.querySelector(`#${container.id}`).remove()
    }

    const btnCancel = document.createElement(`button`)
    btnCancel.classList.add(`btn-cancel`)
    btnCancel.setAttribute(`data-tr`, `cancel`)
    btnCancel.onclick = () =>{
        document.body.style.pointerEvents = `all`
        document.querySelector(`#${container.id}`).remove()
    }

    if(document.querySelector(`#notif-confirmation`) == null){
        document.body.style.pointerEvents = `none`
        containerBtn.append(btnValidate, btnCancel)
        container.append(message, containerBtn)
        document.body.append(container)
        setHtmlTranslations()
    }
}