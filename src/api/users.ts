import request from '#/shared/utils/request';

export interface User {
  id?: string;
  avatar: string;
  phone: string;
  name: string;
}

interface Pagination {
  limit: number;
  page: number;
}

export const getUsers = (params: Pagination) =>
  request('/users', {
    params: params,
  });
export const deleteUser = (id: string) => request.delete(`/users/${id}`);
export const createUser = (user: User) => request.post(`/users`, user);
export const userUser = (user: User) => request.put(`/users/${user.id}`, user);
