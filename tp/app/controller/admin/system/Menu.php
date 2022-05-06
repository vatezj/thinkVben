<?php

declare (strict_types=1);

namespace app\controller\admin\system;

use app\controller\admin\Controller;
use app\model\Menu as Model;
class Menu extends Controller
{
    public function initialize()
    {
        parent::initialize();
        $this->model = new Model;
    }
}
