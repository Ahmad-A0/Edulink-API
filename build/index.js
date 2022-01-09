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
const Authentication_1 = __importDefault(
  require('./Authentication_Requests/Authentication')
);
const Edulink_1 = __importDefault(require('./Edulink_Requests/Edulink'));
function Edulink_API(school_code, username, password, keepAlive = true) {
  return __awaiter(this, void 0, void 0, function* () {
    const authInstance = new Authentication_1.default();
    yield authInstance.initialize(school_code, username, password, keepAlive);
    const edulinkInstance = new Edulink_1.default();
    yield edulinkInstance.initialize(authInstance);
    return edulinkInstance;
  });
}
module.exports = Edulink_API;
