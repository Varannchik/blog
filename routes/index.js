var express = require('express');
var router = express.Router();
var arrUsers = {names:[
            {name:'Petya', id:'1', age:'51'},
            {name:'Vasya', id:'2', age:'41'},
            {name:'Artem', id:'3', age:'14'},
            {name:'Kyrill', id:'4', age:'32'},
            {name:'Tymur', id:'5', age:'21'}
]};
var arrArticle =[
 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
  'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. ',
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. ',
  'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. '  
];
var arr=[];
var blo={blogs:[]};

function bl(name, age, article) {
  this.name = name;
  this.age = age;
  this.article = article;
}



/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'All news' });
  
// });

router.get('/users/:userId',(req,res)=>{
  for(let i=0; i<arrUsers.names.length; i++){  
    if(arrUsers.names[i].id===req.params.userId){
      console.log('if') ;     
      res.send(`Name: ${arrUsers.names[i].name}  Age: ${arrUsers.names[i].age}`);      
    };
  };
});

router.get('/users',(req,res)=>{
  res.render('index', {a: arrUsers.names}); 
});

router.get('/blog/:userId',(req,res)=>{
  for(let i=0; i<arrUsers.names.length; i++){
    if(arrUsers.names[i].id===req.params.userId){              
      res.send(`Name: ${arrUsers.names[i].name}  Age: ${arrUsers.names[i].age} Articles: ${arrArticle [i]}`);
    };
    
  };
});

router.get('/',(req, res)=>{
  for(let i=0; i<arrUsers.names.length; i++){
    let n=arrUsers.names[i].name;
    let ag=arrUsers.names[i].age;
    let ar=arrArticle [i];
    blo= new bl(n, ag, ar);
    arr.push(blo);
  }
  
  res.render('blog', {a: arr}); 
});


module.exports = router;
