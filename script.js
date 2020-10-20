document.addEventListener("DOMContentLoaded", function() {
    let memeForm = document.getElementById("newMemeForm");
    let meme = document.getElementById("memeGenerator");

    memeForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const newMemeDiv = document.createElement("div");

        const topText = document.createElement("p");
        topText.innerText = document.getElementById("topText").value;
        const img = document.createElement("img");
        img.src = document.getElementById("url").value;
        const bottomText = document.createElement("p");
        bottomText.innerText = document.getElementById("bottomText").value;
        

        let removeButton = document.createElement("button");
        removeButton.innerText = "X";

        let listItem = document.createElement("li");
        // newMemeDiv.innerText = document.getElementById("memeImg").value;

        newMemeDiv.appendChild(topText);
        newMemeDiv.appendChild(img);
        newMemeDiv.appendChild(bottomText);

        memeGenerator.appendChild(newMemeDiv);
        newMemeDiv.appendChild(removeButton);

        memeForm.reset();
    });

    meme.addEventListener("click", function(e) {
       e.target.parentNode.remove();
    });





})