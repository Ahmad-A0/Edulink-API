# edulink-api

> An Unofficial API for OvernetData's [Edulink](https://www.edulinkone.com/).

## Installation

```bash
$ npm install edulink-api
```

## Usage Examples

### Importing the module:

```javascript
const { Edulink_API } = require('edulink-api');

// or for ESM

import Edulink_API from 'edulink-api';
```

### Getting the latest homework:

```javascript
const response = await edulink.Homework();

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
