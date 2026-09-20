// ================= تأثير كتابة النص التلقائي (Typing Effect) =================
const typingElement = document.querySelector('.hero-content p');
const textsToType = [
    "مهندس برمجيات وتطوير مواقع | نُحول أفكارك إلى واقع رقمي مذهل",
    "متخصص في بناء واجهات المستخدم وتطبيقات الويب الحديثة",
    "تواصل معي الآن لنبدأ العمل على مشروعك القادم!"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = textsToType[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000; // الانتظار قليلاً قبل البدء في الحذف
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textsToType.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// تشغيل تأثير الكتابة بعد تحميل الصفحة
document.addEventListener("DOMContentLoaded", function() {
    if(typingElement) {
        setTimeout(typeEffect, 1000);
    }
});


// ================= تأثير ظهور الأقسام عند التمرير (Scroll Animation) =================
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});


// ================= تأثير الهيدر عند التمرير =================
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(15, 23, 42, 0.95)';
        header.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(15, 23, 42, 0.85)';
        header.style.boxShadow = 'none';
    }
});