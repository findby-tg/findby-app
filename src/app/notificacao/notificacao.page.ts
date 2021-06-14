import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.page.html',
  styleUrls: ['./notificacao.page.scss'],
})
export class NotificacaoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  swipedNotification(id){
    document.getElementById(id).remove()
  }

  acessaVitrine(id) {
    this.router.navigate([`tabs/vitrine/${id}`])
  }

}
