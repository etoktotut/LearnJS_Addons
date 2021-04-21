'use strict';

const week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const dayTime = document.querySelector('.day-time'),
    dayWeek = document.querySelector('.day-week'),
    timeDashed = document.querySelector('.time-dashed'),
    tillNewYear = document.querySelector('.till-newyear');

const timesOfDay = (date) => {
    let hour = date.getHours();
    if (hour >= 0 && hour < 12) {
        return "ой ночи!";
    } else if (hour >= 6 && hour <= 12) {
        return "ое утро!";
    } else if (hour >= 12 && hour < 18) {
        return "ый день!";
    }
    return "ый вечер!";
};

const zeroAdd = z => z < 10 ? 0 + String(z) : String(z);
const checkAM = h => h > 12 ? h % 12 : h;
const ampm = h => h > 12 ? 'PM' : 'AM';
const timeAmPm = date => `${zeroAdd(checkAM(date.getHours()))}:${zeroAdd(date.getMinutes())}:${zeroAdd(date.getSeconds())} ${ampm(date.getHours())}`;

const daysWithEnding = (days) => {
    let daysToStr = days.toString();
    switch (Number(daysToStr[daysToStr.length - 1])) {
        case 0:
            return daysToStr + ' дней';
        case 1:
            return daysToStr + ' день';
        case 2:
        case 3:

        case 4:
            return daysToStr + ' дня';
        default:
            return daysToStr + 'дней';
    }
};

const toNewYear = (date) => {
    const nextNY = new Date();
    nextNY.setFullYear(date.getFullYear() + 1, 0, 1);
    nextNY.setHours(0, 0, 0);
    return daysWithEnding(Math.floor((nextNY - date) / 1000 / 3600 / 24));
};

const renderDate = () => {
    const currDate = new Date();
    let days = toNewYear(currDate);
    dayTime.textContent = timesOfDay(currDate);
    dayWeek.textContent = week[currDate.getDay()];
    timeDashed.textContent = timeAmPm(currDate);
    tillNewYear.textContent = toNewYear(currDate);
};

renderDate();
setInterval(renderDate, 1000);