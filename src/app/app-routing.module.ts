import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'modal-pesquisa',
    loadChildren: () => import('./modal-pesquisa/modal-pesquisa.module').then( m => m.ModalPesquisaPageModule)
  },
  {
    path: 'vitrine',
    loadChildren: () => import('./vitrine/vitrine.module').then( m => m.VitrinePageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
