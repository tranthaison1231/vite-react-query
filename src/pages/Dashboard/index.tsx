import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { Avatar, Button, Drawer, notification, Space, Table } from 'antd';
import { useMemo, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import UserForm from './UserForm';
import { showError } from '#/shared/utils/tools';
import useTable from '#/shared/hooks/useTable';
import { createUser, deleteUser, getUsers, User, userUser } from '#/api/users';

const Dashboard = () => {
  const queryClient = useQueryClient();
  const { limit, page, onChange } = useTable();
  const [selectedItem, setSelectedItem] = useState<Partial<User> | undefined>(
    undefined,
  );
  const { data, isLoading } = useQuery(['users', { page, limit }], () =>
    getUsers({ page, limit }),
  );
  const { mutateAsync: remove, isLoading: isRemoveLoading } = useMutation(
    deleteUser,
    {
      onError: showError,
      onSuccess: () => {
        queryClient.invalidateQueries('users');
      },
    },
  );
  const { mutate: create, isLoading: isCreateLoading } = useMutation(
    createUser,
    {
      onError: showError,
      onSuccess: () => {
        notification.success({
          message: 'Create Success',
        });
        queryClient.invalidateQueries('users');
        setSelectedItem(undefined);
      },
    },
  );

  const { mutate: update, isLoading: isUpdateLoading } = useMutation(userUser, {
    onError: showError,
    onSuccess: () => {
      notification.success({
        message: 'Update Success',
      });
      queryClient.invalidateQueries('users');
      setSelectedItem(undefined);
    },
  });

  const onSubmit = (user: User) => {
    if (user.id) {
      update(user);
    } else {
      create(user);
    }
  };

  const onDelete = (id: string) => async () => {
    remove(id);
  };

  const onClose = () => {
    setSelectedItem(undefined);
  };

  const columns = useMemo(
    () => [
      {
        key: 'id',
        dataIndex: 'id',
        title: 'ID',
      },

      {
        key: 'avatar',
        dataIndex: 'avatar',
        title: 'Avatar',
        render: (avatar: string) => <Avatar src={avatar} />,
      },
      {
        key: 'name',
        dataIndex: 'name',
        title: 'Name',
      },
      {
        key: 'phoneNumber',
        dataIndex: 'phone',
        title: 'Phone Number',
      },
      {
        key: 'actions',
        dataIndex: 'id',
        title: 'Actions',
        render: (id: string, record: User) => (
          <Space>
            <DeleteOutlined className="pointer-scale" onClick={onDelete(id)} />
            <EditOutlined
              className="pointer-scale"
              onClick={() => setSelectedItem(record)}
            />
          </Space>
        ),
      },
    ],
    [],
  );
  return (
    <PageContainer
      fixedHeader
      header={{
        title: 'Dashboard',
      }}
    >
      <div className="flex justify-end mb-2">
        <Button type="primary" onClick={() => setSelectedItem({})}>
          Create
        </Button>
      </div>
      <Table
        dataSource={data?.data?.items ?? []}
        columns={columns}
        loading={isLoading || isRemoveLoading}
        rowKey="id"
        pagination={{
          total: data?.data?.count,
        }}
        onChange={onChange}
      />
      <Drawer
        visible={!!selectedItem}
        onClose={onClose}
        width={400}
        destroyOnClose
      >
        <UserForm
          onClose={onClose}
          onSubmit={onSubmit}
          initialValues={selectedItem}
          loading={isCreateLoading || isUpdateLoading}
        />
      </Drawer>
    </PageContainer>
  );
};
export default Dashboard;
