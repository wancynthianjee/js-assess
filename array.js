const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
];
// 1. Create a function called getAvailableBooks that returns an array of all available
// books.
function getAvailableBooks(books){
  if(Object.title(books)){
    return books.title();
  }
}
console.log(books);
getAvailableBooks();


// 2.Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author..
function getBooksByAuthor(author){
    if(Object.map(author)){
        return author.map(title);
    }
}
console.log(this.name(getBooksByAuthor))
// 3. Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).
function addNewBook(shelf){
    title.push('Life with flaws')
    author.push('Moonrey Jenessy')
    publicationYear.push([1964])
    return true;
   

}
console.log("isAvailable");
addNewBook();
// 4. Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.
function checkoutBook(input){
    if(books.title('Crime and Punishment').find('Crime and Punishment'))
        return false;
        else;
        return 'title not found'

}
console.log(input(checkoutBook));