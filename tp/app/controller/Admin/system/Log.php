<?php

declare (strict_types=1);

namespace app\controller\Admin\system;

use app\controller\Admin\Controller;
use app\model\Log as Model;
class Log extends Controller
{
    public function initialize()
    {
        parent::initialize();
        $this->model = new Model;
    }
}
