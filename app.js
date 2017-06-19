const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.listen(8181);

app.use(bodyParser());
app.use(express.static('./'));

app.get('/',(req,res)=>{
   res.sendFile('vue.html',{root:'./'})
});