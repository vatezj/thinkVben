<?php

declare (strict_types=1);

namespace app\controller\admin\system;

use app\controller\admin\Controller;
use app\model\Log as Model;
class Log extends Controller
{
    public function initialize()
    {
        parent::initialize();
        $this->model = new Model;
    }
}
