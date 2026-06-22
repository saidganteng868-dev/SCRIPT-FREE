const CONFIG = {
    // ============================================
    // WELCOME VIDEO - LINK VIDEO DIRECT
    // ============================================
    welcome: {
        videoUrl: 'https://x.xcute.workers.dev/f/videos/3ae3640d685d.mp4',
        title: 'Selamat Datang Di Web Yuda Shop',
        subtitle: 'Premium Script Collection 2026',
        duration: 8000,
        fallbackImage: 'welcome.jpg'
    },

    // ============================================
    // PRODUCT PHOTOS - TAMBAHKAN LINK FOTO ANDA DI SINI
    // ============================================
    // Format: foto1, foto2, foto3, ... foto999
    // Contoh penggunaan di sc.js: photo: "foto1"

    photos: {
        foto1: 'https://x.xcute.workers.dev/f/images/31912254895d.jpg',
        foto2: 'https://x.xcute.workers.dev/f/images/6632193fae7a.jpg', 
        foto3: 'https://x.xcute.workers.dev/f/images/bd7f45c150a3.jpg', 
        foto4: 'https://x.xcute.workers.dev/f/images/dedb02451ac0.jpg', 
        foto5: 'https://x.xcute.workers.dev/f/images/2653315a3f24.jpg', 
        foto6: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=200&fit=crop',   // HYDROMD MASTER

        // === BUG SCRIPTS ===
        foto7: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=200&fit=crop',   // JUSTIN V24
        foto8: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=200&fit=crop',   // NIKA V17
    },

    // ============================================
    // COLOR THEME - PUTIH & BIRU MUDA
    // ============================================
    colors: {
        primary: '#3b82f6',      // Biru utama
        primaryDark: '#2563eb',  // Biru gelap
        primaryLight: '#60a5fa', // Biru muda
        secondary: '#93c5fd',    // Biru sangat muda
        accent: '#0ea5e9',       // Sky blue
        white: '#ffffff',
        offWhite: '#f8fafc',
        lightBlue: '#dbeafe',
        dark: '#0f172a',         // Slate 900
        darker: '#020617',       // Slate 950
        cardBg: 'rgba(255, 255, 255, 0.03)',
        cardHover: 'rgba(255, 255, 255, 0.06)',
        border: 'rgba(255, 255, 255, 0.08)',
        borderHover: 'rgba(255, 255, 255, 0.15)',
        textPrimary: '#f8fafc',   // Putih keabu
        textSecondary: '#94a3b8', // Abu muda
        textMuted: '#64748b',     // Abu
    },

    // Gradients
    gradients: {
        blueLight: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
        blueDark: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
        whiteBlue: 'linear-gradient(135deg, #ffffff 0%, #dbeafe 100%)',
        sky: 'linear-gradient(135deg, #0ea5e9 0%, #7dd3fc 100%)',
        ocean: 'linear-gradient(135deg, #0369a1 0%, #0ea5e9 100%)',
    },

    // Glow effects
    glows: {
        blue: '0 0 40px rgba(59, 130, 246, 0.3)',
        blueStrong: '0 0 60px rgba(59, 130, 246, 0.4)',
        white: '0 0 40px rgba(255, 255, 255, 0.15)',
    },

    // Social Links
    social: {
        youtube: '#',
        instagram: '#',
        github: '#',
        tiktok: '#'
    },

    // Contact Info
    contact: {
        whatsapp: '6285654809718',
        telegram: '@Yuda1345'
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}