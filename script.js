function newFortune(){

let fortunes=[

"🌟 Something wonderful is about to happen!",
"💖 A happy surprise is coming your way!",
"🌸 Today will be a beautiful day!",
"🍀 Luck is on your side!",
"✨ Your hard work will soon pay off!"

];

let random=Math.floor(Math.random()*fortunes.length);

document.getElementById("fortune").innerText=fortunes[random];

}
