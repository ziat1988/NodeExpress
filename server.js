const express = require('express');
const messagesRouter = require('./routes/messages.router')
const contactRouter = require('./routes/contact.router')
const app = express();
app.set('view engine','hbs');
//app.set('views','views');

const PORT = 3000;


//*******Middleware ******//
app.use((req,res,next)=>{
    const start = Date.now()
    next();
    console.log(req.url);
    console.log('time execute:',Date.now() - start)
})

app.use(express.static('public'))

app.use(express.json())
//****************//

app.get('/favicon.ico', (req, res) => res.status(204));

app.get('/',(req,res)=>{
   // res.send('Helloo Express !!!'); // not use anymore because static public
    res.render('index',{
        title: "this is cool title"
    })

})

//********* ROUTER ***************//
app.use('/messages',messagesRouter)
app.use('/contact',contactRouter)


app.listen(PORT,()=>{
    console.log(`Listen on port ${PORT}`);
})


