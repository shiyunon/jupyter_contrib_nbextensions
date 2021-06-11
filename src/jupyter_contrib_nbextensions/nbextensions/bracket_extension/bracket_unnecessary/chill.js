//let exec = require('child_process').exec;

var execShellCommand = function execShellCommand(cmd) {
  const exec = require("child_process").exec;
  return new Promise((resolve, reject) => {
    exec(cmd, { maxBuffer: 1024 * 500 }, (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
      } else if (stdout) {
        console.log(stdout); 
      } else {
        console.log(stderr);
      }
      resolve(stdout ? true : false);
    });
  });
}

execShellCommand('introduction.sh');
//var wow = "hello"// //execShellCommand('introduction.sh');
// define(function (require, exports, module) {

//   exports.execfunc = execfunc;
// });



// const exec = require('child_process').exec;

// const child = exec('node new/text.js',
//     (error, stdout, stderr) => {
//         console.log(`stdout: ${stdout}`);
//         console.log(`stderr: ${stderr}`);
//         if (error !== null) {
//             console.log(`exec error: ${error}`);
//         }
// });