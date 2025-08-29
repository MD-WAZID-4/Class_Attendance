// const clock = document.getElementById('clock');
// function updateClock() {
//     let date = new Date();
//     clock.innerHTML = date.toLocaleTimeString();
// }
// updateClock();
// setInterval(updateClock, 1000);






// const time = document.getElementById('time');
// let currentStoredDate = null;

// function updateTime() {
//     const date = new Date();
//     const day = date.getDate();
//     const month = date.toLocaleString('default', { month: 'short' });
//     const year = date.getFullYear();
//      currentStoredDate = `${day} ${month} ${year}`;
//     time.innerHTML = currentStoredDate;
    

// }






// updateTime();
// setInterval(updateTime, 1000);

// function handleButtonClick(buttonId) {
//   const button = document.getElementById(buttonId);
//    const timeSlot = button.closest('.time-slot-1');
  
//   const statusPosition = timeSlot.nextElementSibling;
  
//   if (statusPosition && statusPosition.classList.contains('status-div-1')) {
//     statusPosition.remove();
//     return;
//   }
  
  
//   const statusDiv = document.createElement('div');
//   statusDiv.textContent = 'Absent';
//   statusDiv.className = 'status-div-1';
//   statusDiv.dataset.status = 'absent';
//   timeSlot.insertAdjacentElement('afterend', statusDiv);
// }


// function handleButton(buttonId) {
//   const button = document.getElementById(buttonId);
//   const timeSlot = button.closest('.time-slot-2');
//   const statusPosition = timeSlot.nextElementSibling;
  
 
//   if (statusPosition && statusPosition.classList.contains('status-div-2')) {
//     statusPosition.remove();
//     return;
//   }
  

//   const statusDiv = document.createElement('div');
//   statusDiv.textContent = 'Absent';
//   statusDiv.className = 'status-div-2';
//   statusDiv.dataset.status = 'absent';
//   timeSlot.insertAdjacentElement('afterend', statusDiv);
// }


// for (let i = 1; i <= 10; i++) {
  
//   const btn1 = document.getElementById(`b${i}`);
//   if (btn1) btn1.addEventListener('click', () => handleButtonClick(`b${i}`));
  
//   const btn2 = document.getElementById(`a${i}`);
//   if (btn2) btn2.addEventListener('click', () => handleButton(`a${i}`));
// }


// document.getElementById('submitBtn').addEventListener('click', () => {
//   document.querySelectorAll('.content-row').forEach(row => {
//     const timeSlot = row.querySelector('.time-slot-1');
//     const nextElement = timeSlot.nextElementSibling;
    
    
//     if (!nextElement || !nextElement.classList.contains('status-div-1')) {
      
//       //  if (nextElement && (nextElement.classList.contains('status-div-1') || 
//       //                    nextElement.classList.contains('status-div-2'))) {
//       //   nextElement.remove();
//       //  }
      
//       const statusDiv = document.createElement('div');
//       statusDiv.textContent = 'Present';
//       statusDiv.className = 'status-div-1';
//       statusDiv.dataset.status = 'present';
//       timeSlot.insertAdjacentElement('afterend', statusDiv);


//     }
//   });
// });


// document.getElementById('submitBtn_2').addEventListener('click', () => {
//   document.querySelectorAll('.content-row').forEach(row => {
//     const timeSlot = row.querySelector('.time-slot-2');
//     const nextElement = timeSlot.nextElementSibling;
    
    
//     if (!nextElement || !nextElement.classList.contains('status-div-2')) {
    
//       // if (nextElement && (nextElement.classList.contains('status-div-1') || 
//       //                    nextElement.classList.contains('status-div-2'))) {
//       //   nextElement.remove();
//       // }
      
//       const statusDiv = document.createElement('div');
//       statusDiv.textContent = 'Present';
//       statusDiv.className = 'status-div-2';
//       statusDiv.dataset.status = 'present';
//       timeSlot.insertAdjacentElement('afterend', statusDiv);



//     }
//   });
// });



// document.getElementById('submitBtn_3').addEventListener('click', function() {
 
//   const firstSlots = document.querySelectorAll('.time-slot-1');
  
//   firstSlots.forEach((slot, index) => {
  
//     const statusDiv1 = slot.nextElementSibling;
//     if (!statusDiv1 || !statusDiv1.classList.contains('status-div-1')) return;
    
//     const status = statusDiv1.textContent;
    
    
//     const row = slot.closest('.content-row');
//     const timeSlot2 = row.querySelector('.time-slot-2');
//     if (!timeSlot2) return;
    
    
//     const existingStatus2 = timeSlot2.nextElementSibling;
//     if (existingStatus2 && existingStatus2.classList.contains('status-div-2')) {
//       existingStatus2.remove();
//     }
    
 
//     const statusDiv2 = document.createElement('div');
//     statusDiv2.className = 'status-div-2';
//     statusDiv2.textContent = status;
//     statusDiv2.dataset.status = status.toLowerCase();
//     timeSlot2.insertAdjacentElement('afterend', statusDiv2);
//   });
  
  
 

// });

// document.getElementById('cl_1').addEventListener('click', () => {
//   const clear_all= document.querySelectorAll('.content-row');
//   clear_all.forEach((row) =>  {

//   const t=row.querySelector('.time-slot-1');
//   const statusPosition = t.nextElementSibling;
  
//   if (statusPosition && statusPosition.classList.contains('status-div-1')) {
//     statusPosition.remove();
//     return;
//   }
  

//   });

// });



// document.getElementById('cl_2').addEventListener('click', () => {
//   const clear_all= document.querySelectorAll('.content-row');
//   clear_all.forEach((row) =>  {

//   const t=row.querySelector('.time-slot-2');
//   const statusPosition = t.nextElementSibling;
  
//   if (statusPosition && statusPosition.classList.contains('status-div-2')) {
//     statusPosition.remove();
//     return;
//   }
  

//   });

// });



// updateTime();
// localStorage.removeItem('createDiv');
// localStorage.removeItem('divCount');
// localStorage.removeItem('lastCreatedDate');

// function createDivInPage2() {
//     const lastCreatedDate = localStorage.getItem('lastCreatedDate');
    
//     // Only proceed if date is different or no date exists
//     if (lastCreatedDate !== currentStoredDate || !lastCreatedDate) {
//         // Get current count or initialize to 0
//         let count = parseInt(localStorage.getItem('divCount')) || 0;
//         count++;
        
//         // Store the updated count
//         localStorage.setItem('divCount', count.toString());
        
//         // Set creation flag with unique ID
//         localStorage.setItem('createDiv', `div-${count}`);
        
//         // Store the current date
//         localStorage.setItem('lastCreatedDate', currentStoredDate);
        
//         // Store style and content for this specific div
//         localStorage.setItem(`divStyle-${count}`, JSON.stringify({
//             backgroundColor: getRandomColor(),
//             width: '90%',
//             height: '15%',
//             border: '2px solid #333',
//             borderRadius: '10px',
//             margin: '10px',
//             marginLeft: '25px',
//             cursor: 'pointer'
//         }));
        
//         localStorage.setItem(`divContent-${count}`, 
//         `<span class="attendance-text">
//           Select to view attendance documentation for ${currentStoredDate}.
//           <br>
//         </span>`);
        
//         // Trigger update
//         localStorage.setItem('lastUpdated', Date.now());
        
//         console.log(`Created div ${count} in Page 2 for date ${currentStoredDate}`);
//     } else {
//         console.log(`Div already exists for date ${currentStoredDate}`);
//         alert(`Attendance for ${currentStoredDate} has already been recorded.`);
//     }
// }

// function getRandomColor() {
//     const colors = ['#ffcccc', '#ccffcc', '#ccccff', '#ffffcc', '#ffccff', '#ccffff'];
//     return colors[Math.floor(Math.random() * colors.length)];
// }

// // Clear flags when page refreshes
// window.addEventListener('beforeunload', function() {
//     localStorage.removeItem('createDiv');
// });






















const clock = document.getElementById('clock');
function updateClock() {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    // Save current time in localStorage
    localStorage.setItem("savedClock", clock.innerHTML);
}
updateClock();
setInterval(updateClock, 1000);

const time = document.getElementById('time');
let currentStoredDate = null;

function updateTime() {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    currentStoredDate = `${day} ${month} ${year}`;
    time.innerHTML = currentStoredDate;
    // Save date in localStorage
    localStorage.setItem("savedDate", currentStoredDate);
}
updateTime();
setInterval(updateTime, 1000);

// ✅ Restore clock & date if page is refreshed
window.addEventListener("load", () => {
    if (localStorage.getItem("savedClock")) {
        clock.innerHTML = localStorage.getItem("savedClock");
    }
    if (localStorage.getItem("savedDate")) {
        time.innerHTML = localStorage.getItem("savedDate");
        currentStoredDate = localStorage.getItem("savedDate");
    }
    restoreAttendance();
});

// ----------------- Attendance -------------------
function saveAttendance() {
    const rows = [];
    document.querySelectorAll('.content-row').forEach(row => {
        const slot1 = row.querySelector('.time-slot-1');
        const status1 = slot1.nextElementSibling && slot1.nextElementSibling.classList.contains('status-div-1') 
            ? slot1.nextElementSibling.dataset.status : null;

        const slot2 = row.querySelector('.time-slot-2');
        const status2 = slot2.nextElementSibling && slot2.nextElementSibling.classList.contains('status-div-2') 
            ? slot2.nextElementSibling.dataset.status : null;

        rows.push({status1, status2});
    });
    localStorage.setItem("attendanceData", JSON.stringify(rows));
}

function restoreAttendance() {
    const saved = localStorage.getItem("attendanceData");
    if (!saved) return;
    const rows = JSON.parse(saved);

    document.querySelectorAll('.content-row').forEach((row, idx) => {
        const data = rows[idx];
        if (!data) return;

        const slot1 = row.querySelector('.time-slot-1');
        if (data.status1) {
            const div = document.createElement("div");
            div.className = "status-div-1";
            div.textContent = data.status1.charAt(0).toUpperCase() + data.status1.slice(1);
            div.dataset.status = data.status1;
            slot1.insertAdjacentElement("afterend", div);
        }

        const slot2 = row.querySelector('.time-slot-2');
        if (data.status2) {
            const div = document.createElement("div");
            div.className = "status-div-2";
            div.textContent = data.status2.charAt(0).toUpperCase() + data.status2.slice(1);
            div.dataset.status = data.status2;
            slot2.insertAdjacentElement("afterend", div);
        }
    });
}

function handleButtonClick(buttonId) {
  const button = document.getElementById(buttonId);
  const timeSlot = button.closest('.time-slot-1');
  const statusPosition = timeSlot.nextElementSibling;
  
  if (statusPosition && statusPosition.classList.contains('status-div-1')) {
    statusPosition.remove();
  } else {
    const statusDiv = document.createElement('div');
    statusDiv.textContent = 'Absent';
    statusDiv.className = 'status-div-1';
    statusDiv.dataset.status = 'absent';
    timeSlot.insertAdjacentElement('afterend', statusDiv);
  }
  saveAttendance();
}

function handleButton(buttonId) {
  const button = document.getElementById(buttonId);
  const timeSlot = button.closest('.time-slot-2');
  const statusPosition = timeSlot.nextElementSibling;
  
  if (statusPosition && statusPosition.classList.contains('status-div-2')) {
    statusPosition.remove();
  } else {
    const statusDiv = document.createElement('div');
    statusDiv.textContent = 'Absent';
    statusDiv.className = 'status-div-2';
    statusDiv.dataset.status = 'absent';
    timeSlot.insertAdjacentElement('afterend', statusDiv);
  }
  saveAttendance();
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
      const statusDiv = document.createElement('div');
      statusDiv.textContent = 'Present';
      statusDiv.className = 'status-div-1';
      statusDiv.dataset.status = 'present';
      timeSlot.insertAdjacentElement('afterend', statusDiv);
    }
  });
  saveAttendance();
});

document.getElementById('submitBtn_2').addEventListener('click', () => {
  document.querySelectorAll('.content-row').forEach(row => {
    const timeSlot = row.querySelector('.time-slot-2');
    const nextElement = timeSlot.nextElementSibling;
    
    if (!nextElement || !nextElement.classList.contains('status-div-2')) {
      const statusDiv = document.createElement('div');
      statusDiv.textContent = 'Present';
      statusDiv.className = 'status-div-2';
      statusDiv.dataset.status = 'present';
      timeSlot.insertAdjacentElement('afterend', statusDiv);
    }
  });
  saveAttendance();
});

document.getElementById('submitBtn_3').addEventListener('click', function() {
  const firstSlots = document.querySelectorAll('.time-slot-1');
  
  firstSlots.forEach(slot => {
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
  saveAttendance();
});

document.getElementById('cl_1').addEventListener('click', () => {
  const clear_all= document.querySelectorAll('.content-row');
  clear_all.forEach((row) =>  {
    const t=row.querySelector('.time-slot-1');
    const statusPosition = t.nextElementSibling;
    if (statusPosition && statusPosition.classList.contains('status-div-1')) {
      statusPosition.remove();
    }
  });
  saveAttendance();
});

document.getElementById('cl_2').addEventListener('click', () => {
  const clear_all= document.querySelectorAll('.content-row');
  clear_all.forEach((row) =>  {
    const t=row.querySelector('.time-slot-2');
    const statusPosition = t.nextElementSibling;
    if (statusPosition && statusPosition.classList.contains('status-div-2')) {
      statusPosition.remove();
    }
  });
  saveAttendance();
});

// ----------------- Div Creation -----------------
function createDivInPage2() {
     const lastCreatedDate = localStorage.getItem('lastCreatedDate');
    
    if (lastCreatedDate !== currentStoredDate || !lastCreatedDate) {
        let count = parseInt(localStorage.getItem('divCount')) || 0;
        count++;
        localStorage.setItem('divCount', count.toString());
        localStorage.setItem('createDiv', `div-${count}`);
        localStorage.setItem('lastCreatedDate', currentStoredDate);
        
        localStorage.setItem(`divStyle-${count}`, JSON.stringify({
            backgroundColor: getRandomColor(),
            width: '90%',
            height: '15%',
            border: '2px solid #333',
            borderRadius: '10px',
            margin: '10px',
            marginLeft: '25px',
            cursor: 'pointer'
        }));
        
        localStorage.setItem(`divContent-${count}`, 
        `<span class="attendance-text">
          Select to view attendance documentation for ${currentStoredDate}.
          <br>
        </span>`);
        
        localStorage.setItem('lastUpdated', Date.now());
        console.log(`Created div ${count} in Page 2 for date ${currentStoredDate}`);
    } else {
        console.log(`Div already exists for date ${currentStoredDate}`);
        alert(`Attendance for ${currentStoredDate} has already been recorded.`);
    }
}




// function createDivInPage2() {
//     const container = document.getElementById("container");

//     // Check if a div already exists for today's date
//     const existingDiv = document.getElementById(`div-${currentStoredDate}`);
//     if (existingDiv) {
//         console.log(`Div already exists for date ${currentStoredDate}`);
//         alert(`Attendance for ${currentStoredDate} has already been recorded.`);
//         return;
//     }

//     // Create new div
//     const div = document.createElement("div");
//     div.className = "created-div";
//     div.id = `div-${currentStoredDate}`;

//     // Apply styles
//     Object.assign(div.style, {
//         backgroundColor: getRandomColor(),
//         width: "90%",
//         height: "15%",
//         border: "2px solid #333",
//         borderRadius: "10px",
//         margin: "10px",
//         marginLeft: "25px",
//         cursor: "pointer"
//     });

//     // Set content
//     div.innerHTML = `
//         <span class="attendance-text">
//           Select to view attendance documentation for ${currentStoredDate}.
//           <br>
//         </span>
//     `;

//     // On click → go to next page
//     div.addEventListener("click", () => {
//         window.location.href = "index2.html";
//     });

//     // Append to container
//     container.appendChild(div);

//     console.log(`Created div for date ${currentStoredDate}`);
// }

// function getRandomColor() {
//     const colors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#ffccff", "#ccffff"];
//     return colors[Math.floor(Math.random() * colors.length)];
// }




function getRandomColor() {
    const colors = ['#ffcccc', '#ccffcc', '#ccccff', '#ffffcc', '#ffccff', '#ccffff'];
    return colors[Math.floor(Math.random() * colors.length)];
}

















