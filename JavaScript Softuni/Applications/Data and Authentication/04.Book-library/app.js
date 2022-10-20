import { createBook, getBooks, requestDeleteBook, requestEditBook } from "./firebase-request.js";

(() => {

    const formEl = document.querySelector('form');
    const btnLoadEl = document.querySelector('#loadBooks');
    loadListEl();

    function createEl(tagName, content, attributeName, attributeValue) {
        const tagEl = document.createElement(tagName);
        tagEl.textContent = content;
        if (attributeName) {
            tagEl.setAttribute(attributeName, attributeValue);
        }
        return tagEl;
    }

    function deleteBook(event) {
        const idBook = event.target.dataset.idbook;
        requestDeleteBook(idBook);
        let currentBook = event.target.parentElement.parentElement;
        currentBook.remove();

    }

    function editBook(event) {
        const btnForm = formEl.querySelector('button');
        const currentIdBook = event.target.dataset.idbook;
        btnForm.setAttribute('data-idbook', currentIdBook);
        const editCurrentBookEl = event.target.parentElement.parentElement;
        const [editTitle, editAuthor] = editCurrentBookEl.querySelectorAll('td');
        const { title, author } = formEl.elements;
        title.value = editTitle.textContent;
        author.value = editAuthor.textContent;
        const h3 = formEl.querySelector('h3');
        const buttonForm = formEl.querySelector('button');
        h3.textContent = 'Edit FORM';
        buttonForm.textContent = 'Save';

    }

    function loadListEl() {
        const tbodyEl = document.querySelector('tbody');
        tbodyEl.innerHTML = '';
        const h3 = formEl.querySelector('h3');
        const buttonForm = formEl.querySelector('button');
        h3.textContent = 'FORM';
        buttonForm.textContent = 'Submit';
        const { author, title } = formEl.elements;
        author.value = '';
        title.value = '';

        getBooks().then((dataBooks) => {

            if (dataBooks !== null) {
                Object.entries(dataBooks).forEach(book => {

                    const [idBook, { author, title }] = book;
                    let trEl = createEl('tr', '');
                    let tdAuthor = createEl('td', author);
                    let tdTitle = createEl('td', title);

                    trEl.appendChild(tdTitle);
                    trEl.appendChild(tdAuthor);

                    let tdButtons = createEl('td');
                    let btnEdit = createEl('button', 'Edit', 'data-idBook', idBook);
                    btnEdit.addEventListener('click', editBook);
                    let btnDelete = createEl('button', 'Delete', 'data-idBook', idBook);
                    btnDelete.addEventListener('click', deleteBook);
                    tdButtons.appendChild(btnEdit);
                    tdButtons.appendChild(btnDelete);
                    trEl.appendChild(tdButtons);

                    tbodyEl.appendChild(trEl);
                });
            }


        });

    }

    btnLoadEl.addEventListener('click', loadListEl);


    formEl.addEventListener('submit', (event) => {
        event.preventDefault();
        const nameButton = event.target.querySelector('button');
        const { title, author } = event.target.elements;
        if (nameButton.textContent === 'Submit') {

            if (title.value !== '' && author.value !== '') {
                createBook(title.value, author.value);
                setTimeout(() => {
                    loadListEl();
                }, 1000);
                title.value = '';
                author.value = '';
            }
        } else if (nameButton.textContent === 'Save') {
            if (title.value !== '' && author.value !== '') {
                const idBook = nameButton.dataset.idbook
                requestEditBook(idBook, author.value, title.value);
                setTimeout(() => {
                    loadListEl();
                }, 1000);

                author.value = '';
                title.value = '';
            }
        } else {
            throw new Error('Button name is not correct.')
        }


    });


})();


