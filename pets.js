'use strict';

var fs = require('fs');
var path = require('path');
var petsPath = './pets.json';
var node = path.basename(process.argv[0]);
var file = path.basename(process.argv[1]);
var cmd = process.argv[2];
var index = process.argv[3];


if (cmd === 'read') {
    fs.readFile(petsPath, 'utf8', function(readErr, data) {
      var pets = JSON.parse(data);

        if (readErr) {
            console.log("There is an Error");
            throw readErr;
        }

         else if (index === undefined) {
            console.log(pets);
            process.exit(1);
        } else if (index > pets.length - 1 || index < 0) {
            console.error(`Usage: ${node} ${file} INDEX`);
            process.exit(1);
        }
        console.log(index);
        var pet = pets;
        console.log(pet[index]);
    });
} else {
    console.error(`Usage: ${node} ${file} [read | create]`);
    process.exit(1);
}
