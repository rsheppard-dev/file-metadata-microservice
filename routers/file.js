const express = require('express')
const multer = require('multer')

const router = express.Router()
const upload = multer()


router.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
    const { originalname: name, mimetype: type, size } = req.file

    try { 
        res.json({
            name,
            type,
            size
        })
    } catch (error) {
        res.send(error)
    }
})

module.exports = router