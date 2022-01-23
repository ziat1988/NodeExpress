
const listMsg = require('../models/messages.model');

function getMessages(req,res){
    res.json(listMsg);
}

function postMessages(req,res){
    // validation
    if(!req.body.text){
        return res.status(400).json({
            "error" : "Can not send empty text"
        })
    }

    // create new item
    const newMsg = {
        text : req.body.text,
        id : listMsg.length +1
    }

    listMsg.push(newMsg);

    res.json(newMsg);
}


function getMessage(req,res) {
    const msg = listMsg.find((msg)=>msg.id === +req.params.id )
    if(msg){
        res.json(msg);
    }else{
        res.status(404).json({
            error : 'No msg found'
        })
    }
}

module.exports =  {
    postMessages,
    getMessages,
    getMessage
}