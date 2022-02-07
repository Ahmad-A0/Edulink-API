[edulink-api](../README.md) / [Exports](../modules.md) / Edulink\_Raw\_Response\_Types

# Namespace: Edulink\_Raw\_Response\_Types

## Table of contents

### Type aliases

- [Communicator\_Inbox](Edulink_Raw_Response_Types.md#communicator_inbox)
- [Communicator\_Outbox](Edulink_Raw_Response_Types.md#communicator_outbox)
- [Edulink\_Achievement](Edulink_Raw_Response_Types.md#edulink_achievement)
- [Edulink\_AchievementBehaviourLookups](Edulink_Raw_Response_Types.md#edulink_achievementbehaviourlookups)
- [Edulink\_AssessmentGrids](Edulink_Raw_Response_Types.md#edulink_assessmentgrids)
- [Edulink\_Attendance](Edulink_Raw_Response_Types.md#edulink_attendance)
- [Edulink\_Behaviour](Edulink_Raw_Response_Types.md#edulink_behaviour)
- [Edulink\_Calendar](Edulink_Raw_Response_Types.md#edulink_calendar)
- [Edulink\_Catering](Edulink_Raw_Response_Types.md#edulink_catering)
- [Edulink\_Clubs](Edulink_Raw_Response_Types.md#edulink_clubs)
- [Edulink\_DataCollectionLookups](Edulink_Raw_Response_Types.md#edulink_datacollectionlookups)
- [Edulink\_DataCollectionValues](Edulink_Raw_Response_Types.md#edulink_datacollectionvalues)
- [Edulink\_Documents](Edulink_Raw_Response_Types.md#edulink_documents)
- [Edulink\_Exams](Edulink_Raw_Response_Types.md#edulink_exams)
- [Edulink\_ExternalLinks](Edulink_Raw_Response_Types.md#edulink_externallinks)
- [Edulink\_Homework](Edulink_Raw_Response_Types.md#edulink_homework)
- [Edulink\_ICalendars](Edulink_Raw_Response_Types.md#edulink_icalendars)
- [Edulink\_Login](Edulink_Raw_Response_Types.md#edulink_login)
- [Edulink\_Logout](Edulink_Raw_Response_Types.md#edulink_logout)
- [Edulink\_Noticeboard](Edulink_Raw_Response_Types.md#edulink_noticeboard)
- [Edulink\_Personal](Edulink_Raw_Response_Types.md#edulink_personal)
- [Edulink\_Ping](Edulink_Raw_Response_Types.md#edulink_ping)
- [Edulink\_RegisterCodes](Edulink_Raw_Response_Types.md#edulink_registercodes)
- [Edulink\_SchoolDetails](Edulink_Raw_Response_Types.md#edulink_schooldetails)
- [Edulink\_Status](Edulink_Raw_Response_Types.md#edulink_status)
- [Edulink\_TeacherPhotos](Edulink_Raw_Response_Types.md#edulink_teacherphotos)
- [Edulink\_Timetable](Edulink_Raw_Response_Types.md#edulink_timetable)
- [Edulink\_Timetable\_Day](Edulink_Raw_Response_Types.md#edulink_timetable_day)
- [Edulink\_Timetable\_Lesson](Edulink_Raw_Response_Types.md#edulink_timetable_lesson)
- [Edulink\_Timetable\_Period](Edulink_Raw_Response_Types.md#edulink_timetable_period)
- [School\_FromCode](Edulink_Raw_Response_Types.md#school_fromcode)

## Type aliases

### Communicator\_Inbox

Ƭ **Communicator\_Inbox**: `Object`

Communicator Inbox

**`alias`** Communicator_Inbox

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `jsonrpc` | `string` |
| `result` | `Object` |
| `result.messages` | { `attachments`: `any`[] ; `body`: `string` ; `date`: `string` ; `id`: `number` ; `read`: `string` ; `sender`: { `id`: `string` ; `name`: `string` ; `type`: `string`  } ; `subject`: `string` ; `type`: `string`  }[] |
| `result.method` | `string` |
| `result.metrics` | `Object` |
| `result.metrics.sspt` | `number` |
| `result.metrics.st` | `string` |
| `result.pagination` | `Object` |
| `result.pagination.current_page` | `number` |
| `result.pagination.total_pages` | `number` |
| `result.pagination.total_records` | `number` |
| `result.success` | `boolean` |

#### Defined in

[Raw_Edulink_Response_Types/Communicator_Inbox.ts:5](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Communicator_Inbox.ts#L5)

___

### Communicator\_Outbox

Ƭ **Communicator\_Outbox**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `jsonrpc` | `string` |
| `result` | `Object` |
| `result.messages` | { `attachments`: `any`[] ; `body`: `string` ; `date`: `string` ; `id`: `number` ; `read`: `string` ; `sender`: { `id`: `string` ; `name`: `string` ; `type`: `string`  } ; `subject`: `string` ; `type`: `string`  }[] |
| `result.method` | `string` |
| `result.metrics` | `Object` |
| `result.metrics.sspt` | `number` |
| `result.metrics.st` | `string` |
| `result.pagination` | `Object` |
| `result.pagination.current_page` | `number` |
| `result.pagination.total_pages` | `number` |
| `result.pagination.total_records` | `number` |
| `result.success` | `boolean` |

#### Defined in

[Raw_Edulink_Response_Types/Communicator_Outbox.ts:1](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Communicator_Outbox.ts#L1)

___

### Edulink\_Achievement

Ƭ **Edulink\_Achievement**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `jsonrpc` | `string` |
| `result` | `Object` |
| `result.achievement` | { `activity_id`: `number` ; `comments`: `string` ; `date`: `string` ; `id`: `number` ; `points`: `number` ; `recorded`: { `date`: `string` ; `employee_id`: `string`  } ; `type_ids`: `number`[]  }[] |
| `result.employees` | { `forename`: `string` ; `id`: `string` ; `surname`: `string` ; `title`: `string`  }[] |
| `result.method` | `string` |
| `result.success` | `boolean` |

#### Defined in

[Raw_Edulink_Response_Types/Edulink_Achievement.ts:1](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Edulink_Achievement.ts#L1)

___

### Edulink\_AchievementBehaviourLookups

Ƭ **Edulink\_AchievementBehaviourLookups**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `jsonrpc` | `string` |
| `result` | `Object` |
| `result.achievement_activity_types` | { `active`: `boolean` ; `code`: `string` ; `description`: `string` ; `id`: `number`  }[] |
| `result.achievement_award_types` | { `id`: `number` ; `name`: `string`  }[] |
| `result.achievement_hidden_fields_on_entry` | [] |
| `result.achievement_points_editable` | `boolean` |
| `result.achievement_require_fields` | [] |
| `result.achievement_types` | { `active`: `boolean` ; `code`: `string` ; `description`: `string` ; `id`: `number` ; `points`: `number` ; `position`: `number` ; `system`: `boolean`  }[] |
| `result.behaviour_actions_taken` | { `id`: `number` ; `name`: `string`  }[] |
| `result.behaviour_activity_types` | { `active`: `boolean` ; `code`: `string` ; `description`: `string` ; `id`: `number`  }[] |
| `result.behaviour_bullying_types` | { `id`: `number` ; `name`: `string`  }[] |
| `result.behaviour_hidden_fields_on_entry` | [] |
| `result.behaviour_locations` | { `id`: `number` ; `name`: `string`  }[] |
| `result.behaviour_points_editable` | `boolean` |
| `result.behaviour_require_fields` | [] |
| `result.behaviour_statuses` | { `id`: `number` ; `name`: `string`  }[] |
| `result.behaviour_times` | { `id`: `number` ; `name`: `string`  }[] |
| `result.behaviour_types` | { `active`: `boolean` ; `code`: `string` ; `description`: `string` ; `id`: `number` ; `include_in_register`: `boolean` ; `is_bullying_type`: `boolean` ; `points`: `number` ; `position`: `number` ; `system`: `boolean`  }[] |
| `result.detentionmanagement_enabled` | `boolean` |
| `result.method` | `string` |
| `result.metrics` | `Object` |
| `result.metrics.sspt` | `number` |
| `result.metrics.sspt_us` | `number` |
| `result.metrics.st` | `string` |
| `result.metrics.uniqid` | `string` |
| `result.success` | `boolean` |

#### Defined in

[Raw_Edulink_Response_Types/Edulink_AchievementBehaviourLookups.ts:1](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Edulink_AchievementBehaviourLookups.ts#L1)

___

### Edulink\_AssessmentGrids

Ƭ **Edulink\_AssessmentGrids**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `jsonrpc` | `string` |
| `result` | `Object` |
| `result.assessment` | { `applies_this_year`: `boolean` ; `applies_to_year_id`: `string` ; `authorid`: ``"object"`` ; `footer`: `string` ; `header`: `string` ; `name`: `string` ; `resultstable`: [{ `content`: `string` ; `css`: `string` ; `name`: `string` ; `visible`: `boolean`  }[]][]  }[] |
| `result.html` | `string` |
| `result.method` | `string` |
| `result.success` | `boolean` |

#### Defined in

[Raw_Edulink_Response_Types/Edulink_AssessmentGrids.ts:1](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Edulink_AssessmentGrids.ts#L1)

___

### Edulink\_Attendance

Ƭ **Edulink\_Attendance**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `jsonrpc` | `string` |
| `result` | `Object` |
| `result.lesson` | { `subject`: `string` ; `values`: { `absent`: `number` ; `late`: `number` ; `present`: `number` ; `unauthorised`: `number`  }  }[] |
| `result.lesson_end_date` | `string` |
| `result.method` | `string` |
| `result.metrics` | `Object` |
| `result.metrics.sspt` | `number` |
| `result.show_lesson` | `boolean` |
| `result.show_statutory` | `boolean` |
| `result.show_today` | `boolean` |
| `result.statutory` | { `exceptions`: { `date`: `string` ; `description`: `string` ; `period`: `string` ; `type`: `string`  }[] ; `month`: `string` ; `values`: { `absent`: `number` ; `present`: `number` ; `unauthorised`: `number`  }  }[] |
| `result.statutory_end_date` | `string` |
| `result.success` | `boolean` |
| `result.today` | `Object` |
| `result.today.clubs` | { `club_id`: `number` ; `club_location`: `string` ; `club_name`: `string` ; `end_time`: `string` ; `present`: `boolean` ; `session_id`: `number` ; `start_time`: `string`  }[] |
| `result.today.lessons` | { `lesson_mark_code`: `string` ; `mark`: { `active`: `boolean` ; `code`: `string` ; `is_authorised_absence`: `boolean` ; `is_late`: `boolean` ; `is_statistical`: `boolean` ; `name`: `string` ; `present`: `boolean` ; `type`: `string`  } ; `period`: { `description`: `string` ; `end_time`: `string` ; `id`: `number` ; `start_time`: `string`  } ; `teachers`: { `forename`: `string` ; `id`: `string` ; `surname`: `string` ; `title`: `string`  }[] ; `teaching_group`: { `id`: `string` ; `name`: `string` ; `subject`: `string`  }  }[] |
| `result.today.sessions` | { `date`: `string` ; `mark`: { `active`: `boolean` ; `code`: `string` ; `is_authorised_absence`: `boolean` ; `is_late`: `boolean` ; `is_statistical`: `boolean` ; `name`: `string` ; `present`: `boolean` ; `type`: `string`  } ; `minutes_late`: `number` ; `session`: `string` ; `session_mark_code`: `string`  }[] |

#### Defined in

[Raw_Edulink_Response_Types/Edulink_Attendance.ts:1](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Edulink_Attendance.ts#L1)

___

### Edulink\_Behaviour

Ƭ **Edulink\_Behaviour**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `jsonrpc` | `string` |
| `result` | `Object` |
| `result.b4l` | [{ `subject`: `string` ; `values`: { [key in "1" \| "2" \| "3" \| "4" \| "5" \| "6" \| "7" \| "8" \| "9" \| "-" \| "/"]?: number }  }] |
| `result.behaviour` | { `activity_id`: `number` ; `bullying_type_id`: ``"object"`` ; `comments`: `string` ; `date`: `string` ; `id`: `number` ; `lesson_information`: `string` ; `location_id`: ``"object"`` ; `points`: `number` ; `recorded`: { `date`: `string` ; `employee_id`: `string`  } ; `status_id`: `number` ; `time_id`: ``"object"`` ; `type_ids`: `number`[]  }[] |
| `result.detentions` | { `attended`: `string` ; `date`: `string` ; `description`: `string` ; `end_time`: `string` ; `id`: `number` ; `location`: `string` ; `non_attendance_reason`: `string` ; `start_time`: `string`  }[] |
| `result.employees` | { `forename`: `string` ; `id`: `string` ; `surname`: `string` ; `title`: `string`  }[] |
| `result.hide_fields` | `string`[] |
| `result.method` | `string` |
| `result.metrics` | `Object` |
| `result.metrics.sspt` | `number` |
| `result.metrics.sspt_us` | `number` |
| `result.metrics.st` | `string` |
| `result.metrics.uniqid` | `string` |
| `result.report_cards` | { `active`: `boolean` ; `behaviour_incident_type_id`: `number` ; `comments`: `string` ; `current`: `boolean` ; `end_date`: `string` ; `id`: `number` ; `start_date`: `string`  }[] |
| `result.success` | `boolean` |

#### Defined in

[Raw_Edulink_Response_Types/Edulink_Behaviour.ts:1](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Edulink_Behaviour.ts#L1)

___

### Edulink\_Calendar

Ƭ **Edulink\_Calendar**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `jsonrpc` | `string` |
| `result` | `Object` |
| `result.calendar` | { `all_day_event`: `boolean` ; `description`: `string` ; `duration`: `string` ; `end_date`: `string` ; `notes`: `string` ; `start_date`: `string`  }[] |
| `result.method` | `string` |
| `result.success` | `boolean` |

#### Defined in

[Raw_Edulink_Response_Types/Edulink_Calendar.ts:1](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Edulink_Calendar.ts#L1)

___

### Edulink\_Catering

Ƭ **Edulink\_Catering**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `jsonrpc` | `string` |
| `result` | `Object` |
| `result.balance` | `number` |
| `result.method` | `string` |
| `result.success` | `boolean` |
| `result.transactions` | { `balance`: `number` ; `date`: `string` ; `id`: `number` ; `items`: { `item`: `string` ; `price`: `number`  }[]  }[] |

#### Defined in

[Raw_Edulink_Response_Types/Edulink_Catering.ts:1](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Edulink_Catering.ts#L1)

___

### Edulink\_Clubs

Ƭ **Edulink\_Clubs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `jsonrpc` | `string` |
| `result` | `Object` |
| `result.clubs` | { `capacity`: { `bookings`: `number` ; `maximum`: `number`  } ; `description`: `string` ; `id`: `number` ; `location`: `string` ; `name`: `string` ; `next_session`: `string`  }[] |
| `result.method` | `string` |
| `result.metrics` | `Object` |
| `result.metrics.sspt` | `number` |
| `result.metrics.st` | `string` |
| `result.metrics.uniqid` | `string` |
| `result.success` | `boolean` |

#### Defined in

[Raw_Edulink_Response_Types/Edulink_Clubs.ts:1](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Edulink_Clubs.ts#L1)

___

### Edulink\_DataCollectionLookups

Ƭ **Edulink\_DataCollectionLookups**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `jsonrpc` | `string` |
| `result` | `Object` |
| `result.address_country` | { `active`: `boolean` ; `description`: `string` ; `id`: `number`  }[] |
| `result.address_type` | `Object` |
| `result.address_type.contact` | `string`[] |
| `result.address_type.employee` | `string`[] |
| `result.address_type.learner` | `string`[] |
| `result.address_validate_available` | `boolean` |
| `result.dietary_need` | { `active`: `boolean` ; `description`: `string` ; `id`: `number`  }[] |
| `result.disability_type` | { `active`: `boolean` ; `description`: `string` ; `id`: `number`  }[] |
| `result.emails` | `Object` |
| `result.emails.location` | `string`[] |
| `result.ethnicity` | { `active`: `boolean` ; `description`: `string` ; `id`: `number`  }[] |
| `result.first_language` | { `active`: `boolean` ; `description`: `string` ; `id`: `number`  }[] |
| `result.gender` | { `active`: `boolean` ; `description`: `string` ; `id`: `number`  }[] |
| `result.home_language` | { `active`: `boolean` ; `description`: `string` ; `id`: `number`  }[] |
| `result.meal_type` | { `active`: `boolean` ; `description`: `string` ; `id`: `number`  }[] |
| `result.medical_condition` | { `active`: `boolean` ; `description`: `string` ; `id`: `number`  }[] |
| `result.medical_practice` | { `active`: `boolean` ; `description`: `string` ; `id`: `number`  }[] |
| `result.method` | `string` |
| `result.metrics` | `Object` |
| `result.metrics.sspt` | `number` |
| `result.metrics.st` | `string` |
| `result.national_identity` | { `active`: `boolean` ; `description`: `string` ; `id`: `number`  }[] |
| `result.parental_consent` | { `description`: `string` ; `id`: `number`  }[] |
| `result.relation_type` | { `active`: `boolean` ; `description`: `string` ; `id`: `number`  }[] |
| `result.religion` | { `active`: `boolean` ; `description`: `string` ; `id`: `number`  }[] |
| `result.route` | { `active`: `boolean` ; `description`: `string` ; `id`: `number`  }[] |
| `result.speak_welsh` | { `active`: `boolean` ; `description`: `string` ; `id`: `number`  }[] |
| `result.success` | `boolean` |
| `result.telephones` | `Object` |
| `result.telephones.location` | `string`[] |
| `result.title` | `string` |
| `result.travel_mode` | { `active`: `boolean` ; `description`: `string` ; `id`: `number`  }[] |

#### Defined in

[Raw_Edulink_Response_Types/Edulink_DataCollectionLookups.ts:1](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Edulink_DataCollectionLookups.ts#L1)

___

### Edulink\_DataCollectionValues

Ƭ **Edulink\_DataCollectionValues**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `jsonrpc` | `string` |
| `result` | `Object` |
| `result.category_info` | `Object` |
| `result.category_info.Basic` | `string` |
| `result.fields` | `Object` |
| `result.fields.addresses` | `Object` |
| `result.fields.addresses.category` | `string` |
| `result.fields.addresses.data` | { `address_id`: `number` ; `apartment`: `string` ; `country_id`: `number` ; `county`: `string` ; `district`: `string` ; `house_name`: `string` ; `house_number`: `string` ; `post_code`: `string` ; `street`: `string` ; `town`: `string` ; `type`: `string`  }[] |
| `result.fields.addresses.in_review` | `boolean` |
| `result.fields.addresses.label` | `string` |
| `result.fields.addresses.read_only` | `boolean` |
| `result.fields.addresses.type` | `string` |
| `result.fields.date_of_birth` | `Object` |
| `result.fields.date_of_birth.category` | `string` |
| `result.fields.date_of_birth.data` | `string` |
| `result.fields.date_of_birth.in_review` | `boolean` |
| `result.fields.date_of_birth.label` | `string` |
| `result.fields.date_of_birth.read_only` | `boolean` |
| `result.fields.date_of_birth.type` | `string` |
| `result.fields.dietary_needs` | `Object` |
| `result.fields.dietary_needs.category` | `string` |
| `result.fields.dietary_needs.data` | { `id`: `number`  }[] |
| `result.fields.dietary_needs.in_review` | `boolean` |
| `result.fields.dietary_needs.label` | `string` |
| `result.fields.dietary_needs.lookup_key` | `string` |
| `result.fields.dietary_needs.read_only` | `boolean` |
| `result.fields.dietary_needs.type` | `string` |
| `result.fields.disabilities` | `Object` |
| `result.fields.disabilities.category` | `string` |
| `result.fields.disabilities.data` | [] |
| `result.fields.disabilities.in_review` | `boolean` |
| `result.fields.disabilities.label` | `string` |
| `result.fields.disabilities.lookup_key` | `string` |
| `result.fields.disabilities.read_only` | `boolean` |
| `result.fields.disabilities.type` | `string` |
| `result.fields.emails` | `Object` |
| `result.fields.emails.category` | `string` |
| `result.fields.emails.data` | { `address`: `string` ; `location`: `string` ; `main`: `boolean` ; `primary`: `boolean`  }[] |
| `result.fields.emails.in_review` | `boolean` |
| `result.fields.emails.label` | `string` |
| `result.fields.emails.read_only` | `boolean` |
| `result.fields.emails.type` | `string` |
| `result.fields.ethnicity_id` | `Object` |
| `result.fields.ethnicity_id.category` | `string` |
| `result.fields.ethnicity_id.data` | `number` |
| `result.fields.ethnicity_id.in_review` | `boolean` |
| `result.fields.ethnicity_id.label` | `string` |
| `result.fields.ethnicity_id.lookup_key` | `string` |
| `result.fields.ethnicity_id.read_only` | `boolean` |
| `result.fields.ethnicity_id.type` | `string` |
| `result.fields.family_contacts` | `Object` |
| `result.fields.family_contacts.category` | `string` |
| `result.fields.family_contacts.data` | { `correspondence`: `boolean` ; `forename`: `string` ; `id`: `number` ; `main_telephone`: `boolean` ; `parental_responsibility`: `boolean` ; `priority`: `number` ; `relationship`: { `description`: `string` ; `id`: `number`  } ; `surname`: `string`  }[] |
| `result.fields.family_contacts.in_review` | `boolean` |
| `result.fields.family_contacts.label` | `string` |
| `result.fields.family_contacts.read_only` | `boolean` |
| `result.fields.family_contacts.type` | `string` |
| `result.fields.first_language_id` | `Object` |
| `result.fields.first_language_id.category` | `string` |
| `result.fields.first_language_id.data` | `number` |
| `result.fields.first_language_id.in_review` | `boolean` |
| `result.fields.first_language_id.label` | `string` |
| `result.fields.first_language_id.lookup_key` | `string` |
| `result.fields.first_language_id.read_only` | `boolean` |
| `result.fields.first_language_id.type` | `string` |
| `result.fields.home_language_id` | `Object` |
| `result.fields.home_language_id.category` | `string` |
| `result.fields.home_language_id.data` | `number` |
| `result.fields.home_language_id.in_review` | `boolean` |
| `result.fields.home_language_id.label` | `string` |
| `result.fields.home_language_id.lookup_key` | `string` |
| `result.fields.home_language_id.read_only` | `boolean` |
| `result.fields.home_language_id.type` | `string` |
| `result.fields.legal_forename` | `Object` |
| `result.fields.legal_forename.category` | `string` |
| `result.fields.legal_forename.data` | `string` |
| `result.fields.legal_forename.in_review` | `boolean` |
| `result.fields.legal_forename.label` | `string` |
| `result.fields.legal_forename.read_only` | `boolean` |
| `result.fields.legal_forename.type` | `string` |
| `result.fields.legal_surname` | `Object` |
| `result.fields.legal_surname.category` | `string` |
| `result.fields.legal_surname.data` | `string` |
| `result.fields.legal_surname.in_review` | `boolean` |
| `result.fields.legal_surname.label` | `string` |
| `result.fields.legal_surname.read_only` | `boolean` |
| `result.fields.legal_surname.type` | `string` |
| `result.fields.medical_conditions` | `Object` |
| `result.fields.medical_conditions.category` | `string` |
| `result.fields.medical_conditions.data` | { `id`: `number`  }[] |
| `result.fields.medical_conditions.in_review` | `boolean` |
| `result.fields.medical_conditions.label` | `string` |
| `result.fields.medical_conditions.lookup_key` | `string` |
| `result.fields.medical_conditions.read_only` | `boolean` |
| `result.fields.medical_conditions.type` | `string` |
| `result.fields.medical_practices` | `Object` |
| `result.fields.medical_practices.category` | `string` |
| `result.fields.medical_practices.data` | [] |
| `result.fields.medical_practices.in_review` | `boolean` |
| `result.fields.medical_practices.label` | `string` |
| `result.fields.medical_practices.lookup_key` | `string` |
| `result.fields.medical_practices.read_only` | `boolean` |
| `result.fields.medical_practices.type` | `string` |
| `result.fields.national_identity_id` | `Object` |
| `result.fields.national_identity_id.category` | `string` |
| `result.fields.national_identity_id.data` | `number` |
| `result.fields.national_identity_id.in_review` | `boolean` |
| `result.fields.national_identity_id.label` | `string` |
| `result.fields.national_identity_id.lookup_key` | `string` |
| `result.fields.national_identity_id.read_only` | `boolean` |
| `result.fields.national_identity_id.type` | `string` |
| `result.fields.parental_consents` | `Object` |
| `result.fields.parental_consents.category` | `string` |
| `result.fields.parental_consents.data` | { `id`: `number`  }[] |
| `result.fields.parental_consents.in_review` | `boolean` |
| `result.fields.parental_consents.label` | `string` |
| `result.fields.parental_consents.lookup_key` | `string` |
| `result.fields.parental_consents.read_only` | `boolean` |
| `result.fields.parental_consents.type` | `string` |
| `result.fields.preferred_forename` | `Object` |
| `result.fields.preferred_forename.category` | `string` |
| `result.fields.preferred_forename.data` | `string` |
| `result.fields.preferred_forename.in_review` | `boolean` |
| `result.fields.preferred_forename.label` | `string` |
| `result.fields.preferred_forename.read_only` | `boolean` |
| `result.fields.preferred_forename.type` | `string` |
| `result.fields.preferred_surname` | `Object` |
| `result.fields.preferred_surname.category` | `string` |
| `result.fields.preferred_surname.data` | `string` |
| `result.fields.preferred_surname.in_review` | `boolean` |
| `result.fields.preferred_surname.label` | `string` |
| `result.fields.preferred_surname.read_only` | `boolean` |
| `result.fields.preferred_surname.type` | `string` |
| `result.fields.religion_id` | `Object` |
| `result.fields.religion_id.category` | `string` |
| `result.fields.religion_id.data` | ``"object"`` |
| `result.fields.religion_id.in_review` | `boolean` |
| `result.fields.religion_id.label` | `string` |
| `result.fields.religion_id.lookup_key` | `string` |
| `result.fields.religion_id.read_only` | `boolean` |
| `result.fields.religion_id.type` | `string` |
| `result.fields.route_id` | `Object` |
| `result.fields.route_id.category` | `string` |
| `result.fields.route_id.data` | `number` |
| `result.fields.route_id.in_review` | `boolean` |
| `result.fields.route_id.label` | `string` |
| `result.fields.route_id.lookup_key` | `string` |
| `result.fields.route_id.read_only` | `boolean` |
| `result.fields.route_id.type` | `string` |
| `result.fields.telephones` | `Object` |
| `result.fields.telephones.category` | `string` |
| `result.fields.telephones.data` | { `location`: `string` ; `main`: `boolean` ; `number`: `string` ; `primary`: `boolean`  }[] |
| `result.fields.telephones.in_review` | `boolean` |
| `result.fields.telephones.label` | `string` |
| `result.fields.telephones.read_only` | `boolean` |
| `result.fields.telephones.type` | `string` |
| `result.fields.travel_mode_id` | `Object` |
| `result.fields.travel_mode_id.category` | `string` |
| `result.fields.travel_mode_id.data` | `number` |
| `result.fields.travel_mode_id.in_review` | `boolean` |
| `result.fields.travel_mode_id.label` | `string` |
| `result.fields.travel_mode_id.lookup_key` | `string` |
| `result.fields.travel_mode_id.read_only` | `boolean` |
| `result.fields.travel_mode_id.type` | `string` |
| `result.fields.weekly_meal_pattern` | `Object` |
| `result.fields.weekly_meal_pattern.category` | `string` |
| `result.fields.weekly_meal_pattern.data` | { `day_of_week`: `string` ; `meal_type_id`: ``null`` \| `number`  }[] |
| `result.fields.weekly_meal_pattern.in_review` | `boolean` |
| `result.fields.weekly_meal_pattern.label` | `string` |
| `result.fields.weekly_meal_pattern.lookup_key` | `string` |
| `result.fields.weekly_meal_pattern.read_only` | `boolean` |
| `result.fields.weekly_meal_pattern.type` | `string` |
| `result.method` | `string` |
| `result.metrics` | `Object` |
| `result.metrics.sspt` | `number` |
| `result.metrics.st` | `string` |
| `result.next_method` | `string` |
| `result.param` | `Object` |
| `result.param.learner_id` | `string` |
| `result.success` | `boolean` |

#### Defined in

[Raw_Edulink_Response_Types/Edulink_DataCollectionValues.ts:1](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Edulink_DataCollectionValues.ts#L1)

___

### Edulink\_Documents

Ƭ **Edulink\_Documents**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `jsonrpc` | `string` |
| `result` | `Object` |
| `result.documents` | { `_comment`: `string` ; `content`: `string` ; `filename`: `string` ; `id`: `string` ; `last_updated`: `string` ; `note`: `string` ; `status`: `string` ; `summary`: `string` ; `type`: `string`  }[] |
| `result.method` | `string` |
| `result.success` | `boolean` |

#### Defined in

[Raw_Edulink_Response_Types/Edulink_Documents.ts:1](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Edulink_Documents.ts#L1)

___

### Edulink\_Exams

Ƭ **Edulink\_Exams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `jsonrpc` | `string` |
| `result` | `Object` |
| `result.countdown` | `Object` |
| `result.countdown.exam` | `string` |
| `result.countdown.minutes_to_go` | `number` |
| `result.countdown.template` | `string` |
| `result.entries` | { `board`: `string` ; `code`: `string` ; `level`: `string` ; `season`: `string` ; `title`: `string`  }[] |
| `result.method` | `string` |
| `result.results` | { `board`: `string` ; `certificate`: `boolean` ; `code`: `string` ; `date`: `string` ; `equivalent`: `string` ; `level`: `string` ; `result`: `string` ; `title`: `string`  }[] |
| `result.show_countdown` | `boolean` |
| `result.show_entries` | `boolean` |
| `result.show_results` | `boolean` |
| `result.show_timetable` | `boolean` |
| `result.success` | `boolean` |
| `result.timetable` | { `board`: `string` ; `code`: `string` ; `datetime`: `string` ; `duration`: `string` ; `level`: `string` ; `room`: `string` ; `seat`: `string` ; `title`: `string`  }[] |

#### Defined in

[Raw_Edulink_Response_Types/Edulink_Exams.ts:1](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Edulink_Exams.ts#L1)

___

### Edulink\_ExternalLinks

Ƭ **Edulink\_ExternalLinks**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `jsonrpc` | `string` |
| `result` | `Object` |
| `result.links` | { `icon`: `string` ; `id`: `number` ; `name`: `string` ; `position`: `number` ; `url`: `string`  }[] |
| `result.method` | `string` |
| `result.metrics` | `Object` |
| `result.metrics.sspt` | `number` |
| `result.metrics.st` | `string` |
| `result.metrics.uniqid` | `string` |
| `result.success` | `boolean` |

#### Defined in

[Raw_Edulink_Response_Types/Edulink_ExternalLinks.ts:1](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Edulink_ExternalLinks.ts#L1)

___

### Edulink\_Homework

Ƭ **Edulink\_Homework**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `jsonrpc` | `string` |
| `result` | `Object` |
| `result.error?` | `string` |
| `result.hidden_fields` | [] |
| `result.homework` | `Object` |
| `result.homework.current` | { `activity`: `string` ; `available_date`: `string` ; `cloneable`: `boolean` ; `completed`: `boolean` ; `deletable`: `boolean` ; `description`: `string` ; `due_date`: `string` ; `due_reminder`: `string` ; `due_text`: `string` ; `icon`: `string` ; `id`: `number` ; `set_by`: `string` ; `source`: `string` ; `status`: `string` ; `subject`: `string`  }[] |
| `result.homework.past` | { `activity`: `string` ; `available_date`: `string` ; `cloneable`: `boolean` ; `completed`: `boolean` ; `deletable`: `boolean` ; `description`: `string` ; `due_date`: `string` ; `due_reminder`: `string` ; `due_text`: `string` ; `icon`: `string` ; `id`: `number` ; `set_by`: `string` ; `source`: `string` ; `status`: `string` ; `subject`: `string`  }[] |
| `result.homework.report` | { `group_id`: `string` ; `learners`: { `completion_percent`: `number` ; `homeworks`: { `activity`: `string` ; `attachments`: [] ; `available_date`: `string` ; `cloneable`: `boolean` ; `completed`: `boolean` ; `deletable`: `boolean` ; `due_date`: `string` ; `due_text`: `string` ; `format`: `number` ; `id`: `number` ; `set_by`: `string` ; `source`: `string` ; `subject`: `string` ; `subject_id`: `number`  }[] ; `homeworks_complete`: `number` ; `homeworks_count`: `number` ; `homeworks_number`: `number` ; `learner_id`: `string`  }[] ; `name`: `string` ; `subject`: `string`  }[] |
| `result.method` | `string` |
| `result.metrics` | `Object` |
| `result.metrics.sspt` | `number` |
| `result.metrics.st` | `string` |
| `result.success` | `boolean` |

#### Defined in

[Raw_Edulink_Response_Types/Edulink_Homework.ts:1](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Edulink_Homework.ts#L1)

___

### Edulink\_ICalendars

Ƭ **Edulink\_ICalendars**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `jsonrpc` | `string` |
| `result` | `Object` |
| `result.exports` | `Object` |
| `result.exports.children` | [] |
| `result.exports.personal` | { `description`: `string` ; `enabled`: `boolean` ; `type`: `string` ; `url`: `string`  }[] |
| `result.imports` | { `description`: `string` ; `fetch_completed`: `string` ; `id`: `number` ; `owner`: `string` ; `url`: `string` ; `user_types`: `string`[]  }[] |
| `result.method` | `string` |
| `result.metrics` | `Object` |
| `result.metrics.sspt` | `number` |
| `result.metrics.st` | `string` |
| `result.success` | `boolean` |

#### Defined in

[Raw_Edulink_Response_Types/Edulink_ICalendars.ts:1](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Edulink_ICalendars.ts#L1)

___

### Edulink\_Login

Ƭ **Edulink\_Login**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `jsonrpc` | `string` |
| `result` | `Object` |
| `result.analytics_enabled` | [] |
| `result.api_version` | `number` |
| `result.authtoken` | `string` |
| `result.can_create_message_types` | [] |
| `result.can_create_messages` | `boolean` |
| `result.capabilities` | `Object` |
| `result.capabilities.achievement` | `Object` |
| `result.capabilities.achievement.create` | `boolean` |
| `result.capabilities.attendance` | `Object` |
| `result.capabilities.attendance.today` | `boolean` |
| `result.capabilities.attendance.absence_management` | `boolean` |
| `result.capabilities.behaviour` | `Object` |
| `result.capabilities.behaviour.create` | `boolean` |
| `result.capabilities.behaviour.report_card` | `Object` |
| `result.capabilities.behaviour.report_card.detail` | `boolean` |
| `result.capabilities.behaviour_detentionmanagement.hide_learner_add` | `boolean` |
| `result.capabilities.behaviour_detentionmanagement.session_create` | `boolean` |
| `result.capabilities.calendar.event_create` | `boolean` |
| `result.capabilities.calendar.hide_sourcecog` | `boolean` |
| `result.capabilities.club` | `Object` |
| `result.capabilities.club.create` | `boolean` |
| `result.capabilities.club.export` | `boolean` |
| `result.capabilities.communicator` | `Object` |
| `result.capabilities.communicator.email` | `Object` |
| `result.capabilities.communicator.email.attachments` | `boolean` |
| `result.capabilities.communicator.email.html` | `boolean` |
| `result.capabilities.communicator.message_reply` | `boolean` |
| `result.capabilities.communicator.parent_identification` | `Object` |
| `result.capabilities.communicator.parent_identification.max_priority` | `string` |
| `result.capabilities.communicator.parent_identification.options` | `Object` |
| `result.capabilities.communicator.parent_identification.options.max_priority` | `Object` |
| `result.capabilities.communicator.parent_identification.options.max_priority.1` | `string` |
| `result.capabilities.communicator.parent_identification.options.max_priority.10` | `string` |
| `result.capabilities.communicator.parent_identification.options.max_priority.2` | `string` |
| `result.capabilities.communicator.parent_identification.options.max_priority.3` | `string` |
| `result.capabilities.communicator.parent_identification.options.max_priority.4` | `string` |
| `result.capabilities.communicator.parent_identification.options.max_priority.5` | `string` |
| `result.capabilities.communicator.parent_identification.options.max_priority.6` | `string` |
| `result.capabilities.communicator.parent_identification.options.max_priority.7` | `string` |
| `result.capabilities.communicator.parent_identification.options.max_priority.8` | `string` |
| `result.capabilities.communicator.parent_identification.options.max_priority.9` | `string` |
| `result.capabilities.communicator.parent_identification.options.max_priority.highest` | `string` |
| `result.capabilities.communicator.parent_identification.options.max_priority.ignore` | `string` |
| `result.capabilities.communicator.parent_identification.parental_responsibility` | `string` |
| `result.capabilities.communicator.create_message_types` | [] |
| `result.capabilities.communicator.enabled` | `boolean` |
| `result.capabilities.communicator.new_message_recipients` | [] |
| `result.capabilities.communicator.reply_to` | `boolean` |
| `result.capabilities.communicator.select_all` | `boolean` |
| `result.capabilities.communicator.switchuser` | `boolean` |
| `result.capabilities.data_collection` | `Object` |
| `result.capabilities.data_collection.move_cohabitees` | `boolean` |
| `result.capabilities.fcm` | `Object` |
| `result.capabilities.fcm.remove_old_token` | `boolean` |
| `result.capabilities.forms` | `Object` |
| `result.capabilities.homework.create` | `boolean` |
| `result.capabilities.homework.homework_issues` | `boolean` |
| `result.capabilities.homework.learnercreate` | `boolean` |
| `result.capabilities.homework.teaching_group_required` | `boolean` |
| `result.capabilities.icalendar.group_import` | `boolean` |
| `result.capabilities.marksheets.change_teacher` | `boolean` |
| `result.capabilities.noticeboard` | `Object` |
| `result.capabilities.noticeboard.folders` | `boolean` |
| `result.capabilities.noticeboard.manager` | `boolean` |
| `result.capabilities.parentevent.administrator` | `boolean` |
| `result.capabilities.parentevent.blockslot` | `boolean` |
| `result.capabilities.parentevent.switchteacher` | `boolean` |
| `result.capabilities.parentevent.video` | `boolean` |
| `result.capabilities.resourcebooking.manager` | `boolean` |
| `result.error?` | `string` |
| `result.establishment` | `Object` |
| `result.establishment.applicant_admission_groups` | { `id`: `number` ; `name`: `string`  }[] |
| `result.establishment.applicant_intake_groups` | { `id`: `number` ; `name`: `string`  }[] |
| `result.establishment.community_groups` | { `id`: `string` ; `name`: `string`  }[] |
| `result.establishment.discover_groups` | [] |
| `result.establishment.form_groups` | { `employee_id`: `string` ; `id`: `string` ; `name`: `string` ; `room_id`: `string` ; `year_group_ids`: `string`[]  }[] |
| `result.establishment.logo` | `string` |
| `result.establishment.name` | `string` |
| `result.establishment.report_card_target_types` | { `code`: `string` ; `description`: `string` ; `id`: `number`  }[] |
| `result.establishment.rooms` | { `code`: `string` ; `id`: `string` ; `name`: `string`  }[] |
| `result.establishment.subjects` | { `active`: `boolean` ; `id`: `string` ; `name`: `string`  }[] |
| `result.establishment.teaching_groups` | { `employee_id`: `string` ; `id`: `string` ; `name`: `string` ; `year_group_ids`: `string`[]  }[] |
| `result.establishment.year_groups` | { `code`: `string` ; `id`: `string` ; `name`: `string`  }[] |
| `result.learner_menu` | [] |
| `result.login_method` | `string` |
| `result.login_method_change_password` | `boolean` |
| `result.method` | `string` |
| `result.metrics` | `Object` |
| `result.metrics.be` | `string` |
| `result.metrics.sspt` | `number` |
| `result.metrics.sspt_us` | `number` |
| `result.metrics.st` | `string` |
| `result.metrics.uniqid` | `string` |
| `result.miscellaneous` | `Object` |
| `result.miscellaneous.app` | `Object` |
| `result.miscellaneous.app.logout_on_pause` | `boolean` |
| `result.miscellaneous.editor` | `Object` |
| `result.miscellaneous.editor.defaultfont` | `string` |
| `result.miscellaneous.max_status_last_visible` | `number` |
| `result.miscellaneous.session_expiry_modal` | `number` |
| `result.miscellaneous.status_in_background` | `boolean` |
| `result.miscellaneous.status_interval` | `number` |
| `result.miscellaneous.status_interval_background` | `number` |
| `result.miscellaneous.student_count_warning` | `number` |
| `result.miscellaneous.upload` | `Object` |
| `result.miscellaneous.upload.chunksize` | `number` |
| `result.miscellaneous.upload.max_attachment_size` | `number` |
| `result.miscellaneous.upload.max_attachment_size_communicator` | `number` |
| `result.miscellaneous.upload.max_body_size_communicator` | `number` |
| `result.personal_menu` | { `id`: `string` ; `name`: `string`  }[] |
| `result.session` | `Object` |
| `result.session.expires` | `number` |
| `result.sub_menu` | `Object` |
| `result.sub_menu.label` | `string` |
| `result.success` | `boolean` |
| `result.user` | `Object` |
| `result.user.avatar` | `Object` |
| `result.user.avatar.cache` | `string` |
| `result.user.avatar.height` | `number` |
| `result.user.avatar.photo` | `string` |
| `result.user.avatar.width` | `number` |
| `result.user.community_group_id` | `string` |
| `result.user.establishment_id` | `number` |
| `result.user.forename` | `string` |
| `result.user.form_group_id` | `string` |
| `result.user.gender` | `string` |
| `result.user.id` | `string` |
| `result.user.remember_password_permitted` | `boolean` |
| `result.user.surname` | `string` |
| `result.user.title` | ``"object"`` |
| `result.user.types` | `string`[] |
| `result.user.username` | `string` |
| `result.user.year_group_id` | `string` |

#### Defined in

[Raw_Edulink_Response_Types/Edulink_Login.ts:1](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Edulink_Login.ts#L1)

___

### Edulink\_Logout

Ƭ **Edulink\_Logout**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `jsonrpc` | `string` |
| `result` | `Object` |
| `result.method` | `string` |
| `result.success` | `boolean` |

#### Defined in

[Raw_Edulink_Response_Types/Edulink_Logout.ts:1](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Edulink_Logout.ts#L1)

___

### Edulink\_Noticeboard

Ƭ **Edulink\_Noticeboard**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `jsonrpc` | `string` |
| `result` | `Object` |
| `result.method` | `string` |
| `result.metrics` | `Object` |
| `result.metrics.sspt` | `number` |
| `result.metrics.st` | `string` |
| `result.noticeboard` | { `filename`: `string` ; `filesize`: `number` ; `id`: `number` ; `mime_type`: `string` ; `name`: `string` ; `position`: `number`  }[] |
| `result.snippets` | [] |
| `result.success` | `boolean` |

#### Defined in

[Raw_Edulink_Response_Types/Edulink_Noticeboard.ts:1](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Edulink_Noticeboard.ts#L1)

___

### Edulink\_Personal

Ƭ **Edulink\_Personal**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `jsonrpc` | `string` |
| `result` | `Object` |
| `result.method` | `string` |
| `result.personal` | `Object` |
| `result.personal.address` | `string` |
| `result.personal.admission_date` | `string` |
| `result.personal.admission_number` | `string` |
| `result.personal.chosen_name` | `string` |
| `result.personal.date_of_birth` | `string` |
| `result.personal.email` | `string` |
| `result.personal.ethnicity` | `string` |
| `result.personal.forename` | `string` |
| `result.personal.form_group` | `Object` |
| `result.personal.form_group.employee` | `Object` |
| `result.personal.form_group.employee.forename` | `string` |
| `result.personal.form_group.employee.id` | `string` |
| `result.personal.form_group.employee.surname` | `string` |
| `result.personal.form_group.employee.title` | `string` |
| `result.personal.form_group.id` | `string` |
| `result.personal.form_group.name` | `string` |
| `result.personal.form_group.room` | `Object` |
| `result.personal.form_group.room.code` | `string` |
| `result.personal.form_group.room.id` | `string` |
| `result.personal.form_group.room.name` | `string` |
| `result.personal.gender` | `string` |
| `result.personal.house_group` | `Object` |
| `result.personal.house_group.id` | `string` |
| `result.personal.house_group.name` | `string` |
| `result.personal.id` | `string` |
| `result.personal.languages` | `Object` |
| `result.personal.languages.first` | `string` |
| `result.personal.languages.home` | `string` |
| `result.personal.national_identity` | `string` |
| `result.personal.note` | `string` |
| `result.personal.phone` | `string` |
| `result.personal.post_code` | `string` |
| `result.personal.room_id` | `string` |
| `result.personal.surname` | `string` |
| `result.personal.unique_learner_number` | `string` |
| `result.personal.unique_pupil_number` | `string` |
| `result.personal.year_group` | `Object` |
| `result.personal.year_group.id` | `string` |
| `result.personal.year_group.name` | `string` |
| `result.success` | `boolean` |
| `result.whoami` | `Object` |
| `result.whoami.establishment_id` | `number` |
| `result.whoami.forename` | `string` |
| `result.whoami.id` | `number` |
| `result.whoami.surname` | `string` |
| `result.whoami.title` | `string` |
| `result.whoami.types` | `string`[] |

#### Defined in

[Raw_Edulink_Response_Types/Edulink_Personal.ts:1](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Edulink_Personal.ts#L1)

___

### Edulink\_Ping

Ƭ **Edulink\_Ping**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `jsonrpc` | `string` |
| `result` | `Object` |
| `result.method` | `string` |
| `result.metrics` | `Object` |
| `result.metrics.sspt` | `number` |
| `result.metrics.sspt_us` | `number` |
| `result.metrics.st` | `string` |
| `result.metrics.uniqid` | `string` |
| `result.response` | `string` |
| `result.success` | `boolean` |

#### Defined in

[Raw_Edulink_Response_Types/Edulink_Ping.ts:1](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Edulink_Ping.ts#L1)

___

### Edulink\_RegisterCodes

Ƭ **Edulink\_RegisterCodes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `jsonrpc` | `string` |
| `result` | `Object` |
| `result.codes_protect_from_flood_fill` | `string`[] |
| `result.codes_to_prompt_change` | `string`[] |
| `result.hide_comments` | `boolean` |
| `result.lesson_codes` | { `active`: `boolean` ; `code`: `string` ; `is_authorised_absence`: `boolean` ; `is_late`: `boolean` ; `is_statistical`: `boolean` ; `name`: `string` ; `present`: `boolean` ; `type`: `string`  }[] |
| `result.lesson_registers_default_mark` | `string` |
| `result.lesson_registers_enabled` | `boolean` |
| `result.method` | `string` |
| `result.metrics` | `Object` |
| `result.metrics.be` | `string` |
| `result.metrics.sspt` | `number` |
| `result.metrics.sspt_us` | `number` |
| `result.metrics.st` | `string` |
| `result.metrics.uniqid` | `string` |
| `result.statutory_codes` | { `active`: `boolean` ; `code`: `string` ; `is_authorised_absence`: `boolean` ; `is_late`: `boolean` ; `is_statistical`: `boolean` ; `name`: `string` ; `present`: `boolean` ; `type`: `string`  }[] |
| `result.statutory_registers_default_mark_am` | `string` |
| `result.statutory_registers_default_mark_pm` | `string` |
| `result.statutory_registers_enabled` | `boolean` |
| `result.success` | `boolean` |
| `result.tags_autohide` | `boolean` |

#### Defined in

[Raw_Edulink_Response_Types/Edulink_RegisterCodes.ts:1](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Edulink_RegisterCodes.ts#L1)

___

### Edulink\_SchoolDetails

Ƭ **Edulink\_SchoolDetails**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `jsonrpc` | `string` |
| `result` | `Object` |
| `result.error?` | `string` |
| `result.establishment` | `Object` |
| `result.establishment.id` | `number` |
| `result.establishment.idp_login` | `Object` |
| `result.establishment.idp_login.google` | `string` |
| `result.establishment.idp_login.microsoft` | `string` |
| `result.establishment.idp_only` | `boolean` |
| `result.establishment.logo` | `string` |
| `result.establishment.name` | `string` |
| `result.method` | `string` |
| `result.metrics` | `Object` |
| `result.metrics.be` | `string` |
| `result.metrics.sspt` | `number` |
| `result.metrics.sspt_us` | `number` |
| `result.metrics.st` | `string` |
| `result.metrics.uniqid` | `string` |
| `result.success` | `boolean` |

#### Defined in

[Raw_Edulink_Response_Types/Edulink_SchoolDetails.ts:1](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Edulink_SchoolDetails.ts#L1)

___

### Edulink\_Status

Ƭ **Edulink\_Status**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `jsonrpc` | `string` |
| `result` | `Object` |
| `result.datacollection` | `Object` |
| `result.datacollection.submissions` | `number` |
| `result.lessons` | `Object` |
| `result.lessons.current` | `Object` |
| `result.lessons.current.description` | `string` |
| `result.lessons.current.end_time` | `string` |
| `result.lessons.current.period_name` | `string` |
| `result.lessons.current.register_id` | `string` |
| `result.lessons.current.room` | `Object` |
| `result.lessons.current.room.id` | `number` |
| `result.lessons.current.room.name` | `string` |
| `result.lessons.current.start_time` | `string` |
| `result.lessons.current.teacher` | `Object` |
| `result.lessons.current.teacher.forename` | `string` |
| `result.lessons.current.teacher.id` | `number` |
| `result.lessons.current.teacher.surname` | `string` |
| `result.lessons.current.teacher.title` | `string` |
| `result.lessons.current.teaching_group` | `Object` |
| `result.lessons.current.teaching_group.id` | `number` |
| `result.lessons.current.teaching_group.name` | `string` |
| `result.lessons.current.teaching_group.subject` | `string` |
| `result.lessons.next` | `Object` |
| `result.lessons.next.description` | `string` |
| `result.lessons.next.end_time` | `string` |
| `result.lessons.next.period_name` | `string` |
| `result.lessons.next.room` | `Object` |
| `result.lessons.next.room.id` | `number` |
| `result.lessons.next.room.name` | `string` |
| `result.lessons.next.start_time` | `string` |
| `result.lessons.next.teacher` | `Object` |
| `result.lessons.next.teacher.forename` | `string` |
| `result.lessons.next.teacher.id` | `number` |
| `result.lessons.next.teacher.surname` | `string` |
| `result.lessons.next.teacher.title` | `string` |
| `result.lessons.next.teaching_group` | `Object` |
| `result.lessons.next.teaching_group.id` | `number` |
| `result.lessons.next.teaching_group.name` | `string` |
| `result.lessons.next.teaching_group.subject` | `string` |
| `result.method` | `string` |
| `result.new_forms` | `number` |
| `result.new_messages` | `number` |
| `result.success` | `boolean` |

#### Defined in

[Raw_Edulink_Response_Types/Edulink_Status.ts:1](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Edulink_Status.ts#L1)

___

### Edulink\_TeacherPhotos

Ƭ **Edulink\_TeacherPhotos**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `jsonrpc` | `string` |
| `result` | `Object` |
| `result.employee_photos` | { `cache`: `string` ; `height`: `number` ; `id`: `string` ; `photo`: `string` ; `width`: `number`  }[] |
| `result.method` | `string` |
| `result.metrics` | `Object` |
| `result.metrics.sspt` | `number` |
| `result.metrics.sspt_us` | `number` |
| `result.metrics.st` | `string` |
| `result.metrics.uniqid` | `string` |
| `result.success` | `boolean` |

#### Defined in

[Raw_Edulink_Response_Types/Edulink_TeacherPhotos.ts:1](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Edulink_TeacherPhotos.ts#L1)

___

### Edulink\_Timetable

Ƭ **Edulink\_Timetable**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `jsonrpc` | `string` |
| `result` | `Object` |
| `result.day_of_week` | `string` |
| `result.error?` | `string` |
| `result.method` | `string` |
| `result.requested_date` | `string` |
| `result.showing_from` | `string` |
| `result.showing_to` | `string` |
| `result.start_of_week` | `string` |
| `result.success` | `boolean` |
| `result.weeks` | { `days`: [`Edulink_Timetable_Day`](Edulink_Raw_Response_Types.md#edulink_timetable_day)[] ; `name`: `string`  }[] |

#### Defined in

[Raw_Edulink_Response_Types/Edulink_Timetable.ts:40](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Edulink_Timetable.ts#L40)

___

### Edulink\_Timetable\_Day

Ƭ **Edulink\_Timetable\_Day**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `date` | `string` |
| `id` | `number` |
| `is_current` | `boolean` |
| `lessons` | [`Edulink_Timetable_Lesson`](Edulink_Raw_Response_Types.md#edulink_timetable_lesson)[] |
| `name` | `string` |
| `periods` | [`Edulink_Timetable_Period`](Edulink_Raw_Response_Types.md#edulink_timetable_period)[] |

#### Defined in

[Raw_Edulink_Response_Types/Edulink_Timetable.ts:31](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Edulink_Timetable.ts#L31)

___

### Edulink\_Timetable\_Lesson

Ƭ **Edulink\_Timetable\_Lesson**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `period_id` | `number` |
| `room` | `Object` |
| `room.id` | `number` |
| `room.name` | `string` |
| `room_id` | `number` |
| `teacher` | `Object` |
| `teacher.forename` | `string` |
| `teacher.id` | `number` |
| `teacher.surname` | `string` |
| `teacher.title` | `string` |
| `teachers` | `string` |
| `teaching_group` | `Object` |
| `teaching_group.id` | `number` |
| `teaching_group.name` | `string` |
| `teaching_group.subject` | `string` |
| `teaching_group_id` | `number` |

#### Defined in

[Raw_Edulink_Response_Types/Edulink_Timetable.ts:8](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Edulink_Timetable.ts#L8)

___

### Edulink\_Timetable\_Period

Ƭ **Edulink\_Timetable\_Period**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `end_time` | `string` |
| `id` | `number` |
| `name` | `string` |
| `start_time` | `string` |

#### Defined in

[Raw_Edulink_Response_Types/Edulink_Timetable.ts:1](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/Edulink_Timetable.ts#L1)

___

### School\_FromCode

Ƭ **School\_FromCode**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `jsonrpc` | `string` |
| `result` | `Object` |
| `result.error?` | `string` |
| `result.school` | `Object` |
| `result.school.school_id` | `number` |
| `result.school.server` | `string` |
| `result.success` | `boolean` |

#### Defined in

[Raw_Edulink_Response_Types/School_FromCode.ts:1](https://github.com/Ahmad-A0/Overnet-Edulink-API/blob/a4f7784/src/Raw_Edulink_Response_Types/School_FromCode.ts#L1)
