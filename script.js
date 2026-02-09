// Обновить вопрос
function updateQuestion() {
    const newQuestion = document.getElementById('questionInput').value;
    document.getElementById('question').textContent = newQuestion;
}

// Обработка нажатия "Да"
function handleYes() {
    const message = document.getElementById('messageInput').value || 'Спасибо! Ты самая лучшая! 💕';
    document.getElementById('customMessage').textContent = message;
    document.getElementById('successMessage').style.display = 'flex';
}

// Двигать кнопку "Нет"
function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const randomX = Math.random() * 300 - 150;
    const randomY = Math.random() * 300 - 150;
    
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Кастомизация
function applyCustomization() {
    const bgColor = document.getElementById('bgColor').value;
    const textColor = document.getElementById('textColor').value;
    const fontSize = document.getElementById('fontSize').value;
    
    document.body.style.background = bgColor;
    document.getElementById('question').style.color = textColor;
    document.getElementById('question').style.fontSize = fontSize + 'px';
    
    // Сохранить в localStorage
    localStorage.setItem('bgColor', bgColor);
    localStorage.setItem('textColor', textColor);
    localStorage.setItem('fontSize', fontSize);
    localStorage.setItem('message', document.getElementById('messageInput').value);
}

// Сбросить кастомизацию
function resetCustomization() {
    document.getElementById('bgColor').value = '#ffe6f0';
    document.getElementById('textColor').value = '#ff1493';
    document.getElementById('fontSize').value = '48';
    document.getElementById('messageInput').value = 'Спасибо! Ты самая лучшая! 💕';
    
    document.body.style.background = '#ffe6f0';
    document.getElementById('question').style.color = '#ff1493';
    document.getElementById('question').style.fontSize = '48px';
    
    localStorage.clear();
}

// Вернуться на главную
function resetPage() {
    document.getElementById('successMessage').style.display = 'none';
}

// Загрузить фото
document.getElementById('photoInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('photo').src = event.target.result;
            localStorage.setItem('photoData', event.target.result);
        };
        reader.readAsDataURL(file);
    }
});

// Загрузить сохраненные данные при загрузке страницы
window.addEventListener('load', function() {
    const savedBgColor = localStorage.getItem('bgColor');
    const savedTextColor = localStorage.getItem('textColor');
    const savedFontSize = localStorage.getItem('fontSize');
    const savedMessage = localStorage.getItem('message');
    const savedPhoto = localStorage.getItem('photoData');
    
    if (savedBgColor) {
        document.body.style.background = savedBgColor;
        document.getElementById('bgColor').value = savedBgColor;
    }
    if (savedTextColor) {
        document.getElementById('question').style.color = savedTextColor;
        document.getElementById('textColor').value = savedTextColor;
    }
    if (savedFontSize) {
        document.getElementById('question').style.fontSize = savedFontSize + 'px';
        document.getElementById('fontSize').value = savedFontSize;
    }
    if (savedMessage) {
        document.getElementById('messageInput').value = savedMessage;
    }
    if (savedPhoto) {
        document.getElementById('photo').src = savedPhoto;
    }
});