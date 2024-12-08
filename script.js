// Hämta HTML-element
const contentInput = document.getElementById('content'); 
const colorInput = document.getElementById('color'); 
const checkbox = document.getElementById('box-style'); 
const emptyDiv = document.getElementById('empty-div'); 
const removeButton = document.getElementById('remove-button'); 

// Fördefinierad funktion för textfält och event target
function handleInputChange(event) {
    console.log("Event target:", event.target); 
    const name = event.target.name; 
    const value = event.target.value; 

    if (name === "content") {
        emptyDiv.textContent = value || "Be creative!"; 
    }
}

// Lägg till eventlyssnare för textfält
contentInput.addEventListener('input', handleInputChange);

// Lägg till eventlyssnare för checkbox
checkbox.addEventListener('change', (e) => {
    if (checkbox.checked) {
        const colorValue = colorInput.value.trim(); 
        emptyDiv.style.backgroundColor = colorValue || "#f4f4f4"; 
        emptyDiv.style.color = "#ffffff"; 
    } else {
        emptyDiv.style.backgroundColor = "#f4f4f4"; 
        emptyDiv.style.color = "#333"; 
    }
});

// Lägg till eventlyssnare för knappen 
removeButton.addEventListener('click', (e) => {
    emptyDiv.textContent = ""; 
    emptyDiv.style.backgroundColor = ""; 
    emptyDiv.style.color = ""; 
    contentInput.value = ""; 
    colorInput.value = ""; 
    checkbox.checked = false; 
});
