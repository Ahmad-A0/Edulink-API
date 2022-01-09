import axios from 'axios';
import { fstat, readdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { convertRoughToString, roughType } from './Assorted_Tools/tools';

/*
const fetchlist = [
    [
        'https://www.edulinkone.com/jsons/EduLink/Login/learner/EduLink.Login.json',
        'Edulink_Login',
    ],
    [
        'https://www.edulinkone.com/jsons/EduLink/EduLink.Status.json',
        'Edulink_Status',
    ],
    [
        'https://www.edulinkone.com/jsons/EduLink/EduLink.Behaviour.json',
        'Edulink_Behaviour',
    ],
    [
        'https://www.edulinkone.com/jsons/EduLink/EduLink.Clubs.json',
        'Edulink_Clubs',
    ],
    [
        'https://www.edulinkone.com/jsons/EduLink/EduLink.Exams.json',
        'Edulink_Exams',
    ],
    [
        'https://www.edulinkone.com/jsons/EduLink/Timetable/learner/EduLink.Timetable.json',
        'Edulink_Timetable',
    ],
    [
        'https://www.edulinkone.com/jsons/EduLink/EduLink.Achievement.json',
        'Edulink_Achievement',
    ],
    [
        'https://www.edulinkone.com/jsons/EduLink/EduLink.AssessmentGrids.json',
        'Edulink_AssessmentGrids',
    ],
    [
        'https://www.edulinkone.com/jsons/EduLink/EduLink.Attendance.json',
        'Edulink_Attendance',
    ],
    [
        'https://www.edulinkone.com/jsons/EduLink/EduLink.Noticeboard.json',
        'Edulink_Noticeboard',
    ],
    [
        'https://www.edulinkone.com/jsons/EduLink/DataCollectionValues/learner/EduLink.DataCollectionValues.json',
        'Edulink_DataCollectionValues',
    ],
    [
        'https://www.edulinkone.com/jsons/EduLink/EduLink.DataCollectionLookups.json',
        'Edulink_DataCollectionLookups',
    ],
    [
        'https://www.edulinkone.com/jsons/EduLink/EduLink.Documents.json',
        'Edulink_Documents',
    ],
    [
        'https://www.edulinkone.com/jsons/EduLink/EduLink.Calendar.json',
        'Edulink_Calendar',
    ],
    [
        'https://www.edulinkone.com/jsons/EduLink/EduLink.Catering.json',
        'Edulink_Catering',
    ],
    [
        'https://www.edulinkone.com/jsons/EduLink/EduLink.Homework.json',
        'Edulink_Homework',
    ],
    [
        'https://www.edulinkone.com/jsons/EduLink/EduLink.ExternalLinks.json',
        'Edulink_ExternalLinks',
    ],
    [
        'https://www.edulinkone.com/jsons/EduLink/PersonalInfo/learner/male/EduLink.Personal.json',
        'Edulink_Personal',
    ],
    [
        'https://www.edulinkone.com/jsons/Communicator/Inbox/learner/Communicator.Inbox.json',
        'Communicator_Inbox',
    ],
    [
        'https://www.edulinkone.com/jsons/Communicator/Inbox/learner/Communicator.Outbox.json',
        'Communicator_Outbox',
    ],
    [
        'https://www.edulinkone.com/jsons/EduLink/EduLink.ICalendars.json',
        'Edulink_ICalendars',
    ],
];
*/

(async () => {
    for (const file of readdirSync(path.join(__dirname, '../jsons/'))) {
        console.log(file);
        const name = file.split('.')[0];

        const output_dir = path.join(__dirname, '../jsons/');

        const object = JSON.parse(
            readFileSync(path.join(output_dir, name + '.json'), 'utf8')
        );

        const typed_stringified = convertRoughToString(roughType(object));

        writeFileSync(
            path.join(output_dir, `${name}.ts`),
            `type ${name} = ${typed_stringified};`
        );
    }
})();
