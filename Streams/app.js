// TODO: Transfer the contents from one file to another
// use fs
// use fs.createReadStream
// use fs.createWriteStream 
// (hint, use write in the in the read stream's data event)
//















var fs = require("fs");

var readable = fs.createReadStream(__dirname + "/greet.txt", {
  encoding: "utf8",
  highWaterMark: 16 * 1024
});
// encoding -> you can now take the binary data and figure out what letter each byte should be
// waterMark -> our buffersize in number of bytes for each chunk. 1024 bytes = 1 kb.

var writable = fs.createWriteStream(__dirname + "/greetEmpty.txt");
var i = 0;
readable.on("data", function(chunk) {
  // Will start filling the buffer.
  // if the content of the text file is less than the buffer size
  // we get all the text, otherwise we only get chunks of the text in greet.txt
  console.log(i);
  console.log(chunk.length);
  writable.write(chunk);
  i++;
});
