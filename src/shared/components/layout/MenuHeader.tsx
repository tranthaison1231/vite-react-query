import { Link } from 'react-router-dom';

const MenuHeader = (logo: React.ReactNode, title: React.ReactNode) => (
  <Link to="/">
    {logo}
    {title}
  </Link>
);
export default MenuHeader;
