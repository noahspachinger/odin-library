//Object constructor that can create new book objects
function Book(title, author, status) {
    this.title = title;
    this.author = author;
    this.status = status;
}

//Array that stores all of the book objects
let library = [];

//Function that displays all the books on the page
function displayBook(identifier, title, author, status) {
    let currentBook = document.createElement("div");
    currentBook.setAttribute("id", identifier);
    currentBook.classList.add("books");
    document.querySelector("#bookshelf").appendChild(currentBook);

    let currentBookTitle = document.createElement("h2");
    currentBookTitle.textContent = title;
    currentBookTitle.classList.add("booktitle");
    document.querySelector("#" + identifier).appendChild(currentBookTitle)

    let currentBookAuthor = document.createElement("p");
    currentBookAuthor.textContent = author;
    currentBookAuthor.classList.add("bookauthor");
    document.querySelector("#" + identifier).appendChild(currentBookAuthor);

    let currentBookStatus = document.createElement("p");
    currentBookStatus.textContent = status;
    currentBookStatus.classList.add("bookstatus");
    document.querySelector("#" + identifier).appendChild(currentBookStatus);
}
//New Book button that displays a form where the user can enter new books
//Delete button for every book
//Button that changes the read status

// color palette: https://coolors.co/palette/e9f5db-cfe1b9-b5c99a-97a97c-87986a-718355