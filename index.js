/*
* index.js
*/

import Button from '../Components/Button/Button.js';
import Logo from '../Components/Logo/Logo.js';
import Search from '../Components/Search/Search.js';
import SwitchTheme from '../Components/SwitchTheme/SwitchTheme.js';
import SelectLanguage from '../Components/SelectLanguage/SelectLanguage.js';

// LOGO
const sectionLogo = document.querySelector('#section-logo')
const logo = new Logo({
    id: "logo",
    href:"https://example.com",
    title:"homePage"
})
sectionLogo.append(logo)

// SEARCH
const sectionSearch = document.querySelector('#section-search')
const search = new Search({
    id: "search",
    icon: "fa-search",
    items: "-1"
})
search.style.width = '90%'
sectionSearch.append(search)

// BTN LOGIN
const listLogin = document.querySelector('#list-btnLogin')
const btnLogin = new Button({
    id: "btn-login",
    class: "icon",
    icon: "fa-login",
    html: "-1",
    title: "connectRegister"
})
listLogin.append(btnLogin)

// SWITCH THEME
const listSwitch = document.querySelector('#list-switchTheme')
const switchTheme = new SwitchTheme({
    id: "switch-theme",
    title:"switchTheme",
    theme: 'dark',
    showText: true
})
listSwitch.append(switchTheme)

// SELECT LANGUAGE
const listSelectLanguage = document.querySelector('#list-selectLanguage')
const selectLanguage = new SelectLanguage({
    id: 'selectLanguage',
    pages:[
        {
            lang: 'fr',
            url: 'http://localhost:3000/fr/index.php'
        },
        {
            lang: 'en',
            url: 'http://localhost:3000/en/index.php'
        }
    ]
})
listSelectLanguage.append(selectLanguage)

// BTN MENU
const sectionBtnMenu = document.querySelector('#section-btn-menu')
const button = new Button({
    id: "btn-menu",
    class: "icon",
    icon: "fa-menu",
    html: "-1",
    title: "openMainMenu"
})
sectionBtnMenu.append(button)