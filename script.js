let attempts = 0;
let isFrozen = false; 

function goToPage(n) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`page${n}`).classList.add('active');

    const audio = document.getElementById("bgMusic");
    if (audio) { audio.play().catch(() => {}); }
}

function checkBirthday() {
    const input = document.getElementById('birthdayInput');
    const errorMsg = document.getElementById('errorMsg');
    attempts++;

    if (attempts === 1) {
        errorMsg.innerText = "لا لا حاولي تاني 🌚 هههه";
        input.value = "";
    } else if (attempts === 2) {
        errorMsg.innerText = "خلاص حاولي آخر مرة معلش 😂 ضحكتيني";
        input.value = "";
    } else {
        errorMsg.innerText = "";
        goToPage(3);
        startFreezeTimer();
    }
}

function startFreezeTimer() {
    setTimeout(() => {
        isFrozen = true;
    }, 10000); 
}

document.querySelectorAll('.run').forEach(btn => {
    btn.addEventListener('mouseover', () => {
        if (isFrozen) return; 
        btn.style.transition = "0.2s ease";
        const x = Math.random() * (window.innerWidth - btn.offsetWidth);
        const y = Math.random() * (window.innerHeight - btn.offsetHeight);
        btn.style.position = 'fixed';
        btn.style.left = `${x}px`;
        btn.style.top = `${y}px`;
        btn.style.zIndex = "999";
    });

    btn.addEventListener('click', () => {
        goToPage(4);
        startTyping();
    });
});

const text = "❤️ ; كل سنه وانتي طيبه وسنه سعيده عليكي يارب وكتبتلك اهو رساله طويله زي ما كنتي عاوز علشان تعرفي بس المهم ربنا يجعلها سنه سعيده عليكي وبجد احلي حد اتعرفت عليه السنادي وعقبال السنين الجايه وربنا يديم المحبه في العلاقه الي مش عارفين نحدد مصيرها دي بس ان شاء الله خير يعني و معلش اتأخرت بعد 12 بس اخد معايا وقت  بقا انتي عارفه المهم سنه سعيده عليكي مستني حلاوه روح بقا بالمناسبه دي هقهقه❤️ ";
const words = text.split(" ");
let wordIndex = 0;

function startTyping() {
    const el = document.getElementById("typing");
    if (!el || el.innerHTML !== "") return; 

    function typeWord() {
        if (wordIndex < words.length) {
            el.innerHTML += words[wordIndex] + " ";
            wordIndex++;
            setTimeout(typeWord, 350);
        }
    }
    typeWord();
}

const icons = ["⭐", "🎄", "❤️"];
const container = document.getElementById("floating");
for (let i = 0; i < 25; i++) {
    const s = document.createElement("span");
    s.innerText = icons[Math.floor(Math.random() * icons.length)];
    s.style.left = Math.random() * 100 + "vw";
    s.style.fontSize = Math.random() * 20 + 15 + "px";
    s.style.animationDuration = Math.random() * 5 + 5 + "s";
    s.style.bottom = "-50px";
    container.appendChild(s);

}
