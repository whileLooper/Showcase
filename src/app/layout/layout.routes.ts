import { Routes, RouterModule }  from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [] }
];

export const ROUTES = RouterModule.forChild(routes);
