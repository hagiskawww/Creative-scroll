import '../css/style.css'
import { gsap, ScrollTrigger} from "gsap/all";
import LocomotiveScroll from 'locomotive-scroll';
import {Welcome} from "./Welcome.js";
import {Portfolio} from "./Portfolio.js";


document.getElementById('app').innerHTML =
    `
    <div class="wrapper">
        <div class="content">
            ${Welcome}
            <main>
                ${Portfolio}
            </main>
        </div>
    </div>

    `

gsap.registerPlugin(ScrollTrigger);
const scroll = new LocomotiveScroll({
    el: document.querySelector('.wrapper'),
    content: '.content',
    smooth: true,
    effect: true,
});
