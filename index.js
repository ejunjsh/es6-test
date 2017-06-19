import * as fs from 'fs'
import * as promisify from './promisify.js'
import * as genrunner from './genrunner.js'

var genReadFile = function* () {
    try {
        let readFile=promisify.promisify(fs.readFile);
        let data = yield readFile("./package.json","utf8");
        console.log(data);
        data = yield readFile("./package1.json");
        console.log(data);
    }
    catch (e) {
        console.error(e);
    }

}




genrunner.runGen(genReadFile);
