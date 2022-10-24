<?php

declare (strict_types=1);

namespace app\controller\admin\customer;

use app\controller\admin\Controller;
use app\model\Customer as Model;
class Index extends Controller
{
    public function initialize()
    {
        parent::initialize();
        $this->model = new Model;
    }
}
