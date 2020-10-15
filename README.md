
安装
----------

安装命令

`composer require norgeit/nova-select-theme`

快捷命令-添加：直接添加到用户菜单模板

`php artisan nova-select-theme:add-select`

也可以手动添加到：user.blade.php

```php
        <li>
            <nova-select-theme
            ></nova-select-theme>
        </li>
    </ul>
</dropdown-menu>
```

快捷命令-删除：删除已添加的选择主题模板

`php artisan nova-select-theme:remove-select`


源：

[david-griffiths/nova-dark-theme](https://packagist.org/packages/david-griffiths/nova-dark-theme)