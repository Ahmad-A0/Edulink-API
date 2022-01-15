type Edulink_Timetable_Period = {
  id: number;
  name: string;
  start_time: string;
  end_time: string;
};

type Edulink_Timetable_Lesson = {
  period_id: number;
  description: string;
  room_id: number;
  room: {
    id: number;
    name: string;
  };
  teaching_group_id: number;
  teaching_group: {
    id: number;
    name: string;
    subject: string;
  };
  teachers: string;
  teacher: {
    id: number;
    title: string;
    forename: string;
    surname: string;
  };
};

type Edulink_Timetable_Day = {
  id: number;
  date: string;
  name: string;
  is_current: boolean;
  periods: Edulink_Timetable_Period[];
  lessons: Edulink_Timetable_Lesson[];
};

type Edulink_Timetable = {
  jsonrpc: string;
  result: {
    error?: string;
    method: string;
    success: boolean;
    requested_date: string;
    showing_from: string;
    showing_to: string;
    start_of_week: string;
    day_of_week: string;
    weeks: {
      name: string;
      days: Edulink_Timetable_Day[];
    }[];
  };

  id: string;
};

export default Edulink_Timetable;
export {
  Edulink_Timetable_Period,
  Edulink_Timetable_Lesson,
  Edulink_Timetable_Day,
};
