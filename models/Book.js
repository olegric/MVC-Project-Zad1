

const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

const booksFilePath = path.join(__dirname, '..', 'db', 'Book.json');

class Book {
    constructor(title, author, year, genre, description, pageCount, language, isbn) {
        this.id = uuidv4();
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
        this.description = description;
        this.pageCount = pageCount;
        this.language = language;
        this.isbn = isbn;
    }

    static getAllBooks() {
        try {
            const booksData = JSON.parse(fs.readFileSync(booksFilePath, 'utf8'));
            return booksData;
        } catch (err) {
            console.error('Error reading books data:', err);
            return [];
        }
    }

    save() {
        try {
            let booksData = [];
            if (fs.existsSync(booksFilePath)) {
                booksData = JSON.parse(fs.readFileSync(booksFilePath, 'utf8'));
            }
            booksData.push(this);
            fs.writeFileSync(booksFilePath, JSON.stringify(booksData, null, 2));
            return this;
        } catch (err) {
            console.error('Error saving book:', err);
            return null;
        }
    }
}

module.exports = Book;
