import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './common/not-found/not-found.component';

const routes: Routes = [  
  {
    path: '',
    component: AboutComponent,
    data: {
      title: 'Dashboard',
      reuse: true,
      pageType: 'view',
    },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'About',
      reuse: true,
      pageType: 'view',
    },
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
