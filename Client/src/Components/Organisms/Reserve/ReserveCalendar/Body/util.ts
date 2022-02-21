import { ReserveCalendarContainer } from "@Organisms/Reserve/Body/styles";
import { postReservationRoomBodyProps } from "@Type/API";
import { reservationDatasProps } from "@Type/Reservation";

export const getMonthDays = ({
  year,
  month,
}: {
  year: number;
  month: number;
}): any[] => {
  const { beforeLastDate, firstDay, lastDate, lastDay } =
    getFirstAndLastDayInfo({
      year,
      month,
    });

  const MonthDays = new Array(35).fill(0).map((_, idx) => {
    if (idx < firstDay)
      return { month: month - 1, date: beforeLastDate - (firstDay - idx - 1) };
    if (idx > lastDate + 1)
      return { month: month + 1, date: idx - lastDate - 1 };
    return { month, date: idx - firstDay + 1 };
  });

  return MonthDays;
};

export const getFirstAndLastDayInfo = ({
  year,
  month,
}: {
  year: number;
  month: number;
}) => {
  const beforeLastDate = new Date(year, month - 1, 0).getDate();
  const [firstDate, firstDay] = [
    new Date(year, month - 1, 1).getDate(),
    new Date(year, month - 1, 1).getDay(),
  ];
  const [lastDate, lastDay] = [
    new Date(year, month, 0).getDate(),
    new Date(year, month, 0).getDay(),
  ];
  return { beforeLastDate, firstDate, firstDay, lastDate, lastDay };
};

export const checkReserve = (
  date: any,
  reserveDate: reservationDatasProps[]
): string => {
  return reserveDate
    .map((item: reservationDatasProps) => item.date)
    .findIndex(date) >= 0
    ? "isTrue"
    : "";
};

export const getReserveDatas = (
  data: postReservationRoomBodyProps[]
): reservationDatasProps[] => {
  return data.reduce((acc, cur): any => {
    const {
      reservationStartDate,
      reservationStartHour,
      reservationEndDate,
      reservationEndHour,
      reservationName,
    } = cur;
    return [
      ...acc,
      ...[1, 2, 3] // reservationEndDate - reservationStartDate
        .map((item) => {
          return {
            date: item,
            hour: `${reservationStartHour} - ${reservationEndHour}`,
            host: reservationName,
          };
        }),
    ];
  }, []);
};
