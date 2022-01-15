[edulink-api](../README.md) / [Exports](../modules.md) / Edulink\_Raw

# Class: Edulink\_Raw

This class houses all the raw requests to the Edulink API.
Properties that the methods require need to initialized with the [Edulink_Raw.initialize](Edulink_Raw.md#initialize) method.

## Table of contents

### Constructors

- [constructor](Edulink_Raw.md#constructor)

### Properties

- [generic\_header](Edulink_Raw.md#generic_header)
- [learner\_id](Edulink_Raw.md#learner_id)
- [school\_server](Edulink_Raw.md#school_server)

### Accessors

- [generic\_data](Edulink_Raw.md#generic_data)

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
- [Login](Edulink_Raw.md#login)
- [Logout](Edulink_Raw.md#logout)
- [Personal](Edulink_Raw.md#personal)
- [Ping](Edulink_Raw.md#ping)
- [RegisterCodes](Edulink_Raw.md#registercodes)
- [SchoolDetails](Edulink_Raw.md#schooldetails)
- [School\_FromCode](Edulink_Raw.md#school_fromcode)
- [Status](Edulink_Raw.md#status)
- [Timetable](Edulink_Raw.md#timetable)
- [initialize](Edulink_Raw.md#initialize)

## Constructors

### constructor

• **new Edulink_Raw**()

## Properties

### generic\_header

• `Private` **generic\_header**: `Object`

This houses the authentication bearer

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Authorization` | `string` |

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:49](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/Raw_Edulink_Requests/Edulink_Raw.ts#L49)

___

### learner\_id

• **learner\_id**: `string`

The ID of the current signed in user

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:39](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/Raw_Edulink_Requests/Edulink_Raw.ts#L39)

___

### school\_server

• **school\_server**: `string`

The base server that requests are made to

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:44](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/Raw_Edulink_Requests/Edulink_Raw.ts#L44)

## Accessors

### generic\_data

• `Private` `get` **generic_data**(): `Object`

This returns some fields needed in the data section of the other requests

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `jsonrpc` | `string` |
| `uuid` | `string` |

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:73](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/Raw_Edulink_Requests/Edulink_Raw.ts#L73)

## Methods

### Achievement

▸ **Achievement**(): `Promise`<[`Edulink_Achievement`](../modules/Edulink_Raw_Response_Types.md#edulink_achievement)\>

Returns the data from the `achievements` section of edulink

#### Returns

`Promise`<[`Edulink_Achievement`](../modules/Edulink_Raw_Response_Types.md#edulink_achievement)\>

A promise that resolves to the [Edulink_Achievement](../modules/Edulink_Raw_Response_Types.md#edulink_achievement) response

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:249](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/Raw_Edulink_Requests/Edulink_Raw.ts#L249)

___

### AchievementBehaviourLookups

▸ **AchievementBehaviourLookups**(): `Promise`<[`Edulink_AchievementBehaviourLookups`](../modules/Edulink_Raw_Response_Types.md#edulink_achievementbehaviourlookups)\>

Gets a look up table for the [Edulink_Achievement](../modules/Edulink_Raw_Response_Types.md#edulink_achievement) and [Edulink_Behaviour](../modules/Edulink_Raw_Response_Types.md#edulink_behaviour) responses

#### Returns

`Promise`<[`Edulink_AchievementBehaviourLookups`](../modules/Edulink_Raw_Response_Types.md#edulink_achievementbehaviourlookups)\>

A promise that resolves to the [Edulink_AchievementBehaviourLookups](../modules/Edulink_Raw_Response_Types.md#edulink_achievementbehaviourlookups) response, this is a look up table for the [Edulink_Achievement](../modules/Edulink_Raw_Response_Types.md#edulink_achievement) and [Edulink_Behaviour](../modules/Edulink_Raw_Response_Types.md#edulink_behaviour) responses

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:197](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/Raw_Edulink_Requests/Edulink_Raw.ts#L197)

___

### Attendance

▸ **Attendance**(): `Promise`<[`Edulink_Attendance`](../modules/Edulink_Raw_Response_Types.md#edulink_attendance)\>

Returns the data from the `attendance` section of edulink

#### Returns

`Promise`<[`Edulink_Attendance`](../modules/Edulink_Raw_Response_Types.md#edulink_attendance)\>

A promise that resolves to the [Edulink_Attendance](../modules/Edulink_Raw_Response_Types.md#edulink_attendance) response

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:276](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/Raw_Edulink_Requests/Edulink_Raw.ts#L276)

___

### Behaviour

▸ **Behaviour**(): `Promise`<[`Edulink_Behaviour`](../modules/Edulink_Raw_Response_Types.md#edulink_behaviour)\>

Gets the results from the `Behaviour` section of edulink

#### Returns

`Promise`<[`Edulink_Behaviour`](../modules/Edulink_Raw_Response_Types.md#edulink_behaviour)\>

A promise that resolves to the [Edulink_Behaviour](../modules/Edulink_Raw_Response_Types.md#edulink_behaviour) response

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:169](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/Raw_Edulink_Requests/Edulink_Raw.ts#L169)

___

### Catering

▸ **Catering**(): `Promise`<[`Edulink_Catering`](../modules/Edulink_Raw_Response_Types.md#edulink_catering)\>

Returns the data from the `catering` section of edulink

#### Returns

`Promise`<[`Edulink_Catering`](../modules/Edulink_Raw_Response_Types.md#edulink_catering)\>

A promise that resolves to the [Edulink_Catering](../modules/Edulink_Raw_Response_Types.md#edulink_catering) response

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:304](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/Raw_Edulink_Requests/Edulink_Raw.ts#L304)

___

### Clubs

▸ **Clubs**(`member?`): `Promise`<[`Edulink_Clubs`](../modules/Edulink_Raw_Response_Types.md#edulink_clubs)\>

Returns the data from the `clubs` section of edulink

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `member` | `boolean` | `true` | If true clubs that the learner is a member of will be returned, if false clubs that the learner is not a member of will be returned |

#### Returns

`Promise`<[`Edulink_Clubs`](../modules/Edulink_Raw_Response_Types.md#edulink_clubs)\>

A promise that resolves to the [Edulink_Clubs](../modules/Edulink_Raw_Response_Types.md#edulink_clubs) response

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:384](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/Raw_Edulink_Requests/Edulink_Raw.ts#L384)

___

### Documents

▸ **Documents**(): `Promise`<[`Edulink_Documents`](../modules/Edulink_Raw_Response_Types.md#edulink_documents)\>

Gets the results from the `documents` section of edulink

#### Returns

`Promise`<[`Edulink_Documents`](../modules/Edulink_Raw_Response_Types.md#edulink_documents)\>

A promise that resolves to the [Edulink_Documents](../modules/Edulink_Raw_Response_Types.md#edulink_documents) response

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:115](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/Raw_Edulink_Requests/Edulink_Raw.ts#L115)

___

### Exams

▸ **Exams**(): `Promise`<[`Edulink_Exams`](../modules/Edulink_Raw_Response_Types.md#edulink_exams)\>

Gets the results from the `exams` section of edulink

#### Returns

`Promise`<[`Edulink_Exams`](../modules/Edulink_Raw_Response_Types.md#edulink_exams)\>

A promise that resolves to the [Edulink_Exams](../modules/Edulink_Raw_Response_Types.md#edulink_exams) response

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:142](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/Raw_Edulink_Requests/Edulink_Raw.ts#L142)

___

### ExternalLinks

▸ **ExternalLinks**(): `Promise`<[`Edulink_ExternalLinks`](../modules/Edulink_Raw_Response_Types.md#edulink_externallinks)\>

Returns the data from the `external links` section of edulink

#### Returns

`Promise`<[`Edulink_ExternalLinks`](../modules/Edulink_Raw_Response_Types.md#edulink_externallinks)\>

A promise that resolves to the [Edulink_ExternalLinks](../modules/Edulink_Raw_Response_Types.md#edulink_externallinks) response

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:358](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/Raw_Edulink_Requests/Edulink_Raw.ts#L358)

___

### Homework

▸ **Homework**(): `Promise`<[`Edulink_Homework`](../modules/Edulink_Raw_Response_Types.md#edulink_homework)\>

Returns the data from the `Homework` section of edulink

#### Returns

`Promise`<[`Edulink_Homework`](../modules/Edulink_Raw_Response_Types.md#edulink_homework)\>

A promise that resolves to the [Edulink_Homework](../modules/Edulink_Raw_Response_Types.md#edulink_homework) response

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:331](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/Raw_Edulink_Requests/Edulink_Raw.ts#L331)

___

### Login

▸ **Login**(`username`, `password`, `establishment_id`, `server?`): `Promise`<[`Edulink_Login`](../modules/Edulink_Raw_Response_Types.md#edulink_login)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | The username that should be used for authentication |
| `password` | `string` | The password that should be used for authentication |
| `establishment_id` | `number` | The id of the establishment that the user is trying to authenticate against, this is provided in [Edulink_SchoolDetails](../modules/Edulink_Raw_Response_Types.md#edulink_schooldetails) |
| `server` | `string` | The server to authenticate with. |

#### Returns

`Promise`<[`Edulink_Login`](../modules/Edulink_Raw_Response_Types.md#edulink_login)\>

A promise that resolves to the [Edulink_Login](../modules/Edulink_Raw_Response_Types.md#edulink_login) response, this response contains important data about room and group ids

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:548](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/Raw_Edulink_Requests/Edulink_Raw.ts#L548)

___

### Logout

▸ **Logout**(): `Promise`<[`Edulink_Logout`](../modules/Edulink_Raw_Response_Types.md#edulink_logout)\>

Logs the user out of the school server, this will render most of the class useless as authentication is required for the methods to run

#### Returns

`Promise`<[`Edulink_Logout`](../modules/Edulink_Raw_Response_Types.md#edulink_logout)\>

A promise that resolves to the [Edulink_Logout](../modules/Edulink_Raw_Response_Types.md#edulink_logout) response

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:583](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/Raw_Edulink_Requests/Edulink_Raw.ts#L583)

___

### Personal

▸ **Personal**(): `Promise`<[`Edulink_Personal`](../modules/Edulink_Raw_Response_Types.md#edulink_personal)\>

Returns the data from the `personal` section of edulink

#### Returns

`Promise`<[`Edulink_Personal`](../modules/Edulink_Raw_Response_Types.md#edulink_personal)\>

A promise that resolves to the [Edulink_Personal](../modules/Edulink_Raw_Response_Types.md#edulink_personal) response

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:412](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/Raw_Edulink_Requests/Edulink_Raw.ts#L412)

___

### Ping

▸ **Ping**(): `Promise`<[`Edulink_Ping`](../modules/Edulink_Raw_Response_Types.md#edulink_ping)\>

Ping's the server to keep the session alive //TODO: See how long the default session is and how long it should be

#### Returns

`Promise`<[`Edulink_Ping`](../modules/Edulink_Raw_Response_Types.md#edulink_ping)\>

A promise that resolves to the [Edulink_Ping](../modules/Edulink_Raw_Response_Types.md#edulink_ping) response

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:608](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/Raw_Edulink_Requests/Edulink_Raw.ts#L608)

___

### RegisterCodes

▸ **RegisterCodes**(): `Promise`<[`Edulink_RegisterCodes`](../modules/Edulink_Raw_Response_Types.md#edulink_registercodes)\>

TODO: Can't remeber what this is

#### Returns

`Promise`<[`Edulink_RegisterCodes`](../modules/Edulink_Raw_Response_Types.md#edulink_registercodes)\>

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:224](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/Raw_Edulink_Requests/Edulink_Raw.ts#L224)

___

### SchoolDetails

▸ **SchoolDetails**(`school_server?`): `Promise`<[`Edulink_SchoolDetails`](../modules/Edulink_Raw_Response_Types.md#edulink_schooldetails)\>

Returns information about the login options of the school as well as the school name and id, see [Edulink_SchoolDetails](../modules/Edulink_Raw_Response_Types.md#edulink_schooldetails)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `school_server` | `string` | The `school_server` to query information about |

#### Returns

`Promise`<[`Edulink_SchoolDetails`](../modules/Edulink_Raw_Response_Types.md#edulink_schooldetails)\>

information about the login options of the school as well as the school name and id, see [Edulink_SchoolDetails](../modules/Edulink_Raw_Response_Types.md#edulink_schooldetails)

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:493](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/Raw_Edulink_Requests/Edulink_Raw.ts#L493)

___

### School\_FromCode

▸ **School_FromCode**(`school_code`, `server?`): `Promise`<[`School_FromCode`](../modules/Edulink_Raw_Response_Types.md#school_fromcode)\>

Returns a response that contains the school_code of a school from the school_server

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `school_code` | `string` | `undefined` |  |
| `server` | `string` | `'https://provisioning.edulinkone.com/'` | The server to use to find the school_code. This should always be the default unless you're debugging or something. |

#### Returns

`Promise`<[`School_FromCode`](../modules/Edulink_Raw_Response_Types.md#school_fromcode)\>

A promise that resolves to a response object that contains the school code and server.

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:523](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/Raw_Edulink_Requests/Edulink_Raw.ts#L523)

___

### Status

▸ **Status**(): `Promise`<[`Edulink_Status`](../modules/Edulink_Raw_Response_Types.md#edulink_status)\>

Returns the current status of the user sign in as well as info about the user's upcoming whereabouts, see [Edulink_Status](../modules/Edulink_Raw_Response_Types.md#edulink_status)

#### Returns

`Promise`<[`Edulink_Status`](../modules/Edulink_Raw_Response_Types.md#edulink_status)\>

A promise that resolves to the [Edulink_Status](../modules/Edulink_Raw_Response_Types.md#edulink_status) response

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:439](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/Raw_Edulink_Requests/Edulink_Raw.ts#L439)

___

### Timetable

▸ **Timetable**(`date`): `Promise`<[`Edulink_Timetable`](../modules/Edulink_Raw_Response_Types.md#edulink_timetable)\>

Gets the timetable for the current user from a given date

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `string` | should be in format: YYYY-MM-DD, this is the start date of the range by default edulink will return 16 days of data //TODO: Fact check this is always true |

#### Returns

`Promise`<[`Edulink_Timetable`](../modules/Edulink_Raw_Response_Types.md#edulink_timetable)\>

A promise that resolves to the [Edulink_Attendance](../modules/Edulink_Raw_Response_Types.md#edulink_attendance) response

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:87](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/Raw_Edulink_Requests/Edulink_Raw.ts#L87)

___

### initialize

▸ **initialize**(`authtoken`, `learner_id`, `school_server`): `Promise`<`void`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `authtoken` | `string` | The authtoken to pass to requests, this is obtained from the [Edulink_Login](../modules/Edulink_Raw_Response_Types.md#edulink_login) response |
| `learner_id` | `string` | The learner_id to pass to requests, this is obtained from the [Edulink_Login](../modules/Edulink_Raw_Response_Types.md#edulink_login) response |
| `school_server` | `string` | The school_server to pass to requests, this is obtained from the [Edulink_SchoolDetails](../modules/Edulink_Raw_Response_Types.md#edulink_schooldetails) response |

#### Returns

`Promise`<`void`\>

#### Defined in

[Raw_Edulink_Requests/Edulink_Raw.ts:57](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/Raw_Edulink_Requests/Edulink_Raw.ts#L57)
