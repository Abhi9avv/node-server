const http=require('http');
const server=http.createServer((req,res)=>{
	
	res.end('<h1>Abhinav website</h1>');
})
server.listen(3000,()=>{
	console.log('Server up and running \u{1F600}')})
