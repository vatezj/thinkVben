<?php

declare (strict_types=1);

namespace app\controller\Admin\system;

use app\controller\Admin\Controller;
use app\model\Role as Model;
class Role extends Controller
{
    public function initialize()
    {
        parent::initialize();
        $this->model = new Model;
    }
    public function getListAll()
    {
        $list = $this->model->getListAll($this->request->param());
        return $this->renderSuccess($list);
    }

    public function setRoleStatus()
    {
        if ($this->model->setRoleStatus($this->postData())!==false) {
            return $this->renderSuccess('操作成功');
        }
        return $this->renderError($this->model->getError() ?: '操作失败');
    }
}
