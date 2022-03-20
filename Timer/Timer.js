/*
* Chrono.js
*/

import Natives from '../Natives/Natives.js'

const natives = new Natives()

export default class Timer extends HTMLElement {
    constructor(props) {
        super()
        this.id = props.id
        this.timer = null
        this.to = new Date(props.to)
        this.countDownDate = this.to.setDate(this.to.getDate() + 1)
        this.width = this.getAttribute('width') || props.width
        this.roundSize = (this.width / 5).toFixed(0)
        this.valueFontSize = (this.width / 15).toFixed(0)
    }

    render() {
        const shadow = this.attachShadow({ mode: 'open' })

        const style = natives.createLinkCSS({
            id: 'linkTimer', 
            href: `../Components/Timer/Timer.css`
        })

        const element = document.createElement('div')
        element.id = this.id
        element.classList.add('container')
        element.style.width = `${this.width}px`

        element.innerHTML =
            `<div class="wrapper">
                <div class="round" style="width: ${this.roundSize}px;height: ${this.roundSize}px;">
                    <div id="hours" class="value" style="font-size:${this.valueFontSize}px;"></div>
                </div>
            </div>
            <div class="dot" style="font-size:${this.valueFontSize}px;">:</div>
            <div class="wrapper">
                <div class="round" style="width: ${this.roundSize}px;height: ${this.roundSize}px;">
                    <div id="minutes" class="value" style="font-size:${this.valueFontSize}px;"></div>
                </div>
            </div>
            <div class="dot" style="font-size:${this.valueFontSize}px;">:</div>
            <div class="wrapper">
                <div class="round" style="width: ${this.roundSize}px;height: ${this.roundSize}px;">
                    <div id="seconds" class="value" style="font-size:${this.valueFontSize}px;"></div>
                </div>
            </div>`

        shadow.appendChild(style)
        shadow.appendChild(element)
    }

    connectedCallback() {
        this.render()
        this.timer = setInterval(() => {
            this.updateCountdownTimer()
        }, 1000)
    }

    updateCountdownTimer() {

        let now = new Date().getTime()
        let timeleft = this.countDownDate - now

        const timerDisplaySeconds = this.shadowRoot.getElementById("seconds");
        const timerDisplayMinutes = this.shadowRoot.getElementById("minutes");
        const timerDisplayHour = this.shadowRoot.getElementById("hours");

        let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((timeleft % (1000 * 60)) / 1000)

        if(timeleft >= 86401132){
            timerDisplaySeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds
            timerDisplayMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes
            timerDisplayHour.innerHTML = hours < 10 ? "0" + hours : hours
        } else{
            clearInterval(this.timer)
            timerDisplaySeconds.innerHTML = "00"
            timerDisplayMinutes.innerHTML = "00"
            timerDisplayHour.innerHTML = "00"
        }
    }
}

customElements.define('timer-y', Timer)

/*
* Examples
*/

// --- JS ---
/*
    const timer = new Timer({
        id: 'timer',
        to: '2022-03-19 15:33:59',
        width: 500
    })
    document.body.append(timer)
*/