const axios = require('axios');
/**
 * fetch data from the url `http://localhost:5000/events`
 * */
async function fetchEventData() {
    try {
        let response = await axios.get('http://localhost:5000/events');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchEventData();

module.exports = fetchEventData;
