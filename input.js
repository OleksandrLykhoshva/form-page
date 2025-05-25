// range input
rangeInput.addEventListener('input', updateValue);

function updateValue() {
    const val = rangeInput.value;
    const valPercent = `${val}`;

    rangeInput.style.setProperty('--track-progress', valPercent);
    incomeValue.textContent = `${val}K`;
}

// textarea input
textareaInput.addEventListener('input', autoResize);

function autoResize() {
    textareaInput.style.height = 'auto';
    textareaInput.style.height = this.scrollHeight + 2 + 'px';
}
