'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const dotenv_1 = __importDefault(require('dotenv'));
const path_1 = __importDefault(require('path'));
const _1 = __importDefault(require('.'));
const isGetter = (x, name) =>
  (Object.getOwnPropertyDescriptor(x, name) || {}).get;
const isFunction = (x, name) => typeof x[name] === 'function';
const deepFunctions = x =>
  x &&
  x !== Object.prototype &&
  Object.getOwnPropertyNames(x)
    .filter(name => isGetter(x, name) || isFunction(x, name))
    .concat(deepFunctions(Object.getPrototypeOf(x)) || []);
const distinctDeepFunctions = x => Array.from(new Set(deepFunctions(x)));
const userFunctions = x =>
  distinctDeepFunctions(x).filter(
    name => name !== 'constructor' && !~name.indexOf('__')
  );
dotenv_1.default.config({
  path: path_1.default.join(__dirname, '../.env'),
});
const skipList = ['TeacherPhotos'];
let [passed, failed] = [0, 0];
(() =>
  __awaiter(void 0, void 0, void 0, function* () {
    const edulink = yield (0, _1.default)(
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
      const response = yield edulink[property]();
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
  }))();
