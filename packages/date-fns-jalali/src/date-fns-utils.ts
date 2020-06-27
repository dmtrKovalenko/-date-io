import addDays from "date-fns-jalali/addDays";
import addMonths from "date-fns-jalali/addMonths";
import addYears from "date-fns-jalali/addYears";
import differenceInMilliseconds from "date-fns-jalali/differenceInMilliseconds";
import eachDayOfInterval from "date-fns-jalali/eachDayOfInterval";
import endOfDay from "date-fns-jalali/endOfDay";
import endOfWeek from "date-fns-jalali/endOfWeek";
import endOfYear from "date-fns-jalali/endOfYear";
import format from "date-fns-jalali/format";
import getHours from "date-fns-jalali/getHours";
import getSeconds from "date-fns-jalali/getSeconds";
import getYear from "date-fns-jalali/getYear";
import getMonth from "date-fns-jalali/getMonth";
import getMinutes from "date-fns-jalali/getMinutes";
import isAfter from "date-fns-jalali/isAfter";
import isBefore from "date-fns-jalali/isBefore";
import isEqual from "date-fns-jalali/isEqual";
import isSameDay from "date-fns-jalali/isSameDay";
import isSameYear from "date-fns-jalali/isSameYear";
import isSameMonth from "date-fns-jalali/isSameMonth";
import isSameHour from "date-fns-jalali/isSameHour";
import isValid from "date-fns-jalali/isValid";
import dateFnsParse from "date-fns-jalali/parse";
import setHours from "date-fns-jalali/setHours";
import setMinutes from "date-fns-jalali/setMinutes";
import setMonth from "date-fns-jalali/setMonth";
import setSeconds from "date-fns-jalali/setSeconds";
import setYear from "date-fns-jalali/setYear";
import startOfDay from "date-fns-jalali/startOfDay";
import startOfMonth from "date-fns-jalali/startOfMonth";
import endOfMonth from "date-fns-jalali/endOfMonth";
import startOfWeek from "date-fns-jalali/startOfWeek";
import startOfYear from "date-fns-jalali/startOfYear";

// Locale is not exported from date-fns, so we need to workaround that https://github.com/date-fns/date-fns/issues/932
import SampleLocale from "date-fns-jalali/locale/fa-jalali-IR";
import { IUtils } from "@date-io/core/IUtils";

type Locale = typeof SampleLocale;

export default class DateFnsJalaliUtils implements IUtils<Date> {
  public locale?: Locale;

  public yearFormat = "yyyy";

  public yearMonthFormat = "MMMM yyyy";

  public dateTime12hFormat = "yyyy/MM/dd hh:mm aaaa";

  public dateTime24hFormat = "yyyy/MM/dd HH:mm";

  public time12hFormat = "hh:mm a";

  public time24hFormat = "HH:mm";

  public dateFormat = "yyyy/MM/dd";

  constructor({ locale }: { locale?: Locale } = {}) {
    this.locale = locale;
  }

  // Note: date-fns input types are more lenient than this adapter, so we need to expose our more
  // strict signature and delegate to the more lenient signature. Otherwise, we have downstream type errors upon usage.

  public addDays(value: Date, count: number) {
    return addDays(value, count);
  }

  public isValid(value: any) {
    return isValid(this.date(value));
  }

  public getDiff(value: Date, comparing: Date | string) {
    return differenceInMilliseconds(value, this.date(comparing));
  }

  public isAfter(value: Date, comparing: Date) {
    return isAfter(value, comparing);
  }

  public isBefore(value: Date, comparing: Date) {
    return isBefore(value, comparing);
  }

  public startOfDay(value: Date) {
    return startOfDay(value);
  }

  public endOfDay(value: Date) {
    return endOfDay(value);
  }

  public getHours(value: Date) {
    return getHours(value);
  }

  public setHours(value: Date, count: number) {
    return setHours(value, count);
  }

  public setMinutes(value: Date, count: number) {
    return setMinutes(value, count);
  }

  public getSeconds(value: Date) {
    return getSeconds(value);
  }

  public setSeconds(value: Date, count: number) {
    return setSeconds(value, count);
  }

  public isSameDay(value: Date, comparing: Date) {
    return isSameDay(value, comparing);
  }

  public isSameMonth(value: Date, comparing: Date) {
    return isSameMonth(value, comparing);
  }

  public isSameYear(value: Date, comparing: Date) {
    return isSameYear(value, comparing);
  }

  public isSameHour(value: Date, comparing: Date) {
    return isSameHour(value, comparing);
  }

  public startOfMonth(value: Date) {
    return startOfMonth(value);
  }

  public endOfMonth(value: Date) {
    return endOfMonth(value);
  }

  public getYear(value: Date) {
    return getYear(value);
  }

  public setYear(value: Date, count: number) {
    return setYear(value, count);
  }

  public date(value?: null): null;
  public date(value?: string | number | Date): Date;
  public date(value?: any) {
    if (typeof value === "undefined") {
      return new Date();
    }

    if (value === null) {
      return null;
    }

    return new Date(value);
  }

  public parse(value: string, formatString: string) {
    if (value === "") {
      return null;
    }

    return dateFnsParse(value, formatString, new Date(), { locale: this.locale });
  }

  public format(date: Date, formatString: string) {
    return format(date, formatString, { locale: this.locale });
  }

  public isEqual(date: any, comparing: any) {
    if (date === null && comparing === null) {
      return true;
    }

    return isEqual(date, comparing);
  }

  public isNull(date: Date) {
    return date === null;
  }

  public isAfterDay(date: Date, value: Date) {
    return isAfter(date, endOfDay(value));
  }

  public isBeforeDay(date: Date, value: Date) {
    return isBefore(date, startOfDay(value));
  }

  public isBeforeYear(date: Date, value: Date) {
    return isBefore(date, startOfYear(value));
  }

  public isAfterYear(date: Date, value: Date) {
    return isAfter(date, endOfYear(value));
  }

  public formatNumber(numberToFormat: string) {
    return numberToFormat;
  }

  public getMinutes(date: Date) {
    return getMinutes(date);
  }

  public getMonth(date: Date) {
    return getMonth(date);
  }

  public setMonth(date: Date, count: number) {
    return setMonth(date, count);
  }

  public getMeridiemText(ampm: "am" | "pm") {
    return ampm === "am" ? "AM" : "PM";
  }

  public getNextMonth(date: Date) {
    return addMonths(date, 1);
  }

  public getPreviousMonth(date: Date) {
    return addMonths(date, -1);
  }

  public getMonthArray(date: Date) {
    const firstMonth = startOfYear(date);
    const monthArray = [firstMonth];

    while (monthArray.length < 12) {
      const prevMonth = monthArray[monthArray.length - 1];
      monthArray.push(this.getNextMonth(prevMonth));
    }

    return monthArray;
  }

  public mergeDateAndTime(date: Date, time: Date) {
    return this.setMinutes(
      this.setHours(date, this.getHours(time)),
      this.getMinutes(time)
    );
  }

  public getWeekdays() {
    const now = new Date();
    return eachDayOfInterval({
      start: startOfWeek(now, { locale: this.locale }),
      end: endOfWeek(now, { locale: this.locale })
    }).map(day => this.format(day, "EEEEE"));
  }

  public getWeekArray(date: Date) {
    const start = startOfWeek(startOfMonth(date), { locale: this.locale });
    const end = endOfWeek(endOfMonth(date), { locale: this.locale });

    let count = 0;
    let current = start;
    const nestedWeeks: Date[][] = [];

    while (isBefore(current, end)) {
      const weekNumber = Math.floor(count / 7);
      nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
      nestedWeeks[weekNumber].push(current);
      current = addDays(current, 1);
      count += 1;
    }

    return nestedWeeks;
  }

  public getYearRange(start: Date, end: Date) {
    const startDate = startOfYear(start);
    const endDate = endOfYear(end);
    const years: Date[] = [];

    let current = startDate;
    while (isBefore(current, endDate)) {
      years.push(current);
      current = addYears(current, 1);
    }

    return years;
  }

  // displaying methods
  public getCalendarHeaderText(date: Date) {
    return this.format(date, this.yearMonthFormat);
  }

  public getYearText(date: Date) {
    return this.format(date, "yyyy");
  }

  public getDatePickerHeaderText(date: Date) {
    return this.format(date, "EEE, d MMMM");
  }

  public getDateTimePickerHeaderText(date: Date) {
    return this.format(date, "MMM d");
  }

  public getMonthText(date: Date) {
    return this.format(date, "MMMM");
  }

  public getDayText(date: Date) {
    return this.format(date, "d");
  }

  public getHourText(date: Date, ampm: boolean) {
    return this.format(date, ampm ? "hh" : "HH");
  }

  public getMinuteText(date: Date) {
    return this.format(date, "mm");
  }

  public getSecondText(date: Date) {
    return this.format(date, "ss");
  }
}