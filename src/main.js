
import ngPlatformBrowserDynamic from "@angular/platform-browser-dynamic";
import AppModule from './app/app.module';
import { enableProdMode } from '@angular/core';

document.addEventListener('DOMContentLoaded', function() {
    ngPlatformBrowserDynamic
        .platformBrowserDynamic()
        .bootstrapModule(AppModule);
});

if (process.env.ENV === 'production') {
    enableProdMode();
}

