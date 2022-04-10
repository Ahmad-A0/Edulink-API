[edulink-api](../README.md) / [Exports](../modules.md) / Edulink_Raw

# Class: Edulink_Raw

This class houses all the raw requests to the Edulink API.
Properties that the methods require need to initialized with the [Edulink_Raw.initialize](Edulink_Raw.md#initialize) method.

## Table of contents

### Constructors

- [constructor](Edulink_Raw.md#constructor)

### Properties

- [generic_header](Edulink_Raw.md#generic_header)
- [learner_id](Edulink_Raw.md#learner_id)
- [school_server](Edulink_Raw.md#school_server)

### Accessors

- [generic_data](Edulink_Raw.md#generic_data)

### Methods

- [Achievement](Edulink_Raw.md#achievement)
- [AchievementBehaviourLookups](Edulink_Raw.md#achievementbehaviourlookups)
- [Attendance](Edulink_Raw.md#attendance)
- [Behaviour](Edulink_Raw.md#behaviour)
- [Catering](Edulink_Raw.md#catering)
- [Clubs](Edulink_Raw.md#clubs)
- [Documents](Edulink_Raw.md#documents)
- [Exams](Edulink_Raw.md#exams)
- [ExternalLinks](Edulink_Raw.md#externallinks)
- [Homework](Edulink_Raw.md#homework)
- [HomeworkCompleted](Edulink_Raw.md#homeworkcompleted)
- [HomeworkDetails](Edulink_Raw.md#homeworkdetails)
- [Login](Edulink_Raw.md#login)
- [Logout](Edulink_Raw.md#logout)
- [Personal](Edulink_Raw.md#personal)
- [Ping](Edulink_Raw.md#ping)
- [RegisterCodes](Edulink_Raw.md#registercodes)
- [SchoolDetails](Edulink_Raw.md#schooldetails)
- [School_FromCode](Edulink_Raw.md#school_fromcode)
- [Status](Edulink_Raw.md#status)
- [Timetable](Edulink_Raw.md#timetable)
- [initialize](Edulink_Raw.md#initialize)

## Constructors

### constructor

• **new Edulink_Raw**()

## Properties

### generic_header

• `Private` **generic_header**: `Object`

This houses the authentication bearer

#### Type declaration

| Name            | Type     |
| :-------------- | :------- |
| `Authorization` | `string` |

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:50](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/fd6842b/src/Raw_Edulink_Requests/Edulink_Raw.ts#L50)

---

### learner_id

• **learner_id**: `string`

The ID of the current signed in user

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:40](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/fd6842b/src/Raw_Edulink_Requests/Edulink_Raw.ts#L40)

---

### school_server

• **school_server**: `string`

The base server that requests are made to

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:45](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/fd6842b/src/Raw_Edulink_Requests/Edulink_Raw.ts#L45)

## Accessors

### generic_data

• `Private` `get` **generic_data**(): `Object`

This returns some fields needed in the data section of the other requests

#### Returns

`Object`

| Name      | Type     |
| :-------- | :------- |
| `id`      | `string` |
| `jsonrpc` | `string` |
| `uuid`    | `string` |

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:74](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/fd6842b/src/Raw_Edulink_Requests/Edulink_Raw.ts#L74)

## Methods

### Achievement

▸ **Achievement**(): `Promise`<[`Edulink_Achievement`](../modules/Edulink_Raw_Response_Types.md#edulink_achievement)\>

Returns the data from the `achievements` section of edulink

#### Returns

`Promise`<[`Edulink_Achievement`](../modules/Edulink_Raw_Response_Types.md#edulink_achievement)\>

A promise that resolves to the [Edulink_Achievement](../modules/Edulink_Raw_Response_Types.md#edulink_achievement) response

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:250](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/fd6842b/src/Raw_Edulink_Requests/Edulink_Raw.ts#L250)

---

### AchievementBehaviourLookups

▸ **AchievementBehaviourLookups**(): `Promise`<[`Edulink_AchievementBehaviourLookups`](../modules/Edulink_Raw_Response_Types.md#edulink_achievementbehaviourlookups)\>

Gets a look up table for the [Edulink_Achievement](../modules/Edulink_Raw_Response_Types.md#edulink_achievement) and [Edulink_Behaviour](../modules/Edulink_Raw_Response_Types.md#edulink_behaviour) responses

#### Returns

`Promise`<[`Edulink_AchievementBehaviourLookups`](../modules/Edulink_Raw_Response_Types.md#edulink_achievementbehaviourlookups)\>

A promise that resolves to the [Edulink_AchievementBehaviourLookups](../modules/Edulink_Raw_Response_Types.md#edulink_achievementbehaviourlookups) response, this is a look up table for the [Edulink_Achievement](../modules/Edulink_Raw_Response_Types.md#edulink_achievement) and [Edulink_Behaviour](../modules/Edulink_Raw_Response_Types.md#edulink_behaviour) responses

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:198](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/fd6842b/src/Raw_Edulink_Requests/Edulink_Raw.ts#L198)

---

### Attendance

▸ **Attendance**(): `Promise`<[`Edulink_Attendance`](../modules/Edulink_Raw_Response_Types.md#edulink_attendance)\>

Returns the data from the `attendance` section of edulink

#### Returns

`Promise`<[`Edulink_Attendance`](../modules/Edulink_Raw_Response_Types.md#edulink_attendance)\>

A promise that resolves to the [Edulink_Attendance](../modules/Edulink_Raw_Response_Types.md#edulink_attendance) response

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:277](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/fd6842b/src/Raw_Edulink_Requests/Edulink_Raw.ts#L277)

---

### Behaviour

▸ **Behaviour**(): `Promise`<[`Edulink_Behaviour`](../modules/Edulink_Raw_Response_Types.md#edulink_behaviour)\>

Gets the results from the `Behaviour` section of edulink

#### Returns

`Promise`<[`Edulink_Behaviour`](../modules/Edulink_Raw_Response_Types.md#edulink_behaviour)\>

A promise that resolves to the [Edulink_Behaviour](../modules/Edulink_Raw_Response_Types.md#edulink_behaviour) response

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:170](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/fd6842b/src/Raw_Edulink_Requests/Edulink_Raw.ts#L170)

---

### Catering

▸ **Catering**(): `Promise`<[`Edulink_Catering`](../modules/Edulink_Raw_Response_Types.md#edulink_catering)\>

Returns the data from the `catering` section of edulink

#### Returns

`Promise`<[`Edulink_Catering`](../modules/Edulink_Raw_Response_Types.md#edulink_catering)\>

A promise that resolves to the [Edulink_Catering](../modules/Edulink_Raw_Response_Types.md#edulink_catering) response

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:305](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/fd6842b/src/Raw_Edulink_Requests/Edulink_Raw.ts#L305)

---

### Clubs

▸ **Clubs**(`member?`): `Promise`<[`Edulink_Clubs`](../modules/Edulink_Raw_Response_Types.md#edulink_clubs)\>

Returns the data from the `clubs` section of edulink

#### Parameters

| Name     | Type      | Default value | Description                                                                                                                         |
| :------- | :-------- | :------------ | :---------------------------------------------------------------------------------------------------------------------------------- |
| `member` | `boolean` | `true`        | If true clubs that the learner is a member of will be returned, if false clubs that the learner is not a member of will be returned |

#### Returns

`Promise`<[`Edulink_Clubs`](../modules/Edulink_Raw_Response_Types.md#edulink_clubs)\>

A promise that resolves to the [Edulink_Clubs](../modules/Edulink_Raw_Response_Types.md#edulink_clubs) response

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:460](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/fd6842b/src/Raw_Edulink_Requests/Edulink_Raw.ts#L460)

---

### Documents

▸ **Documents**(): `Promise`<[`Edulink_Documents`](../modules/Edulink_Raw_Response_Types.md#edulink_documents)\>

Gets the results from the `documents` section of edulink

#### Returns

`Promise`<[`Edulink_Documents`](../modules/Edulink_Raw_Response_Types.md#edulink_documents)\>

A promise that resolves to the [Edulink_Documents](../modules/Edulink_Raw_Response_Types.md#edulink_documents) response

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:116](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/fd6842b/src/Raw_Edulink_Requests/Edulink_Raw.ts#L116)

---

### Exams

▸ **Exams**(): `Promise`<[`Edulink_Exams`](../modules/Edulink_Raw_Response_Types.md#edulink_exams)\>

Gets the results from the `exams` section of edulink

#### Returns

`Promise`<[`Edulink_Exams`](../modules/Edulink_Raw_Response_Types.md#edulink_exams)\>

A promise that resolves to the [Edulink_Exams](../modules/Edulink_Raw_Response_Types.md#edulink_exams) response

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:143](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/fd6842b/src/Raw_Edulink_Requests/Edulink_Raw.ts#L143)

---

### ExternalLinks

▸ **ExternalLinks**(): `Promise`<[`Edulink_ExternalLinks`](../modules/Edulink_Raw_Response_Types.md#edulink_externallinks)\>

Returns the data from the `external links` section of edulink

#### Returns

`Promise`<[`Edulink_ExternalLinks`](../modules/Edulink_Raw_Response_Types.md#edulink_externallinks)\>

A promise that resolves to the [Edulink_ExternalLinks](../modules/Edulink_Raw_Response_Types.md#edulink_externallinks) response

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:434](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/fd6842b/src/Raw_Edulink_Requests/Edulink_Raw.ts#L434)

---

### Homework

▸ **Homework**(): `Promise`<[`Edulink_Homework`](../modules/Edulink_Raw_Response_Types.md#edulink_homework)\>

Returns the data from the `Homework` section of edulink

#### Returns

`Promise`<[`Edulink_Homework`](../modules/Edulink_Raw_Response_Types.md#edulink_homework)\>

A promise that resolves to the [Edulink_Homework](../modules/Edulink_Raw_Response_Types.md#edulink_homework) response

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:332](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/fd6842b/src/Raw_Edulink_Requests/Edulink_Raw.ts#L332)

---

### HomeworkCompleted

▸ **HomeworkCompleted**(`homework_id`, `homework_source`, `complete`): `Promise`<`any`\>

Change the completion status of a homework

#### Parameters

| Name              | Type                    | Description                                                 |
| :---------------- | :---------------------- | :---------------------------------------------------------- |
| `homework_id`     | `number`                | The id of the homework to change completion for             |
| `homework_source` | `"SIMS"` \| `"EduLink"` | -                                                           |
| `complete`        | `boolean`               | A boolean representing the homework's new completion status |

#### Returns

`Promise`<`any`\>

//TODO: Add return type

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:361](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/fd6842b/src/Raw_Edulink_Requests/Edulink_Raw.ts#L361)

---

### HomeworkDetails

▸ **HomeworkDetails**(`homework_id`, `source`): `Promise`<[`Edulink_HomeworkDetails`](../modules/Edulink_Raw_Response_Types.md#edulink_homeworkdetails)\>

Request additional details about a homework

#### Parameters

| Name          | Type                    | Description                                                         |
| :------------ | :---------------------- | :------------------------------------------------------------------ |
| `homework_id` | `string` \| `number`    | The id of the homework to request details for                       |
| `source`      | `"SIMS"` \| `"EduLink"` | the way the homework was added normally through "SIMS" or "EduLink" |

#### Returns

`Promise`<[`Edulink_HomeworkDetails`](../modules/Edulink_Raw_Response_Types.md#edulink_homeworkdetails)\>

A promise that resolves to the [Edulink_HomeworkDetails](../modules/Edulink_Raw_Response_Types.md#edulink_homeworkdetails) response

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:400](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/fd6842b/src/Raw_Edulink_Requests/Edulink_Raw.ts#L400)

---

### Login

▸ **Login**(`username`, `password`, `establishment_id`, `server?`): `Promise`<[`Edulink_Login`](../modules/Edulink_Raw_Response_Types.md#edulink_login)\>

#### Parameters

| Name               | Type     | Description                                                                                                                                                                              |
| :----------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `username`         | `string` | The username that should be used for authentication                                                                                                                                      |
| `password`         | `string` | The password that should be used for authentication                                                                                                                                      |
| `establishment_id` | `number` | The id of the establishment that the user is trying to authenticate against, this is provided in [Edulink_SchoolDetails](../modules/Edulink_Raw_Response_Types.md#edulink_schooldetails) |
| `server`           | `string` | The server to authenticate with.                                                                                                                                                         |

#### Returns

`Promise`<[`Edulink_Login`](../modules/Edulink_Raw_Response_Types.md#edulink_login)\>

A promise that resolves to the [Edulink_Login](../modules/Edulink_Raw_Response_Types.md#edulink_login) response, this response contains important data about room and group ids

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:624](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/fd6842b/src/Raw_Edulink_Requests/Edulink_Raw.ts#L624)

---

### Logout

▸ **Logout**(): `Promise`<[`Edulink_Logout`](../modules/Edulink_Raw_Response_Types.md#edulink_logout)\>

Logs the user out of the school server, this will render most of the class useless as authentication is required for the methods to run

#### Returns

`Promise`<[`Edulink_Logout`](../modules/Edulink_Raw_Response_Types.md#edulink_logout)\>

A promise that resolves to the [Edulink_Logout](../modules/Edulink_Raw_Response_Types.md#edulink_logout) response

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:659](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/fd6842b/src/Raw_Edulink_Requests/Edulink_Raw.ts#L659)

---

### Personal

▸ **Personal**(): `Promise`<[`Edulink_Personal`](../modules/Edulink_Raw_Response_Types.md#edulink_personal)\>

Returns the data from the `personal` section of edulink

#### Returns

`Promise`<[`Edulink_Personal`](../modules/Edulink_Raw_Response_Types.md#edulink_personal)\>

A promise that resolves to the [Edulink_Personal](../modules/Edulink_Raw_Response_Types.md#edulink_personal) response

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:488](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/fd6842b/src/Raw_Edulink_Requests/Edulink_Raw.ts#L488)

---

### Ping

▸ **Ping**(): `Promise`<[`Edulink_Ping`](../modules/Edulink_Raw_Response_Types.md#edulink_ping)\>

Ping's the server to keep the session alive //TODO: See how long the default session is and how long it should be

#### Returns

`Promise`<[`Edulink_Ping`](../modules/Edulink_Raw_Response_Types.md#edulink_ping)\>

A promise that resolves to the [Edulink_Ping](../modules/Edulink_Raw_Response_Types.md#edulink_ping) response

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:684](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/fd6842b/src/Raw_Edulink_Requests/Edulink_Raw.ts#L684)

---

### RegisterCodes

▸ **RegisterCodes**(): `Promise`<[`Edulink_RegisterCodes`](../modules/Edulink_Raw_Response_Types.md#edulink_registercodes)\>

TODO: Can't remeber what this is

#### Returns

`Promise`<[`Edulink_RegisterCodes`](../modules/Edulink_Raw_Response_Types.md#edulink_registercodes)\>

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:225](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/fd6842b/src/Raw_Edulink_Requests/Edulink_Raw.ts#L225)

---

### SchoolDetails

▸ **SchoolDetails**(`school_server?`): `Promise`<[`Edulink_SchoolDetails`](../modules/Edulink_Raw_Response_Types.md#edulink_schooldetails)\>

Returns information about the login options of the school as well as the school name and id, see [Edulink_SchoolDetails](../modules/Edulink_Raw_Response_Types.md#edulink_schooldetails)

#### Parameters

| Name            | Type     | Description                                    |
| :-------------- | :------- | :--------------------------------------------- |
| `school_server` | `string` | The `school_server` to query information about |

#### Returns

`Promise`<[`Edulink_SchoolDetails`](../modules/Edulink_Raw_Response_Types.md#edulink_schooldetails)\>

information about the login options of the school as well as the school name and id, see [Edulink_SchoolDetails](../modules/Edulink_Raw_Response_Types.md#edulink_schooldetails)

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:569](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/fd6842b/src/Raw_Edulink_Requests/Edulink_Raw.ts#L569)

---

### School_FromCode

▸ **School_FromCode**(`school_code`, `server?`): `Promise`<[`School_FromCode`](../modules/Edulink_Raw_Response_Types.md#school_fromcode)\>

Returns a response that contains the school_code of a school from the school_server

#### Parameters

| Name          | Type     | Default value                            | Description                                                                                                        |
| :------------ | :------- | :--------------------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| `school_code` | `string` | `undefined`                              |                                                                                                                    |
| `server`      | `string` | `'https://provisioning.edulinkone.com/'` | The server to use to find the school_code. This should always be the default unless you're debugging or something. |

#### Returns

`Promise`<[`School_FromCode`](../modules/Edulink_Raw_Response_Types.md#school_fromcode)\>

A promise that resolves to a response object that contains the school code and server.

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:599](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/fd6842b/src/Raw_Edulink_Requests/Edulink_Raw.ts#L599)

---

### Status

▸ **Status**(): `Promise`<[`Edulink_Status`](../modules/Edulink_Raw_Response_Types.md#edulink_status)\>

Returns the current status of the user sign in as well as info about the user's upcoming whereabouts, see [Edulink_Status](../modules/Edulink_Raw_Response_Types.md#edulink_status)

#### Returns

`Promise`<[`Edulink_Status`](../modules/Edulink_Raw_Response_Types.md#edulink_status)\>

A promise that resolves to the [Edulink_Status](../modules/Edulink_Raw_Response_Types.md#edulink_status) response

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:515](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/fd6842b/src/Raw_Edulink_Requests/Edulink_Raw.ts#L515)

---

### Timetable

▸ **Timetable**(`date`): `Promise`<[`Edulink_Timetable`](../modules/Edulink_Raw_Response_Types.md#edulink_timetable)\>

Gets the timetable for the current user from a given date

#### Parameters

| Name   | Type     | Description                                                                                                                                                |
| :----- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `date` | `string` | should be in format: YYYY-MM-DD, this is the start date of the range by default edulink will return 16 days of data //TODO: Fact check this is always true |

#### Returns

`Promise`<[`Edulink_Timetable`](../modules/Edulink_Raw_Response_Types.md#edulink_timetable)\>

A promise that resolves to the [Edulink_Attendance](../modules/Edulink_Raw_Response_Types.md#edulink_attendance) response

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:88](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/fd6842b/src/Raw_Edulink_Requests/Edulink_Raw.ts#L88)

---

### initialize

▸ **initialize**(`authtoken`, `learner_id`, `school_server`): `Promise`<`void`\>

#### Parameters

| Name            | Type     | Description                                                                                                                                                       |
| :-------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `authtoken`     | `string` | The authtoken to pass to requests, this is obtained from the [Edulink_Login](../modules/Edulink_Raw_Response_Types.md#edulink_login) response                     |
| `learner_id`    | `string` | The learner_id to pass to requests, this is obtained from the [Edulink_Login](../modules/Edulink_Raw_Response_Types.md#edulink_login) response                    |
| `school_server` | `string` | The school_server to pass to requests, this is obtained from the [Edulink_SchoolDetails](../modules/Edulink_Raw_Response_Types.md#edulink_schooldetails) response |

#### Returns

`Promise`<`void`\>

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:58](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/fd6842b/src/Raw_Edulink_Requests/Edulink_Raw.ts#L58)
