import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumoComponent } from './resumo/resumo.component';
import { PlanosComponent } from './planos/planos.component';
import { SetorComponent } from './setor/setor.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { VendasComponent } from './vendas/vendas.component';
import { NocComponent } from './noc/noc.component';
import { FrotaComponent } from '../dashboard/frota/frota.component';
import { TorresComponent } from './torres/torres.component';
import { TorresDetailsComponent } from './torres/torres-details/torres-details.component';
import { TorresEditComponent } from './torres/torres-edit/torres-edit.component';
import { RadiosEditComponent } from './torres/radios-edit/radios-edit.component';
import { SuporteComponent } from './suporte/suporte.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { EquipamentosEditComponent } from './torres/equipamentos-edit/equipamentos-edit.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SuporteTecnicoComponent } from './suporte-tecnico/suporte-tecnico.component';
import { CarrosEditComponent } from './frota/carros-edit/carros-edit.component';
import { EquipeComponent } from './equipe/equipe.component';
import { EquipeEditComponent } from './equipe/equipe-edit/equipe-edit.component';
import { CarrosDetailsComponent } from './frota/carros-details/carros-details.component';
import { RedesocialComponent } from './suporte/redesocial/redesocial.component';

const routes: Routes = [
    { path: 'inicio', component: ResumoComponent },
    { path: 'planos', component: PlanosComponent },
    { path: 'setor', component: SetorComponent },
    { path: 'vendedor', component: VendedorComponent },
    { path: 'vendas', component: VendasComponent },
    { path: 'noc', component: NocComponent },
    { path: 'usuarios', component: UsuariosComponent},
    { path: 'equipes', component: EquipeComponent},
    { path: 'equipes/edit/:id', component: EquipeEditComponent},
    { path: 'frota', component: FrotaComponent },
    { path: 'frota/carro/edit/:id', component: CarrosEditComponent},
    { path: 'frota/carro/details/:id', component: CarrosDetailsComponent},
    { path: 'torres', component: TorresComponent },
    { path: 'torres/edit/:id', component: TorresEditComponent },
    { path: 'torres/:id', component: TorresDetailsComponent },
    { path: 'radios/edit/:id', component: RadiosEditComponent },
    { path: 'equipamento/edit/:id', component: EquipamentosEditComponent },
    { path: 'sac', component: SuporteComponent },
    { path: 'redesocial', component: RedesocialComponent },
    { path: 'suporte-tecnico', component: SuporteTecnicoComponent },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
