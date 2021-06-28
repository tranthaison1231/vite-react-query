import { Spin } from 'antd';
import { FC } from 'react';

const Loading: FC = () => {
  return (
    <div className="h-screen flex center2">
      <Spin />
    </div>
  );
};

export default Loading;
