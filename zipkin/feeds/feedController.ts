import { getFeeds } from './feedService'
export const getAllFeeds = async (ctx: any) => {
	try {
		const feeds = await getFeeds(ctx)
		ctx.status = 200
		ctx.body = feeds
	} catch (error: any) {
		ctx.status = error.statusCode
		console.log("yha hu")
		ctx.body = error
	}
}
