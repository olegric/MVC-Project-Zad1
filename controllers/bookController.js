const fs = require('fs');
const path = require('path');
const Book = require('../models/Book');


const booksFilePath = path.join(__dirname, '..', 'db', 'book.json');

module.exports.getBooks = (req, res) => {
    fs.readFile(booksFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }

        const books = JSON.parse(data);
        res.render('bookCatalog',  { books } );
    });
};



module.exports.addBook =(req, res) => {
    res.render('addBookForm'); }

module.exports.postBook = async (req, res) => {

        try {
            
            const { title, author, year, genre, description, pageCount, language, isbn } = req.body;

            const newBook = new Book(title, author, year, genre, description, pageCount, language, isbn);
   
            newBook.save();

            res.redirect('/books');
        } catch (err) {
            console.error('Error adding book:', err);
            res.status(500).send('Internal Server Error');
        }
    };

        
    module.exports.editBook = async (req, res) => {
        try {
            const { id } = req.query; 
            const existingBooks = Book.getAllBooks();
            const book = existingBooks.find(b => b.id === id);
    
            if (!book) {
                return res.status(404).send('Book not found');
            }
    
    
            res.render('editBookForm', { book });
        } catch (err) {
            console.error('Error rendering edit form:', err);
            res.status(500).send('Internal Server Error');
        }
    };

    module.exports.editPost = async (req, res) => {
        try {
            const { id, title, author, year, genre, description, pageCount, language, isbn } = req.body;
            const existingBooks = Book.getAllBooks();
            const bookIndex = existingBooks.findIndex(book => book.id === id);

            if (bookIndex === -1) {
                return res.status(404).send('Book not found');
            }
            const updatedBook = new Book(title, author, year, genre, description, pageCount, language, isbn);
    
            existingBooks[bookIndex] = updatedBook;
    
            fs.writeFileSync(booksFilePath, JSON.stringify(existingBooks, null, 2));
    
            res.redirect('/books');
        } catch (err) {
            console.error('Error updating book:', err);
            res.status(500).send('Internal Server Error');
        }
    };

    module.exports.deleteBook = async (req, res) => {
        try {
            const { id } = req.body; 
            const existingBooks = Book.getAllBooks();

            const bookIndex = existingBooks.findIndex(book => book.id === id);
    
            if (bookIndex === -1) {
                return res.status(404).send('Book not found');
            }

            existingBooks.splice(bookIndex, 1);

            fs.writeFileSync(booksFilePath, JSON.stringify(existingBooks, null, 2));
    
            res.redirect('/books');
        } catch (err) {
            console.error('Error deleting book:', err);
            res.status(500).send('Internal Server Error');
        }
    };

