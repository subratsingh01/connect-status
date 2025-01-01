function login() {
    userId = document.getElementById("username").value;
    password = document.getElementById("password").value;
    console.log(userId, password);
    if (userId == "Subrat" && password == "infinity") {
        alert("welcome subrat");
        adminLogin();
    } else if (userId == "Khushi" && password == "khushi123") {
        khushiDummy();
    } else if (userId == "Khushi" && password == "khushi5455") {
        khushiLogin();
        loginUpdate();
    } else {
        alert("Invalid username or password");
    }
}

function loginUpdate() {
    fetch("https://swan-server.onrender.com/login_update", {
        method: "POST"
    })
}

function signup() {
    
}

function adminLogin() {
    const s_block = document.getElementById("subrat_block");
    s_block.style.display = "block";
    const k_block = document.getElementById("khushi_block");
    k_block.style.display = "none";
    const d_block = document.getElementById("khushi_dummy");
    d_block.style.display = "none";
}

function khushiLogin() {
    const k_block = document.getElementById("khushi_block");
    k_block.style.display = "block";
    const s_block = document.getElementById("subrat_block");
    s_block.style.display = "none";
    const d_block = document.getElementById("khushi_dummy");
    d_block.style.display = "none";
}

function khushiDummy() {
    const d_block = document.getElementById("khushi_dummy");
    d_block.style.display = "block";
    const s_block = document.getElementById("subrat_block");
    s_block.style.display = "none";
    const k_block = document.getElementById("khushi_block");
    k_block.style.display = "none";
}