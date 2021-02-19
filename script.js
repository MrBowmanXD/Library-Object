"use strict";

// Constant of the document.querySelectors
const formFields = document.querySelector(".formfields");
const containerNew = document.querySelector(".container-new");
const newBookQuery = document.querySelector(".newbook");
const done = document.querySelector(".done");
const container = document.querySelector(".container");

let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages;
    this.read = read;
    this.info = function () {
      return `${title} by ${author}, ${pages}, ${read} `;
    };
  }

  addBookToLibrary(book) {
    myLibrary.push(book);
  }

  addBook(titleValue, authorValue, pagesValue, readValue) {
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

    container.insertAdjacentHTML("afterbegin", html);

    document.querySelector(".delete").addEventListener("click", function (e) {
      const btn = e.target.closest(".box");
      btn.classList.add("display-forever");
    });

    document
      .querySelector(".read-status")
      .addEventListener("click", function (e) {
        const btn = e.target.closest(".read-status");

        if (btn.textContent === "Read:") {
          btn.textContent = "Read: Yes";
        } else if (btn.textContent === "Read: Yes") {
          btn.textContent = "Read: No";
        } else if (btn.textContent === "Read: No") {
          btn.textContent = "Read: Yes";
        }
      });
  }

  showForm() {
    containerNew.classList.add("overlay");
    formFields.style.cssText = "display: block;";
  }

  hideForm(e) {
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

    Book.prototype.addBook(titleValue, authorValue, pagesValue, readValue);
  }
}

formFields.style.cssText = "display: none;";

newBookQuery.addEventListener("click", Book.prototype.showForm);

done.addEventListener("click", Book.prototype.hideForm);
