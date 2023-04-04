/*import {watchFile} from 'fs';
import {spawn} from 'child_process';

watchFile('helloworld.txt', (curr, prev) => {
  console.log(`File was ${prev.size} bytes before it was modified.`);
  console.log(`Now file is ${curr.size} bytes.`);

  const cat = spawn('cat', ['-n', 'helloworld.txt']);
  cat.stdout.pipe(process.stdout);
});*/

import * as net from "net";
import { watchFile } from "fs";

if (process.argv.length !== 3) {
  console.log("Please, provide a filename.");
} else {
  const fileName = process.argv[2];

  net
    .createServer((connection) => {
      console.log("A client has connected.");

      connection.write(`Connection established: watching file ${fileName}.\n`);

      watchFile(fileName, (curr, prev) => {
        connection.write(`Size of file ${fileName} was ${prev.size}.\n`);
        connection.write(`Size of file ${fileName} now is ${curr.size}.\n`);
      });

      connection.on("close", () => {
        console.log("A client has disconnected.");
      });
    })
    .listen(60300, () => {
      console.log("Waiting for clients to connect.");
    });
}
