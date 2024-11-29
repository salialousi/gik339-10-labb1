// Hämta HTML-element
const button = document.getElementById('submit-button');
const emptyDiv = document.getElementById('empty-div');
const colorInput = document.getElementById('color');
const contentInput = document.getElementById('content');

// Eventlyssnare för knappen
button.addEventListener('click', () => {
    // Läs värden från input-fält
    const colorValue = colorInput.value.trim();
    const contentValue = contentInput.value.trim();

    // Kontrollera om textfältet för innehåll är tomt
    if (contentValue === "") {
        emptyDiv.textContent = "Inget innehåll angivet!";
        emptyDiv.style.color = "black";
    } else {
        // Visa text och färg
        emptyDiv.textContent = `${contentValue}`;
        emptyDiv.style.backgroundColor = colorValue;
        emptyDiv.style.color = "#ffffff";

    }
});
