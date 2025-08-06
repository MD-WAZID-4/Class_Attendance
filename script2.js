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

const btn_1 = document.getElementById('b1');
const container = document.querySelector('.content');


btn_1.addEventListener('click', () => {
  
  const existingDiv = container.querySelector('.absent-div');
  
  if (existingDiv) {
    
    existingDiv.remove();
  } else {
    
    const absentDiv = document.createElement('div');
    absentDiv.textContent = 'absent';
    absentDiv.className = 'absent-div';
    container.appendChild(absentDiv);
  }
});

