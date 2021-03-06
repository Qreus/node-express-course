const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const middleware = require('./middleware.js');

app.use(bodyParser.json())

const mockUserData=[
	{name:'Mark'},
	{name:'Jill'}
]
app.get('/users',function(req,res){
	res.json({
		success: true,
		message: 'successfully got users. Nice!',
		users: mockUserData
	})
})
app.listen(8000,function(){console.log('server is listening')})