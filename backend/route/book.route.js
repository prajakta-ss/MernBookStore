import express from 'express';
import { getBook } from '../controller/book.controller.js';
import Book from '../model/book.model.js';
const router = express.Router();
router.get('/', getBook);

// Add a book
router.post('/add', async (req, res) => {
    const{name,price,category,image,title} = req.body;
    try {
        
        const newBook= new Book({name,price,category,image,title});
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(409).json({message:'Error adding book'});
    }

});
export default router;