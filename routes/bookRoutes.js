const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    res.render('index'); 
});

router.get('/books', bookController.getBooks);

router.get('/addBookForm',bookController.addBook );
router.post('/addBook', bookController.postBook);

router.get('/editBook', bookController.editBook);
router.post('/editBook', bookController.editPost);

router.post('/deleteBook',bookController.deleteBook );
module.exports = router;



