import dotenv from 'dotenv';
import path from 'path';
import Edulink_API from '../build/index.js';
//prettier-ignore
const isGetter = (x, name) => (Object.getOwnPropertyDescriptor(x, name) || {}).get;
//prettier-ignore
const isFunction = (x, name) => typeof x[name] === 'function';
//prettier-ignore
const deepFunctions = (x) => x && x !== Object.prototype && Object.getOwnPropertyNames(x).filter((name) => isGetter(x, name) || isFunction(x, name)).concat(deepFunctions(Object.getPrototypeOf(x)) || []);
//prettier-ignore
const distinctDeepFunctions = (x) => Array.from(new Set(deepFunctions(x)));
//prettier-ignore
const userFunctions = (x) => distinctDeepFunctions(x).filter((name) => name !== 'constructor' && !~name.indexOf('__'));
dotenv.config({
  path: path.join(__dirname, '../.env'),
});
const skipList = ['TeacherPhotos'];
let [passed, failed] = [0, 0];
(async () => {
  const edulink = new Edulink_API();
  edulink.Authenticate({
    school_code: process.env.EDULINK_SCHOOL_ID,
    username: process.env.EDULINK_USERNAME,
    password: process.env.EDULINK_PASSWORD,
  });
  for (const property of userFunctions(edulink)) {
    if (
      property[0].toLowerCase() === property[0] ||
      skipList.includes(property)
    ) {
      continue;
    }
    const response = await edulink[property]();
    if (response.result.success) {
      console.log(`${property}:`, 'passed');
      passed++;
    } else {
      console.log(`${property}: ${JSON.stringify(response, null, 2)}`);
      failed++;
    }
  }
  edulink.Authentication.Edulink_Logout();
  console.log('\n');
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);
  console.log(`Total: ${passed + failed}`);
})();
