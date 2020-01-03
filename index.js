const api  = require ('express');
const routes = require ('./src/routes');
const cors = require('cors');
const mongoose  = require('mongoose');


const server =  new api();


mongoose.connect('mongodb+srv://admin:admin@cluster0-8iddq.mongodb.net/leads',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});


 server.use(cors());
 server.use(api.json());
 server.use(routes);

 server.listen(3000);



