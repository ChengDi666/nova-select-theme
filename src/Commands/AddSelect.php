<?php

namespace DavidGriffiths\NovaSelectTheme\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class AddSelect extends Command
{

    /**
     * 控制台命令的名称和签名。
     * @var string
     */
    protected $signature = 'nova-select-theme:add-select';

    /**
     * 控制台命令说明
     * @var string
     */
    protected $description = "将“选择主题”添加到用户菜单";

    /**
     * 执行控制台命令
     * @return void
     */
    public function handle()
    {
        $this->copyMenuTemplate();
        $this->addVueComponent();
    }

    /**
     * 确认 Nova的菜单覆盖文件存在
     * @return void
     */
    protected function copyMenuTemplate()
    {
        $override_dir = resource_path('views/vendor/nova/partials');
        $override_path = $override_dir . '/user.blade.php';
        $default_path = base_path('vendor/laravel/nova/resources/views/partials/user.blade.php');

        if (! File::isDirectory($override_dir)) {
            File::makeDirectory($override_dir);
        }

        if (! File::exists($override_path)) {
            File::copy($default_path, $override_path);
            $this->info("Copied default menu template...\n");
        }
    }

    /**
     * 将“选择主题”添加到用户菜单模板 (如果不存在)
     * @return void
     */
    protected function addVueComponent()
    {
        $path = resource_path('views/vendor/nova/partials/user.blade.php');
        $template = File::get($path);
        if (! Str::contains($template, 'nova-select-theme')) {
            $toggle = File::get(__DIR__ . '/../../resources/views/partials/select.blade.php');
            $template = Str::replaceLast('</li>', "</li>\n$toggle", $template);
            File::put($path, $template);
            $this->info("\nAdded Vue select theme to user menu:");
        } else {
            $this->line("\nVue select theme already present in user menu:");
        }
        $this->line("$path\n");
    }

}
