//Object constructor that can create new book objects
function Book(title, author, status) {
    this.title = title;
    this.author = author;
    this.status = status;
}

//Array that stores all of the book objects
let library = [];

//Function that adds Book Objects to the array
function addBookToLibrary(bookObject) {
    library.push(bookObject);
}

//Function that displays all the books on the page
let bookNumber = "";
function displayBook() {
    let i = 0;

    while (i < library.length) {

        bookNumber = "book" + (i + 1);
        
        let currentBook = document.createElement("div");
        currentBook.setAttribute("id", bookNumber);
        currentBook.classList.add("books");
        document.querySelector("#bookshelf").appendChild(currentBook);

        let currentBookTitle = document.createElement("h2");
        currentBookTitle.textContent = library[i].title;
        currentBookTitle.classList.add("booktitle");
        document.querySelector("#" + bookNumber).appendChild(currentBookTitle);

        let currentBookAuthor = document.createElement("p");
        currentBookAuthor.textContent = library[i].author;
        currentBookAuthor.classList.add("bookauthor");
        document.querySelector("#" + bookNumber).appendChild(currentBookAuthor);

        let currentBookStatus = document.createElement("p");
        currentBookStatus.textContent = library[i].status;
        currentBookStatus.classList.add("bookstatus");
        document.querySelector("#" + bookNumber).appendChild(currentBookStatus);

        i++
    }
}

let HP = new Book("Harry Potter", "JK Rowling", "read");
addBookToLibrary(HP);
let Bible = new Book("Bible", "Jesus", "not read yet");
addBookToLibrary(Bible);


//New Book button that displays a form where the user can enter new books
let dialog = document.getElementById("newbookdialog");
let openButton = document.getElementById("opendialog");
let closeButton = document.getElementById("closedialog");

openButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});
//Delete button for every book
//Button that changes the read status

// color palette: https://coolors.co/palette/e9f5db-cfe1b9-b5c99a-97a97c-87986a-718355