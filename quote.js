// All quotes in array as object
const quotes = [{
    quote: `পানির গভীরতা নাকের কাছে উঠে আসার আগেই সাঁতার শিখে নাও`,
    author: `– ড্যানিশ প্রবাদ`
}, {
    quote: `যদি খুব ভালো কিছু করতে না পারো, তবে ছোট ছোট কাজ খুব ভালো করে করো`,
    author: `– নেপোলিয়ন হিল`
}, {
    quote: `সব ধরনের অনিশ্চয়তা, হতাশা আর বাধা সত্ত্বেও নিজের সবটুকু দিয়ে সফল হওয়ার চেষ্টাই শক্তিমান মানুষকে দুর্বলদের থেকে আলাদা করে`,
    author: `– থমাস কার্লাইল`
}, {
    quote: `হাজার মাইলের যাত্রা শুরু হয় একটি মাত্র পদক্ষেপের মধ্য দিয়ে`,
    author: `– লাও ঝু`
}, {
    quote: `যারা নতুন কিছু খোঁজে না, একদিন তাদেরও কেউ খুঁজবে না`,
    author: `– জে আর আর টলকিন`
}, {
    quote: `বললে আমি ভুলে যাব। শেখালে মনে রাখব। সাথে নিলে আমি শিখব`,
    author: `– বেন্জামিন ফ্র্যাঙ্কলিন`
}, {
    quote: `সুযোগ যদি তোমার দরজায় কড়া না নাড়ে, তবে নতুন একটি দরজা বানাও`,
    author: `– মিল্টন বার্লে`
}, {
    quote: `বুদ্ধিমানেরা তখন কথা বলে যখন তাদের কিছু বলার থাকে। বোকারা কথা বলে কারণ তারা ভাবে তাদের কথা বলতে হবে`,
    author: `– প্লেটো`
}, {
    quote: `আগুনকে যে ভয় পায়, সে আগুনকে ব্যবহার করতে পারে না`,
    author: `- রবীন্দ্রনাথ ঠাকুর`
}, {
    quote: `কখনও না পড়ে যাওয়ার মাঝে বীরত্ব নেই, পড়ে গিয়ে আবার উঠে দাঁড়ানোর মাঝেই সত্যিকার বিরত্ব লুকিয়ে আছে`,
    author: `- কনফুশিয়াস`
}, ]

// Select all needed element

let btn = document.querySelector("#quote-btn");

let quote = document.querySelector(".quote");

let author = document.querySelector(".author");

// addEventListener

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    
    //Show quote
    quote.innerHTML = quotes[random].quote;

    //Show name
    author.innerHTML = quotes[random].author;
})