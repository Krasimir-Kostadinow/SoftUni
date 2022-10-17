import { createBook, getBooks, requestDeleteBook } from "./firebase-request.js";

(() => {

    const formEl = document.querySelector('form');
    const btnLoadEl = document.querySelector('#loadBooks');

    function createEl(tagName, content, attributeName, attributeValue) {
        const tagEl = document.createElement(tagName);
        tagEl.textContent = content;
        if (attributeName) {
            tagEl.setAttribute(attributeName, attributeValue);
        }
        return tagEl;
    }

    function deleteBook(idBook) {
        requestDeleteBook(idBook);
        loadListEl();
    }

    function editBook(event) {

    }

    function loadListEl() {
        const tbodyEl = document.querySelector('tbody');
        tbodyEl.innerHTML = '';
        getBooks().then((dataBooks) => {

                Object.entries(dataBooks).forEach(book => {

                    const [idBook, { title, author }] = book;
                    let trEl = createEl('tr', '');
                    let tdAuthor = createEl('td', author);
                    let tdTitle = createEl('td', title);
                    trEl.appendChild(tdAuthor);
                    trEl.appendChild(tdTitle);

                    let tdButtons = createEl('td');
                    let btnEdit = createEl('button', 'Edit', 'data-idBook', idBook);
                    btnEdit.addEventListener('click', editBook);
                    let btnDelete = createEl('button', 'Delete', 'data-idBook', idBook);
                    btnDelete.addEventListener('click', deleteBook);
                    tdButtons.appendChild(btnEdit);
                    tdButtons.appendChild(btnDelete);
                    trEl.appendChild(tdButtons);

                    // let bookHtmlEl = `
                    // // <tr>
                    // //   <td>${author}</td>
                    // //   <td>${title}</td>
                    // //   <td>
                    // //      <button data-idBook = '${idBook}'>Edit</button>
                    // //      <button data-idBook = '${idBook}'>Delete</button>
                    // //   </td>
                    // // </tr>`;

                    // booksHtmlEl.push(bookHtmlEl);
                    tbodyEl.appendChild(trEl);
                });
            

        });
    }

    btnLoadEl.addEventListener('click', loadListEl);

    formEl.addEventListener('submit', (event) => {
        event.preventDefault();
        const { title, author } = event.target.elements;

        if (title.value !== '' && author.value !== '') {
            createBook(author.value, title.value);
        }

    });


})();


