import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroEntidadeSocialComponent } from './components/cadastro-entidade-social/cadastro-entidade-social.component';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { ListaEntidadesSociaisComponent } from './components/lista-entidades-sociais/lista-entidades-sociais.component';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { SobreDesenvolvedoresComponent } from './components/sobre-desenvolvedores/sobre-desenvolvedores.component';


const routes: Routes = [
  {
    path: '',
    component: TelaLoginComponent,
  },
  {
    path: 'formulario-cadastro-usuario',
    component: CadastroUsuarioComponent,
  },
  {
    path: 'formulario-edicao-usuario',
    component: EditarUsuarioComponent,
  },
  {
    path: 'lista-entidades-sociais',
    component: ListaEntidadesSociaisComponent,
  },
  {
    path: 'cadastrar-entidade-social',
    component: CadastroEntidadeSocialComponent,
  },
  {
    path: 'sobre-desenvolvedores',
    component: SobreDesenvolvedoresComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
