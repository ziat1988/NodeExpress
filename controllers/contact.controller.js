const path = require('path');

function getContact(req,res){
 res.sendFile(path.resolve("./public/images/sample.png"));
}

module.exports = {
    getContact
}