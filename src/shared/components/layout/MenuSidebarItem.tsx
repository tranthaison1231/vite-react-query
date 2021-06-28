import { MenuDataItem } from '@ant-design/pro-layout';
import { Link } from 'react-router-dom';

const MenuSidebarItem = ({ path }: MenuDataItem, dom: React.ReactNode) => {
  return <Link to={path ?? '/'}>{dom}</Link>;
};

export default MenuSidebarItem;
