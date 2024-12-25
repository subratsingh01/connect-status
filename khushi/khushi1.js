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
    study();
})
b2.addEventListener("click", () => {
    d1.classList.remove("status_slide_btn_dot_right");
    d2.classList.add("status_slide_btn_dot_right");
    d3.classList.remove("status_slide_btn_dot_right");
    d4.classList.remove("status_slide_btn_dot_right");
    d5.classList.remove("status_slide_btn_dot_right");
    d6.classList.remove("status_slide_btn_dot_right");
    d7.classList.remove("status_slide_btn_dot_right");
    free();
})
b3.addEventListener("click", () => {
    d1.classList.remove("status_slide_btn_dot_right");
    d2.classList.remove("status_slide_btn_dot_right");
    d3.classList.add("status_slide_btn_dot_right");
    d4.classList.remove("status_slide_btn_dot_right");
    d5.classList.remove("status_slide_btn_dot_right");
    d6.classList.remove("status_slide_btn_dot_right");
    d7.classList.remove("status_slide_btn_dot_right");
    missing_you();
})
b4.addEventListener("click", () => {
    d1.classList.remove("status_slide_btn_dot_right");
    d2.classList.remove("status_slide_btn_dot_right");
    d3.classList.remove("status_slide_btn_dot_right");
    d4.classList.add("status_slide_btn_dot_right");
    d5.classList.remove("status_slide_btn_dot_right");
    d6.classList.remove("status_slide_btn_dot_right");
    d7.classList.remove("status_slide_btn_dot_right");
    waiting_call();
})
b5.addEventListener("click", () => {
    d1.classList.remove("status_slide_btn_dot_right");
    d2.classList.remove("status_slide_btn_dot_right");
    d3.classList.remove("status_slide_btn_dot_right");
    d4.classList.remove("status_slide_btn_dot_right");
    d5.classList.add("status_slide_btn_dot_right");
    d6.classList.remove("status_slide_btn_dot_right");
    d7.classList.remove("status_slide_btn_dot_right");
    waiting_message();
})
b6.addEventListener("click", () => {
    d1.classList.remove("status_slide_btn_dot_right");
    d2.classList.remove("status_slide_btn_dot_right");
    d3.classList.remove("status_slide_btn_dot_right");
    d4.classList.remove("status_slide_btn_dot_right");
    d5.classList.remove("status_slide_btn_dot_right");
    d6.classList.add("status_slide_btn_dot_right");
    d7.classList.remove("status_slide_btn_dot_right");
    busy();
})
b7.addEventListener("click", () => {
    d1.classList.remove("status_slide_btn_dot_right");
    d2.classList.remove("status_slide_btn_dot_right");
    d3.classList.remove("status_slide_btn_dot_right");
    d4.classList.remove("status_slide_btn_dot_right");
    d5.classList.remove("status_slide_btn_dot_right");
    d6.classList.remove("status_slide_btn_dot_right");
    d7.classList.add("status_slide_btn_dot_right");
    do_not_disturd();
})

function study() {
    fetch('https://swan-server.onrender.com/login_update', {
        method: 'PATCH',
    })
        .then((e) => console.log("done"))
        .catch( (error) => console.log(error))

};

function free() {

};
function missing_you() {

};

function waiting_call() {

};

function waiting_message() {

};

function busy() {

};

function do_not_disturd() {

};