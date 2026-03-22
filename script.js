// ============================================
// YUDA STORE - PROTECTED SCRIPT
// ============================================

const scripts = [
  {
    name: "SCRIPT HUTAO MB V2",
    desc: "Script cocok untuk jaga grup dengan fitur lengkap dan stabil.",
    link: "https://www.mediafire.com/file/dn7fwi77x8il935/HuTaoMD-V.0.2.zip/file",
    category: "group",
    icon: "🤖",
    nodeVersion: "v18.x",
    features: 450
  },
  {
    name: "SCRIPT Arona_MD_andri",
    desc: "Script Cocok untuk Jaga grup dengan anti-spam dan auto-respon.",
    link: "https://www.mediafire.com/file/gozipp38472m9qj/Arona_MD_andri.tar.gz/file",
    category: "group",
    icon: "🤖",
    nodeVersion: "v18.x",
    features: 380
  },
  {
    name: "SCRIPT LYRRA MB V7",
    desc: "Script cocok untuk jaga grup dengan fitur game dan downloader.",
    link: "https://www.mediafire.com/file/l3ste56e9a7ft72/Script_Lyrra_MD_V7.zip/file",
    category: "group",
    icon: "🤖",
    nodeVersion: "v18.x",
    features: 520
  },
  {
    name: "SCRIPT FURINA MB",
    desc: "Total Fitur 1300+ Cocok untuk group dengan menu interaktif.",
    link: "https://www.mediafire.com/file/589qv7btjpyqyx1/Script_bot_WhatsApp_MD_1300%252B.zip/file",
    category: "group",
    icon: "🤖",
    nodeVersion: "v20.x",
    features: 1300
  },
  {
    name: "SCRIPT AUTO ORDER PANEL",
    desc: "Script auto order panel hosting dengan sistem pembayaran otomatis.",
    link: "https://www.mediafire.com/file/ito4r46i9v4qddz/verlangauto-telegram.zip/file",
    category: "cpanel",
    icon: "🎛️",
    nodeVersion: "v16.x",
    features: 85
  },
  {
    name: "SCRIPT SAKATA CRASHER V1",
    desc: "Script cocok untuk sering rip/nipu dengan proteksi crasher.",
    link: "https://www.mediafire.com/file/dzj8ryri9oxh3pv/SAKATA_CRASHER_V1.zip/file",
    category: "bug",
    icon: "🐛",
    nodeVersion: "v18.x",
    features: 45
  },
  {
    name: "SCRIPT AnotherCrash V1",
    desc: "Script cocok untuk sering rip/nipu dengan fitur crash ringan.",
    link: "https://www.mediafire.com/file/y4eh2fep3hk8z9o/AnotherCrash+(FREE).apk/file",
    category: "bug",
    icon: "🐛",
    nodeVersion: "v18.x",
    features: 32
  },
  {
    name: "SCRIPT BUG ANDRI",
    desc: "Script cocok untuk sering rip/nipu dengan base bug lengkap.",
    link: "https://www.mediafire.com/file/pyhgthnqz4rv0ig/BASE_BUG_ANDRI_STORE_WORK.zip/file",
    category: "bug",
    icon: "🐛",
    nodeVersion: "v18.x",
    features: 78
  },
  {
    name: "SCRIPT BUG XWORM - xx V3",
    desc: "Script cocok untuk sering rip/nipu dengan sistem worm attack.",
    link: "https://www.mediafire.com/file/0xv8vbhzs76e0kt/XWORM_-_XX_%255B_V3.0_%255D.zip/file",
    category: "bug",
    icon: "🐛",
    nodeVersion: "v20.x",
    features: 95
  },
  {
    name: "SCRIPT BUG XZERO V12",
    desc: "Script cocok untuk sering rip/nipu dengan fitur terbaru V12.",
    link: "https://www.mediafire.com/file/vwtyydy3wkirvzi/Xzerov12%25F0%259F%25A9%25B8.zip/file",
    category: "bug",
    icon: "🐛",
    nodeVersion: "v18.x",
    features: 120
  }
];

const list = document.getElementById("scriptList");
const searchInput = document.getElementById("search");

function tampilkan(data) {
  list.innerHTML = "";
  if (data.length === 0) {
    list.innerHTML = `
      <div class="script-card" style="text-align: center; grid-column: 1/-1;">
        <div style="font-size: 40px; margin-bottom: 15px;">🔍</div>
        <h3 style="color: #888; margin-bottom: 10px;">Script tidak ditemukan</h3>
        <p style="color: #666;">Coba kata kunci lain</p>
      </div>
    `;
    return;
  }
  
  data.forEach(item => {
    list.innerHTML += `
      <div class="script-card">
        <div class="script-header">
          <span class="badge ${item.category}">${item.category}</span>
          <span class="script-icon">${item.icon}</span>
        </div>
        <div class="script-title">${item.name}</div>
        <div class="script-meta">
          <span class="node-version"><i class="fab fa-node-js"></i> Node ${item.nodeVersion}</span>
          <span class="features-count"><i class="fas fa-star"></i> ${item.features} Fitur</span>
        </div>
        <div class="script-desc">${item.desc}</div>
        <button class="download-btn" onclick="window.open('${item.link}','_blank')">
          <i class="fas fa-download"></i> Download
        </button>
      </div>
    `;
  });
}

function filterCategory(cat) {
  const buttons = document.querySelectorAll(".filter-buttons button");
  buttons.forEach((btn, index) => {
    btn.classList.remove("active");
    if (cat === 'all' && index === 0) btn.classList.add("active");
    else if (cat === 'group' && index === 1) btn.classList.add("active");
    else if (cat === 'bug' && index === 2) btn.classList.add("active");
    else if (cat === 'cpanel' && index === 3) btn.classList.add("active");
    else if (cat === 'store' && index === 4) btn.classList.add("active");
  });

  if (cat === "all") {
    tampilkan(scripts);
  } else {
    tampilkan(scripts.filter(s => s.category === cat));
  }
}

searchInput.addEventListener("input", function() {
  const value = this.value.toLowerCase();
  tampilkan(scripts.filter(s => s.name.toLowerCase().includes(value)));
});

// Initialize
tampilkan(scripts);

// ===== VIDEO CONTROL =====
const video = document.getElementById("bgVideo");
const soundBtn = document.getElementById("soundToggle");
const videoBtn = document.getElementById("videoToggle");

// Auto play dengan interaksi pertama
document.addEventListener("click", () => {
  video.play().catch(e => console.log("Autoplay prevented"));
}, { once: true });

video.muted = true;
video.volume = 1;

// Toggle Sound
function toggleSound() {
  if(video.muted) {
    video.muted = false;
    soundBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    soundBtn.style.background = "linear-gradient(135deg, #00ff88, #00cc66)";
  } else {
    video.muted = true;
    soundBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    soundBtn.style.background = "linear-gradient(135deg, #7b2ff7, #f107a3)";
  }
}

// Toggle Video Show/Hide
function toggleVideo() {
  if(video.style.display === "none") {
    video.style.display = "block";
    videoBtn.innerHTML = '<i class="fas fa-video"></i>';
    videoBtn.style.background = "linear-gradient(135deg, #7b2ff7, #f107a3)";
  } else {
    video.style.display = "none";
    videoBtn.innerHTML = '<i class="fas fa-video-slash"></i>';
    videoBtn.style.background = "linear-gradient(135deg, #ff4757, #ff6348)";
  }
}

// Smooth scroll untuk navigation
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
