<?php

namespace Norgeit\NovaSelectTheme;

use Laravel\Nova\Nova;
use Laravel\Nova\Events\ServingNova;
use Illuminate\Support\ServiceProvider;

class ThemeServiceProvider extends ServiceProvider
{

    /**
     * Commands for topics
     * @var array
     */
    protected $commands = [
        'Norgeit\NovaSelectTheme\Commands\AddSelect',
        'Norgeit\NovaSelectTheme\Commands\RemoveSelect',
    ];

    /**
     * Bootstrap any application services.
     * @return void
     */
    public function boot()
    {
        Nova::serving(function (ServingNova $event) {
            Nova::style('nova-select-theme', __DIR__.'/../dist/css/theme.css');
            Nova::script('nova-select-theme', __DIR__.'/../dist/js/theme.js');
        });
    }

    /**
     * Register any application services.
     * @return void
     */
    public function register()
    {
        $this->commands($this->commands);
    }

}
