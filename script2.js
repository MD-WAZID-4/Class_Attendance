const clock = document.getElementById('clock');
function updateClock() {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}
updateClock();
setInterval(updateClock, 1000);



const time = document.getElementById('time');
function updateTime() {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    time.innerHTML = `${day} ${month} ${year}`;
}
updateTime();
setInterval(updateTime, 1000);