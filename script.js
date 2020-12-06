let myLibrary = [];

function Book(title, author, pages, read) {
  this.bookTitle = title;
  this.bookAuthor = author;
  this.bookPages = pages;
  this.read = read;
  this.info = function () {
    return title + " by " + author + ", " + pages + " , " + read + " ";
  };
}

const HarryPoter = new Book(
  "Harry Potter and the Philosopher Stone",
  "J.K.Rowling",
  223,
  "not read yet"
);

const LordOfTheRings = new Book(
  "Lord of the Rings",
  "J.R.R Tolkien",
  1136,
  "not read yet"
);

const ToAGodUnknown = new Book(
  "To a God Unknown",
  "Jonh Steinbeck",
  282,
  "read it fully"
);

function addBookToLibrary(variable) {
  myLibrary.push(variable);
}

addBookToLibrary(HarryPoter);

addBookToLibrary(LordOfTheRings);

addBookToLibrary(ToAGodUnknown);

function loopArray() {
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
  }
}

document.querySelector(".formfields").style.cssText = "display: none;";

function showForm() {
  document.querySelector(".formfields").style.cssText = "display: block;";
}

document.querySelector(".newbook").addEventListener("click", showForm);

const title = document.querySelector("#title");

const titleValue = title.value;

const author = document.querySelector("#author");

const authorValue = author.value;

const pages = document.querySelector("#pages");

const pagesValue = pages.value;

const read = document.querySelector("#read");

const readValue = read.value;

function hideForm() {
  document.querySelector(".formfields").style.cssText = "display: none;";

  // Add information in the myLibrary Array
  const newBook = new Book(titleValue, authorValue, pagesValue, readValue);
  myLibrary.push(newBook);

  loopArray();

  // Add information to box
  document.querySelector(".titulo").textContent = titleValue;

  document.querySelector(".autor").textContent = authorValue;

  document.querySelector(".paginas").textContent = pagesValue;

  document.querySelector(".lido").textContent = readValue;

  document.querySelector(".display").classList.toggle("display");
}

document.querySelector(".done").addEventListener("click", hideForm);

function deleteButton() {
  document.querySelector(".box").classList.toggle("display");
}

document.querySelector(".delete").addEventListener("click", deleteButton);

// Toggle the read status

function readStatus() {
  if (document.querySelector(".read-status").textContent === "Read:") {
    document.querySelector(".read-status").textContent = "Read: Yes";
  } else if (
    document.querySelector(".read-status").textContent === "Read: Yes"
  ) {
    document.querySelector(".read-status").textContent = "Read: No";
  } else if (
    document.querySelector(".read-status").textContent === "Read: No"
  ) {
    document.querySelector(".read-status").textContent = "Read: Yes";
  }
}

document.querySelector(".read-status").addEventListener("click", readStatus);
