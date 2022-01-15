# edulink-api _[*under construction*]_

> An Unofficial API for OvernetData's [Edulink](https://www.edulinkone.com/).

## Installation

```bash
$ npm install edulink-api
```

## Usage Examples

### Importing the module:

You can import the module using either `commonjs` or `esm` syntax:

```javascript
import Edulink_API from 'edulink-api';
```

### Creating the API object:

You need to login to Edulink first. Before using the API methods. This is done like this:

```javascript
const edulink_api = Edulink_API({
  school_code: 'your_school_name',
  username: 'your_username',
  password: 'your_password',
});
```

### Getting the latest homework:

Here we:

- query for all homework.
- select only the currently active homeworks.
- sort the homeworks by due-date and find the one due soonest.
- print some of the homework's data.

```javascript
import Edulink_API from 'edulink-api';

const edulink_api = await Edulink_API({
  school_code: 'your_school_name',
  username: 'your_username',
  password: 'your_password',
});

const response = await edulink_api.Homework();

const currentHomeworks = response.result.homework.current;
const dueSoonest = currentHomeworks.sort(
  (a, b) => new Date(a.due_date) - new Date(b.due_date)
)[0];

console.log({
  name: dueSoonest.activity,
  subject: dueSoonest.subject,
  due_date: dueSoonest.due_date,
  set_by: dueSoonest.set_by,
  status: dueSoonest.status,
});

/*
{
  name: 'Electricity CCT',
  due_date: '2022-01-14',
  set_by: 'Mr D. M. Holmes',
  status: 'Not submitted'
}
*/
```

### [Docs:](./docs/modules.md)

Documentation is still a work in progress, but can be found in the [modules.md](./docs/modules.md) file.

### TODO:

- [ ] Add more examples
- [ ] Document the API
- [ ] Add missing methods
- [ ] Improve error messages
- [ ] Add more abstractions, if login fails the user shouldn't have to parse the error message themselves
- [ ] Add missing return type properties, because of the way the types were created some properties that could be returned might not exist.
- [ ] I used the edulink DEMO when creating types and methods. This turns out to be really outdated and is missing a lot of properties. I will need to re do these types using the API with a real login.
- [ ] Update examples
