# edulink-api

> An Unofficial API for OvernetData's [Edulink](https://www.edulinkone.com/).

## Installation

```bash
npm install edulink-api
```

## Usage

```javascript
const { Edulink_API } = require('edulink-api');

// or for ESM

import Edulink_API from 'edulink-api';
```

```javascript
const edulink = Edulink_API('School_Name', 'Username', 'Password');

const response = await edulink.Homework();
const currentHomework = response.result.homework.current;
```
