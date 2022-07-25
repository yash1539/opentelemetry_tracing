import {
	getAllBooks,
} from './bookController'
import  Router from 'koa-router'
import { verify } from '../middleware' 
import { bootstrapMiddleware } from './util'
const bookRouter = new Router()
bookRouter.prefix('/book')

bookRouter.get('/',verify, getAllBooks)
export { bookRouter }