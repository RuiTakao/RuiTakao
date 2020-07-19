'use strict'
{
const top_date = new Date().getDate();
const top_month = new Date().getMonth() + 1;
const top_day = new Date().getDay();
const top_weekList = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
const top_center = document.getElementById('top_center');
top_center.textContent = `${top_weekList[top_day]} \n ${top_month}/${top_date}`;
}