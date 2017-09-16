/**
 * @file lib/index.js
 */
'use strict';


/**
 * An Avid response.
 * @typedef {Object} Response
 */


/**
 * @param  {ServerResponse} res
 * @return {Response}
 * @see {@link https://nodejs.org/api/http.html#http_class_http_serverresponse}
 */
module.exports = function response(res) {
  return res;
};
