// area of rectangle
const _length: number = 5;
const _width: number = 3;
const _multiplication = _length * _width;
console.log(_multiplication);

// find perimeter of rectangle
const _length2: number = 5;
const _width2: number = 3;
const _perimeter = 2 * (_length2 + _width2);
console.log(_perimeter);

// find diameter, circumference, and area of the circle
const _radius3: number = 5;
const _diameter = 2 * _radius3;
const _circumference = 2 * Math.PI * _radius3;
const _area = Math.PI * (_radius3 * _radius3);
console.log(_diameter);
console.log(_circumference);
console.log(_area);

// find angles of triangle
const _a: number = 80;
const _b: number = 65;
const _c: number = 180; // the total of three angles
const _angle = _c - (_a + _b);
console.log(_angle);

//days converter 400 days
const _days: number = 400;

const _daysInYear: number = 365;
const _daysInMonth: number = 30;

const _years = Math.floor(_days / _daysInYear);
const _remainingDaysAfterYears = _days % _daysInYear;

const _months = Math.floor(_remainingDaysAfterYears / _daysInMonth);
const _remainingDaysAfterMonths = _remainingDaysAfterYears % _daysInMonth;

console.log(
  _years + " tahun",
  _months + " bulan",
  _remainingDaysAfterMonths + " hari"
);

// days converter 366 days
const _days1: number = 366;
const _daysIn1Year: number = 365;
const _daysIn1Month: number = 30;

const _years2 = Math.floor(_days1 / _daysIn1Year);
const _remainingDaysAfterYears1 = _days1 % _daysIn1Year;

const _months2 = Math.floor(_remainingDaysAfterYears1 / _daysIn1Month);
const _remainingDaysAfterMonths1 = _remainingDaysAfterYears1 % _daysIn1Month;

console.log(
  _years2 + " tahun",
  _months2 + " bulan",
  _remainingDaysAfterMonths1 + " hari"
);

//difference between dates in days
const _date1: Date = new Date("2022/01/20");
const _date2: Date = new Date("2022/01/22");
const _daydiff: number = Math.abs(_date2.getDay() - _date1.getDay());
console.log(_daydiff);
//math.abs hasilnya nilai mutlak
//math.floor hasilnya pembulatan ke bawah
