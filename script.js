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

    if(library[1] !== undefined) {
        while (i+1 < library.length) {
            document.querySelector("#book" + (i + 1)).remove();
            i++;
        }
    }

    i = 0;

    //creating books and displaying them
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

        let currentBookButtonDiv = document.createElement("div");
        currentBookButtonDiv.classList.add("buttondiv");
        currentBookButtonDiv.setAttribute("id", "buttondiv" + bookNumber);
        document.querySelector("#" + bookNumber).appendChild(currentBookButtonDiv);

        let currentBookDeleteButton = document.createElement("button");
        currentBookDeleteButton.innerHTML = "<i class='fa-solid fa-trash'>";
        currentBookDeleteButton.classList.add("deletebutton");
        document.querySelector("#buttondiv" + bookNumber).appendChild(currentBookDeleteButton);

        let currentBookReadButton = document.createElement("button");
        currentBookReadButton.innerHTML = "<i class='fa-solid fa-book-open-reader'>";
        currentBookReadButton.classList.add("readbutton");
        document.querySelector("#buttondiv" + bookNumber).appendChild(currentBookReadButton);

        i++
    }
}

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

//submit form
    const form = document.forms[0];

    form.addEventListener("submit", function(event){
        event.preventDefault();
        dialog.close();

        let name = form.elements.name.value;
        let author = form.elements.author.value;
        let readstatus = "";
        
        if(form.elements.readstatus.value == "yes") {
            readstatus = "already read";
        }
        else {
            readstatus = "not read yet";
        }

        addBookToLibrary(new Book(name, author, readstatus));
        displayBook();
        form.reset();
    });

//Delete button for every book
//Button that changes the read status

// color palette: https://coolors.co/palette/e9f5db-cfe1b9-b5c99a-97a97c-87986a-718355