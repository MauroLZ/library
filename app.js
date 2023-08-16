// Creating the array in which the books will be stored
// Load existing data from Local Storage on initial script load
const storedLibrary = JSON.parse(localStorage.getItem('myLibrary')) || [];
myLibrary = storedLibrary;

// Creating the constructor function for the Book object
function Book(title, author, year, pages) {
    this.title = title
    this.author = author
    this.year = year
    this.pages = pages
}

// Creating the addBookToLibrary function
function addBookToLibrary(book) {
    myLibrary.push(book);
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}


function removeBookFromLibrary(bookIndex) {
    myLibrary.splice(bookIndex, 1);
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

// For loop that loops through the library and prints out the title of each book
// for (let i = 0; i < myLibrary.length; i++) {
//     console.log(myLibrary[i].title)
// }

function displayBooks() {
    const booksList = document.getElementById('books');
    booksList.innerHTML = '';

    // Adding a button that deletes the book from the library
    myLibrary.forEach((book, index) => {
        const bookItem = document.createElement('li');
        const bookInfo = document.createElement('div');
        bookInfo.innerHTML = `<span>Title:</span> ${book.title} &nbsp; <span>Author:</span> ${book.author} &nbsp; <span>Year:</span> ${book.year} &nbsp; <span>Pages:</span> ${book.pages}`;
        bookItem.appendChild(bookInfo);
        booksList.appendChild(bookItem);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            removeBookFromLibrary(index);
            displayBooks();
        });
        bookItem.appendChild(deleteButton);
    });
}


const submitButton = document.getElementById('submit');

// Function that pushes the book on the form to the array of books
submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const genreInput = document.getElementById('genre');
    const yearInput = document.getElementById('year');
    const pagesInput = document.getElementById('pages');

    const title = titleInput.value;
    const author = authorInput.value;
    const genre = genreInput.value;
    const year = yearInput.value;
    const pages = pagesInput.value;

    // Check if any of the input fields are empty before adding the book
    if (title.trim() === '' || author.trim() === '' || genre.trim() === '') {
        alert('Please fill in all fields before adding a book.');
        return; // Exit the function early if inputs are not filled
    }

    const newBook = new Book(title, author, genre, year, pages);
    addBookToLibrary(newBook);
    displayBooks();
    console.log("Working");

    // Clear the form inputs after adding a book
    titleInput.value = '';
    authorInput.value = '';
    genreInput.value = '';
    yearInput.value = '';
    pagesInput.value = '';
});

// Call the displayBooks function to initially populate the book list
displayBooks();
console.log(myLibrary)

// Add this to your script.js file
const viewButton = document.getElementById('view-books');
const modal = document.getElementById('book-modal');
const modalContent = document.querySelector('.modal-content');
const modalBookInfo = document.getElementById('modal-book-info');
const closeBtn = document.querySelector('.close');

// Function that opens up the modal and displays the books in the library
viewButton.addEventListener('click', () => {
    console.log("Testing")
    modal.style.display = 'block';
    modalBookInfo.innerHTML = '';
    myLibrary.forEach((book) => {
        const bookItem = document.createElement('li');
        bookItem.textContent = `Title: ${book.title}, Author: ${book.author}, Year: ${book.year}, Pages: ${book.pages}`;
        modalBookInfo.appendChild(bookItem);
    });
});

// Function that closes the modal when the user clicks on the close button
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

