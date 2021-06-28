import { Avatar, Dropdown, Menu } from 'antd';

export interface UserInfo {
  fullName?: string;
  avatar?: string;
}
interface Props {
  logout: () => void;
  userInfo: UserInfo;
}

const RightContentHeader = ({
  logout,
  userInfo: { fullName, avatar },
}: Props) => {
  const menu = (
    <Menu>
      <Menu.Item onClick={logout} key="logout">
        Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>
      <div>
        {fullName}{' '}
        <Avatar size="large" src={avatar}>
          {fullName?.slice(0, 1)}
        </Avatar>
      </div>
    </Dropdown>
  );
};

export default RightContentHeader;
