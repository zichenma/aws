const awsController = require('../controller/aws.controller');
const upload = require('../config/multer/config');

module.exports = app => {
    // documentation from multer
    app.post('/upload', upload.single('photo'), awsController.doUpload);
};

