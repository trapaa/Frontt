import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterOperationComponent } from './Views/Parametrages/Operation/ajouter-operation/ajouter-operation.component';
import { ConsultationOperationComponent } from './Views/Parametrages/Operation/consultation-operation/consultation-operation.component';
import { ListeOperationComponent } from './Views/Parametrages/Operation/liste-operation/liste-operation.component';
import { UpdateOperationComponent } from './Views/Parametrages/Operation/update-operation/update-operation.component';
import { AjouterTypeCritereComponent } from './Views/Parametrages/Type-Critere/ajouter-type-critere/ajouter-type-critere.component';
import { ConsultationTypeCritereComponent } from './Views/Parametrages/Type-Critere/consultation-type-critere/consultation-type-critere.component';
import { ListeTypeCritereComponent } from './Views/Parametrages/Type-Critere/liste-type-critere/liste-type-critere.component';
import { UpdateTypeCritereComponent } from './Views/Parametrages/Type-Critere/update-type-critere/update-type-critere.component';
import { UpdateOperateursComponent } from './Views/Parametrages/Operateurs/update-operateurs/update-operateurs.component';
import { AjouterOperateursComponent } from './Views/Parametrages/Operateurs/ajouter-operateurs/ajouter-operateurs.component';
import { ListeOperateursComponent } from './Views/Parametrages/Operateurs/liste-operateurs/liste-operateurs.component';
import { ConsultationOperateursComponent } from './Views/Parametrages/Operateurs/consultation-operateurs/consultation-operateurs.component';

const routes: Routes = [
  { path: 'list', component: ListeTypeCritereComponent},
  { path: 'ajouter', component: AjouterTypeCritereComponent},
  { path: 'update', component: UpdateTypeCritereComponent},
  { path: 'consulter', component: ConsultationTypeCritereComponent},
  { path: 'list-operateur', component: ListeOperateursComponent},
  { path: 'ajouter-operateur', component: AjouterOperateursComponent},
  { path: 'update-operateur', component: UpdateOperateursComponent},
  { path: 'consulter-operateur', component: ConsultationOperateursComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
