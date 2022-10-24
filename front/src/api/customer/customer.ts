import { defHttp } from '/@/utils/http/axios';

enum Api {
  List = '/admin.customer.index/getList',
  Add = '/admin.customer.index/add',
  Dels = '/admin.customer.index/del',
}

export const getCustomerList = (params?: any) => defHttp.get<any>({ url: Api.List, params });

export const CustomerAdd = (data?: any) => defHttp.post<any[]>({ url: Api.Add, data });

export const CustomerDel = (data?: any) => {
  return defHttp.post<any[]>({ url: Api.Dels, data });
};
