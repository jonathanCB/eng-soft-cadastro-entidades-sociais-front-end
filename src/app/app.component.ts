import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'grupo5_project';

  //private router: Router
  constructor() {}

  ngOnInit(): void {
    //this.router.navigate(['/lista-entidades-sociais']);
  }
}
