const currentTime = new Date();

document.getElementById('minutes').innerHTML = `${currentTime.getMinutes()}`;
document.getElementById('seconds').innerHTML = `${currentTime.getSeconds()}`;
document.getElementById('date').innerHTML = `${currentTime.getDate()}`;
document.getElementById('year').innerHTML = `${currentTime.getFullYear()}`;


const hours = currentTime.getHours();
let localHours;
if (hours > 12) {
    switch (hours) {
        case 13:
            localHours = 1;
            break;
        case 14:
            localHours = 2;
            break;
        case 15:
            localHours = 3;
            break;
        case 16:
            localHours = 4;
            break;
        case 17:
            localHours = 5;
            break;
        case 18:
            localHours = 6;
            break;
        case 19:
            localHours = 7;
            break;
        case 20:
            localHours = 8;
            break;
        case 21:
            localHours = 9;
            break;
        case 22:
            localHours = 10;
            break;
        case 23:
            localHours = 11;
            break;
        case 24:
            localHours = 12;
            break;
        }
    } else {
        localHours = hours;
    }

document.getElementById('hours').innerHTML = `${localHours}`;

const month = currentTime.getMonth();
let stringMonth = '';
switch (month) {
    case 0:
        stringMonth = "January";
        break;
    case 1:
        stringMonth = "Febuary";
        break;
    case 2:
        stringMonth = "March";
        break;
    case 3:
        stringMonth = "April";
        break;
    case 4:
        stringMonth = "May";
        break;
    case 5:
        stringMonth = "June";
        break;
    case 6:
        stringMonth = "July";
        break;
    case 7:
        stringMonth = "August";
        break;
    case 8:
        stringMonth = "September";
        break;
    case 9:
        stringMonth = "October";
        break;
    case 10:
        stringMonth = "November";
        break;
    case 11:
        stringMonth = "December";
        break;
    default:
        stringMonth = "can not get month"
        break;
}
document.getElementById('month').innerHTML = stringMonth;

const day = currentTime.getDay();
let stringDay = '';
switch (day) {
    case 0:
        stringDay = "Sunday";
        break;
    case 1:
        stringDay = "Monday";
        break;
    case 2:
        stringDay = "Tuesday";
        break;
    case 3:
        stringDay = "Wednesday";
        break;
    case 4:
        stringDay = "Thursday";
        break;
    case 5:
        stringDay = "Friday";
        break;
    case 6:
        stringDay = "Saturday";
        break;
    default:
        stringDay = "can not get day";
        break;
}
document.getElementById('day').innerHTML = stringDay;

setInterval(() => {
    const currentTime = new Date();


    document.getElementById('minutes').innerHTML = `${currentTime.getMinutes()}`;
    document.getElementById('seconds').innerHTML = `${currentTime.getSeconds()}`;
    document.getElementById('date').innerHTML = `${currentTime.getDate()}`;
    document.getElementById('year').innerHTML = `${currentTime.getFullYear()}`;


    const hours = currentTime.getHours();
    let localHours;
    if (hours > 12) {
        switch (hours) {
            case 13:
                localHours = 1;
                break;
            case 14:
                localHours = 2;
                break;
            case 15:
                localHours = 3;
                break;
            case 16:
                localHours = 4;
                break;
            case 17:
                localHours = 5;
                break;
            case 18:
                localHours = 6;
                break;
            case 19:
                localHours = 7;
                break;
            case 20:
                localHours = 8;
                break;
            case 21:
                localHours = 9;
                break;
            case 22:
                localHours = 10;
                break;
            case 23:
                localHours = 11;
                break;
            case 24:
                localHours = 12;
                break;
        }
    } else {
        localHours = hours;
    }
    document.getElementById('hours').innerHTML = `${localHours}`;

    const month = currentTime.getMonth();
    let stringMonth = '';
    switch (month) {
        case 0:
            stringMonth = "January";
            break;
        case 1:
            stringMonth = "Febuary";
            break;
        case 2:
            stringMonth = "March";
            break;
        case 3:
            stringMonth = "April";
            break;
        case 4:
            stringMonth = "May";
            break;
        case 5:
            stringMonth = "June";
            break;
        case 6:
            stringMonth = "July";
            break;
        case 7:
            stringMonth = "August";
            break;
        case 8:
            stringMonth = "September";
            break;
        case 9:
            stringMonth = "October";
            break;
        case 10:
            stringMonth = "November";
            break;
        case 11:
            stringMonth = "December";
            break;
        default:
            stringMonth = "can not get month"
            break;
    }
    document.getElementById('month').innerHTML = stringMonth;

    const day = currentTime.getDay();
    let stringDay = '';
    switch (day) {
        case 0:
            stringDay = "Sunday";
            break;
        case 1:
            stringDay = "Monday";
            break;
        case 2:
            stringDay = "Tuesday";
            break;
        case 3:
            stringDay = "Wednesday";
            break;
        case 4:
            stringDay = "Thursday";
            break;
        case 5:
            stringDay = "Friday";
            break;
        case 6:
            stringDay = "Saturday";
            break;
        default:
            stringDay = "can not get day";
            break;
    }
    document.getElementById('day').innerHTML = stringDay;

}, 1000);

setTimeout(() => {
    if (currentTime.getHours() >= 6 && currentTime.getHours() < 12) {
        document.getElementById("greet_change_msg").innerHTML = "Good Morning Taddy 💐"
    } else if (currentTime.getHours() >= 12 && currentTime.getHours() < 17) {
        document.getElementById("greet_change_msg").innerHTML = "Good Afternoon Motu 🌞"
    } else if (currentTime.getHours() >= 17 && currentTime.getHours() < 21) {
        document.getElementById("greet_change_msg").innerHTML = "Good Evening Taddy 🌇"
    } else {
        document.getElementById("greet_change_msg").innerHTML = "Good Night Switee 🌆"
    }
}, 4000);