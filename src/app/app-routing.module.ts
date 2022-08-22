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
import { ListeTypeCahierChargeComponent } from './Views/Parametrages/TypeCahierCharge/liste-type-cahier-charge/liste-type-cahier-charge.component';
import { AjouterTypeCahierChargeComponent } from './Views/Parametrages/TypeCahierCharge/ajouter-type-cahier-charge/ajouter-type-cahier-charge.component';
import { ConsulterTypeCahierChargeComponent } from './Views/Parametrages/TypeCahierCharge/consulter-type-cahier-charge/consulter-type-cahier-charge.component';
import { UpdateTypeCahierChargeComponent } from './Views/Parametrages/TypeCahierCharge/update-type-cahier-charge/update-type-cahier-charge.component';
import { ModifierPaysComponent } from './Views/Parametrages/Pays/modifier-pays/modifier-pays.component';
import { ConsultationPaysComponent } from './Views/Parametrages/Pays/consultation-pays/consultation-pays.component';
import { AjouterPaysComponent } from './Views/Parametrages/Pays/ajouter-pays/ajouter-pays.component';
import { ListPaysComponent } from './Views/Parametrages/Pays/list-pays/list-pays.component';
import { ListGouverneratComponent } from './Views/Parametrages/Gouvernerat/list-gouvernerat/list-gouvernerat.component';
import { AjouterGouverneratComponent } from './Views/Parametrages/Gouvernerat/ajouter-gouvernerat/ajouter-gouvernerat.component';
import { ConsulterGouverneratComponent } from './Views/Parametrages/Gouvernerat/consulter-gouvernerat/consulter-gouvernerat.component';
import { ModifierGouverneratComponent } from './Views/Parametrages/Gouvernerat/modifier-gouvernerat/modifier-gouvernerat.component';
import { ListDeviseComponent } from './Views/Parametrages/Devise/list-devise/list-devise.component';
import { AjouterDeviseComponent } from './Views/Parametrages/Devise/ajouter-devise/ajouter-devise.component';
import { ConsulterDeviseComponent } from './Views/Parametrages/Devise/consulter-devise/consulter-devise.component';
import { ModifierDeviseComponent } from './Views/Parametrages/Devise/modifier-devise/modifier-devise.component';
import { ListVilleComponent } from './Views/Parametrages/Ville/list-ville/list-ville.component';
import { AjouterVilleComponent } from './Views/Parametrages/Ville/ajouter-ville/ajouter-ville.component';
import { ConsulterVilleComponent } from './Views/Parametrages/Ville/consulter-ville/consulter-ville.component';
import { ModifierVilleComponent } from './Views/Parametrages/Ville/modifier-ville/modifier-ville.component';
import { ListFormeComponent } from './Views/Parametrages/Formejuridique/list-forme/list-forme.component';
import { AjouterFormeComponent } from './Views/Parametrages/Formejuridique/ajouter-forme/ajouter-forme.component';
import { ConsulterFormeComponent } from './Views/Parametrages/Formejuridique/consulter-forme/consulter-forme.component';
import { ModifierFormeComponent } from './Views/Parametrages/Formejuridique/modifier-forme/modifier-forme.component';
import { ListFonctionComponent } from './Views/Parametrages/Fonction/list-fonction/list-fonction.component';
import { AjouterFonctionComponent } from './Views/Parametrages/Fonction/ajouter-fonction/ajouter-fonction.component';
import { ConsulterFonctionComponent } from './Views/Parametrages/Fonction/consulter-fonction/consulter-fonction.component';
import { ModifierFonctionComponent } from './Views/Parametrages/Fonction/modifier-fonction/modifier-fonction.component';
import { ListTypeMarcheComponent } from './Views/Parametrages/TypeMarche/list-type-marche/list-type-marche.component';
import { AjouterTypeMarcheComponent } from './Views/Parametrages/TypeMarche/ajouter-type-marche/ajouter-type-marche.component';
import { ConsulterTypeMarcheComponent } from './Views/Parametrages/TypeMarche/consulter-type-marche/consulter-type-marche.component';
import { ModifierTypeMarcheComponent } from './Views/Parametrages/TypeMarche/modifier-type-marche/modifier-type-marche.component';
import { ListeSoumissionnaireComponent } from './Views/Parametrages/Soumissionnaire/liste-soumissionnaire/liste-soumissionnaire.component';
import { AjouterSoumissionnaireComponent } from './Views/Parametrages/Soumissionnaire/ajouter-soumissionnaire/ajouter-soumissionnaire.component';
import { ConsulterSoumissionnaireComponent } from './Views/Parametrages/Soumissionnaire/consulter-soumissionnaire/consulter-soumissionnaire.component';
import { ModifierSoumissionnaireComponent } from './Views/Parametrages/Soumissionnaire/modifier-soumissionnaire/modifier-soumissionnaire.component';

const routes: Routes = [
  { path: 'list', component: ListeTypeCritereComponent},
  { path: 'ajouter', component: AjouterTypeCritereComponent},
  { path: 'update', component: UpdateTypeCritereComponent},
  { path: 'consulter', component: ConsultationTypeCritereComponent},
  { path: 'list-operateur', component: ListeOperateursComponent},
  { path: 'ajouter-operateur', component: AjouterOperateursComponent},
  { path: 'update-operateur', component: UpdateOperateursComponent},
  { path: 'consulter-operateur', component: ConsultationOperateursComponent},
  { path: 'list-cahier', component: ListeTypeCahierChargeComponent},
  { path: 'ajout-cahier', component: AjouterTypeCahierChargeComponent},
  { path: 'consulter-cahier', component: ConsulterTypeCahierChargeComponent},
  { path: 'modifier-cahier', component: UpdateTypeCahierChargeComponent},
  { path: 'list-pays', component: ListPaysComponent},
  { path: 'ajout-pays', component: AjouterPaysComponent},
  { path: 'consulter-pays', component: ConsultationPaysComponent},
  { path: 'modifier-pays', component: ModifierPaysComponent},
  { path: 'list-gouvernerat', component: ListGouverneratComponent},
  { path: 'ajout-gouvernerat', component: AjouterGouverneratComponent},
  { path: 'consulter-gouvernerat', component: ConsulterGouverneratComponent},
  { path: 'modifier-gouvernerat', component: ModifierGouverneratComponent},
  { path: 'list-devise', component: ListDeviseComponent},
  { path: 'ajout-devise', component: AjouterDeviseComponent},
  { path: 'consulter-devise', component: ConsulterDeviseComponent},
  { path: 'modifier-devise', component: ModifierDeviseComponent},
  { path: 'list-ville', component: ListVilleComponent},
  { path: 'ajout-ville', component: AjouterVilleComponent},
  { path: 'consulter-ville', component: ConsulterVilleComponent},
  { path: 'modifier-ville', component: ModifierVilleComponent},
  { path: 'list-forme', component: ListFormeComponent},
  { path: 'ajout-forme', component: AjouterFormeComponent},
  { path: 'consulter-forme', component: ConsulterFormeComponent},
  { path: 'modifier-forme', component: ModifierFormeComponent},
  { path: 'list-fonction', component: ListFonctionComponent},
  { path: 'ajout-fonction', component: AjouterFonctionComponent},
  { path: 'consulter-fonction', component: ConsulterFonctionComponent},
  { path: 'modifier-fonction', component: ModifierFonctionComponent},
  { path: 'list-type', component: ListTypeMarcheComponent},
  { path: 'ajout-type', component: AjouterTypeMarcheComponent},
  { path: 'consulter-type', component: ConsulterTypeMarcheComponent},
  { path: 'modifier-type', component: ModifierTypeMarcheComponent},
  { path: 'ajout-sou', component: AjouterSoumissionnaireComponent},
  { path: 'consulter-sou', component: ConsulterSoumissionnaireComponent},
  { path: 'modifier-sou', component: ModifierSoumissionnaireComponent},
  { path: 'list-sou', component: ListeSoumissionnaireComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
