// sc.js - Data Script Collection dengan Platform Label di Nama
const scripts = [
  {
    name: "[WA] SCRIPT HYDRO MB",
    desc: "Script cocok untuk jaga grup dengan fitur lengkap dan stabil. Support Node v20 dengan 3000+ fitur.",
    link: "https://www.mediafire.com/file/u3czog6zvolgef3/hydromd-master.zip/file",
    category: "group",
    icon: "🤖",
    nodeVersion: "v20",
    features: 3000,
    platform: "WA"
  },
  {
    name: "[WA] SCRIPT ZERION VANGUARD V1",
    desc: "Script anti rip/nipu dengan sistem keamanan tinggi. Gunakan dengan bijak.",
    link: "https://www.mediafire.com/file/ovl3653smlipd23/Zerion+Vanguard+V1+New+Release.zip/file",
    category: "bug",
    icon: "🛡️",
    nodeVersion: "v20",
    features: 100,
    platform: "WA"
  },
  {
    name: "[WA] SCRIPT QURIN 2.1",
    desc: "Script jaga grup dengan fitur lengkap dan stabil. Cocok untuk grup besar.",
    link: "https://www.mediafire.com/file/0yfvg6wo44oygc6/OURIN_MD_V2.1.0_%2528_FREE_%2529.zip/file",
    category: "group",
    icon: "🤖",
    nodeVersion: "v20",
    features: 2000,
    platform: "WA"
  },
  {
    name: "[WA] SCRIPT FREYA",
    desc: "Script anti rip dengan base bug lengkap. Gunakan dengan baik dan bijak.",
    link: "https://www.mediafire.com/file/80afj4y30wqrw2z/SCRIPT_FREYA_CRASH%25F0%259F%2591%25BF.zip/file",
    category: "bug",
    icon: "⚡",
    nodeVersion: "v20",
    features: 100,
    platform: "WA"
  },
  {
    name: "[WA] SCRIPT MIKASA V6.1",
    desc: "Script jaga grup premium dengan fitur lengkap dan tampilan elegan.",
    link: "https://www.mediafire.com/file/dfsyopw0m2s0hhs/MIKASA_MD_V6.1.zip/file",
    category: "group",
    icon: "🌸",
    nodeVersion: "v20",
    features: 1800,
    platform: "WA"
  },
  {
    name: "[WA] SCRIPT CHRISTY",
    desc: "Script jaga grup dengan fitur lengkap. Support Node v20 - v24.",
    link: "https://www.mediafire.com/file/3d8y2ou59rxxsrk/CHRISTY.zip/file",
    category: "group",
    icon: "👑",
    nodeVersion: "v20 - v24",
    features: 2800,
    platform: "WA"
  },
  {
    name: "[WA] SCRIPT ELAINA MB",
    desc: "Script jaga grup dengan fitur interaktif dan stabil. Support Node v21 - v23.",
    link: "https://www.mediafire.com/file/j07drkt03kem3z0/Elaina+MD.zip/file",
    category: "group",
    icon: "🌙",
    nodeVersion: "v21 - v23",
    features: 2800,
    platform: "WA"
  },
  {
    name: "[WA] SCRIPT HUTAO MB V3",
    desc: "Script jaga grup dengan tema anime dan fitur lengkap.",
    link: "https://www.mediafire.com/file/nprkdlutbig072t/hutao-md-v3.zip/file",
    category: "group",
    icon: "🔥",
    nodeVersion: "v20",
    features: 2800,
    platform: "WA"
  },
  {
    name: "[WA] SCRIPT ANNAYAMADA MD",
    desc: "Script jaga grup dengan 2000+ fitur dan stabil.",
    link: "https://www.mediafire.com/file/r6jvjljco7i1o31/ANNAYAMADA-MD.zip/file",
    category: "group",
    icon: "💎",
    nodeVersion: "v20",
    features: 2000,
    platform: "WA"
  },
  {
    name: "[WA] SCRIPT HYDRO MB V5",
    desc: "Versi terbaru Hydro MD dengan fitur lebih lengkap dan stabil.",
    link: "https://www.mediafire.com/file/h7hbcyrbs8di182/hydromd-v5.zip/file",
    category: "group",
    icon: "💧",
    nodeVersion: "v20",
    features: 2800,
    platform: "WA"
  },
  {
    name: "[WA] SCRIPT ENCORE MB V3.1",
    desc: "Script jaga grup dengan sistem update via WhatsApp.",
    link: "https://www.mediafire.com/file/g3pes2oyt2mweui/Script+Encore+Md+V3.1.0.zip/file",
    category: "group",
    icon: "🎵",
    nodeVersion: "v20",
    features: 3000,
    platform: "WA"
  },
  {
    name: "[WA] SCRIPT CANTARELLA V3",
    desc: "Script jaga grup dengan fitur dasar yang stabil.",
    link: "https://www.mediafire.com/file/6yu9518kzitoj6p/Cantarella_V3.zip/file",
    category: "group",
    icon: "🎭",
    nodeVersion: "v20",
    features: 1000,
    platform: "WA"
  },
  {
    name: "[WA] SCRIPT MARIN KITAGAWA V3",
    desc: "Script jaga grup dengan fitur game dan downloader.",
    link: "https://www.mediafire.com/file/5vw10nl5ckv1mpb/Marin+Kitagawa+V3.zip/file",
    category: "group",
    icon: "🎨",
    nodeVersion: "v20",
    features: 1700,
    platform: "WA"
  },
  {
    name: "[WA] SCRIPT MIWA ASISTEN",
    desc: "Script asisten virtual dengan fitur lengkap.",
    link: "https://www.mediafire.com/file/0m5fjre0c6a4rj0/miwa_v1.zip/file",
    category: "group",
    icon: "🎯",
    nodeVersion: "v20",
    features: 1800,
    platform: "WA"
  },
  {
    name: "[WA] APK HEXACRASH V2",
    desc: "APK bug WhatsApp untuk proteksi. Gunakan dengan bijak.",
    link: "https://www.mediafire.com/file/vd58gzf80t7efqd/HexaCrash_V2.apk/file",
    category: "apk",
    icon: "📱",
    nodeVersion: "Android",
    features: 50,
    platform: "WA"
  },
  {
    name: "[WA] SCRIPT CHRIST MD",
    desc: "Script jaga grup dengan support Node v20 - v27.",
    link: "https://www.mediafire.com/file/xk7ztfpvrpg4bxj/CHRISTY.zip/file",
    category: "group",
    icon: "✝️",
    nodeVersion: "v20 - v27",
    features: 1898,
    platform: "WA"
  },
  {
    name: "[WA] SCRIPT ALYA CHAN",
    desc: "Script jaga grup dengan fitur interaktif.",
    link: "https://www.mediafire.com/file/nprkdlutbig072t/alya-chan.zip/file",
    category: "group",
    icon: "🌟",
    nodeVersion: "v20",
    features: 1837,
    platform: "WA"
  },
  {
    name: "[WA] APK PAXBAR V2",
    desc: "APK tools WhatsApp dengan berbagai fitur.",
    link: "https://www.mediafire.com/file/tgog3pvsubt07no/PAXBAR_V2.zip/file",
    category: "apk",
    icon: "🔧",
    nodeVersion: "Android",
    features: 150,
    platform: "WA"
  },
  {
    name: "[WA] SCRIPT VENTUS",
    desc: "Script anti rip dengan sistem proteksi tinggi.",
    link: "https://www.mediafire.com/file/ah9jmlmzyeqqmjv/ventus.zip/file",
    category: "bug",
    icon: "🌪️",
    nodeVersion: "v21",
    features: 500,
    platform: "WA"
  },
  {
    name: "[WA] SCRIPT OTAX",
    desc: "Script bug WhatsApp dengan fitur lengkap.",
    link: "https://www.mediafire.com/file/c6krrk720kcnjg7/SCRIPT_OTAX.zip/file",
    category: "bug",
    icon: "🦠",
    nodeVersion: "v20",
    features: 120,
    platform: "WA"
  },
  {
    name: "[WA] SCRIPT LYRRA MB V7",
    desc: "Script jaga grup dengan fitur game dan downloader lengkap.",
    link: "https://www.mediafire.com/file/l3ste56e9a7ft72/Script_Lyrra_MD_V7.zip/file",
    category: "group",
    icon: "🎮",
    nodeVersion: "v20",
    features: 2200,
    platform: "WA"
  },
  {
    name: "[WA] SCRIPT FURINA MB",
    desc: "Script jaga grup dengan 1300+ fitur dan menu interaktif.",
    link: "https://www.mediafire.com/file/589qv7btjpyqyx1/Script_bot_WhatsApp_MD_1300%252B.zip/file",
    category: "group",
    icon: "⚜️",
    nodeVersion: "v20.x",
    features: 1300,
    platform: "WA"
  },
  {
    name: "[TELE] SCRIPT AUTO ORDER PANEL",
    desc: "Script auto order panel hosting dengan sistem pembayaran otomatis via Telegram.",
    link: "https://www.mediafire.com/file/ito4r46i9v4qddz/verlangauto-telegram.zip/file",
    category: "store",
    icon: "🛒",
    nodeVersion: "v20",
    features: 100,
    platform: "TELE"
  },
  {
    name: "[WA] SCRIPT CPANEL",
    desc: "Script untuk jualan Panel bot dengan fitur lengkap.",
    link: "https://www.mediafire.com/file/dzj8ryri9oxh3pv/SAKATA_CRASHER_V1.zip/file",
    category: "cpanel",
    icon: "🎛️",
    nodeVersion: "v23",
    features: 100,
    platform: "WA"
  },
  {
    name: "[WA] SCRIPT RESBOT FIXED",
    desc: "Script jaga grup yang sudah diperbaiki dan stabil.",
    link: "https://www.mediafire.com/file/fge5s9mku14t6f3/RESBOT_FIXED_27.tar.gz/file",
    category: "group",
    icon: "🔧",
    nodeVersion: "v20",
    features: 1800,
    platform: "WA"
  },
  {
    name: "[WA] SCRIPT BUG ANDRI",
    desc: "Script bug dengan base lengkap untuk proteksi.",
    link: "https://www.mediafire.com/file/pyhgthnqz4rv0ig/BASE_BUG_ANDRI_STORE_WORK.zip/file",
    category: "bug",
    icon: "🛡️",
    nodeVersion: "v18.x",
    features: 78,
    platform: "WA"
  },
  {
    name: "[WA] SCRIPT BUG XWORM V3",
    desc: "Script bug dengan sistem worm attack.",
    link: "https://www.mediafire.com/file/0xv8vbhzs76e0kt/XWORM_V3.0.zip/file",
    category: "bug",
    icon: "🐛",
    nodeVersion: "v20.x",
    features: 95,
    platform: "WA"
  },
  {
    name: "[WA] SCRIPT BUG XZERO V12",
    desc: "Script bug versi terbaru V12 dengan fitur update.",
    link: "https://www.mediafire.com/file/vwtyydy3wkirvzi/Xzerov12.zip/file",
    category: "bug",
    icon: "❌",
    nodeVersion: "v18.x",
    features: 120,
    platform: "WA"
  },
  {
    name: "[WA] JPM AUTO REPLY V2",
    desc: "Script JPM dengan auto reply dan manajemen order otomatis.",
    link: "https://www.mediafire.com/file/jpm_auto_reply_v2.zip/file",
    category: "jpm",
    icon: "💬",
    nodeVersion: "v18",
    features: 45,
    platform: "WA"
  },
  {
    name: "[WA] JPM PANEL OTOMATIS",
    desc: "Script JPM dengan sistem panel otomatis untuk jualan pulsa.",
    link: "https://www.mediafire.com/file/jpm_panel_otomatis.zip/file",
    category: "jpm",
    icon: "📲",
    nodeVersion: "v20",
    features: 80,
    platform: "WA"
  },
  {
    name: "[WA] SCRIPT PUSH KONTAK",
    desc: "Script push kontak otomatis dengan delay dan anti banned.",
    link: "https://www.mediafire.com/file/r7gi86t2t6zy2je/Pushkontak+Save+Otomatis.zip/file",
    category: "pushkontak",
    icon: "📇",
    nodeVersion: "v20",
    features: 15,
    platform: "WA"
  },
  // Tambahan Script TELEGRAM
  {
    name: "[TELE] SCRIPT TELE BOT MANAGER",
    desc: "Script bot Telegram untuk manajemen grup dengan fitur lengkap.",
    link: "https://www.mediafire.com/file/tele_bot_manager.zip/file",
    category: "group",
    icon: "📱",
    nodeVersion: "v18",
    features: 500,
    platform: "TELE"
  },
  {
    name: "[TELE] SCRIPT TELE SHOP",
    desc: "Script bot Telegram untuk jualan digital dengan payment gateway.",
    link: "https://www.mediafire.com/file/tele_shop.zip/file",
    category: "store",
    icon: "🛍️",
    nodeVersion: "v20",
    features: 200,
    platform: "TELE"
  },
  {
    name: "[TELE] SCRIPT TELE MODERATOR",
    desc: "Script moderator Telegram dengan anti spam dan auto delete.",
    link: "https://www.mediafire.com/file/tele_moderator.zip/file",
    category: "group",
    icon: "🤖",
    nodeVersion: "v18",
    features: 150,
    platform: "TELE"
  },
  {
    name: "[TELE] SCRIPT TELE MUSIC BOT",
    desc: "Bot Telegram untuk download dan streaming musik.",
    link: "https://www.mediafire.com/file/tele_music_bot.zip/file",
    category: "group",
    icon: "🎵",
    nodeVersion: "v20",
    features: 80,
    platform: "TELE"
  },
  {
    name: "[TELE] SCRIPT TELE MOVIE BOT",
    desc: "Bot Telegram untuk streaming dan download film.",
    link: "https://www.mediafire.com/file/tele_movie_bot.zip/file",
    category: "group",
    icon: "🎬",
    nodeVersion: "v20",
    features: 120,
    platform: "TELE"
  },
  {
    name: "[TELE] SCRIPT TELE DOWNLOADER",
    desc: "Bot Telegram untuk download video dari berbagai platform.",
    link: "https://www.mediafire.com/file/tele_downloader.zip/file",
    category: "group",
    icon: "⬇️",
    nodeVersion: "v18",
    features: 200,
    platform: "TELE"
  },
  {
    name: "[TELE] SCRIPT TELE PAYMENT",
    desc: "Bot Telegram dengan sistem pembayaran otomatis multi gateway.",
    link: "https://www.mediafire.com/file/tele_payment.zip/file",
    category: "store",
    icon: "💳",
    nodeVersion: "v20",
    features: 150,
    platform: "TELE"
  },
  {
    name: "[TELE] SCRIPT TELE MINI GAMES",
    desc: "Bot Telegram dengan koleksi mini games untuk grup.",
    link: "https://www.mediafire.com/file/tele_mini_games.zip/file",
    category: "group",
    icon: "🎮",
    nodeVersion: "v18",
    features: 100,
    platform: "TELE"
  },
  {
    name: "[TELE] SCRIPT TELE ANTI SPAM",
    desc: "Bot Telegram khusus proteksi grup dari spam dan raid.",
    link: "https://www.mediafire.com/file/tele_anti_spam.zip/file",
    category: "group",
    icon: "🛡️",
    nodeVersion: "v20",
    features: 80,
    platform: "TELE"
  },
  {
    name: " SCRIPT TELE BROADCAST",
    desc: "Bot Telegram untuk broadcast pesan ke banyak user.",
    link: "https://www.mediafire.com/file/tele_broadcast.zip/file",
    category: "pushkontak",
    icon: "📢",
    nodeVersion: "v18",
    features: 60,
    platform: "TELE"
  }
];
