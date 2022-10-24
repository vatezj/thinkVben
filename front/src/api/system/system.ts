import { defHttp } from '/@/utils/http/axios';

enum Api {
  MenuList = '/Admin.system.menu/getList',
  MenuAdd = '/Admin.system.menu/add',
  MenuDel = '/Admin.system.menu/del',
  DeptList = '/Admin.system.dept/getList',
  DeptAdd = '/Admin.system.dept/add',
  DeptDel = '/Admin.system.dept/del',

  AccountList = '/Admin.system.user/getList',
  AccountAdd = '/Admin.system.user/add',
  AccountDel = '/Admin.system.user/del',
  ChangePassword = '/Admin.system.user/changePassword',

  setRoleStatus = '/Admin.system.role/setRoleStatus',
  RolePageList = '/Admin.system.role/getList',
  RoleAdd = '/Admin.system.role/add',
  RoleDel = '/Admin.system.role/del',
  GetAllRoleList = '/Admin.system.role/getListAll',

  DicList = '/Admin.system.Dictionaries/getList',
  getListTree = '/Admin.system.Dictionaries/getListTree',
  DicAdd = '/Admin.system.Dictionaries/add',
  DicDel = '/Admin.system.Dictionaries/del',
  DicItem = '/Admin.system.Dictionaries/getDic',

  ApiList = '/Admin.system.api/getList',
  ApiAdd = '/Admin.system.api/add',
  ApiDel = '/Admin.system.api/del',

  LogList = '/Admin.system.log/getList',

  NoticeList = '/Admin.system.notice/getList',
  NoticeAdd = '/Admin.system.notice/add',
  NoticeDel = '/Admin.system.notice/del',
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
