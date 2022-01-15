[edulink-api](../README.md) / [Exports](../modules.md) / Edulink\_API

# Class: Edulink\_API

This class is the main API class. It is an abstracton of the [Edulink_Raw](Edulink_API.md#edulink_raw) class.
If you require more granular control over the API, you can use the [Edulink_Raw](Edulink_API.md#edulink_raw) class directly.

## Table of contents

### Constructors

- [constructor](Edulink_API.md#constructor)

### Properties

- [Edulink\_Raw](Edulink_API.md#edulink_raw)
- [Maps](Edulink_API.md#maps)
- [Raw\_Responses](Edulink_API.md#raw_responses)
- [isAuthenticated](Edulink_API.md#isauthenticated)
- [keepAlive](Edulink_API.md#keepalive)
- [userPermissions](Edulink_API.md#userpermissions)

### Methods

- [Authenticate](Edulink_API.md#authenticate)
- [Timetable](Edulink_API.md#timetable)

## Constructors

### constructor

• **new Edulink_API**()

#### Defined in

[API/API.ts:94](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/API/API.ts#L94)

## Properties

### Edulink\_Raw

• **Edulink\_Raw**: [`Edulink_Raw`](Edulink_Raw.md)

This is the [Edulink_Raw](Edulink_API.md#edulink_raw) instance that is used to make all the requests to the edulink api

#### Defined in

[API/API.ts:28](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/API/API.ts#L28)

___

### Maps

• **Maps**: `Object`

This is used to store maps from ids to objects

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `community_group_id_to_community_group` | `Map`<`string`, { `name`: `string`  }\> | Maps from community group id to community_group |
| `form_group_id_to_form_group` | `Map`<`string`, { `employee_id`: `string` ; `name`: `string` ; `room`: { `code`: `string` ; `name`: `string`  } ; `year_group_ids`: `string`[]  }\> | Maps from form group id to form_group |
| `period_id_to_lesson` | `Map`<`number`, [`Edulink_Timetable_Lesson`](../modules/Edulink_Raw_Response_Types.md#edulink_timetable_lesson)\> | Maps from period id to lesson, this is populated in {@link Edulink_API.getTimetable} |
| `room_id_to_room` | `Map`<`string`, { `code`: `string` ; `name`: `string`  }\> | Maps from room id to room |
| `teaching_group_id_to_teaching_group` | `Map`<`string`, { `employee_id`: `string` ; `name`: `string`  }\> | Maps from teaching group id to teaching_group |
| `year_group_id_to_year_group` | `Map`<`string`, { `code`: `string` ; `name`: `string`  }\> | Maps from year group id to year_group |

#### Defined in

[API/API.ts:43](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/API/API.ts#L43)

___

### Raw\_Responses

• **Raw\_Responses**: `Object`

This is used to store the raw_responses from the api calls

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Login_Raw_Response?` | [`Edulink_Login`](../modules/Edulink_Raw_Response_Types.md#edulink_login) |
| `School_FromCode_Raw_Response?` | [`School_FromCode`](../modules/Edulink_Raw_Response_Types.md#school_fromcode) |
| `Timetable_Raw_Responses` | [`Edulink_Timetable`](../modules/Edulink_Raw_Response_Types.md#edulink_timetable)[] |

#### Defined in

[API/API.ts:33](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/API/API.ts#L33)

___

### isAuthenticated

• **isAuthenticated**: `boolean`

Whether the [Edulink_API](Edulink_API.md) instance has been authenticated

#### Defined in

[API/API.ts:18](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/API/API.ts#L18)

___

### keepAlive

• **keepAlive**: `undefined` \| `Timeout`

If this is true the server will be pinged every 5 minutes to keep the session alive

#### Defined in

[API/API.ts:23](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/API/API.ts#L23)

___

### userPermissions

• **userPermissions**: `Object`

The full list of permissions the user has can be viewed in `this.Raw_Responses.Login_Raw_Response.result.capabilities`
This is defined when [Edulink_API.Authenticate](Edulink_API.md#authenticate) is called

#### Type declaration

| Name | Type |
| :------ | :------ |
| `can_change_password` | `boolean` |
| `can_create_achievement` | `boolean` |
| `can_create_behaviour` | `boolean` |
| `can_create_club` | `boolean` |
| `can_create_homework` | `boolean` |
| `can_create_messages` | `boolean` |

#### Defined in

[API/API.ts:85](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/API/API.ts#L85)

## Methods

### Authenticate

▸ **Authenticate**(`param0`, `keepAlive?`): `Promise`<[forename: string, surname: string, avatar: Object]\>

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `param0` | `Object` | `undefined` | The school_code, username and password to use to authenticate, if you don't know your school_code your school's postcode can also be used |
| `param0.password` | `string` | `undefined` | - |
| `param0.school_code` | `string` | `undefined` | - |
| `param0.username` | `string` | `undefined` | - |
| `keepAlive` | `boolean` | `false` | [Edulink_API.keepAlive](Edulink_API.md#keepalive) |

#### Returns

`Promise`<[forename: string, surname: string, avatar: Object]\>

A promise that resolves to an array of `[forename, surname, avatar]`

#### Defined in

[API/API.ts:108](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/API/API.ts#L108)

___

### Timetable

▸ **Timetable**(`startDate?`, `endDate?`, `includeOverflow?`): `Promise`<{ `date`: `string` ; `day_name`: `string` ; `lessons`: { `end_time`: `string` ; `lesson_name`: `string` ; `lesson_room`: `string` ; `period_name`: `string` ; `start_time`: `string` ; `teacher`: `string`  }[]  }[]\>

Returns the timetable of the user from a given date

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `startDate?` | `string` | `undefined` | A date in the format `YYYY-MM-DD` to start the events in the timetable from |
| `endDate?` | `string` | `undefined` | A date in the format `YYYY-MM-DD` to end the timetable in the timetable from |
| `includeOverflow` | `boolean` | `false` | Include events that are outside the end dates included because they are in the same week as the end date, this is ony used if endDate is provided |

#### Returns

`Promise`<{ `date`: `string` ; `day_name`: `string` ; `lessons`: { `end_time`: `string` ; `lesson_name`: `string` ; `lesson_room`: `string` ; `period_name`: `string` ; `start_time`: `string` ; `teacher`: `string`  }[]  }[]\>

An array of objects that represent a date and its events

#### Defined in

[API/API.ts:242](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/546b5fb/src/API/API.ts#L242)
