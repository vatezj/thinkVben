<?php

declare (strict_types=1);

namespace app\controller\stock;

use app\controller\Controller;
use app\model\StockLocation as Model;

class Location extends Controller
{
    public function initialize()
    {
        parent::initialize();
        $this->model = new Model;
    }
}
