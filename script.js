// Hämta HTML-element
const contentInput = document.getElementById('content');
const colorInput = document.getElementById('color');
const backgroundToggle = document.getElementById('box-style');
const emptyDiv = document.getElementById('empty-div');
const removeButton = document.getElementById('remove-button');

// Visa text i div när användaren skriver
contentInput.addEventListener('input', () => {
    const contentValue = contentInput.value.trim();
    emptyDiv.textContent = contentValue || "Be creative!";
});

// Ändra bakgrundsfärg direkt när checkboxen klickas
backgroundToggle.addEventListener('change', () => {
    if (backgroundToggle.checked) {
        const colorValue = colorInput.value.trim();
        emptyDiv.style.backgroundColor = colorValue || "#f4f4f4";
        emptyDiv.style.color = "#ffffff";
    } else {
        emptyDiv.style.backgroundColor = "#f4f4f4";
        emptyDiv.style.color = "#333";
    }
});

// Ta bort text och färg när knappen klickas
removeButton.addEventListener('click', () => {
    emptyDiv.textContent = "Be creative!";
    emptyDiv.style.backgroundColor = "#f4f4f4";
    emptyDiv.style.color = "#333";
    contentInput.value = "";
    colorInput.value = "";
    backgroundToggle.checked = false;
});
