



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

function statusSuccess(value, statusType) {
    switch (statusType) {
        case "free":
            
            break;
    
        default:
            break;
    }
}

function study() {
    fetch("https://swan-server.onrender.com/status_update?type=study", {
        method: 'PATCH'
    })
        .then(response => {
            if (!response.ok) {
                statusSuccess(0, "study");
            }
            else {
                statusSuccess(1, "study");
            }
        })
        .catch(error => {
            console.log(error);
        })
};

function free() {
    fetch("https://swan-server.onrender.com/status_update?type=free", {
        method: "PATCH"
    })
        .then(response => {
            if (!response.ok) {
                statusSuccess(0, "free");
            }
            else {
                statusSuccess(1, "free");
            }
        })
        .catch(error => {
            console.log(error);
        })
};

function missing_you() {
    fetch("https://swan-server.onrender.com/status_update?type=missing", {
        method: "PATCH"
    })
        .then(response => {
            if (!response.ok) {
                statusSuccess(0, "missing");
            }
            else {
                statusSuccess(1, "missing");
            }
        })
        .catch(error => {
            console.log(error);
        })
};

function waiting_call() {
    fetch("https://swan-server.onrender.com/status_update?type=waiting_call", {
        method: "PATCH"
    })
        .then(response => {
            if (!response.ok) {
                statusSuccess(0, "waiting call");
            }
            else {
                statusSuccess(1, "waiting call");
            }
        })
        .catch(error => {
            console.log(error);
        })
};

function waiting_message() {
    fetch("https://swan-server.onrender.com/status_update?type=waiting_msg", {
        method: "PATCH"
    })
        .then(response => {
            if (!response.ok) {
                statusSuccess(0, "waiting msg")
            }
            else {
                statusSuccess(1, "waiting msg")
            }
        })
        .catch(error => {
            console.log(error);
        })
};

function busy() {
    fetch("https://swan-server.onrender.com/status_update?type=busy", {
        method: "PATCH"
    })
        .then(response => {
            if (!response.ok) {
                statusSuccess(0, "Busy")
            }
            else {
                statusSuccess(1, "Busy")
            }
        })
        .catch(error => {
            console.log(error);
        })
};

function do_not_disturd() {
    fetch("https://swan-server.onrender.com/status_update?type=dnd", {
        method: "PATCH"
    })
        .then(response => {
            if (!response.ok) {
                statusSuccess(0, "DND")
            }
            else {
                statusSuccess(1, "DND")
            }
        })
        .catch(error => {
            console.log(error);
        })
};