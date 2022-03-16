edulink-api / [Exports](modules.md)

# Edulink-API

> An Unofficial API for OvernetData's [Edulink](https://www.edulinkone.com/).

This API provides abstractions over the undocumented Edulink API. It is not official and could be subject to breaking changes.

The [`Edulink_API`](./docs/classes/Edulink_API.md) class is the main API class, it provides heavy abstractions over the raw data returned by Edulink. The [Edulink_Raw](./docs/classes/Edulink_Raw.md) class houses the raw requests to the edulink API.

## Contents

- [Examples](#usage-examples)

  - [Importing the module](#importing-the-module)
  - [Initializing and authenticating](#creating-the-api-object-and-authenticating)
  - [Getting the latest homework](#getting-the-latest-homework)
  - [Getting tomorrow's lessons](#getting-tomorrows-lessons)

- [Full Documentation](#docs)

  - [`Edulink_API` class](./docs/classes/Edulink_API.md)
  - [`Edulink_Raw` class](./docs/classes/Edulink_Raw.md)
  - [`Edulink_Raw_Response_Types`](./docs/modules/Edulink_Raw_Response_Types.md)

## Installation

```bash
$ npm install edulink-api
```

## Usage Examples

### Importing the module:

```javascript
import Edulink_API from 'edulink-api';
```

### Creating the API object and authenticating:

You need to login to Edulink first before using the API methods. This is done like this:

```javascript
const edulink_api = new Edulink_API();

await edulink_api.Authenticate({
  school_code: 'your_school_name',
  username: 'your_username',
  password: 'your_password',
});
```

Now we can use the API methods on the `Edulink_API` instance (`edulink_api`).

### Getting the latest homework:

Here we:

- query for all homework.
- select only the currently active homeworks.
- sort the homeworks by due-date and find the one due soonest.
- print some of the homework's data.

```javascript
import Edulink_API from 'edulink-api';

const edulink_api = new Edulink_API();

await edulink_api.Authenticate({
  school_code: 'your_school_name',
  username: 'your_username',
  password: 'your_password',
});

const homework = await edulink_api.Homework();
const latest_homework = homework.sort(
  (a, b) => new Date(a.due_date) - new Date(b.due_date)
)[0];

console.log(latest_homework);
/*
{
  title: 'Finish Graph and Questions',
  due_date: '2022-01-19',
  subject: 'Chemistry',
  description: "Complete and hand in the questions on page 60",
  completed: false,
  status: 'Not submitted',
  set_by: 'teacher_name',
  due_text: 'Due in 3 days',
  available_date: '2022-01-16 00:00:00',
}
*/
```

### Getting tomorrow's lessons:

```javascript
import Edulink_API from 'edulink-api';

const edulink_api = new Edulink_API();

await edulink_api.authenticate({
  school_code: 'your_school_name',
  username: 'your_username',
  password: 'your_password',
});

// Getting tommorow's date in the format YYYY-MM-DD
const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
  .toISOString()
  .split('T')[0];

// Get the lessons from tomorrow
// after we get the response we get the 0th element, the first day, and access its lessons
const lessons = (await edulink_api.Timetable(tomorrow))[0].lessons;

console.log(lessons.map(lesson => [lesson.start_time, lesson.lesson_name]));
/*
[
  [ '08:40', 'English' ],
  [ '09:30', 'Biology' ],
  [ '10:20', 'Form Period' ],
  [ '10:50', 'Break' ],
  [ '11:20', 'History' ],
  [ '12:10', 'Mathematics' ],
  [ '13:00', 'Lunch' ],
  [ '13:55', 'D&T(Product)' ],
  [ '14:45', 'Computer Studies' ]
]
*/
```

### Docs:

Documentation is still a work in progress, the documentation readme can be found in the [modules.md](./docs/modules.md) file. Direct links to the documentation are also available below.

- [`Edulink_API`](./docs/classes/Edulink_API.md) class This is the main API interface, shown in the examples above.

  - [Authenticate](Edulink_API.md#authenticate)
  - [Homework](Edulink_API.md#homework)
  - [Timetable](Edulink_API.md#timetable)

- [`Edulink_Raw`](./docs/classes/Edulink_Raw.md) class This class houses the raw requests to Edulink it can be used if you want more granular control over the requests, or if you want to use a feature that is not yet implemented.

  - [Achievement](./docs/classes/Edulink_Raw.md#achievement)
  - [AchievementBehaviourLookups](./docs/classes/Edulink_Raw.md#achievementbehaviourlookups)
  - [Attendance](./docs/classes/Edulink_Raw.md#attendance)
  - [Behaviour](./docs/classes/Edulink_Raw.md#behaviour)
  - [Catering](./docs/classes/Edulink_Raw.md#catering)
  - [Clubs](./docs/classes/Edulink_Raw.md#clubs)
  - [Documents](./docs/classes/Edulink_Raw.md#documents)
  - [Exams](./docs/classes/Edulink_Raw.md#exams)
  - [ExternalLinks](./docs/classes/Edulink_Raw.md#externallinks)
  - [Homework](./docs/classes/Edulink_Raw.md#homework)
  - [Login](./docs/classes/Edulink_Raw.md#login)
  - [Logout](./docs/classes/Edulink_Raw.md#logout)
  - [Personal](./docs/classes/Edulink_Raw.md#personal)
  - [Ping](./docs/classes/Edulink_Raw.md#ping)
  - [RegisterCodes](./docs/classes/Edulink_Raw.md#registercodes)
  - [SchoolDetails](./docs/classes/Edulink_Raw.md#schooldetails)
  - [School_FromCode](./docs/classes/Edulink_Raw.md#school_fromcode)
  - [Status](./docs/classes/Edulink_Raw.md#status)
  - [Timetable](./docs/classes/Edulink_Raw.md#timetable)
  - [initialize](./docs/classes/Edulink_Raw.md#initialize)

- [`Edulink_Raw_Response_Types`](./docs/modules/Edulink_Raw_Response_Types.md) This module contains the response types that are returned by the Edulink API.

### TODO:

- [ ] Add more examples
- [x] Document the API
- [ ] Add missing methods
- [x] Improve error messages
- [ ] Add missing return type properties, because of the way the types were created some properties that could be returned might not exist.
- [ ] I used the edulink DEMO when creating types and methods. This turns out to be really outdated and is missing a lot of properties. I will need to re do these types using the API with a real login.
- [x] Update examples
- [ ] Missing Homework Descriptions, some homeworks need an additional `Homework_Details` request to get the description.
