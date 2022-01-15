edulink-api / [Exports](modules.md)

# edulink-api _[*under construction*]_

> An Unofficial API for OvernetData's [Edulink](https://www.edulinkone.com/).

## Overview

This API is an unofficial API for OvernetData's Edulink. It is not supported by Edulink and is subject to change without notice.

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

You need to login to Edulink first. Before using the API methods. This is done like this:

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
  set_by: 'teacher_name'
}
*/
```

### Getting tomorrow's lessons:

```javascript
import Edulink_API from 'edulink-api';

const edulink_api = await Edulink_API({
  school_code: 'your_school_name',
  username: 'your_username',
  password: 'your_password',
});

// Getting tommorow's date in the format YYYY-MM-DD
const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
  .toISOString()
  .split('T')[0];

// Get the lessons from tomorrow
// after we get the response we get the 0th element, the first day, and access it's lessons
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

### [Docs:](./docs/modules.md)

Documentation is still a work in progress, the documentation readme can be found in the [modules.md](./docs/modules.md) file. Direct links to the documentation are also available below.

- [`Edulink_API` class](./docs/classes/Edulink_API.md) This is the main API interface, shown in the examples above.

- [`Edulink_Raw` class](./docs/classes/Edulink_Raw.md) This class houses the raw requests to Edulink it can be used if you want more granular control over the requests, or if you want to use a feature that is not yet implemented.

- [`Edulink_Raw_Response_Types`](./docs/modules/Edulink_Raw_Response_Types.md) This module contains the response types that are returned by the Edulink API.

### TODO:

- [ ] Add more examples
- [x] Document the API
- [ ] Add missing methods
- [ ] Improve error messages
- [ ] Add more abstractions, if login fails the user shouldn't have to parse the error message themselves
- [ ] Add missing return type properties, because of the way the types were created some properties that could be returned might not exist.
- [ ] I used the edulink DEMO when creating types and methods. This turns out to be really outdated and is missing a lot of properties. I will need to re do these types using the API with a real login.
- [x] Update examples
