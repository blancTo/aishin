import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format, isBefore, isToday } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      month_days: {
        '2022-12-21': { is_holiday: true },
        '2022-12-11': { is_holiday: true, text: '定休日' },
      },
    };
    this.getTileClass = this.getTileClass.bind(this);
    this.getTileContent = this.getTileContent.bind(this);
  }

  // state の日付と同じ表記に変換
  getFormatDate(date) {
    return `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${(
      '0' + date.getDate()
    ).slice(-2)}`;
  }

  // 日付のクラスを付与 (祝日用)
  getTileClass({ date, view }) {
    // 月表示のときのみ
    if (view === 'month') {
      const currentDate = new Date(); // 今日の日付
      const day = new Date(date);
      // 日付を比較し、昨日より前の場合に"maedate"クラスを付けます
      if (isBefore(day, currentDate) && !isToday(day)) {
        return 'maedate'; // "maedate"クラス名を指定
      }
    }
    const day = this.getFormatDate(date);
    return this.state.month_days[day] && this.state.month_days[day].is_holiday
      ? 'holiday'
      : '';
  }

  // 日付の内容を出力
  getTileContent({ date, view }) {
    if (view !== 'month') {
      return null;
    }
    // 日付を指定したタイムゾーンに変換
    const timeZone = 'Asia/Tokyo';
    const zonedDate = utcToZonedTime(date, timeZone);

    // 日付をフォーマット
    const formattedDate = format(zonedDate, 'yyyy-MM-dd', { timeZone });

    return (
      <p>
        <br />
        {this.state.month_days[formattedDate] &&
        this.state.month_days[formattedDate].text
          ? this.state.month_days[formattedDate].text
          : ' '}
      </p>
    );
  }

  componentDidMount() {
    const today = new Date(); // 今日の日付
    this.setState({ date: today });
  }

  render() {
    return (
      <div>
        <Calendar
          locale="ja-JP"
          calendarType="gregory"
          tileClassName={this.getTileClass}
          tileContent={this.getTileContent}
        />
      </div>
    );
  }
}
