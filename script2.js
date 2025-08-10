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

function handleButtonClick(buttonId) {
  const button = document.getElementById(buttonId);
  const timeSlot = button.closest('.time-slot-1');
  const statusPosition = timeSlot.nextElementSibling;
  
  if (statusPosition && statusPosition.classList.contains('status-div-1')) {
    statusPosition.remove();
    return;
  }
  
  
  const statusDiv = document.createElement('div');
  statusDiv.textContent = 'Absent';
  statusDiv.className = 'status-div-1';
  statusDiv.dataset.status = 'absent';
  timeSlot.insertAdjacentElement('afterend', statusDiv);
}


function handleButton(buttonId) {
  const button = document.getElementById(buttonId);
  const timeSlot = button.closest('.time-slot-2');
  const statusPosition = timeSlot.nextElementSibling;
  
 
  if (statusPosition && statusPosition.classList.contains('status-div-2')) {
    statusPosition.remove();
    return;
  }
  

  const statusDiv = document.createElement('div');
  statusDiv.textContent = 'Absent';
  statusDiv.className = 'status-div-2';
  statusDiv.dataset.status = 'absent';
  timeSlot.insertAdjacentElement('afterend', statusDiv);
}


for (let i = 1; i <= 10; i++) {
  
  const btn1 = document.getElementById(`b${i}`);
  if (btn1) btn1.addEventListener('click', () => handleButtonClick(`b${i}`));
  
  const btn2 = document.getElementById(`a${i}`);
  if (btn2) btn2.addEventListener('click', () => handleButton(`a${i}`));
}


document.getElementById('submitBtn').addEventListener('click', () => {
  document.querySelectorAll('.content-row').forEach(row => {
    const timeSlot = row.querySelector('.time-slot-1');
    const nextElement = timeSlot.nextElementSibling;
    
    
    if (!nextElement || !nextElement.classList.contains('status-div-1')) {
      
      if (nextElement && (nextElement.classList.contains('status-div-1') || 
                         nextElement.classList.contains('status-div-2'))) {
        nextElement.remove();
      }
      
      const statusDiv = document.createElement('div');
      statusDiv.textContent = 'Present';
      statusDiv.className = 'status-div-1';
      statusDiv.dataset.status = 'present';
      timeSlot.insertAdjacentElement('afterend', statusDiv);
    }
  });
});


document.getElementById('submitBtn_2').addEventListener('click', () => {
  document.querySelectorAll('.content-row').forEach(row => {
    const timeSlot = row.querySelector('.time-slot-2');
    const nextElement = timeSlot.nextElementSibling;
    
    
    if (!nextElement || !nextElement.classList.contains('status-div-2')) {
    
      if (nextElement && (nextElement.classList.contains('status-div-1') || 
                         nextElement.classList.contains('status-div-2'))) {
        nextElement.remove();
      }
      
      const statusDiv = document.createElement('div');
      statusDiv.textContent = 'Present';
      statusDiv.className = 'status-div-2';
      statusDiv.dataset.status = 'present';
      timeSlot.insertAdjacentElement('afterend', statusDiv);



    }
  });
});



document.getElementById('submitBtn_3').addEventListener('click', function() {
 
  const firstSlots = document.querySelectorAll('.time-slot-1');
  
  firstSlots.forEach((slot, index) => {
  
    const statusDiv1 = slot.nextElementSibling;
    if (!statusDiv1 || !statusDiv1.classList.contains('status-div-1')) return;
    
    const status = statusDiv1.textContent;
    
    
    const row = slot.closest('.content-row');
    const timeSlot2 = row.querySelector('.time-slot-2');
    if (!timeSlot2) return;
    
    
    const existingStatus2 = timeSlot2.nextElementSibling;
    if (existingStatus2 && existingStatus2.classList.contains('status-div-2')) {
      existingStatus2.remove();
    }
    
 
    const statusDiv2 = document.createElement('div');
    statusDiv2.className = 'status-div-2';
    statusDiv2.textContent = status;
    statusDiv2.dataset.status = status.toLowerCase();
    timeSlot2.insertAdjacentElement('afterend', statusDiv2);
  });
  
  
  const copyBtn = document.getElementById('copyBtn');
  copyBtn.textContent = 'Copied!';
  setTimeout(() => {
    copyBtn.textContent = 'Copy Status to Slot 2';
  }, 2000);


});



