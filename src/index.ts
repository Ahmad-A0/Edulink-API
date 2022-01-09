import Authentication from './Authentication_Requests/Authentication';
import EduLink from './Edulink_Requests/Edulink';

async function Edulink_API(
  school_code: string,
  username: string,
  password: string,
  keepAlive: boolean = true
): Promise<EduLink> {
  const authInstance = new Authentication();
  await authInstance.initialize(school_code, username, password, keepAlive);

  const edulinkInstance = new EduLink();
  await edulinkInstance.initialize(authInstance);

  return edulinkInstance;
}

export default Edulink_API;
export { Edulink_API };
