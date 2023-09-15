import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns-tz';

const TopCal = () => {
    const now = format(new Date(), 'yyyy-MM-dd HH:mm:ssXXX', {
        timeZone: 'Asia/Tokyo',
      });

    // カレンダーの設定
    const customLocale = {
        weekdays: ['日', '月', '火', '水', '木', '金', '土'],
        weekStartsOn: 0, // 0は日曜日、1は月曜日から始まります
      };

  return (
    <div>      
      <p>現在の日付と時間: {now}</p>
      <Calendar value={new Date()} locale={customLocale} />
    </div>
  );
};

export default TopCal;