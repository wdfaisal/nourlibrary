const { default: axios, default: axiosclient} = require('./axiosClaint')

const getLatestBooks = ()=> axiosclient.get('/prodects')

export default {
    getLatestBooks
}