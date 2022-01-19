const commandlineInput = process.argv;
const request = require('request');
const fs = require('fs');

request(commandlineInput[2], (error, response, body) => {
  if (error) throw error;
  if (response.statusCode === 200) console.log('Server says everything is OK!');
  fs.writeFile(commandlineInput[3],body, (err) => {
    if (err) throw err;
    console.log(`file from ${commandlineInput[2]} written to ${commandlineInput[3]}`);
  });
});
