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
for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].title)
}

// Printing out the library
console.log(myLibrary)

function displayBooks() {
    const booksList = document.getElementById('books');
    booksList.innerHTML = '';

    // Adding a button that deletes the book from the library
    myLibrary.forEach((book, index) => {
        bookItem.textContent = `Title: ${book.title}, Author: ${book.author}, Year: ${book.year}, Pages: ${book.pages}`;
        booksList.appendChild(bookItem);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button')
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            removeBookFromLibrary(index);
            displayBooks();
        });
        bookItem.appendChild(deleteButton);
    });

    const storedLibrary = JSON.parse(localStorage.getItem('myLibrary')) || [];

    storedLibrary.forEach(book => {
        const bookItem = document.createElement('li');
        bookItem.textContent = `Title: ${book.title}, Author: ${book.author}, Year: ${book.year}, Pages: ${book.pages}`;
        booksList.appendChild(bookItem);
    });
}


const submitButton = document.getElementById('submit');

// Function that pushes the book on the form to the array of books
submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    const year = document.getElementById('year').value;
    const pages = document.getElementById('pages').value;

    // Check if any of the input fields are empty before adding the book
    if (title.trim() === '' || author.trim() === '' || genre.trim() === '') {
        alert('Please fill in all fields before adding a book.');
        return; // Exit the function early if inputs are not filled
    }

    const newBook = new Book(title, author, genre, year, pages);
    addBookToLibrary(newBook);
    displayBooks();
    console.log("Working");
});

// Call the displayBooks function to initially populate the book list
displayBooks();
console.log(myLibrary)

