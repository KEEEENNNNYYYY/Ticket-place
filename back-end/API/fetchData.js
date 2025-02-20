const axios = require('axios');
const paginateData = require('./pagination');
/**
 * fetch paginate data from the url `http://localhost:5000/events`
 * */
async function fetchEventData(page) {
    try {
        let response = await axios.get('http://localhost:5000/events');
        return paginateData(response.data, page);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
module.exports = fetchEventData;
