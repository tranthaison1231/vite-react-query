import { DashboardFilled, UserOutlined } from '@ant-design/icons';
import ProLayout, {
  SettingDrawer,
  SettingDrawerState,
} from '@ant-design/pro-layout';
import { Route } from '@ant-design/pro-layout/lib/typings';
import { Alert } from 'antd';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MenuHeader from './MenuHeader';
import MenuSidebarItem from './MenuSidebarItem';
import RightContentHeader, { UserInfo } from './RightContentHeader';
import { appConfig } from '#/configs/config';

const ROUTES: Route = {
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      icon: <DashboardFilled />,
    },
    {
      path: '/staffs',
      name: 'Staff',
      icon: <UserOutlined />,
    },
  ],
};

interface Props {
  logout: () => void;
  userInfo: UserInfo;
}

const PrivateLayout = ({
  children,
  logout,
  userInfo,
}: React.PropsWithChildren<Props>) => {
  const pathname = useLocation().pathname;
  const [settings, setSetting] = useState<SettingDrawerState>({
    colorWeak: false,
    title: appConfig.title,
    headerHeight: 60,
    fixedHeader: true,
    fixSiderbar: true,
  });
  return (
    <div className="h-screen">
      <ProLayout
        route={ROUTES}
        logo={appConfig.logo}
        location={{
          pathname,
        }}
        menuHeaderRender={MenuHeader}
        menuItemRender={MenuSidebarItem}
        rightContentRender={() => (
          <RightContentHeader logout={logout} userInfo={userInfo} />
        )}
        {...settings}
      >
        <Alert.ErrorBoundary>{children}</Alert.ErrorBoundary>
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        settings={settings}
        onSettingChange={setSetting}
        disableUrlParams
        hideHintAlert
        hideCopyButton
      />
    </div>
  );
};

export default PrivateLayout;
