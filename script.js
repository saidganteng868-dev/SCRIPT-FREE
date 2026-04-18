// script.js - Main Application Logic

// Render Scripts ke Grid
function renderScripts(data) {
    const container = document.getElementById('scriptList');
    
    if (data.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>Script tidak ditemukan</h3>
                <p>Coba kata kunci lain atau filter berbeda</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = data.map(item => {
        // Tentukan kategori badge
        let badgeClass = 'badge-group';
        if (item.category === 'bug') badgeClass = 'badge-bug';
        else if (item.category === 'cpanel') badgeClass = 'badge-cpanel';
        else if (item.category === 'store') badgeClass = 'badge-store';
        else if (item.category === 'apk') badgeClass = 'badge-apk';
        else if (item.category === 'jpm') badgeClass = 'badge-jpm';
        else if (item.category === 'pushkontak') badgeClass = 'badge-pushkontak';
        
        return `
        <div class="script-card">
            <div class="card-header">
                <span class="category-badge ${badgeClass}">${item.category}</span>
                <div class="card-icon">${item.icon}</div>
            </div>
            <h3 class="script-title">
                ${item.name.replace(/\[WA\]|\[TELE\]/g, '').trim()}
            </h3>
            <div class="script-meta">
                <span class="meta-tag node">
                    <i class="fab fa-node-js"></i> ${item.nodeVersion}
                </span>
                <span class="meta-tag features">
                    <i class="fas fa-star"></i> ${item.features} Fitur
                </span>
                <span class="meta-tag platform ${item.platform.toLowerCase()}">
                    <i class="fab fa-${item.platform === 'TELE' ? 'telegram' : 'whatsapp'}"></i> ${item.platform}
                </span>
            </div>
            <p class="script-desc">${item.desc}</p>
            <button class="download-btn" onclick="window.open('${item.link}', '_blank')">
                <i class="fas fa-download"></i> Download Now
            </button>
        </div>
    `}).join('');
}

// Filter Category
function filterCategory(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(`'${category}'`)) {
            btn.classList.add('active');
        }
    });

    if (category === 'all') {
        renderScripts(scripts);
    } else {
        const filtered = scripts.filter(s => s.category === category);
        renderScripts(filtered);
    }
}

// Search Functionality dengan filter platform
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', function(e) {
        const value = e.target.value.toLowerCase();
        
        // Cek jika search adalah WA atau TELE
        if (value === 'wa' || value === 'tele' || value === 'telegram' || value === 'whatsapp') {
            const platformFilter = value.includes('tele') ? 'TELE' : 'WA';
            const filtered = scripts.filter(s => s.platform === platformFilter);
            renderScripts(filtered);
        } else {
            // Search normal
            const filtered = scripts.filter(s => 
                s.name.toLowerCase().includes(value) || 
                s.desc.toLowerCase().includes(value)
            );
            renderScripts(filtered);
        }
    });
}

// Scroll Effects
function initScrollEffects() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        updateActiveNav();
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');
        
        if (scrollPos >= top && scrollPos < bottom) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Media Controls
let audioInitialized = false;
let isPlaying = false;

function initMediaControls() {
    const audio = document.getElementById('bgAudio');
    if (audio) audio.volume = 0.3;
}

function toggleSound() {
    const audio = document.getElementById('bgAudio');
    const btn = document.getElementById('soundToggle');
    
    if (!audio) return;
    
    if (!audioInitialized) {
        audio.volume = 0.3;
        audioInitialized = true;
    }
    
    if (!isPlaying) {
        audio.play().then(() => {
            isPlaying = true;
            btn.innerHTML = '<i class="fas fa-volume-up"></i>';
            btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        }).catch(err => {
            console.log('Audio play failed:', err);
        });
    } else {
        audio.pause();
        isPlaying = false;
        btn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        btn.style.background = '';
    }
}

function toggleVideo() {
    const video = document.getElementById('bgVideo');
    const btn = document.getElementById('videoToggle');
    
    if (!video) return;
    
    if (video.style.opacity === '0') {
        video.style.opacity = '0.3';
        btn.innerHTML = '<i class="fas fa-video"></i>';
        btn.style.background = '';
    } else {
        video.style.opacity = '0';
        btn.innerHTML = '<i class="fas fa-video-slash"></i>';
        btn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
    }
}

// Update Stats
function updateStatCount() {
    const statElement = document.getElementById('stat-scripts');
    if (!statElement) return;
    
    const count = scripts.length;
    let current = 0;
    const increment = Math.ceil(count / 30);
    const timer = setInterval(() => {
        current += increment;
        if (current >= count) {
            current = count;
            clearInterval(timer);
        }
        statElement.textContent = current + '+';
    }, 50);
}

// Animations
function initAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.script-card, .community-card, .contact-card, .feature-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Parallax
function initParallax() {
    document.addEventListener('mousemove', (e) => {
        const orbs = document.querySelectorAll('.orb');
        
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 20;
            const xOffset = (window.innerWidth / 2 - e.clientX) / speed;
            const yOffset = (window.innerHeight / 2 - e.clientY) / speed;
            orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });
}

// Keyboard Shortcuts
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
            e.preventDefault();
            const searchInput = document.getElementById('searchInput');
            if (searchInput) searchInput.focus();
        }
        
        if (e.key === 'Escape') {
            const searchInput = document.getElementById('searchInput');
            if (document.activeElement === searchInput) {
                searchInput.value = '';
                searchInput.blur();
                renderScripts(scripts);
            }
        }
    });
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    renderScripts(scripts);
    initSearch();
    initScrollEffects();
    initMediaControls();
    initAnimations();
    initParallax();
    initKeyboardShortcuts();
    updateStatCount();
});

// Console branding
console.log('%c⚡ YUDA STORE', 'color: #6366f1; font-size: 24px; font-weight: bold; font-family: monospace;');
console.log('%cPremium Script Collection 2026', 'color: #ec4899; font-size: 14px; font-family: monospace;');
console.log('%c© All Rights Reserved - YUDA DEV', 'color: #10b981; font-size: 12px; font-family: monospace;');

// Anti iframe
if (window.top !== window.self) {
    window.top.location = window.self.location;
}

// Exports
window.filterCategory = filterCategory;
window.toggleSound = toggleSound;
window.toggleVideo = toggleVideo;
