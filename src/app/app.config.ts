import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { ToggleSidebarReducer } from './State/sidebar/sidebar.reducer';
import { provideHttpClient } from '@angular/common/http';
import { VideoReducer } from './State/Video/video.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(),
    provideState({name:"sidebar", reducer:ToggleSidebarReducer}),
    provideState({name:"video", reducer:VideoReducer})
  ]
};
