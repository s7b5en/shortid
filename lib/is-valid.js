'use strict';
var alphabet = require('./alphabet');

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var nonAlphabetic = new RegExp('[^' + alphabet.characters() + ']+', 'g');
    return !nonAlphabetic.test(id);
}

module.exports = isShortId;
