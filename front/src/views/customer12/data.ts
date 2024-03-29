import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: 'API名称',
    dataIndex: 'name',
    width: 160,
    align: 'left',
  },
  {
    title: 'URL',
    dataIndex: 'url',
    width: 160,
    align: 'left',
  },
  {
    title: '排序',
    dataIndex: 'sort',
    width: 50,
  },
  {
    title: '创建时间',
    dataIndex: 'create_time',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: 'Api名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'url',
    label: 'URL',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    defaultValue: 0,
    show: false,
  },
  {
    field: 'name',
    label: 'Api名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'url',
    label: 'URL',
    component: 'Input',
    required: true,
  },
  {
    field: 'sort',
    label: '排序',
    component: 'InputNumber',
    defaultValue: 100,
  },
];
