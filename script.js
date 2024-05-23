const GenerateMemeBtn = document.querySelector(".generate .button");
const memeImage = document.querySelector(".generate img");
const memeTitle = document.querySelector(".generate .Title");
const memeAuthor = document.querySelector(".generate .Author");

const updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = author;
}


const GenMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then(data => {
      updateDetails(data.url, data.title, data.author);
    });
};

GenerateMemeBtn.addEventListener("click", GenMeme);
GenMeme();