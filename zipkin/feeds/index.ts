import { feedRouter } from "./feedRouter"

import { exporter } from './trace'
const { ConsoleSpanExporter, SimpleSpanProcessor } = require('@opentelemetry/tracing')
const { NodeTracerProvider } = require('@opentelemetry/node')
const consoleExporter = new ConsoleSpanExporter()
const provider = new NodeTracerProvider()
const spanProcessor = new SimpleSpanProcessor(consoleExporter)
provider.addSpanProcessor(spanProcessor)
const koa = require('koa')
const port = process.env.PORT || 3005
const app = new koa()
if (true) {
	exporter.start()
}
app.use(feedRouter.routes()).use(feedRouter.allowedMethods())

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