// Creating the array in which the books will be stored
let myLibrary = [];

// Creating the constructor function for the Book object
function Book(title, author, year, pages) {
    this.title = title
    this.author = author
    this.year = year
    this.pages = pages
}

// Creating the addBookToLibrary function
function addBookToLibrary (book) {
    myLibrary.push(book)
}

function removeBookFromLibrary (book) {
    myLibrary.splice(book, 1)
}

//Creating books
const harryPotter = new Book('Harry Potter', 'J.K. Rowling', '1997', '300')
const lordOfTheRings = new Book('Lord of the Rings', 'J.R.R. Tolkien', '1954', '500')
// Adding books to the library
addBookToLibrary(harryPotter)
addBookToLibrary(lordOfTheRings)

// For loop that loops through the library and prints out the title of each book
for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].title)
}

// Printing out the library
console.log(myLibrary)