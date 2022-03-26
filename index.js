const fs = require('fs');
const { createCP, parseCP, transpose, keys } = require('simplechordpro');

console.log('File name: ', process.argv[3]);

// Make sure we got a filename on the command line.
if (process.argv.length < 4) {
    console.log('Please provide filename [example: song.txt]');
    process.exit(1);
}
  // Read the file and print its contents.
try {
    const filename = process.argv[3];
    fs.readFile(`./input/${filename}`, 'utf8', function(err, data) {
        if (err) throw err;
        console.log('📜 File found, OK: ' + filename);
        console.log('Parsing...🎸 ' + filename);
        rendered = parseCP(data);
        fs.writeFile(`./output/${filename}`, rendered, function (err) {
            if (err) return console.log(err);            
            console.log('✨File created...check output folder with same filename✨');
            if (process.argv[4] && process.argv[4] === '-v') {
                console.log('📜 Showing file contents...');
                console.log(rendered);
            }
        });        
    });
} catch (err) {
    console.log(`Error reading file!`, err);
}