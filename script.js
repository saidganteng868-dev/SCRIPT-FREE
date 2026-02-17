const scripts = [
{
name:"SCRIPT HUTAO MB V2",
desc:"Script cocok untuk jaga grup.",
link:"https://www.mediafire.com/file/dn7fwi77x8il935/HuTaoMD-V.0.2.zip/file",
category:"group"
},
{
name:"SCRIPT LYRRA MB V7",
desc:"Script cocok untuk jaga grup.",
link:"https://www.mediafire.com/file/l3ste56e9a7ft72/Script_Lyrra_MD_V7.zip/file",
category:"group"
},
{
name:"SCRIPT FURINA MB",
desc:"Total Fitur 1300+ Cocok untuk group.",
link:"https://www.mediafire.com/file/589qv7btjpyqyx1/Script_bot_WhatsApp_MD_1300%252B.zip/file",
category:"group"
},
{
name:"SCRIPT AUTO ORDER PANEL",
desc:"Script auto order panel hosting.",
link:"https://www.mediafire.com/file/ito4r46i9v4qddz/verlangauto-telegram.zip/file",
category:"cpanel"
},
{
name:"SCRIPT SAKATA CRASHER V1",
desc:"Script cocok untuk sering rip/nipu",
link:"https://www.mediafire.com/file/dzj8ryri9oxh3pv/SAKATA_CRASHER_V1.zip/file",
category:"bug"
},
{
name:"SCRIPT AnotherCrash V1",
desc:"Script cocok untuk sering rip/nipu",
link:"https://www.mediafire.com/file/y4eh2fep3hk8z9o/AnotherCrash+(FREE).apk/file",
category:"bug"
},
{
name:"SCRIPT BUG ANDRI",
desc:"Script cocok untuk sering rip/nipu",
link:"https://www.mediafire.com/file/pyhgthnqz4rv0ig/BASE_BUG_ANDRI_STORE_WORK.zip/file",
category:"bug"
},
{
name:"SCRIPT BUG XWORM - xx V3",
desc:"Script cocok untuk sering rip/nipu",
link:"https://www.mediafire.com/file/0xv8vbhzs76e0kt/XWORM_-_XX_%255B_V3.0_%255D.zip/file",
category:"bug"
},
{
name:"SCRIPT BUG XZERO V12",
desc:"Script cocok untuk sering rip/nipu",
link:"https://www.mediafire.com/file/vwtyydy3wkirvzi/Xzerov12%25F0%259F%25A9%25B8.zip/file",
category:"bug"
}
];

const list = document.getElementById("scriptList");
const searchInput = document.getElementById("search");

function tampilkan(data){
list.innerHTML="";
data.forEach(item=>{
list.innerHTML+=`
<div class="script-card">
<span class="badge">${item.category}</span>
<div class="script-title">${item.name}</div>
<div class="script-desc">${item.desc}</div>
<button class="download-btn" onclick="window.open('${item.link}','_blank')">Download</button>
</div>
`;
});
}

function filterCategory(cat){
document.querySelectorAll(".filter-buttons button").forEach(btn=>btn.classList.remove("active"));
event.target.classList.add("active");

if(cat==="all"){
tampilkan(scripts);
}else{
tampilkan(scripts.filter(s=>s.category===cat));
}
}

searchInput.addEventListener("input",function(){
const value=this.value.toLowerCase();
tampilkan(scripts.filter(s=>s.name.toLowerCase().includes(value)));
});

tampilkan(scripts);