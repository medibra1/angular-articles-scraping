import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search-articles',
      },
      {
        path: 'search-articles',
    
        loadComponent: () =>
          import('./pages/search/search.component').then((mod) => mod.SearchComponent),
        // data: { showHero: true },
      },
     {
     path: '**',
     pathMatch: 'full',
    redirectTo: 'search-articles',
   },
];
