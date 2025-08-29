 function handleDivCreation() {
            const divId = localStorage.getItem('createDiv');
            
            if (divId && divId.startsWith('div-')) {
                const count = divId.split('-')[1];
                const container = document.getElementById('container');
                
                // Create new div
                const div = document.createElement('div');
                div.className = 'created-div';
                div.id = divId;

                div.addEventListener('click', function () {
                window.location.href = 'index2.html';
                });
                
                // Apply styles
                const styleStr = localStorage.getItem(`divStyle-${count}`);
                if (styleStr) {
                    const styles = JSON.parse(styleStr);
                    Object.assign(div.style, styles);
                }
                
                // Set content
                div.innerHTML = localStorage.getItem(`divContent-${count}`) || `New Div ${count}`;
                
                // Add to container
                container.appendChild(div);
                
                // Clear the creation flag
                localStorage.removeItem('createDiv');
            }
        }

        // Check immediately when page loads
        handleDivCreation();
        
        // Listen for storage events
        window.addEventListener('storage', function(event) {
            if (event.key === 'createDiv' || event.key === 'lastUpdated') {
                handleDivCreation();
            }
        });

        // Initialize with existing divs
        window.addEventListener('load', function() {
            const count = parseInt(localStorage.getItem('divCount')) || 0;
            for (let i = 1; i <= count; i++) {
                if (!document.getElementById(`div-${i}`)) {
                    localStorage.setItem('createDiv', `div-${i}`);
                    handleDivCreation();
                }
            }
        });








      

