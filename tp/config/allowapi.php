<?php

declare (strict_types = 1);
// 商户后台api白名单配置
// 此处定义的api所有账户均有权访问
// Auth类: app\store\service\Auth.php
return [
    // 用户登录
    '/admin.passport/login',
    // 退出登录
    '/admin.passport/logout',


    '/admin.system/getUserInfo',
    // 当前用户信息
    '/admin.system/getPermCode',
    // 获取路由菜单信息
    '/admin.system/getMenuList',
    // 修改当前用户信息

    '/admin.system.dictionaries/getDic',
    // 获取数据字典数据

    // 文件库列表
    '/admin.files/list',
    // 文件分组列表
    '/admin.files.group/list',
    // 上传图片文件
    '/admin.upload/image',

    // 获取所有地区
    '/admin.region/all',
    // 获取所有地区(树状格式)
    '/admin.region/tree',
];