import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

/*
  Replace the string below with your girl's image URL.
  Example: const HER_IMAGE_URL = "https://your-server.com/photos/her.jpg";
*/
const HER_IMAGE_URL = "https://github.com/ashyshhh/rashmi/blob/main/IMG_8249.jpeg?raw=true";

export default function App() {
  const BIRTHDAY_MONTH = 9; // October (0=Jan)
  const BIRTHDAY_DAY = 15;

  const now = new Date();
  const currentYear = now.getFullYear();
  let birthday = new Date(currentYear, BIRTHDAY_MONTH, BIRTHDAY_DAY, 0, 0, 0);
  if (birthday < now) {
    birthday = new Date(currentYear + 1, BIRTHDAY_MONTH, BIRTHDAY_DAY, 0, 0, 0);
  }

  // 15 Long Daily Love Messages (Oct 1 -> Oct 15)
const messages = [
  // Oct 5
  `Day 1 (Oct 5) — My prettiesttt girl 🌸💗  
Today begins the most special countdown of the year — the countdown to your 19th birthday! My sweet little muffin 🧁, my precious ray of sunshine ✨ — you’ve filled my life with love in ways I can’t even explain. These last 37 months with you have been the BESTESTTT part of my life. Every single morning when I wake up and see your photos, my day already feels brighter. Your smile, your dimples, your prettiest eyes — I get lost in them every single time.  

You’re my dumbo, my slow website, my everything. The way you blush when I tease you is my favorite sight in the whole world, and even when you say “I hate you,” I laugh because it’s the cutest kind of love. You’re not just my girlfriend — you’re my best friend, my heart, my safe place. Your morning pictures make me feel like you’re right here, your laugh is the sweetest melody, and your voice is my calm.  

I want this countdown to remind you every single day how much you mean to me. You are my sunshine, my treasure, my miracle, my girl. I LOVE BEING HATED BY YOU THE MOST 💗`,

  // Oct 6
  `Day 2 (Oct 6) — My dumbooooo 💗  
Sometimes I wonder how I got lucky enough to have you. Out of everyone in the world, it’s you who became my person — my love, my sunshine, my slow website. Your little stubbornness, your tenderness, your dumbness — they’re all part of why I choose you again and again, every single day.  

When you overthink, I just want to be beside you, holding your hand, reminding you that you’ll never have to carry your worries alone. Your laugh is my favorite thing, your dimples my favorite painting, your voice my favorite comfort. Even your anger and your “I hate you” moments are so cute that I end up loving you more.  

I love our “us” — the teasing, the fights we fix, the morning pictures, the random reels, the shy blushes you try to hide when i tease you. Everything about you makes me want to be better. You are my girl, my love, my heart — and I promise, I’ll always be here choosing you, every day, always. 💞`,

  // Oct 7
  `Day 3 (Oct 7) — My precious Ray of sunshine 🌸☀️💗  
Every laugh you give lights up my day. Even your silence comforts me because I know you’re there. The way you secretly adore me is the cutest loop I want to be stuck in forever. Thank you for being my person. 💞`,

  // Oct 8
  `Day 4 (Oct 8) — My cutuuuuuuuuu girl 💗  
Those morning pictures you send? They’re my favorite part of the day. I replay them like a little movie that makes me smile until I drool. You’ve given me a million reasons to be grateful — your hate is my favorite gift. 💝`,

  // Oct 9
  `Day 5 (Oct 9) — My most adorable girl 💗  
You are my home. No matter how far I roam, everything good leads back to you. Your smile makes everything better; your words heal me. I’ll stand by you through everything and remind you daily how precious you are. 💕`,

  // Oct 10
  `Day 6 (Oct 10) — My loveee 💗  
You’ve made my life more colorful. When the world gets heavy, your voice is my anchor. I’ll protect your heart and celebrate your light always. I LOVE YOU THE MOST. 💞`,

  // Oct 11
  `Day 7 (Oct 11) — My sweetest girl 💕  
I remember the moment I realized I was falling for you — a million tiny things that pulled me in. Since then, everything changed for the better. You are my daily blessing, my favorite habit 💗`,

  // Oct 12
  `Day 8 (Oct 12) — My precious Ray of sunshine 🌸☀️  
Tomorrow is almost here and my heart is racing with excitement. I can’t wait to celebrate you: your laugh, your dimples, your beautiful eyes — everything about you feels like a miracle. I’ll pour all my love into tomorrow because you deserve nothing less. 💗`,

  // Oct 13
  `Day 9 (Oct 13) — My dumbo000 💗  
This is the eve of your birthday and I want to say thank you — for being patient, for loving me, for choosing me. I’m proud of you, of us, and I promise to make your birthday feel like the whole world is cheering for you. Sleep well tonight, my love — tomorrow is yours. 🎂`,

  // Oct 14 (Birthday Eve)
  `Day 10 (Oct 14) — My love, my pearl 💗  
The night before your birthday feels like magic, because tomorrow the whole world will silently celebrate the most beautiful soul — YOU. Today, I just want to thank you. Thank you for being patient with me when I mess up, for choosing me every single day even when I’m difficult, for loving me with all your heart. You’ve turned my ordinary days into moments filled with warmth, laughter, and the prettiest kind of love.  

I’m proud of you — the girl who makes me laugh with her dumb little jokes, the girl whose dimples could melt an entire city, the girl who hides her softness behind “I hate you” but deep down is the most caring person I’ve ever known. You are my sunshine, my safe place, my home.  

I promise tomorrow will feel like the whole universe is cheering just for you, because in my world, you ARE the universe. Sleep well tonight, my love. Tomorrow, I’ll remind you with every word how you are my everything. 🎂💞`,

  // Oct 15 (Birthday)
  `Oct 15 — Happiestttttt 19th Birthday 🎉💗  
My precious ray of sunshine ✨, my sweet little muffin 🧁, my dumbo, my slow website, my prettiest girl — today is YOUR day, the day my world was blessed with the most amazing person ever. You are not just my girlfriend; you are my best friend, my heart, my home, my safe place, my everything.  

Your smile makes the darkest day brighter. Your eyes — those prettiest eyes — are the reason I lose myself every time. Your voice calms me, your laugh heals me, your presence gives me peace. These 37 months with you have been the happiest of my life, and even with long distance, you’ve made every second worth it.  

I can’t wait for the day I hold you in my arms and tell you everything in person, but until then, I’ll keep pouring my heart into words like this, because you deserve to be reminded every single day of how loved you are. You are my sunshine, my treasure, my miracle. I LOVE YOU THE MOST 💗 and I will ALWAYS love being “hated” by you because it’s the cutest thing ever.  

Happiest 19th birthday, my girl, my life, my everything 💗💗💗. I’m so lucky to be yours — today, tomorrow, forever. ✨💕`
];

  // Background config: 'image' for Oct 1 and Oct 15, otherwise gradient string
const backgrounds = [
  // Oct 1 → Oct 15 (all images)
  { type: "image", css: `url(${HER_IMAGE_URL})` }, // Oct1
  { type: "image", css: `url(${HER_IMAGE_URL})` }, // Oct2
  { type: "image", css: `url(${HER_IMAGE_URL})` }, // Oct3
  { type: "image", css: `url(${HER_IMAGE_URL})` }, // Oct4
  { type: "image", css: `url(${HER_IMAGE_URL})` }, // Oct5
  { type: "image", css: `url(${HER_IMAGE_URL})` }, // Oct6
  { type: "image", css: `url(${HER_IMAGE_URL})` }, // Oct7
  { type: "image", css: `url(${HER_IMAGE_URL})` }, // Oct8
  { type: "image", css: `url(${HER_IMAGE_URL})` }, // Oct9
  { type: "image", css: `url(${HER_IMAGE_URL})` }, // Oct10
  { type: "image", css: `url(${HER_IMAGE_URL})` }, // Oct11
  { type: "image", css: `url(${HER_IMAGE_URL})` }, // Oct12
  { type: "image", css: `url(${HER_IMAGE_URL})` }, // Oct13
  { type: "image", css: `url(${HER_IMAGE_URL})` }, // Oct14
  { type: "image", css: `url(${HER_IMAGE_URL})` }  // Oct15
];

  // Day-specific button labels to feel personal
  const dayButtonLabels = [
    // Oct1
    { loveNote: "💌 Read My Heart", surprise: "✨ Sweet Surprise", whyYou: "🌞 You're My Sunshine" },

    // Oct2 - Oct14
    { loveNote: "💌 Take My Heart", surprise: "✨ Little Surprise", whyYou: "🌞 Why You Shine" }, // Oct2
    { loveNote: "💌 Read This", surprise: "✨ Quick Compliment", whyYou: "🌟 My Reason" }, // Oct3
    { loveNote: "💌 Open Hug", surprise: "✨ Smile Booster", whyYou: "💞 For Your Heart" }, // Oct4
    { loveNote: "💌 Todays Note", surprise: "✨ Tiny Surprise", whyYou: "🌼 You Are Mine" }, // Oct5
    { loveNote: "💌 My Favorite", surprise: "✨ Cute Line", whyYou: "💗 Why I Love You" }, // Oct6
    { loveNote: "💌 Little Letter", surprise: "✨ Adore You", whyYou: "💭 My Thought" }, // Oct7
    { loveNote: "💌 For You", surprise: "✨ Pop Surprise", whyYou: "🌟 My Light" }, // Oct8
    { loveNote: "💌 Morning Note", surprise: "✨ Smile Gift", whyYou: "🌞 Bright You" }, // Oct9
    { loveNote: "💌 Love Note", surprise: "✨ Heart Boost", whyYou: "💞 Why I Choose You" }, // Oct10
    { loveNote: "💌 Tender Note", surprise: "✨ Warm Line", whyYou: "🌸 My Loveee" }, // Oct11
    { loveNote: "💌 Memory Note", surprise: "✨ Little Praise", whyYou: "💗 My Everything" }, // Oct12
    { loveNote: "💌 Dream Note", surprise: "✨ Sweet Spark", whyYou: "🌺 My Treasure" }, // Oct13
    { loveNote: "💌 Eve Note", surprise: "✨ Final Surprise", whyYou: "🎂 For Tomorrow" }, // Oct14

    // Oct15
    { loveNote: "💌 Birthday Letter", surprise: "🎉 Surprise Shower", whyYou: "💖 Forever You" } // Oct15
  ];

  const randomMessages = [
    `You are my sweetest little muffin 🧁 — the one whose morning pictures I replay a thousand times. Your smile, your dimples, your eyes…they’re my favorite parts of every day. I love being loved by you and even love being "hated" by you in that cute way 💗.`,
    `These 37 months with you are the most beautiful chapter of my life. I’m so proud of us. Every day with you feels like a blessing and I’ll always choose you, baby. 💕`,
    `Teasing you is my favourite — because your blush is everything. I have a million tiny tricks just to make you smile and I’ll never stop using them. 🥰`,
    `Long distance is hard but worth it because you make everything better. I can’t wait for the day I hold you on the 1st and never let go. 💞`,
    `You make me feel like the luckiest person alive — your love makes me want to be the best man I can be. I adore you endlessly. 💗`,
    `Your smile can fix my worst day. Your eyes make me lose myself in the best way. Those dimples… I’ll miss them until I see them again. 😍`
  ];

  const [timeLeft, setTimeLeft] = useState(getTimeLeft(birthday));
  const [todayMessage, setTodayMessage] = useState("");
  const [compliment, setCompliment] = useState("");
  const [showWhy, setShowWhy] = useState(false);
  const [finalReply, setFinalReply] = useState("");
  const [confetti, setConfetti] = useState(false);
const [mode, setMode] = useState("main"); 
// Love Note → today's main message
const handleLoveNote = () => {
  setMode("main");
};



  useEffect(() => {
    const t = setInterval(() => setTimeLeft(getTimeLeft(birthday)), 1000);
    return () => clearInterval(t);
  }, [birthday]);

  // compute dayIndex 0..14 (Oct1..Oct15)
useEffect(() => {
  const start = new Date(birthday);
  start.setDate(birthday.getDate() - 10); // start = Oct 1
  const nowLocal = new Date();
  const msPerDay = 1000 * 60 * 60 * 24;
  const dayIndex = Math.floor(
    (new Date(nowLocal.getFullYear(), nowLocal.getMonth(), nowLocal.getDate()) -
      new Date(start.getFullYear(), start.getMonth(), start.getDate())) / msPerDay
  );


    const idx = dayIndex < 0 ? 0 : dayIndex >= messages.length ? messages.length - 1 : dayIndex;
    setTodayMessage(messages[idx]);
    // clear compliment/why on day change
    setCompliment("");
    setShowWhy(false);
  }, [birthday, timeLeft.total]); // also refresh when timeLeft changes to flip day at midnight

  function getTimeLeft(target) {
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      total: diff
    };
  }



  const handleSubmitFinalReply = (e) => {
    e.preventDefault();
    setConfetti(true);
    setTimeout(() => setConfetti(false), 6000);
  };
// Love Note → today's main message




const handleRandomCompliment = () => {
  setCompliment(randomMessages[Math.floor(Math.random() * randomMessages.length)]);
  setMode("compliment");
};


// Why You → reason text
const handleWhyYou = () => {
  setMode("why");
};

  const isBirthdayToday = timeLeft.total === 0;

  // compute day index to access backgrounds & labels
  const start = new Date(birthday);
  start.setDate(birthday.getDate() - 14);
  const nowLocal = new Date();
  const msPerDay = 1000 * 60 * 60 * 24;
  let currentDayIndex = Math.floor(
    (new Date(nowLocal.getFullYear(), nowLocal.getMonth(), nowLocal.getDate()) -
      new Date(start.getFullYear(), start.getMonth(), start.getDate())) / msPerDay
  );
  if (currentDayIndex < 0) currentDayIndex = 0;
  if (currentDayIndex > 14) currentDayIndex = 14;

  // pick labels for current day
  const labels = dayButtonLabels[currentDayIndex];

  // pick background config for current day
  const bg = backgrounds[currentDayIndex];

  // inline style for message box background
  const messageBoxStyle =
    bg.type === "image"
      ? {
          backgroundImage: bg.css,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          textShadow: "0 3px 10px rgba(0,0,0,0.7)",
          position: "relative",
          overFlow: "auto "
        }
      : {
          background: bg.css
        };

  return (
    <div className="container">
      {/* overlay and floating hearts (decorative) */}
      <div className="overlay" />
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="floating-heart"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: -400, rotate: Math.random() * 360 }}
          transition={{ duration: 10 + i, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
          style={{ left: `${(i * 9) % 100}%`, fontSize: `${14 + (i % 4) * 4}px` }}
        >
          {Math.random() > 0.5 ? "💖" : "✨"}
        </motion.div>
      ))}

      <div className="card">
<header>
  <h1>💖 Countdown to You 💖</h1>
  <p>Each day a little  note until your special day ✨</p>
</header>



        {!isBirthdayToday ? (
          <div className="grid">
            <div className="card-half">
              <div style={{ fontWeight: 800 }}>Countdown</div>
              <div className="countdown">
                {timeLeft.days}d {timeLeft.hours}h
              </div>
              <div>
                {timeLeft.minutes}m {timeLeft.seconds}s
              </div>
              <div style={{ marginTop: 8, color: "#374151" }}>
                Until {birthday.toLocaleDateString()}
              </div>

<div className="buttons" style={{ marginTop: 20 }}>
  <button className="btn-love" onClick={handleLoveNote}>
    {labels.loveNote}
  </button>
  <button className="btn-sparkle" onClick={handleRandomCompliment}>
    {labels.surprise}
  </button>
  <button className="btn-sunshine" onClick={handleWhyYou}>
    {labels.whyYou}
  </button>
</div>

            </div>

<div className="message-box" style={messageBoxStyle}>
  {bg.type === "image" && <div className="message-image-overlay" />}
  
<AnimatePresence mode="wait">
  {mode === "main" && (
    <motion.div
      key="main"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.45 }}
    >
      <p style={{ whiteSpace: "pre-line", position: "relative", zIndex: 2 }}>
        {todayMessage}
      </p>
    </motion.div>
  )}

{mode === "compliment" && (
  <motion.div
    key="compliment"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.4 }}
    style={{
      background: "rgba(0,0,0,0.6)",
      padding: "18px",
      borderRadius: "14px",
      backdropFilter: "blur(6px)",
      color: "#fff"  // make sure text is visible
    }}
  >
    <strong style={{ fontSize: "1.1rem", color: "#ffd6e0" }}>✨ Surprise Note:</strong>
    <p style={{ marginTop: 8, fontSize: "1rem", lineHeight: "1.6" }}>{compliment}</p>
  </motion.div>
)}


  {mode === "why" && (
    <motion.div
      key="why"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <strong style={{ fontSize: "1.1rem", color: "#ffe066" }}>🌞 Why you’re my sunshine:</strong>
<p style={{ marginTop: 8 }}>
  Your eyes, your dimples, your laughter — even your stubborn little “I hate you” —  
  they light up my world in ways words can’t capture 💗.  
  You’re the reason my mornings begin with a smile and my nights end with peace.  
  The way you overthink, the way you shyly blush, the way you secretly adore me —  
  they are the cutest, most precious pieces of my heart. 🌸  
  No matter the distance, you feel like home to me.  
  You’ll always be my sunshine, my safe place, and the happiest part of my life,  
  today and every day. ☀️💞
</p>


    </motion.div>
  )}
</AnimatePresence>

</div>

          </div>
        ) : (
          <div className="birthday-section">
            <motion.h2 initial={{ scale: 0.95 }} animate={{ scale: 1 }}>
              🎉 Happy 19th Birthday, My prettiesttttt girl! 🎉
            </motion.h2>

            {/* make the birthday section use her image as background too */}
            <div style={{ marginTop: 18, position: "relative" }}>
              <div className="message-box" style={{ backgroundImage: `url(${HER_IMAGE_URL})`, backgroundSize: "cover", backgroundPosition: "center", color: "#fff", textShadow: "0 3px 10px rgba(0,0,0,0.7)" }}>
                <div className="message-image-overlay" />
                <p style={{ whiteSpace: "pre-line", position: "relative", zIndex: 2 }}>{messages[messages.length - 1]}</p>

                <form onSubmit={handleSubmitFinalReply} style={{ marginTop: 18, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                  <input type="text" placeholder="Type something sweet back to me..." value={finalReply} onChange={(e) => setFinalReply(e.target.value)} />
                  <button type="submit" className="btn-love">Send with a kiss 💋</button>
                </form>

                {confetti && <div className="confetti">🎊✨🎈</div>}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
