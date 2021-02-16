"use strict";

// Constant of the document.querySelectors
const formFields = document.querySelector(".formfields");
const containerNew = document.querySelector(".container-new");
const newBookQuery = document.querySelector(".newbook");
const done = document.querySelector(".done");
const container = document.querySelector(".container");
const box = document.querySelector(".box");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.bookTitle = title;
  this.bookAuthor = author;
  this.bookPages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages}, ${read} `;
  };
}

Book.prototype.addBookToLibrary = function (book) {
  myLibrary.push(book);
};

Book.prototype.loopArray = function () {
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
  }
};

Book.prototype.showForm = function () {
  containerNew.classList.add("overlay");
  formFields.style.cssText = "display: block;";
};

Book.prototype.hideForm = function (e) {
  e.preventDefault();

  containerNew.classList.remove("overlay");

  const title = document.querySelector("#title");
  const titleValue = title.value;
  const author = document.querySelector("#author");
  const authorValue = author.value;
  const pages = document.querySelector("#pages");
  const pagesValue = pages.value;
  const read = document.querySelector("#read");
  const readValue = read.value;

  formFields.style.cssText = "display: none;";

  // Add information in the myLibrary Array
  const newBook = new Book(titleValue, authorValue, pagesValue, readValue);

  myLibrary.push(newBook);

  Book.prototype.loopArray();

  // if box is already created, create a new box

  // to create a new box i need to add html
  let html;
  html = `
  <div class="box" id="display">
  <p>Title</p>
  <div class="titulo">${titleValue}</div>
  <p>Author</p>
  <div class="autor">${authorValue}</div>
  <p>Number of pages</p>
  <div class="paginas">${pagesValue}</div>
  <p>Read(yes or no)</p>
  <div class="lido">${readValue}</div>
  <button class="delete btn">Delete</button>
  <button class="read-status btn">Read:</button>
</div>`;

  container.insertAdjacentHTML("afterend", html);

  function deleteButton() {
    box.classList.toggle("display-forever");
  }

  document.querySelector(".delete").addEventListener("click", deleteButton);

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
};

formFields.style.cssText = "display: none;";

newBookQuery.addEventListener("click", Book.prototype.showForm);

done.addEventListener("click", Book.prototype.hideForm);
