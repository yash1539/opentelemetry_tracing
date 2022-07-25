export const verify=async(ctx:any,next:any)=>{
    if(ctx.headers['token']=='123'){
        await next()
    }else{
        throw new Error()
    }
}