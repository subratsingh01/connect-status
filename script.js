// const mongoose = require("mongoose");
// mongoose.connect("mongodb+srv://subratsingh:u8IEesh8Ay143SCF@cluster0.8fkuo.mongodb.net/status-check");

// const user = mongoose.model("status", {
//     username:String,
//     password:String
// })

// console.log(user)



// let userId="aman";
// let password="amanffaff";

// const cat = new user({
//     username:userId,
//     password:password
// })


// cat.save();
// console.log("created");

function login() {
    userId = document.getElementById("username").value;
    password = document.getElementById("password").value;
    console.log(userId, password);
    if (userId == "subrat" && password == "infinity") {
        alert("welcome subrat");
        adminLogin(); //in this function use fetch to get request and move on new page of admin
    } else if (userId == "khushi" && password == "khushi123") {
        // alert("welcome khushi");
        khushiDummy();
    } else if (userId == "khushi" && password == "khushi5455") {
        // alert("welcome khushi use khushi123 for dummy sign in")
        khushiLogin();
    } else {
        alert("Invalid username or password");
    }
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

document.getElementById("noti").addEventListener("click", () => {
    
    Notification.requestPermission().then(parem => {
        if (parem === "granted") {
           new Notification("hi", {
            body: {hello: "this is body of notification"}
           })
        }
    })

})