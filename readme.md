# edulink-api

> An Unofficial API for OvernetData's [Edulink](https://www.edulinkone.com/).

## Installation

```bash
$ npm install edulink-api
```

## Usage Examples

### Importing the module:

You can import the module using either `commonjs` or `esm` syntax:

```javascript
const { Edulink_API } = require('edulink-api');

// or for ESM

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
- select the currently active homework.
- select the first homework returned.
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
const dueSoonest = currentHomeworks[0];

console.log({
  name: dueSoonest.activity,
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

### TODO:

- [ ] Add more examples
- [ ] Document the API
- [ ] Add missing methods
