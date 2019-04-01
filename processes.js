const util = require('util');
const wait = util.promisify(setTimeout);

module.exports = {
  async process01(){
    console.log('process 01 started');
    console.time('--process 01---');
    await wait(3000);
    console.timeEnd('--process 01---');
    console.log();
    return 'process01 - return value';
  },
  async process02(){
    console.log('process 02 started');
    console.time('--process 02---');
    await wait(3000);
    console.timeEnd('--process 02---');
    console.log();
    return 'process02 return  - value';
  },
}