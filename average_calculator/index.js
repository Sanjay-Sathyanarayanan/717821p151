const express = require('express');
const app = express();
const session = require('express-session');
const windowSize = 12;
let windowprev = [];

app.use(session({
  secret: 'my-secret1234',
  resave: false,
  saveUninitialized: false,
}));

app.get('/numbers/e',async (req,res)=>{
    const data = await fetch('http://20.244.56.144/numbers/even').then((response)=> response.json());
    let windowcurrent = [];
    
    
    if(data.numbers.length > windowSize){
        for(let i =windowSize-1;i>=0;i--){
            windowcurrent[i] = data.numbers[i];
        }     
    }
    else{
        windowcurrent = data.numbers;
         
    }
    let sum =0;
        data.numbers.map((val) => sum+=val);
        sum = sum/data.numbers.length;
        res.json({"windowsPrevState":windowprev,"windowCurrState":windowcurrent,"numbers":data.numbers,"avg":sum}); 
    
    windowprev = windowcurrent ;
    req.session.prevState = windowprev;
    
    
    

})
app.get('/numbers/p',async (req,res)=>{
    const data = await fetch('http://20.244.56.144/numbers/primes').then((response)=> response.json());
    let windowcurrent = [];
    
    
    if(data.numbers.length > windowSize){
        for(let i =windowSize-1;i>=0;i--){
            windowcurrent[i] = data.numbers[i];
        }     
    }
    else{
        windowcurrent = data.numbers;
         
    }
    let sum =0;
        data.numbers.map((val) => sum+=val);
        sum = sum/data.numbers.length;
        res.json({"windowsPrevState":windowprev,"windowCurrState":windowcurrent,"numbers":data.numbers,"avg":sum}); 
    
    windowprev = windowcurrent ;
    req.session.prevState = windowprev;
    
    

})
app.get('/numbers/f',async (req,res)=>{
    const data = await fetch('http://20.244.56.144/numbers/fibo').then((response)=> response.json());
    let windowcurrent = [];
    
    
    if(data.numbers.length > windowSize){
        for(let i =windowSize-1;i>=0;i--){
            windowcurrent[i] = data.numbers[i];
        }     
    }
    else{
        windowcurrent = data.numbers;
         
    }
    let sum =0;
        data.numbers.map((val) => sum+=val);
        sum = sum/data.numbers.length;
        res.json({"windowsPrevState":windowprev,"windowCurrState":windowcurrent,"numbers":data.numbers,"avg":sum}); 
    
    windowprev = windowcurrent ;
    req.session.prevState = windowprev;
    

})
app.get('/numbers/r',async (req,res)=>{
    const data = await fetch('http://20.244.56.144/numbers/rand').then((response)=> response.json());
    let windowcurrent = [];
    
    
    if(data.numbers.length > windowSize){
        for(let i =windowSize-1;i>=0;i--){
            windowcurrent[i] = data.numbers[i];
        }     
    }
    else{
        windowcurrent = data.numbers;
         
    }
    let sum =0;
        data.numbers.map((val) => sum+=val);
        sum = sum/data.numbers.length;
        res.json({"windowsPrevState":windowprev,"windowCurrState":windowcurrent,"numbers":data.numbers,"avg":sum}); 
    
    windowprev = windowcurrent ;
    req.session.prevState = windowprev;
    
    

})

app.listen(3000, ()=>{
    console.log("Server is running in port 3000");
});