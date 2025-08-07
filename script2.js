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

// const btn_1 = document.getElementById('b1');
// const container = document.querySelector('.content');


// btn_1.addEventListener('click', () => {
  
//   const existingDiv_1 = container.querySelector('.absent-div_1');
  
//   if (existingDiv_1) {
    
//     existingDiv_1.remove();
//   } else {
    
//     const absentDiv_1 = document.createElement('div');
//     absentDiv_1.textContent = 'Absent';
//     absentDiv_1.className = 'absent-div_1';
//     container.appendChild(absentDiv_1);
//   }
// });


// const btn_2 = document.getElementById('b2');



// btn_2.addEventListener('click', () => {
  
//   const existingDiv_2 = container.querySelector('.absent-div_2');
  
//   if (existingDiv_2) {
    
//     existingDiv_2.remove();
//   } else {
    
//     const absentDiv_2 = document.createElement('div');
//     absentDiv_2.textContent = 'Absent';
//     absentDiv_2.className = 'absent-div_2';
//     container.appendChild(absentDiv_2);
//   }
// });



// const btn_3 = document.getElementById('b3');



// btn_3.addEventListener('click', () => {
  
//   const existingDiv_3 = container.querySelector('.absent-div_3');
  
//   if (existingDiv_3) {
    
//     existingDiv_3.remove();
//   } else {
    
//     const absentDiv_3 = document.createElement('div');
//     absentDiv_3.textContent = 'Absent';
//     absentDiv_3.className = 'absent-div_3';
//     container.appendChild(absentDiv_3);
//   }
// });



// const btn_4 = document.getElementById('b4');



// btn_4.addEventListener('click', () => {
  
//   const existingDiv_4 = container.querySelector('.absent-div_4');
  
//   if (existingDiv_4) {
    
//     existingDiv_4.remove();
//   } else {
    
//     const absentDiv_4 = document.createElement('div');
//     absentDiv_4.textContent = 'Absent';
//     absentDiv_4.className = 'absent-div_4';
//     container.appendChild(absentDiv_4);
//   }
// });




// const btn_5 = document.getElementById('b5');



// btn_5.addEventListener('click', () => {
  
//   const existingDiv_5 = container.querySelector('.absent-div_5');
  
//   if (existingDiv_5) {
    
//     existingDiv_5.remove();
//   } else {
    
//     const absentDiv_5 = document.createElement('div');
//     absentDiv_5.textContent = 'Absent';
//     absentDiv_5.className = 'absent-div_5';
//     container.appendChild(absentDiv_5);
//   }
// });




// const btn_6 = document.getElementById('b6');



// btn_6.addEventListener('click', () => {
  
//   const existingDiv_6 = container.querySelector('.absent-div_6');
  
//   if (existingDiv_6) {
    
//     existingDiv_6.remove();
//   } else {
    
//     const absentDiv_6 = document.createElement('div');
//     absentDiv_6.textContent = 'Absent';
//     absentDiv_6.className = 'absent-div_6';
//     container.appendChild(absentDiv_6);
//   }
// });




// const btn_7 = document.getElementById('b7');



// btn_7.addEventListener('click', () => {
  
//   const existingDiv_7 = container.querySelector('.absent-div_7');
  
//   if (existingDiv_7) {
    
//     existingDiv_7.remove();
//   } else {
    
//     const absentDiv_7 = document.createElement('div');
//     absentDiv_7.textContent = 'Absent';
//     absentDiv_7.className = 'absent-div_7';
//     container.appendChild(absentDiv_7);
//   }
// });



// const btn_8 = document.getElementById('b8');



// btn_8.addEventListener('click', () => {
  
//   const existingDiv_8 = container.querySelector('.absent-div_8');
  
//   if (existingDiv_8) {
    
//     existingDiv_8.remove();
//   } else {
    
//     const absentDiv_8 = document.createElement('div');
//     absentDiv_8.textContent = 'Absent';
//     absentDiv_8.className = 'absent-div_8';
//     container.appendChild(absentDiv_8);
//   }
// });



// const btn_9 = document.getElementById('b9');



// btn_9.addEventListener('click', () => {
  
//   const existingDiv_9 = container.querySelector('.absent-div_9');
  
//   if (existingDiv_9) {
    
//     existingDiv_9.remove();
//   } else {
    
//     const absentDiv_9 = document.createElement('div');
//     absentDiv_9.textContent = 'Absent';
//     absentDiv_9.className = 'absent-div_9';
//     container.appendChild(absentDiv_9);
//   }
// });



// const btn_10 = document.getElementById('b10');



// btn_10.addEventListener('click', () => {
  
//   const existingDiv_10= container.querySelector('.absent-div_10');
  
//   if (existingDiv_10) {
    
//     existingDiv_10.remove();
//   } else {
    
//     const absentDiv_10 = document.createElement('div');
//     absentDiv_10.textContent = 'Present';
//     absentDiv_10.className = 'absent-div_10';
//     container.appendChild(absentDiv_10);
//   }
// });


function handleButtonClick(buttonId) {
  const button = document.getElementById(buttonId);
  const row = button.closest('.content-row');
  const existingDiv = row.querySelector('.status-div');

  if (existingDiv) {
    existingDiv.remove();
  } else {
    const statusDiv = document.createElement('div');
    statusDiv.textContent = 'Absent';
    statusDiv.className = 'status-div';
    statusDiv.dataset.status = 'absent'; 
    button.closest('.time-slot').insertAdjacentElement('afterend', statusDiv);
  }
}


for (let i = 1; i <= 10; i++) {
  const btn = document.getElementById(`b${i}`);
  btn.addEventListener('click', () => handleButtonClick(`b${i}`));
}

document.getElementById('submitBtn').addEventListener('click', () => {
  document.querySelectorAll('.content-row').forEach(row => {
    if (!row.querySelector('.status-div')) {
      const statusDiv = document.createElement('div');
      statusDiv.textContent = 'Present';
      statusDiv.className = 'status-div';
      statusDiv.dataset.status = 'present'; 
      row.querySelector('.time-slot:last-child').insertAdjacentElement('afterend', statusDiv);
    }
  });
});