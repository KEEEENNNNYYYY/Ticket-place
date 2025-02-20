// pagination.js

/**
 * return a set of 10 elements from the url
 *
 * use : paginateData(`string`,`int`)
 */

function paginateData(data, page) {
    const limit = 10;
    const offset = (page - 1) * limit;

    return data.slice(offset, offset + limit);
}

module.exports = paginateData;
