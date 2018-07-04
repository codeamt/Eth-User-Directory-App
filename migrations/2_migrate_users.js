var Users = artifacts.require("./Users.sol");
//const promisify = require("util.promisify");
const fs = require("fs");
const path = require("path");
//const accessFile = promisify(fs.access);

const originalName = "Users.json";
const copyFileName = "UsersContract.json";
const src = path.join(path.dirname("truffle.js"), "build", "contracts", originalName);
const destination = path.join(path.dirname("truffle.js"), "app-users", "src", "assets");

function  copyFile(src, dest) {
  let readStream = fs.createReadStream(src);

  readStream.once('error', (err) => {
    console.log(err);
  });

  readStream.once('end', (err) => {
    console.log('done converting Users.json to UsersContract.json.');
  });

  readStream.pipe(fs.createWriteStream(dest));
}


module.exports = function(deployer) {
  deployer.deploy(Users);

  fs.access(src, (err) => {
    if(err) {
      fs.mkdirSync(src);
    }
    copyFile(src, path.join(destination, copyFileName));
  });
};

