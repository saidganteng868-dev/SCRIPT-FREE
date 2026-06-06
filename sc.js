// sc.js - Data Script Collection dengan Photo Support dari config.js
const scripts = [
  {
    name: "SCRIPT HUTAO MD",
    desc: "Script cocok untuk jaga grup dengan fitur lengkap dan stabil. Support Node v20 dengan 3000+ fitur.",
    link: "https://www.mediafire.com/file/nprkdlutbig072t/ʜᴜᴛᴀᴏ+-+ᴍᴅ+-+v3.zip/file",
    category: "group",
    icon: "🤖",
    nodeVersion: "v20",
    features: 3000,
    platform: "WA",
    photo: "foto1"
  },
  {
    name: "SCRIPT CHENG MB",
    desc: "Script cocok untuk jaga grup dengan fitur lengkap dan stabil. Support Node v20 dengan 3000+ fitur.",
    link: "https://www.mediafire.com/file/3zf20jbypmqj1dx/CHENG-MD-2026.zip/file",
    category: "group",
    icon: "🤖",
    nodeVersion: "v20",
    features: 3000,
    platform: "WA",
    photo: "foto2"
  },
  {
    name: "SCRIPT RAIDENN V1",
    desc: "Script cocok untuk jaga grup dengan fitur lengkap dan stabil. Support Node v20 dengan 2000+ fitur.",
    link: "https://www.mediafire.com/file/felglwh3ccxynfb/RAIDENN-V1.zip/file",
    category: "group",
    icon: "🤖",
    nodeVersion: "v20",
    features: 2000,
    platform: "WA",
    photo: "foto3"
  },
  {
    name: "SCRIPT DINOROR MB V2",
    desc: "Script cocok untuk jaga grup dengan fitur lengkap dan stabil. Support Node v20 dengan 800+ fitur.",
    link: "https://www.mediafire.com/file/47wobd5uiokak6i/Dinoror+MD+v1.1.0.zip/file",
    category: "group",
    icon: "🤖",
    nodeVersion: "v20",
    features: 800,
    platform: "WA",
    photo: "foto4"
  },
  {
    name: "SCRIPT CANTARELLA MB V3",
    desc: "Script cocok untuk jaga grup dengan fitur lengkap dan stabil. Support Node v21 dengan 2000+ fitur.",
    link: "https://www.mediafire.com/file/6yu9518kzitoj6p/Cantarella_V3.zip/file",
    category: "group",
    icon: "🤖",
    nodeVersion: "v21",
    features: 2000,
    platform: "WA",
    photo: "foto5"
  },
  {
    name: "SCRIPT HYDROMD MASTER",
    desc: "Script cocok untuk jaga grup dengan fitur lengkap dan stabil. Support Node v20l4 dengan 160+ fitur.",
    link: "https://www.mediafire.com/file/21x2fvpcfe0sdx9/hydromd-master.zip/file",
    category: "group",
    icon: "🤖",
    nodeVersion: "v24",
    features: 160,
    platform: "WA",
    photo: "foto6"
  },
  {
    name: "SCRIPT JUSTIN V24",
    desc: "Script cocok untuk bug yang rip/penipu dengan fitur lengkap dan stabil. Support Node v21 dengan 8+ fitur.",
    link: "https://www.mediafire.com/file/w382na5mn4a6fjz/JUSTIN_V24_TERBARU.zip/file",
    category: "bug",
    icon: "👾",
    nodeVersion: "v21",
    features: 8,
    platform: "WA",
    photo: "foto7"
  },
  {
    name: "SCRIPT NIKA V17",
    desc: "Script cocok untuk bug ripl/penipu dengan fitur lengkap dan stabil. Support Node v20 dengan 18+ fitur.",
    link: "https://www.mediafire.com/file/s9oq0tjv6z5q5uk/Nika_V17_New_No_Enc.zip/file",
    category: "bug",
    icon: "👾",
    nodeVersion: "v18",
    features: 3000,
    platform: "WA",
    photo: "foto8"
  }
];

// APK category removed from filter buttons
// Fungsi untuk mendapatkan URL foto dari config
function getPhotoUrl(photoKey) {
    if (typeof CONFIG !== 'undefined' && CONFIG.photos && CONFIG.photos[photoKey]) {
        return CONFIG.photos[photoKey];
    }
    // Fallback placeholder jika foto belum diatur
    return `https://via.placeholder.com/400x200/1e40af/ffffff?text=${encodeURIComponent(photoKey)}`;
}
