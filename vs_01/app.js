// when page is loaded
window.onload = () => {
    setFirstConnectionLocalStorage()
    setAcceptCookiesLocalStorage()
    getAvailablesLanguages()
    getAvailablesThemes()
    getThemeChoice()
    setMainLinks()
    getCurrentSectionInViewport()
    setOpenResume()
    setScrollTopLinkHome()
    setParallaxEffectBlockSkills()
    setCookiesBtnFunction()
    showStarterModals()
    setOpenContactFormFunction()
    setValidateContactFormFunctions()
    setMessageHTML()
    setMaxCharLengthValue()
    setCloseModalContactFunctions()
    setOpenModalSettingsFunctions()
    setCloseModalSettingsFunctions()
    setModalWelcomeBackFunctions()
    setHtmlTranslations()
}

// when page is scrolled
window.onscroll = () => {
    getCurrentSectionInViewport()
    setParallaxEffectHome()
}

const showStarterModals = () => {
    if(localStorage.getItem(`acceptCookies`) == -1){
        showModal(`#modal-cookies`)
    } else{
        showModal(`#modal-welcome-back`)
    }
}

const setThemesChoicesIntoList = (availableThemes) => {
    const listThemes = document.querySelector(`#list-themes-choice`)
    availableThemes.forEach((theme)=>{
        listThemes.innerHTML += `<li id="${theme.id}" class="theme-choice flex-value-20">
                                    <div data-tr="${theme.tr}"></div>
                                </li>`
    })
}

const getSectionsInfos = () => {
    const sectionsInfos = []
    document.querySelectorAll(`.section`).forEach((section) => {
        sectionsInfos.push({
            id: section.id,
            position: parseInt(section.getAttribute("data-position"))
        })
    })
    return sectionsInfos
}

const setMainLinks = () => {

    const sectionsInfos = getSectionsInfos().slice(1)

    let links = `<li>
                    <a id="link-home" class="link hide-s" data-tr-title="home">
                        <i class="fas fa-home"></i>
                    </a>
                </li>`

    sectionsInfos.forEach((section) => {
        links += `<li>
                    <a id="link-${section.id}" class="link hide-s" href="#${section.id}" data-tr="${section.id}"></a>
                </li>`
    })

    links += `<li>
                <i id="btn-get-settings" class="fas fa-cog link" style="font-size:18px;" data-tr-title="settings"></i>
            </li>
            <li>
                <a href="https://github.com/yrebah/portfolioV2/tree/main/vs_01" target="_blank" class="link" style="font-size:18px;" data-tr-title="githubProjectLink">
                    <i class="fab fa-github"></i>
                </a>
            </li>
            <li class="container-select-language"></li>`

    document.querySelector(`.container-links`).innerHTML = links
}

const setSectionHomeHTML = (theme) => {
    const sectionHome = document.querySelector(`#home`)
    let html = `<video id="video-home-landing" class="video-home-landing hide-l" autoplay loop>
                    <source src="./videos/${theme != null ? theme : 'classic'}.mp4" type="video/mp4">
                </video>
                <div class="container">
                    <div class="wrapper">
                        <div>
                            <h1 data-tr="portfolioTitle" class="primary-text-shadow"></h1>
                            <h2 data-tr="profession" class="primary-text-shadow"></h2>
                        </div>
                        <p data-tr="welcomeText"></p>
                        <a id="btn-get-resume" class="btn-a" data-tr="getResume"></a>
                    </div>
                </div>`
    sectionHome.innerHTML = html
    setHtmlTranslations()
}

const setThemeChoice = (theme) => {
    let link = document.querySelector(`#linkTheme`)
    link.setAttribute(`href`, `./themes/${theme}.css`)
    localStorage.setItem(`theme`, theme)
    setSectionHomeHTML(theme)
    setParallaxEffectHome()
    setActiveClassName(
        `#${theme}`,
        `.theme-choice`,
        `active`
    )
}

const getThemeChoice = () => {
    let theme = localStorage.getItem(`theme`)
    if (theme != null) {
        setThemeChoice(theme)
    } else{
        setThemeChoice("classic")
    }
}

const setThemeChoiceFunctions = () => {
    document.querySelectorAll(`.theme-choice`).forEach((btn) => {
        btn.addEventListener('click', (e) => {
            setThemeChoice(btn.id)
        })
    })
}

const setOpenModalSettingsFunctions = () => {
    const btn = document.querySelector(`#btn-get-settings`)
    btn.addEventListener('click', ()=>{
        showModal(`#modal-settings`)
    })
}

const setCloseModalSettingsFunctions = () => {

    const modal = document.querySelector(`#modal-settings`)
    const modalContainer = document.querySelector(`#modal-settings .container`)

    modal.addEventListener('click', (e) => {

        let isClickInsideElement = modalContainer.contains(e.target)

        if (!isClickInsideElement) {
            hideModal(`#modal-settings`)
        }
    })
}

const setParallaxEffectHome = () => {

    let value = window.scrollY

    const homeText = document.querySelector(`#home .container .wrapper`)
    const videoHomeLanding = document.querySelector(`.video-home-landing`)

    videoHomeLanding.style.transform = `translate(-${value}px, ${value * 1.2}px) scale(${1 + (value / 300)})`
    videoHomeLanding.style.opacity = `${1 - (value / 500)}`
    homeText.style.opacity = `${1 - (value / 500)}`

    if (videoHomeLanding.style.opacity < 0.00 && homeText.style.opacity < 0.00) {
        videoHomeLanding.style.display = 'none'
        homeText.style.display = 'none'
    } else if (videoHomeLanding.style.opacity > 0.00 && homeText.style.opacity > 0.00) {
        videoHomeLanding.style.display = 'block'
        homeText.style.display = 'flex'
    }
}

const startVideoHomeLanding = () => {
    document.querySelector(`#video-home-landing`).play()
}

const setScrollTopLinkHome = () => {
    document.querySelector(`#link-home`).addEventListener('click', () => scrollToTop())
}

// get current section in viewport and apply style / text section
async function getCurrentSectionInViewport() {

    const percent = 20
    const sectionNameRWD = document.querySelector(`#section-name-rwd`)
    const tr = await getTranslations()

    document.querySelectorAll(`.section`).forEach((section) => {
        if (isElementXPercentInViewport(`#${section.id}`, percent)) {
            setActiveClassName(
                `#link-${section.id}`,
                `.header nav ul li .link`,
                `active`
            )
            sectionNameRWD.innerHTML = tr[section.id]
            document.querySelector(`#${section.id}`).style.opacity = "1"
            document.querySelector(`#${section.id}`).style.transform = "translateX(0px)"
        }
    })
}

const setOpenResume = () => {
    document.querySelector(`#btn-get-resume`).addEventListener("click", () => {
        window.open('./doc/CV-Yoann_REBAH.pdf')
    })
}

const setParallaxEffectBlockSkills = () => {
    document.querySelectorAll(`.block-skills .wrapper`).forEach((element) => {
        element.addEventListener("mousemove", (e) => {
            let rect = e.target.getBoundingClientRect()
            let posX = (e.clientX - rect.left).toFixed(0)
            let posY = (e.clientY - rect.top).toFixed(0)
            let container = element.querySelector(`.container`)

            container.style.transform = `translate(-${posX / 10}px, -${posY / 8}px)`
        })
    })
}

// get next roadmap elements
const getNextElements = () => {

    let currentTitle = document.querySelector(`#roadmap .wrapper .container-titles .title.active`)
    let currentImg = document.querySelector(`#roadmap .wrapper .container-images .image.active`)
    let currentParagraph = document.querySelector(`#roadmap .wrapper .container-paragraphs .paragraph.active`)
    let currentYear = document.querySelector(`#roadmap .wrapper .container-years .year.active`)
    let currentCounter = document.querySelector(`#roadmap .wrapper .container-arrows .container .container-counter .counter.active`)

    let nextTitle = currentTitle.nextElementSibling
    let nextImg = currentImg.nextElementSibling
    let nextParagraph = currentParagraph.nextElementSibling
    let nextYear = currentYear.nextElementSibling
    let nextCounter = currentCounter.nextElementSibling

    currentTitle.classList.remove(`active`)
    currentImg.classList.remove(`active`)
    currentParagraph.classList.remove(`active`)
    currentYear.classList.remove(`active`)
    currentCounter.classList.remove(`active`)

    nextTitle.classList.add(`active`)
    nextImg.classList.add(`active`)
    nextParagraph.classList.add(`active`)
    nextYear.classList.add(`active`)
    nextCounter.classList.add(`active`)

    checkFirstOrLastElement()
    setYearValue()
}

// get previous roadmap elements
const getPreviousElements = () => {

    let currentTitle = document.querySelector(`#roadmap .wrapper .container-titles .title.active`)
    let currentImg = document.querySelector(`#roadmap .wrapper .container-images .image.active`)
    let currentParagraph = document.querySelector(`#roadmap .wrapper .container-paragraphs .paragraph.active`)
    let currentYear = document.querySelector(`#roadmap .wrapper .container-years .year.active`)
    let currentCounter = document.querySelector(`#roadmap .wrapper .container-arrows .container .container-counter .counter.active`)

    let previousTitle = currentTitle.previousElementSibling
    let previousImg = currentImg.previousElementSibling
    let previousParagraph = currentParagraph.previousElementSibling
    let previousYear = currentYear.previousElementSibling
    let previousCounter = currentCounter.previousElementSibling

    currentTitle.classList.remove(`active`)
    currentImg.classList.remove(`active`)
    currentParagraph.classList.remove(`active`)
    currentYear.classList.remove(`active`)
    currentCounter.classList.remove(`active`)

    previousTitle.classList.add(`active`)
    previousImg.classList.add(`active`)
    previousParagraph.classList.add(`active`)
    previousYear.classList.add(`active`)
    previousCounter.classList.add(`active`)

    checkFirstOrLastElement()
    setYearValue()
}

// set year roadmap value
const setYearValue = () => {

    let yearValue = document.querySelector(`#roadmap .wrapper .container-years .year-value`)
    let currentYear = document.querySelector(`#roadmap .wrapper .container-years .year.active`)

    if (currentYear.innerHTML == "8" || currentYear.innerHTML == "9") {
        yearValue.innerHTML = `201`
    } else {
        yearValue.innerHTML = `202`
    }
}

// set counter roadmap value
const setCounterValue = () => {
    const counterLength = document.querySelectorAll(`.container-counter .roadmap-item`).length
    document.querySelector(`.container-counter .counter-value`).innerHTML = `/${counterLength}`
}

document.querySelector(`#arrow-next`).addEventListener('click', () => {
    getNextElements()
})

document.querySelector(`#arrow-previous`).addEventListener('click', () => {
    getPreviousElements()
})

const checkFirstOrLastElement = () => {

    const count = document.querySelectorAll(`.roadmap-item.title`).length - 1

    if (
        document.querySelectorAll(`.roadmap-item.title`)[0].classList.contains(`active`) &&
        document.querySelectorAll(`.roadmap-item.image`)[0].classList.contains(`active`) &&
        document.querySelectorAll(`.roadmap-item.paragraph`)[0].classList.contains(`active`) &&
        document.querySelectorAll(`.roadmap-item.year`)[0].classList.contains(`active`)
    ) {
        document.querySelector(`#arrow-previous`).classList.add(`disabled`)
    } else {
        document.querySelector(`#arrow-previous`).classList.remove(`disabled`)
    }
    if (
        document.querySelectorAll(`.roadmap-item.title`)[count].classList.contains(`active`) &&
        document.querySelectorAll(`.roadmap-item.image`)[count].classList.contains(`active`) &&
        document.querySelectorAll(`.roadmap-item.paragraph`)[count].classList.contains(`active`) &&
        document.querySelectorAll(`.roadmap-item.year`)[count].classList.contains(`active`)
    ) {
        document.querySelector(`#arrow-next`).classList.add(`disabled`)
    } else {
        document.querySelector(`#arrow-next`).classList.remove(`disabled`)
    }
}

const appendSelectLanguage = (availableLanguages) => {
    document.querySelectorAll(`.container-select-language`).forEach((container) => {
        if (container != null) {
            container.append(SelectLanguage(availableLanguages))
        }
    })
}

const setCookiesBtnFunction = () => {
    document.querySelector(`#btn-accept-cookies`).addEventListener('click', () => {
        hideModal(`#modal-cookies`)
        localStorage.setItem(`acceptCookies`, 1)
        startVideoHomeLanding()
    })
}

const setOpenContactFormFunction = () => {
    const btn = document.querySelector(`#btnOpenContactForm`)
    btn.addEventListener("click", () => {
        showModal(`#modal-contact-form`)
    })
}

const setMessageToLocalStorage = (localDate, localTime, message) => {
    localStorage.setItem('messageLocalDate', localDate)
    localStorage.setItem('messageLocalTime', localTime)
    localStorage.setItem('messageText', message)
}

const setMessageHTML = () => {

    let localDate = localStorage.getItem(`messageLocalDate`)
    let localTime = localStorage.getItem(`messageLocalTime`)
    let message = localStorage.getItem(`messageText`)

    if (localDate != null && localTime != null && message != null) {

        if (document.querySelector(`#message`) != null) {
            document.querySelector(`#message`).remove()
        }

        let html =
            `<li id="message" class="bubble-message receive">
                <div class="date">Le ${localDate} à ${localTime}</div>
                ${message}
            </li>`

        document.querySelector(`.list-message`).innerHTML += html
    }
}

const setValidateContactFormFunctions = () => {

    const inputSubject = document.querySelector(`#user-subject`)
    const inputMail = document.querySelector(`#user-mail`)
    const inputMessage = document.querySelector(`#user-message`)
    const btnValidate = document.querySelector(`#btn-send-mail`)
    const btnClearMessage = document.querySelector(`#btn-clear-message`)
    const inputs = document.querySelectorAll(`.input-contact-form`)

    btnValidate.addEventListener('click', () => {

        if (inputSubject.value && inputMail.value && inputMessage.value && inputMessage.value) {

            if (mailIsValid(inputMail.value)) {

                let date = new Date().toLocaleString();
                let localDate = date.split(',')[0]
                let localTime = date.split(',')[1]
                let mail = inputMail.value
                let subject = inputSubject.value
                let message = inputMessage.value

                $.post("./request.php", { request:"setMessage", mail: mail, subject: subject, message: message }, function (state) {
                    if (state == `success`) {
                        setInputsError(inputs)
                        clearInputsValue(inputs)
                        hideModal(`#modal-contact-form`)
                        setMessageToLocalStorage(localDate, localTime, message)
                        setMessageHTML()
                        Notif('success', 'yourMessageSentSuccess')
                    } else {
                        Notif('error', 'yourMessageSentError')
                    }
                })

            } else {
                setUnvalidInputMail(inputMail)
                Notif('error', 'mailIsNotValid')
            }

        } else {
            setInputsError(inputs)
            Notif('error', 'pleaseEnterAllFields')
        }

    })

    inputMessage.addEventListener('input',()=>{
        updateInputMessageLengthValue(inputMessage)
    })

    btnClearMessage.addEventListener('click',()=>{
        inputMessage.value = ''
        inputMessage.focus()
        updateInputMessageLengthValue(inputMessage)
    })
}

const updateInputMessageLengthValue = (element) => {
    let charLengthValue = document.querySelector(`#char-length-value`)
    charLengthValue.innerHTML = `${element.value.length}`
}

const setMaxCharLengthValue = () => {
    const inputMessage = document.querySelector(`#user-message`)
    document.querySelector(`#max-char-value`).innerHTML = ` / ${inputMessage.getAttribute(`maxlength`)}`
}

const setCloseModalContactFunctions = () => {

    const inputMessage = document.querySelector(`#user-message`)
    const modal = document.querySelector(`#modal-contact-form`)
    const modalContainer = document.querySelector(`#modal-contact-form .container`)

    modal.addEventListener('click', (e) => {

        let isClickInsideElement = modalContainer.contains(e.target)

        if (!isClickInsideElement) {
            if (inputMessage.value.length > 0) {
                NotifConfirmation(`cancelEntry?`, () => {
                    hideModal(`#modal-contact-form`)
                })
            } else {
                hideModal(`#modal-contact-form`)
            }
        }
    })
}

const setModalWelcomeBackFunctions = () => {

    const modal = document.querySelector(`#modal-welcome-back`)
    const modalContainer = document.querySelector(`#modal-welcome-back .container`)
    const btnChangeTheme = document.querySelector(`#btn-change-theme`)
    const btnNoThanks = document.querySelector(`#btn-no-thanks`)

    modal.addEventListener('click', (e) => {
        let isClickInsideElement = modalContainer.contains(e.target)
        if (!isClickInsideElement) {
            hideModal(`#modal-welcome-back`)
            startVideoHomeLanding()
        }
    })

    btnChangeTheme.addEventListener('click', (e) => {
        hideModal(`#modal-welcome-back`)
        showModal(`#modal-settings`)
        startVideoHomeLanding()
    })

    btnNoThanks.addEventListener('click', () => {
        hideModal(`#modal-welcome-back`)
        startVideoHomeLanding()
    })
}

// set html translations
async function setHtmlTranslations() {
    const tr = await getTranslations()
    document.querySelectorAll(`[data-tr]`).forEach((element) => {
        if(element != null){
            if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
                element.placeholder = tr[element.getAttribute(`data-tr`)]
            } else {
                element.innerHTML = tr[element.getAttribute(`data-tr`)]
            }
        }
    })
    document.querySelectorAll(`[data-tr-title]`).forEach((element) => {
        if(element != null){
            element.title = tr[element.getAttribute(`data-tr-title`)]
        }
    })
    document.querySelectorAll(`.select-language`).forEach((element) => {
        if(element != null){
            element.value = localStorage.getItem(`lang`)
        }
    })
    setYearValue()
    setCounterValue()
}