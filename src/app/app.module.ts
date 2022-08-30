import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageModule } from 'primeng/message';
import { TabMenuModule } from 'primeng/tabmenu';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

import { AppComponent } from './app.component';
import { TabMenuComponent } from './components/tab-menu/tab-menu.component';

import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { ListaEntidadesSociaisComponent } from './components/lista-entidades-sociais/lista-entidades-sociais.component';
import { CadastroEntidadeSocialComponent } from './components/cadastro-entidade-social/cadastro-entidade-social.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';

@NgModule({
  imports: [
    RouterModule.forRoot([{ path: '', component: AppComponent }]),
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MessageModule,
    FormsModule,
    TabMenuModule,
    PasswordModule,
    ButtonModule,
    InputTextModule,
    DropdownModule
  ],
  declarations: [
    AppComponent,
    TabMenuComponent,
    CadastroEntidadeSocialComponent,
    ListaEntidadesSociaisComponent,
    TelaLoginComponent,
    CadastroUsuarioComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
