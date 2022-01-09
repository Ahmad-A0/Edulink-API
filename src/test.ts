import dotenv from 'dotenv';
import path from 'path';
import Edulink_API from '.';

//prettier-ignore
const isGetter = (x: any, name: PropertyKey) => (Object.getOwnPropertyDescriptor(x, name) || {}).get;
//prettier-ignore
const isFunction = (x: { [x: string]: any }, name: string) => typeof x[name] === 'function';
//prettier-ignore
const deepFunctions = (x: Object): any => x && x !== Object.prototype && Object.getOwnPropertyNames(x) .filter((name) => isGetter(x, name) || isFunction(x, name)) .concat(deepFunctions(Object.getPrototypeOf(x)) || []);
//prettier-ignore
const distinctDeepFunctions = (x: any): string[] => Array.from(new Set(deepFunctions(x)));
//prettier-ignore
const userFunctions = (x: any): any => distinctDeepFunctions(x).filter( (name: any) => name !== 'constructor' && !~name.indexOf('__'));

dotenv.config({
  path: path.join(__dirname, '../.env'),
});

declare const process: {
  env: {
    EDULINK_SCHOOL_ID: string;
    EDULINK_USERNAME: string;
    EDULINK_PASSWORD: string;
  };
};

const skipList: string[] = ['TeacherPhotos'];

let [passed, failed] = [0, 0];

(async () => {
  const edulink: any = await Edulink_API(
    process.env.EDULINK_SCHOOL_ID,
    process.env.EDULINK_USERNAME,
    process.env.EDULINK_PASSWORD
  );

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
