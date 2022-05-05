import { defHttp } from '/@/utils/http/axios';

enum Api {
  MenuList = '/admin.system.menu/getList',
  MenuAdd = '/admin.system.menu/add',
  MenuDel = '/admin.system.menu/del',
  DeptList = '/admin.system.dept/getList',
  DeptAdd = '/admin.system.dept/add',
  DeptDel = '/admin.system.dept/del',

  AccountList = '/admin.system.user/getList',
  AccountAdd = '/admin.system.user/add',
  AccountDel = '/admin.system.user/del',
  ChangePassword = '/admin.system.user/changePassword',

  setRoleStatus = '/admin.system.role/setRoleStatus',
  RolePageList = '/admin.system.role/getList',
  RoleAdd = '/admin.system.role/add',
  RoleDel = '/admin.system.role/del',
  GetAllRoleList = '/admin.system.role/getListAll',

  DicList = '/admin.system.Dictionaries/getList',
  getListTree = '/admin.system.Dictionaries/getListTree',
  DicAdd = '/admin.system.Dictionaries/add',
  DicDel = '/admin.system.Dictionaries/del',
  DicItem = '/admin.system.Dictionaries/getDic',

  ApiList = '/admin.system.api/getList',
  ApiAdd = '/admin.system.api/add',
  ApiDel = '/admin.system.api/del',

  LogList = '/admin.system.log/getList',

  NoticeList = '/admin.system.notice/getList',
  NoticeAdd = '/admin.system.notice/add',
  NoticeDel = '/admin.system.notice/del',
}
export const getMenuList = (params?: any) => defHttp.get<any>({ url: Api.MenuList, params });

export const MenuAdd = (params?: any) => defHttp.post<any>({ url: Api.MenuAdd, params });

export const MenuDel = (data?: any) => defHttp.post<any[]>({ url: Api.MenuDel, data });

export const getDeptList = (params?: any) => defHttp.get<any>({ url: Api.DeptList, params });

export const DeptAdd = (data?: any) => defHttp.post<any[]>({ url: Api.DeptAdd, data });

export const DeptDel = (data?: any) => defHttp.post<any[]>({ url: Api.DeptDel, data });

export const getAccountList = (params: any) => defHttp.get<any>({ url: Api.AccountList, params });

export const ChangePassword = (params?: any) =>
  defHttp.post<any[]>({ url: Api.ChangePassword, params });

export const AccountAdd = (params?: any) => defHttp.post<any[]>({ url: Api.AccountAdd, params });

export const AccountDel = (params?: any) => defHttp.post<any[]>({ url: Api.AccountDel, params });

export const getRoleListByPage = (params?: any) =>
  defHttp.get<any>({ url: Api.RolePageList, params });

export const getAllRoleList = (params?: any) =>
  defHttp.get<any>({ url: Api.GetAllRoleList, params });

export const setRoleStatus = (id: number, status: number) =>
  defHttp.post({ url: Api.setRoleStatus, params: { id, status } });

export const RoleAdd = (params?: any) => defHttp.post<any[]>({ url: Api.RoleAdd, params });

export const RoleDel = (params?: any) => defHttp.post<any[]>({ url: Api.RoleDel, params });

export const DicList = (params: any) => defHttp.get<any>({ url: Api.DicList, params });

export const getListTree = () => defHttp.get<any>({ url: Api.getListTree });

export const DicAdd = (params?: any) => defHttp.post<any[]>({ url: Api.DicAdd, params });

export const DicDel = (data?: any) => defHttp.post<any[]>({ url: Api.DicDel, data });

export const DicItem = (params?: any) => defHttp.post<any[]>({ url: Api.DicItem, params });

export const ApiList = (params: any) => defHttp.get<any>({ url: Api.ApiList, params });

export const ApiAdd = (data?: any) => defHttp.post<any[]>({ url: Api.ApiAdd, data });

export const ApiDel = (data?: any) => defHttp.post<any[]>({ url: Api.ApiDel, data });

export const LogList = (params: any) => defHttp.get<any>({ url: Api.LogList, params });

export const NoticeList = (params: any) => defHttp.get<any>({ url: Api.NoticeList, params });

export const NoticeAdd = (data?: any) => defHttp.post<any[]>({ url: Api.NoticeAdd, data });

export const NoticeDel = (data?: any) => defHttp.post<any[]>({ url: Api.NoticeDel, data });
