import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'fav',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'buscar',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'notificacao',
        loadChildren: () => import('../notificacao/notificacao.module').then(m => m.NotificacaoPageModule)
      },
      {
        path: 'vitrine/:id',
        loadChildren: () => import('../vitrine/vitrine.module').then(m => m.VitrinePageModule)
      },
      {
        path: 'produto',
        loadChildren: () => import('../produto-detalhado/produto-detalhado.module').then(m => m.ProdutoDetalhadoPageModule)
      },
      {
        path: 'lojista',
        loadChildren: () => import('../lojista-detalhado/lojista-detalhado.module').then(m => m.LojistaDetalhadoPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/buscar',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/buscar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
