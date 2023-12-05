const express = require('express');
const {index, create, getById, updateComplete, deleteLogic, update} = require('../controllers/documento.controller');
const fileUpload = require("express-fileupload");
const {verifyAuth} = require("../middlewares/auth.middleware");
const router = express.Router();

router.get('/', index);
router.post('/', fileUpload({useTempFiles: true, tempFileDir: './uploads'}), create);
router.get('/:id', getById);
router.patch('/:id', verifyAuth, fileUpload({useTempFiles: true, tempFileDir: './uploads'}), update);
router.delete('/:id', verifyAuth, deleteLogic);

module.exports = router;