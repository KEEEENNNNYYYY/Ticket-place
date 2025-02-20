const fetchEventData = require('./fetchData');

async function eventCounter() {
    const events = await fetchEventData();
    let eventCount = events.length;
    return eventCount;
}
/**
 * get the `Total` of Event inside `Event database`
 * */
async function getEventCount() {
    const count = await eventCounter();
    console.log(count);
}

module.exports = getEventCount;
