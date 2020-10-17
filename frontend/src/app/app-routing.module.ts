import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { ResumoComponent } from './components/dashboard/resumo/resumo.component';
import { PlanosComponent } from './components/dashboard/planos/planos.component';
import { SetorComponent } from './components/dashboard/setor/setor.component';
import { VendedorComponent } from './components/dashboard/vendedor/vendedor.component';
import { VendasComponent } from './components/dashboard/vendas/vendas.component';
import { NocComponent } from './components/dashboard/noc/noc.component';
import { FrotaComponent } from './components/dashboard/frota/frota.component';
import { TorresComponent } from './components/dashboard/torres/torres.component';
import { TorresDetailsComponent } from './components/dashboard/torres/torres-details/torres-details.component';
import { TorresEditComponent } from './components/dashboard/torres/torres-edit/torres-edit.component';
import { RadiosEditComponent } from './components/dashboard/torres/radios-edit/radios-edit.component';
import { SuporteComponent } from './components/dashboard/suporte/suporte.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EquipamentosEditComponent } from './components/dashboard/torres/equipamentos-edit/equipamentos-edit.component';
import { UsuariosComponent } from './components/dashboard/usuarios/usuarios.component';
import { SuporteTecnicoComponent } from './components/dashboard/suporte-tecnico/suporte-tecnico.component';
import { CarrosEditComponent } from './components/dashboard/frota/carros-edit/carros-edit.component';
import { EquipeComponent } from './components/dashboard/equipe/equipe.component';
import { EquipeEditComponent } from './components/dashboard/equipe/equipe-edit/equipe-edit.component';
import { CarrosDetailsComponent } from './components/dashboard/frota/carros-details/carros-details.component';
import { RedesocialComponent } from './components/dashboard/suporte/redesocial/redesocial.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: 'inicio', component: ResumoComponent},
    { path: 'planos', component: PlanosComponent},
    { path: 'setor', component: SetorComponent},
    { path: 'vendedor', component: VendedorComponent},
    { path: 'vendas', component: VendasComponent},
    { path: 'noc', component: NocComponent},
    { path: 'usuarios', component: UsuariosComponent},
    { path: 'equipes', component: EquipeComponent},
    { path: 'equipes/edit/:id', component: EquipeEditComponent},
    { path: 'frota', component: FrotaComponent},
    { path: 'frota/carro/edit/:id', component: CarrosEditComponent},
    { path: 'frota/carro/details/:id', component: CarrosDetailsComponent},
    { path: 'torres', component: TorresComponent},
    { path: 'torres/edit/:id', component: TorresEditComponent},
    { path: 'torres/:id', component: TorresDetailsComponent},
    { path: 'radios/edit/:id', component: RadiosEditComponent},
    { path: 'equipamento/edit/:id', component: EquipamentosEditComponent },
    { path: 'sac', component: SuporteComponent },
    { path: 'redesocial', component: RedesocialComponent },
    { path: 'suporte-tecnico', component: SuporteTecnicoComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
