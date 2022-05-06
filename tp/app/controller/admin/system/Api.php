<?php

declare (strict_types=1);

namespace app\controller\admin\system;

use app\controller\admin\Controller;
use app\model\Api as Model;
class Api extends Controller
{
    public function initialize()
    {
        parent::initialize();
        $this->model = new Model;
    }
}
