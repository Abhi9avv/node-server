const http=require('http');
const fs=require('fs').promises;
const server=http.createServer(async(req,res)=>{
	console.log(req.url);
	if(req.url.split('.')[1]==='jpg'){
		console.log('res')
		const img=fs.readFile(`./Restaurant-webpage${req.url}`).then((a)=>{res.end(a)})
		
	}
	else{
	switch(req.url){
	case '/':
		const data=fs.readFile('./Restaurant-webpage/resturant.html','utf-8').catch(()=>{console.log('No shuch file')})
		data.then((a)=>{
			
           		res.end(a)
		})
		data.catch((err)=>{console.log(err)})
		break;
	case '/resturant.css':
			const stylesheet=fs.readFile('./Restaurant-webpage/resturant.css','utf-8').then((a)=>{res.end(a)})
			break;
	
	default:
			res.writeHead(404);
			res.end()
			break;
	
		}}
})
server.listen(3000,()=>{
	console.log('Server up and running \u{1F600}')})
