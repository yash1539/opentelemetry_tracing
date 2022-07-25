import { bookRouter } from "./bookRoute"
const koa = require('koa')
const port = process.env.PORT || 3001
const app = new koa()
import { exporter } from "./trace"
if(true){
	exporter.start()
}
app.use(bookRouter.routes()).use(bookRouter.allowedMethods())
app.on('error', (err: any) => {
	console.error('server error', err)
})
app.listen(port, function (error: any) {
	if (error) {
		console.log('Something went wrong', error)
	} else {
		console.log('Server is listening at port : ' + port)
	}
})