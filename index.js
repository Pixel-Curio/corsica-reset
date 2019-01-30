/* Description:
 *   Simple plugin that exposes a url for reseting a given corsica screen.
 *
 * Dependencies:
 *   none
 *
 * Author:
 *    pixel-cur.io
 */

module.exports = function(corsica) {
    corsica.serveRoute('reset', function(req, res) {
        corsica.sendMessage('reset', {screen: req.query.id});
        res.send();
    });
};