import Authentication from './Authentication/Authentication';
import EduLink from './Edulink/Edulink';

import dotenv from 'dotenv';
import path from 'path';

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

(async () => {
    console.log(process.env.EDULINK_SCHOOL_ID);

    const auth = await Authentication(
        process.env.EDULINK_SCHOOL_ID,
        process.env.EDULINK_USERNAME,
        process.env.EDULINK_PASSWORD
    );
    const edulink = await EduLink(auth);

    console.log(await edulink.Achievement());
    console.log(await auth.Edulink_Logout());
    console.log(await edulink.Achievement());
})();
