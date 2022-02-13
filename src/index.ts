import Edulink_API from './API/API.js';
import Edulink_Raw from './Raw_Edulink_Requests/Edulink_Raw.js';
import * as Edulink_Raw_Response_Types from './Raw_Edulink_Response_Types/Edulink_Raw_Response_Types.js';

export default Edulink_API;
export { Edulink_API, Edulink_Raw, Edulink_Raw_Response_Types };

(async () => {
  let a = new Edulink_API();
  await a.Authenticate({
    school_code: 'Calday',
    username: 'AdebowaleAGM',
    password: 'Caldy2019',
  });

  let b = await a.Homework();
  console.log(b[0]?.title);
  console.log(await b[0]?.mark_incomplete());
})();
