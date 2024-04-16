const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

const diskStorage = multer.diskStorage({
    destination: path.join(__dirname, '../image'),    
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-Industrias-' + file.originalname);
    }
})

const fileUpload = multer({
    storage: diskStorage
}).single('image');

router.get("/", (req, res) => {
    res.send('Bienvenido');
})

router.post('/image/post', fileUpload, (req, res) => {
    console.log(req.file)
    res.send('Imagen guardada!');
})

module.exports = router 