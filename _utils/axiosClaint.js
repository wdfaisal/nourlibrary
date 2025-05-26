const { default: axios} = require('axios')

const apikey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiurl ='http://localhost:1337/api'


const axiosclient = axios.create({
    baseURL : apiurl,
    headers :{
        Authorization : `Bearer  ${apikey}`
    }
});

export default axiosclient