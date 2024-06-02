const input = document.getElementById('input');
const remainingCounter = document.getElementById('remaining');
const totalCounter = document.getElementById('total');

input.addEventListener('input', function() {
    const maxLength = parseInt(input.getAttribute('maxlength'));
    const currentLength = input.value.length;
    const remaining = maxLength - currentLength;
    remainingCounter.textContent = remaining;
    totalCounter.textContent = maxLength - remaining;
});