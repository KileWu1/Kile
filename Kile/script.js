// 漢堡選單切換
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 平滑滾動
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
        navLinks.classList.remove('active');
    });
});


// Lightbox 放大檢視
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

// 點擊圖片放大
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {

        // 如果是 PDF 不處理
        if (item.closest('.pdf')) return;

        lightbox.style.display = 'flex';
        lightboxImg.src = item.src;
    });
});

// 點 X 關閉
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// 點背景關閉
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// ESC 關閉
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        lightbox.style.display = 'none';
    }
});


const container = document.getElementById("attachmentsContainer");
const leftBtn = document.getElementById("scrollLeft");
const rightBtn = document.getElementById("scrollRight");

leftBtn.addEventListener("click", () => {
    container.scrollBy({
        left: -350,
        behavior: "smooth"
    });
});

rightBtn.addEventListener("click", () => {
    container.scrollBy({
        left: 350,
        behavior: "smooth"
    });
});
