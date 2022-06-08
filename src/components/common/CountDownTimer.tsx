import { FC, useCallback, useEffect, useRef, useState } from 'react';
import moment from 'moment';
const calculateDuration = eventTime => moment.duration(Math.max(eventTime - (moment().valueOf()), 0));

const CountDownTimer: FC<{ eventTime: number, interval: number }> = ({ eventTime, interval }) => {
  const [duration, setDuration] = useState(calculateDuration(eventTime));
  const timerRef = useRef(0);
  const timerCallback = useCallback(() => {
    setDuration(calculateDuration(eventTime));
  }, [eventTime]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    timerRef.current = setInterval(timerCallback, interval);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [eventTime, interval, timerCallback]);

  return (
    <div>
      {!!duration.days() && `${duration.days()} дн.`} {!!duration.hours() && `${duration.hours()} ч. `}
      {!!duration.minutes() && `${duration.minutes()} мин.`} {!!duration.seconds() && `${duration.seconds()} сек.`}
    </div>
  );
};

export default CountDownTimer;
