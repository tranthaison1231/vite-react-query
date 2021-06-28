import { Dayjs } from 'dayjs';
import { forwardRef } from 'react';
import { PickerTimeProps } from 'antd/es/date-picker/generatePicker';
import { Omit } from 'antd/es/_util/type';
import DatePicker from './DatePicker';

export type TimePickerProps = Omit<PickerTimeProps<Dayjs>, 'picker'>;

const TimePicker = forwardRef<any, TimePickerProps>((props, ref) => {
  return <DatePicker {...props} picker="time" ref={ref} />;
});

TimePicker.displayName = 'TimePicker';

export default TimePicker;
