import { Routes } from '@angular/router';

import { WatchPage } from './components/watch-page/watch-page';
import { MainContainer } from './components/main-container/main-container';

export const routes: Routes = [
    {path:'', component:MainContainer, title:'home page'},
    {path:'watch', component:WatchPage, title:'watch page'}
];
