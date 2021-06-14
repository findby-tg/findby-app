import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'modal-pesquisa',
    loadChildren: () => import('./modal-pesquisa/modal-pesquisa.module').then( m => m.ModalPesquisaPageModule)
  },
  {
    path: 'vitrine',
    loadChildren: () => import('./vitrine/vitrine.module').then( m => m.VitrinePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'produto-detalhado',
    loadChildren: () => import('./produto-detalhado/produto-detalhado.module').then( m => m.ProdutoDetalhadoPageModule)
  },
  {
    path: 'lojista-detalhado',
    loadChildren: () => import('./lojista-detalhado/lojista-detalhado.module').then( m => m.LojistaDetalhadoPageModule)
  },
  {
    path: 'notificacao',
    loadChildren: () => import('./notificacao/notificacao.module').then( m => m.NotificacaoPageModule)
  },
  {
    path: 'modal-endereco',
    loadChildren: () => import('./modal-endereco/modal-endereco.module').then( m => m.ModalEnderecoPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
