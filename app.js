const text = "Hi, I'm Atai Mamytov";
const typingSpeed = 100; 
const deletingSpeed = 100; 
const pauseBetween = 1500;

let index = 0;
let isDeleting = false;

function type() {
    const typingElement = document.getElementById('typing');
    if (!isDeleting && index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
    } else if (isDeleting && index > 0) {
        typingElement.textContent = text.substring(0, index - 1);
        index--;
        setTimeout(type, deletingSpeed);
    } else if (!isDeleting && index === text.length) {
        isDeleting = true;
        setTimeout(type, pauseBetween);
    } else if (isDeleting && index === 0) {
        isDeleting = false;
        setTimeout(type, pauseBetween);
    }
}
type();