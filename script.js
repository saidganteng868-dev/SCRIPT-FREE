// script.js - Main Application Logic

// ============================================
// WELCOME VIDEO FUNCTIONS
// ============================================

let welcomeSoundEnabled = false;
let welcomeVideo = null;
let welcomeProgressInterval = null;

function initWelcome() {
    welcomeVideo = document.getElementById('welcomeVideo');
    const overlay = document.getElementById('welcomeOverlay');

    if (!overlay) return;

    // Cek apakah user sudah pernah lihat welcome
    const hasSeenWelcome = localStorage.getItem('yudaWelcomeSeen');
    if (hasSeenWelcome) {
        overlay.classList.add('hidden');
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 800);
        return;
    }

    // Handle video errors (file not found, unsupported format, etc.)
    if (welcomeVideo) {
        welcomeVideo.addEventListener('error', function(e) {
            console.log('Welcome video error:', e);
            // Show fallback image/content
            const fallback = document.getElementById('welcomeFallback');
            if (fallback) {
                welcomeVideo.style.display = 'none';
                fallback.style.display = 'flex';
            }
            overlay.classList.add('video-error');
        });

        // Also handle when video can't load
        welcomeVideo.addEventListener('stalled', function() {
            console.log('Welcome video stalled');
            const fallback = document.getElementById('welcomeFallback');
            if (fallback) {
                welcomeVideo.style.display = 'none';
                fallback.style.display = 'flex';
            }
        });
    }

    // Auto close setelah 8 detik
    setTimeout(() => {
        if (!overlay.classList.contains('hidden')) {
            closeWelcome();
        }
    }, 8000);

    // Progress bar
    startWelcomeProgress();
}

function startWelcomeProgress() {
    const progress = document.getElementById('welcomeProgress');
    if (!progress) return;

    let width = 0;
    const duration = 8000; // 8 detik
    const interval = 50; // update setiap 50ms
    const increment = 100 / (duration / interval);

    welcomeProgressInterval = setInterval(() => {
        width += increment;
        if (width >= 100) {
            width = 100;
            clearInterval(welcomeProgressInterval);
        }
        progress.style.width = width + '%';
    }, interval);
}

function closeWelcome() {
    const overlay = document.getElementById('welcomeOverlay');
    if (!overlay) return;

    // Simpan ke localStorage
    localStorage.setItem('yudaWelcomeSeen', 'true');

    // Hentikan video dan audio
    if (welcomeVideo) {
        try {
            welcomeVideo.pause();
            welcomeVideo.muted = true;
        } catch (e) {
            console.log('Video already stopped');
        }
    }

    // Hentikan progress
    if (welcomeProgressInterval) {
        clearInterval(welcomeProgressInterval);
    }

    // Animasi tutup
    overlay.classList.add('hidden');
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 800);
}

function toggleWelcomeSound() {
    const btn = document.getElementById('welcomeSoundBtn');
    if (!welcomeVideo || !btn) return;

    // Check if video is actually loaded
    if (welcomeVideo.readyState === 0) {
        showToast('Video tidak tersedia', 'info');
        return;
    }

    welcomeSoundEnabled = !welcomeSoundEnabled;

    if (welcomeSoundEnabled) {
        welcomeVideo.muted = false;
        btn.innerHTML = '<i class="fas fa-volume-up"></i>';
        btn.style.background = 'rgba(59, 130, 246, 0.3)';
        btn.style.borderColor = 'rgba(59, 130, 246, 0.5)';
    } else {
        welcomeVideo.muted = true;
        btn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        btn.style.background = 'rgba(0, 0, 0, 0.6)';
        btn.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    }

    // Coba play video jika belum
    welcomeVideo.play().catch(err => {
        console.log('Video play failed:', err);
    });
}

// Reset welcome (untuk testing)
function resetWelcome() {
    localStorage.removeItem('yudaWelcomeSeen');
    location.reload();
}

// Check if welcome video is available
function checkWelcomeVideo() {
    const video = document.getElementById('welcomeVideo');
    if (!video) return false;

    const sources = video.querySelectorAll('source');
    for (let src of sources) {
        // Check if source URL is valid (not empty and not default)
        if (src.src && src.src !== '' && !src.src.includes('undefined')) {
            return true;
        }
    }
    return false;
}

// ============================================
// RENDER SCRIPTS WITH PHOTOS
// ============================================

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
        let badgeClass = 'badge-group';
        if (item.category === 'bug') badgeClass = 'badge-bug';
        else if (item.category === 'cpanel') badgeClass = 'badge-cpanel';
        else if (item.category === 'store') badgeClass = 'badge-store';
        else if (item.category === 'apk') badgeClass = 'badge-apk';
        else if (item.category === 'jpm') badgeClass = 'badge-jpm';
        else if (item.category === 'pushkontak') badgeClass = 'badge-pushkontak';

        // Ambil URL foto dari config.js
        const photoUrl = typeof getPhotoUrl === 'function' ? getPhotoUrl(item.photo) : 
            (typeof CONFIG !== 'undefined' && CONFIG.photos && CONFIG.photos[item.photo]) ? CONFIG.photos[item.photo] :
            `https://via.placeholder.com/400x200/1e40af/ffffff?text=${encodeURIComponent(item.photo || 'NO PHOTO')}`;

        return `
        <div class="script-card">
            <img src="${photoUrl}" alt="${item.name}" class="card-image" onerror="this.src='https://via.placeholder.com/400x200/1e40af/ffffff?text=${encodeURIComponent(item.name)}'">
            <div class="card-body">
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

        if (value === 'wa' || value === 'tele' || value === 'telegram' || value === 'whatsapp') {
            const platformFilter = value.includes('tele') ? 'TELE' : 'WA';
            const filtered = scripts.filter(s => s.platform === platformFilter);
            renderScripts(filtered);
        } else {
            const filtered = scripts.filter(s => 
                s.name.toLowerCase().includes(value) || 
                s.desc.toLowerCase().includes(value)
            );
            renderScripts(filtered);
        }
    });
}

// QRIS Modal Functions
function openQrisModal() {
    const modal = document.getElementById('qrisModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeQrisModal(event) {
    if (event && event.target !== event.currentTarget) return;

    const modal = document.getElementById('qrisModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Download QRIS Function
function downloadQris() {
    const link = document.createElement('a');
    link.href = 'qris.png';
    link.download = 'qris.png';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('QRIS berhasil di-download!', 'success');
}

// Toast Notification
function showToast(message, type = 'info') {
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-notification';

    const icon = type === 'success' ? 'fa-check-circle' : 'fa-info-circle';
    const color = type === 'success' ? '#4ade80' : '#60a5fa';

    toast.innerHTML = `
        <i class="fas ${icon}" style="color: ${color};"></i>
        <span>${message}</span>
    `;

    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: rgba(20, 20, 20, 0.98);
        border: 1px solid rgba(255,255,255,0.06);
        backdrop-filter: blur(20px);
        padding: 14px 24px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 10px;
        color: #f5f5f5;
        font-size: 13px;
        font-weight: 500;
        z-index: 10000;
        box-shadow: 0 20px 50px rgba(0,0,0,0.6);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    `;

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.style.transform = 'translateX(-50%) translateY(0)';
    });

    setTimeout(() => {
        toast.style.transform = 'translateX(-50%) translateY(100px)';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// Keyboard shortcut untuk modal (ESC)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('qrisModal');
        if (modal && modal.classList.contains('active')) {
            closeQrisModal();
        }

        // Tutup welcome juga dengan ESC
        const welcome = document.getElementById('welcomeOverlay');
        if (welcome && !welcome.classList.contains('hidden')) {
            closeWelcome();
        }
    }
});

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
            btn.style.background = 'rgba(59, 130, 246, 0.2)';
            btn.style.color = '#60a5fa';
            btn.style.borderColor = 'rgba(96, 165, 250, 0.3)';
        }).catch(err => {
            console.log('Audio play failed:', err);
        });
    } else {
        audio.pause();
        isPlaying = false;
        btn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        btn.style.background = '';
        btn.style.color = '';
        btn.style.borderColor = '';
    }
}

function toggleVideo() {
    const video = document.getElementById('bgVideo');
    const btn = document.getElementById('videoToggle');

    if (!video) return;

    if (video.style.opacity === '0') {
        video.style.opacity = '0.2';
        btn.innerHTML = '<i class="fas fa-video"></i>';
        btn.style.background = '';
        btn.style.color = '';
        btn.style.borderColor = '';
    } else {
        video.style.opacity = '0';
        btn.innerHTML = '<i class="fas fa-video-slash"></i>';
        btn.style.background = 'rgba(239, 68, 68, 0.2)';
        btn.style.color = '#f87171';
        btn.style.borderColor = 'rgba(248, 113, 113, 0.3)';
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

// Load welcome video URL from config.js
function loadWelcomeVideoFromConfig() {
    if (typeof CONFIG !== 'undefined' && CONFIG.welcome && CONFIG.welcome.videoUrl) {
        const videoUrl = CONFIG.welcome.videoUrl;
        const mp4Source = document.getElementById('welcomeVideoSourceMp4');
        const video = document.getElementById('welcomeVideo');

        if (mp4Source && videoUrl) {
            mp4Source.src = videoUrl;
            video.load();
            // Try to play after loading
            video.play().catch(e => {
                console.log('Video autoplay blocked or failed:', e);
                // Show fallback if video can't play
                const fallback = document.getElementById('welcomeFallback');
                if (fallback) {
                    video.style.display = 'none';
                    fallback.style.display = 'flex';
                }
            });
        }
    }
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Load welcome video URL dari config.js dulu
    loadWelcomeVideoFromConfig();
    // Inisialisasi welcome video dulu
    initWelcome();

    // Lanjutkan inisialisasi lainnya
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
console.log('%c⚡ YUDA STORE', 'color: #3b82f6; font-size: 24px; font-weight: bold; font-family: monospace;');
console.log('%cPremium Script Collection 2026', 'color: #60a5fa; font-size: 14px; font-family: monospace;');
console.log('%c© All Rights Reserved - YUDA DEV', 'color: #94a3b8; font-size: 12px; font-family: monospace;');
console.log('%c💡 Tips: Tekan ESC untuk menutup welcome video, atau klik tombol X', 'color: #64748b; font-size: 11px; font-family: monospace;');

// Anti iframe
if (window.top !== window.self) {
    window.top.location = window.self.location;
}

// Exports
window.filterCategory = filterCategory;
window.toggleSound = toggleSound;
window.toggleVideo = toggleVideo;
window.openQrisModal = openQrisModal;
window.closeQrisModal = closeQrisModal;
window.downloadQris = downloadQris;
window.closeWelcome = closeWelcome;
window.toggleWelcomeSound = toggleWelcomeSound;
window.resetWelcome = resetWelcome;
