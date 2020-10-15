<?php

namespace Norgeit\NovaSelectTheme\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class RemoveSelect extends Command
{

    /**
     * The name and signature of the console command.
     * @var string
     */
    protected $signature = 'nova-select-theme:remove-select';

    /**
     * The console command description.
     * @var string
     */
    protected $description = "Removes select theme from user menu";

    /**
     * Execute the console command.
     * @return void
     */
    public function handle()
    {
        $path = resource_path('views/vendor/nova/partials/user.blade.php');

        // Verify the file exists and the Vue component is there
        if (
            ! File::exists($path)
            || ! Str::contains($file = File::get($path), 'nova-select-theme')
        ) {
            $this->info("\n\nselect theme has already been removed!\n\n");
            return;
        }

        // Strip it out
        $pattern = '#<li[^>]*>\s*<nova-select-theme.*?</nova-select-theme>\s*</li>#s';
        $file = preg_replace($pattern, '', $file);
        File::put($path, $file);

        $this->info("\n\nRemoved select theme from menu template:");
        $this->line("$path\n\n");
    }

}
