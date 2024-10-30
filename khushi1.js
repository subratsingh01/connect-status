const b1 = document.getElementById("status_slide_btn1");
const b2 = document.getElementById("status_slide_btn2");
const b3 = document.getElementById("status_slide_btn3");
const b4 = document.getElementById("status_slide_btn4");
const b5 = document.getElementById("status_slide_btn5");
const b6 = document.getElementById("status_slide_btn6");
const b7 = document.getElementById("status_slide_btn7");




const d1 = document.getElementById("status_slide_btn_dot1");
const d2 = document.getElementById("status_slide_btn_dot2");
const d3 = document.getElementById("status_slide_btn_dot3");
const d4 = document.getElementById("status_slide_btn_dot4");
const d5 = document.getElementById("status_slide_btn_dot5");
const d6 = document.getElementById("status_slide_btn_dot6");
const d7 = document.getElementById("status_slide_btn_dot7");



b1.addEventListener("click", () => {
    d1.classList.add("status_slide_btn_dot_right");
    d2.classList.remove("status_slide_btn_dot_right");
    d3.classList.remove("status_slide_btn_dot_right");
    d4.classList.remove("status_slide_btn_dot_right");
    d5.classList.remove("status_slide_btn_dot_right");
    d6.classList.remove("status_slide_btn_dot_right");
    d7.classList.remove("status_slide_btn_dot_right");
})
b2.addEventListener("click", () => {
    d1.classList.remove("status_slide_btn_dot_right");
    d2.classList.add("status_slide_btn_dot_right");
    d3.classList.remove("status_slide_btn_dot_right");
    d4.classList.remove("status_slide_btn_dot_right");
    d5.classList.remove("status_slide_btn_dot_right");
    d6.classList.remove("status_slide_btn_dot_right");
    d7.classList.remove("status_slide_btn_dot_right");
})
b3.addEventListener("click", () => {
    d1.classList.remove("status_slide_btn_dot_right");
    d2.classList.remove("status_slide_btn_dot_right");
    d3.classList.add("status_slide_btn_dot_right");
    d4.classList.remove("status_slide_btn_dot_right");
    d5.classList.remove("status_slide_btn_dot_right");
    d6.classList.remove("status_slide_btn_dot_right");
    d7.classList.remove("status_slide_btn_dot_right");
})
b4.addEventListener("click", () => {
    d1.classList.remove("status_slide_btn_dot_right");
    d2.classList.remove("status_slide_btn_dot_right");
    d3.classList.remove("status_slide_btn_dot_right");
    d4.classList.add("status_slide_btn_dot_right");
    d5.classList.remove("status_slide_btn_dot_right");
    d6.classList.remove("status_slide_btn_dot_right");
    d7.classList.remove("status_slide_btn_dot_right");
})
b5.addEventListener("click", () => {
    d1.classList.remove("status_slide_btn_dot_right");
    d2.classList.remove("status_slide_btn_dot_right");
    d3.classList.remove("status_slide_btn_dot_right");
    d4.classList.remove("status_slide_btn_dot_right");
    d5.classList.add("status_slide_btn_dot_right");
    d6.classList.remove("status_slide_btn_dot_right");
    d7.classList.remove("status_slide_btn_dot_right");
})
b6.addEventListener("click", () => {
    d1.classList.remove("status_slide_btn_dot_right");
    d2.classList.remove("status_slide_btn_dot_right");
    d3.classList.remove("status_slide_btn_dot_right");
    d4.classList.remove("status_slide_btn_dot_right");
    d5.classList.remove("status_slide_btn_dot_right");
    d6.classList.add("status_slide_btn_dot_right");
    d7.classList.remove("status_slide_btn_dot_right");
})
b7.addEventListener("click", () => {
    d1.classList.remove("status_slide_btn_dot_right");
    d2.classList.remove("status_slide_btn_dot_right");
    d3.classList.remove("status_slide_btn_dot_right");
    d4.classList.remove("status_slide_btn_dot_right");
    d5.classList.remove("status_slide_btn_dot_right");
    d6.classList.remove("status_slide_btn_dot_right");
    d7.classList.add("status_slide_btn_dot_right");
})