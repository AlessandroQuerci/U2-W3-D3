const bookFetch = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((responseObj) => {
      console.log(responseObj);
      if (responseObj.ok) {
        return responseObj.json();
      }
    })
    .then((bookObj) => {
      console.log(bookObj);

      bookObj.forEach((book) => {
        const row = document.getElementById("row");
        const col = document.createElement("div");
        col.className = "col-4 g-5";

        const card = document.createElement("div");
        card.className = "card  w-100 h-100";

        const imgCard = document.createElement("img");
        imgCard.src = book.img;
        imgCard.className = "img-fluid ";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const cardTitle = document.createElement("h5");
        cardTitle.innerText = book.title;
        cardTitle.className = "card-title fs-3";

        const cardText = document.createElement("p");
        cardText.innerText = book.price + "$";
        cardText.className = "card-text fs-4";

        const cardBtn = document.createElement("a");
        cardBtn.textContent = "Aggiungi";
        cardBtn.className = "btn btn-primary";

        row.appendChild(col);
        col.appendChild(card);
        card.appendChild(imgCard);
        card.appendChild(cardBody);
        card.appendChild(cardTitle);
        card.appendChild(cardText);
        card.appendChild(cardBtn);
      });
    });
};

window.onload = () => {
  bookFetch();
};
