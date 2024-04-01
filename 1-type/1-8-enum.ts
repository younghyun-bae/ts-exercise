{
  // Enum

  // JS
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2})
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  // Rule: Cap for the first letter
  enum Days {
    Mon = 0,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat,
    Sun,
  }
  console.log(Days.Tue);
  let day = Days.Sat;
  console.log(day);
  // But enum is not recommended, sometimes needed on Backend
  day = Days.Tue;
  day= 1;
  // Any type can be specified as a variable without error

  // Instead of enum, union type!
  type DaysOf = 'Mon' | 'Tue' | 'Wed';
  let dayOf: DaysOf = 'Mon';
  dayOf = 'Wed';
}