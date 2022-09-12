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
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table'

import { AppComponent } from './app.component';
import { TabMenuComponent } from './components/tab-menu/tab-menu.component';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { ListaEntidadesSociaisComponent } from './components/lista-entidades-sociais/lista-entidades-sociais.component';
import { CadastroEntidadeSocialComponent } from './components/cadastro-entidade-social/cadastro-entidade-social.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { InterInterceptor } from './interceptor/inter.interceptor';
import { SobreDesenvolvedoresComponent } from './components/sobre-desenvolvedores/sobre-desenvolvedores.component';
import { ListarEntidadesSociaisUsuarioComponent } from './components/listar-entidades-sociais-usuario/listar-entidades-sociais-usuario.component';

@NgModule({
  imports: [
    RouterModule.forRoot([{ path: '', component: AppComponent }]),
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MessageModule,
    FormsModule,
    ReactiveFormsModule,
    TabMenuModule,
    PasswordModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    InputTextareaModule,
    TableModule
  ],
  declarations: [
    AppComponent,
    TabMenuComponent,
    CadastroEntidadeSocialComponent,
    ListaEntidadesSociaisComponent,
    TelaLoginComponent,
    CadastroUsuarioComponent,
    EditarUsuarioComponent,
    SobreDesenvolvedoresComponent,
    ListarEntidadesSociaisUsuarioComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterInterceptor,
      multi: true,
    },
  ],
})
export class AppModule { }
