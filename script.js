function showMeme() {
    const memes = [
        "https://i.imgflip.com/3vzej6.jpg",
        "https://i.pinimg.com/736x/49/9e/94/499e948cded2b5fbf345a6ac2a370118.jpg",
        "https://i.imgflip.com/4/t5wqk.jpg",
        "https://www.relationshiphub.net/wp-content/uploads/2021/07/how-to-convince-your-girlfriend-meme.jpg"
    ];

    const randomMeme = memes[Math.floor(Math.random() * memes.length)];
    document.getElementById("meme").src = randomMeme;
    document.getElementById("meme-container").style.display = "block";
}
