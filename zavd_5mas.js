let emoji =[ 
{
    mood:"Веселий",
    url:"https://w7.pngwing.com/pngs/180/962/png-transparent-smiley-emoticon-smiley-miscellaneous-smiley-desktop-wallpaper-thumbnail.png"
},
{
    mood:"Сумний",
    url:"https://w7.pngwing.com/pngs/222/140/png-transparent-sad-emoticon-iphone-emoji-sadness-smiley-emoticon-emoji-face-electronics-face-emoji-face-thumbnail.png"
},
{
    mood:"Сміх",
    url: "https://img2.freepng.ru/20180407/huq/kisspng-face-with-tears-of-joy-emoji-laughter-smile-crying-crying-5ac88fc8313fc8.4265479715230934482017.jpg"
},
{
    mood:"Закоханий",
    url:"https://i.pinimg.com/200x/81/b8/81/81b881cdd2d11d88dfd84ef8f4a342a6.jpg"
},
{
    mood:"Виснажений",
    url:"https://stickers.wiki/static/stickers/uwu_07/file_272675.webp?ezimgfmt=rs:134x134/rscb1/ng:webp/ngcb1"
}
] 
document.getElementById("mood").onchange = () =>
{
    let numberEmotion = document.getElementById("mood").value
    document.getElementById("img").innerHTML = 
    `
    <p>${emoji[numberEmotion-1].mood}</p>
    <img src="${emoji[numberEmotion-1].url}">
    `
}