import Authentication from './Authentication_Requests/Authentication.js';
import EduLink from './Edulink_Requests/Edulink.js';

// TODO: Make this a class that inherits both Authentication and EduLink
async function Edulink_API(
  credentials: {
    school_code: string;
    username: string;
    password: string;
  },
  keepAlive: boolean = false
): Promise<EduLink> {
  const authInstance = new Authentication();
  await authInstance.initialize(
    credentials.school_code,
    credentials.username,
    credentials.password,
    keepAlive
  );

  const edulinkInstance = new EduLink();
  await edulinkInstance.initialize(authInstance);

  return edulinkInstance;
}

export default Edulink_API;
export { Edulink_API };
