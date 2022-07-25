import axios from 'axios'
// const zipkinInstrumentationAxios = require("zipkin-instrumentation-axios");
// const { Tracer, ExplicitContext, BatchRecorder, jsonEncoder } = require("zipkin");
// const { HttpLogger } = require("zipkin-transport-http");
// const ZIPKIN_ENDPOINT = process.env.ZIPKIN_ENDPOINT || "http://localhost:9411";
// const tracer = new Tracer({
//     ctxImpl: new ExplicitContext(),
//     recorder: new BatchRecorder({
//       logger: new HttpLogger({
//         endpoint: `${ZIPKIN_ENDPOINT}/api/v2/spans`,
//         jsonEncoder: jsonEncoder.JSON_V2,
//       }),
//     }),
//     localServiceName: "feed-2",
//   });
// const zipkinAxios = zipkinInstrumentationAxios(axios, { tracer, serviceName: "axios-client" });
// import {zipkinAxios} from '../feeds/trace'
interface Book {
    id: number,
    book: string,
    aId: number
}

let books: Book[] = [
    { id: 1, book: "introduction to C", aId: 1 },
    { id: 2, book: "introduction to C++", aId: 1 },
    { id: 3, book: "introduction to PYTHON", aId: 2 },
    { id: 4, book: "introduction to JAVASCRIPT", aId: 2 },

];

export const getBooks =async () => {
    // const users=await axios.get('http://localhost:3004/user',{
    //     headers:{
    //         'token':'123'
    //     }
    // })
    // console.log('users at books',users.data);
    
	return books
}