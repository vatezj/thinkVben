<?php

declare (strict_types = 1);

namespace app\model;

use app\model\BaseModel;

class Customer extends BaseModel
{
    protected $name = 'customer';
    protected $pk = 'customer_id';
    protected $code = 8888;

    public function getList(array $params)
    {
        $where = [];
        !empty($params['customer_name']) && $where[] = ['customer_name', 'like', "%{$params['customer_name']}%"];
        !empty($params['status']) && $where[] = ['status', '=', $params['status']];
        $list = $this->where($where)->order(['customer_id' => 'asc', 'create_time' => 'asc'])->select()->toArray();
        return $list;
    }
    protected function getTreeData($datalist, int $parentId = 0)
    {

    }
    public function add(array $data)
    {
        $id = $data['customer_id'];
        unset($data['customer_id']);
        if(!empty($id))
        {
             return $this->find($id)->save($data);
        }
        else
        {
            $last_ids =  $this->insertGetId($data);
            $code['create_time'] = time();
            $code['customer_code'] = $last_ids + $this->code;
            return $this->find($last_ids)->save($code);
        }
    }
}
