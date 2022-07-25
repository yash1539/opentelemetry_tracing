import { userRouter } from "./userRoute"
const koa = require('koa')
const port = process.env.PORT || 3004
const app = new koa()
import { exporter } from './trace'
app.use(userRouter.routes()).use(userRouter.allowedMethods())
if (true) {
	exporter.start()
}
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