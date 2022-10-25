import * as api from './data.js';

window.addEventListener('load', () => {
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

    function deleteBook(event) {
        const btnForm = formEl.querySelector('button');
        const currentIdBook = event.target.dataset.idbook;
        btnForm.setAttribute('data-idbook', currentIdBook);
        const editCurrentBookEl = event.target.parentElement.parentElement;
        const [editTitle, editAuthor] = editCurrentBookEl.querySelectorAll('td');
        const { title, author } = formEl.elements;
        title.value = editTitle.textContent;
        author.value = editAuthor.textContent;
        author.disabled = true;
        title.disabled = true;
        const h3 = formEl.querySelector('h3');
        const buttonForm = formEl.querySelector('button');
        h3.textContent = 'Delete FORM';
        buttonForm.textContent = 'Delete';

        const idBook = event.target.dataset.idbook;

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

    async function loadListEl(event) {
        const tbodyEl = document.querySelector('tbody');
        tbodyEl.innerHTML = '<tr><td>Loading...</td></tr>';
        btnLoadEl.disabled = true;
        const h3 = formEl.querySelector('h3');
        const buttonForm = formEl.querySelector('button');
        h3.textContent = 'FORM';
        buttonForm.textContent = 'Submit';
        const { author, title } = formEl.elements;
        author.value = '';
        title.value = '';

        let dataBooks = await api.getBooks();
        tbodyEl.innerHTML = '';
        dataBooks.sort((a, b) => a.author.localeCompare(b.author));
        if (dataBooks !== null) {
            dataBooks.forEach(book => {
                const { author, title, objectId } = book;
                let idBook = objectId;
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
        btnLoadEl.disabled = false;

    }

    btnLoadEl.addEventListener('click', loadListEl);


    formEl.addEventListener('submit', async (event) => {
        event.preventDefault();
        const nameButton = event.target.querySelector('button');
        const { title, author } = event.target.elements;
        if (nameButton.textContent === 'Submit') {

            if (title.value !== '' && author.value !== '') {
                let create = await api.createBook({ title: title.value, author: author.value });
                loadListEl();

                title.value = '';
                author.value = '';
            } else {
                const errorContent = document.querySelector('#errorContent');
                if (title.value === '') {
                    errorContent.textContent += 'Title input is empty';
                }
                if (author.value === '') {
                    errorContent.textContent += ' Author input is empty';
                }
                errorContent.style.display = 'block';

                setTimeout(() => {
                    errorContent.style.display = 'none';
                    errorContent.textContent = '';
                }, 5000);

            }
        }
        else if (nameButton.textContent === 'Save') {
            if (title.value !== '' && author.value !== '') {
                const idBook = nameButton.dataset.idbook;
                await api.updateBook({ author: author.value, title: title.value }, idBook);
                loadListEl();

                author.value = '';
                title.value = '';
            } else {
                const errorContent = document.querySelector('#errorContent');
                if (title.value === '') {
                    errorContent.textContent += 'Title input is empty';
                }
                if (author.value === '') {
                    errorContent.textContent += ' Author input is empty';
                }
                errorContent.style.display = 'block';

                setTimeout(() => {
                    errorContent.style.display = 'none';
                    errorContent.textContent = '';
                }, 5000);


            }

        } else if (nameButton.textContent === 'Delete') {
            const idBook = nameButton.dataset.idbook;
            await api.deleteBook(idBook);
            loadListEl();
            const { title, author } = formEl.elements;
            author.disabled = false;
            title.disabled = false;


        } else {
            throw new Error('Button name is not correct.');
        }


    });









});



