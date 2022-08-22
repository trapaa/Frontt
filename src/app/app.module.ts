import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeTypeCritereComponent } from './Views/Parametrages/Type-Critere/liste-type-critere/liste-type-critere.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { AjouterTypeCritereComponent } from './Views/Parametrages/Type-Critere/ajouter-type-critere/ajouter-type-critere.component';
import { UpdateTypeCritereComponent } from './Views/Parametrages/Type-Critere/update-type-critere/update-type-critere.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import { NavbarComponent } from './Views/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FouterComponent } from './Views/fouter/fouter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConsultationTypeCritereComponent } from './Views/Parametrages/Type-Critere/consultation-type-critere/consultation-type-critere.component';
import { AjouterOperationComponent } from './Views/Parametrages/Operation/ajouter-operation/ajouter-operation.component';
import { ConsultationOperationComponent } from './Views/Parametrages/Operation/consultation-operation/consultation-operation.component';
import { ListeOperationComponent } from './Views/Parametrages/Operation/liste-operation/liste-operation.component';
import { UpdateOperationComponent } from './Views/Parametrages/Operation/update-operation/update-operation.component';
import { UpdateOperateursComponent } from './Views/Parametrages/Operateurs/update-operateurs/update-operateurs.component';
import { AjouterOperateursComponent } from './Views/Parametrages/Operateurs/ajouter-operateurs/ajouter-operateurs.component';
import { ListeOperateursComponent } from './Views/Parametrages/Operateurs/liste-operateurs/liste-operateurs.component';
import { ConsultationOperateursComponent } from './Views/Parametrages/Operateurs/consultation-operateurs/consultation-operateurs.component';
import { ListeTypeCahierChargeComponent } from './Views/Parametrages/TypeCahierCharge/liste-type-cahier-charge/liste-type-cahier-charge.component';
import { AjouterTypeCahierChargeComponent } from './Views/Parametrages/TypeCahierCharge/ajouter-type-cahier-charge/ajouter-type-cahier-charge.component';
import { ConsulterTypeCahierChargeComponent } from './Views/Parametrages/TypeCahierCharge/consulter-type-cahier-charge/consulter-type-cahier-charge.component';
import { UpdateTypeCahierChargeComponent } from './Views/Parametrages/TypeCahierCharge/update-type-cahier-charge/update-type-cahier-charge.component';
import { ListPaysComponent } from './Views/Parametrages/Pays/list-pays/list-pays.component';
import { AjouterPaysComponent } from './Views/Parametrages/Pays/ajouter-pays/ajouter-pays.component';
import { ModifierPaysComponent } from './Views/Parametrages/Pays/modifier-pays/modifier-pays.component';
import { ConsultationPaysComponent } from './Views/Parametrages/Pays/consultation-pays/consultation-pays.component';
import { AjouterGouverneratComponent } from './Views/Parametrages/Gouvernerat/ajouter-gouvernerat/ajouter-gouvernerat.component';
import { ListGouverneratComponent } from './Views/Parametrages/Gouvernerat/list-gouvernerat/list-gouvernerat.component';
import { ModifierGouverneratComponent } from './Views/Parametrages/Gouvernerat/modifier-gouvernerat/modifier-gouvernerat.component';
import { ConsulterGouverneratComponent } from './Views/Parametrages/Gouvernerat/consulter-gouvernerat/consulter-gouvernerat.component';
import { ListDeviseComponent } from './Views/Parametrages/Devise/list-devise/list-devise.component';
import { AjouterDeviseComponent } from './Views/Parametrages/Devise/ajouter-devise/ajouter-devise.component';
import { ModifierDeviseComponent } from './Views/Parametrages/Devise/modifier-devise/modifier-devise.component';
import { ConsulterDeviseComponent } from './Views/Parametrages/Devise/consulter-devise/consulter-devise.component';
import { ListeSoumissionnaireComponent } from './Views/Parametrages/Soumissionnaire/liste-soumissionnaire/liste-soumissionnaire.component';
import { AjouterVilleComponent } from './Views/Parametrages/Ville/ajouter-ville/ajouter-ville.component';
import { ListVilleComponent } from './Views/Parametrages/Ville/list-ville/list-ville.component';
import { ModifierVilleComponent } from './Views/Parametrages/Ville/modifier-ville/modifier-ville.component';
import { ConsulterVilleComponent } from './Views/Parametrages/Ville/consulter-ville/consulter-ville.component';
import { ConsulterFonctionComponent } from './Views/Parametrages/Fonction/consulter-fonction/consulter-fonction.component';
import { ModifierFonctionComponent } from './Views/Parametrages/Fonction/modifier-fonction/modifier-fonction.component';
import { AjouterFonctionComponent } from './Views/Parametrages/Fonction/ajouter-fonction/ajouter-fonction.component';
import { ListFonctionComponent } from './Views/Parametrages/Fonction/list-fonction/list-fonction.component';
import { ListFormeComponent } from './Views/Parametrages/Formejuridique/list-forme/list-forme.component';
import { AjouterFormeComponent } from './Views/Parametrages/Formejuridique/ajouter-forme/ajouter-forme.component';
import { ModifierFormeComponent } from './Views/Parametrages/Formejuridique/modifier-forme/modifier-forme.component';
import { ConsulterFormeComponent } from './Views/Parametrages/Formejuridique/consulter-forme/consulter-forme.component';
import { AjouterTypeMarcheComponent } from './Views/Parametrages/TypeMarche/ajouter-type-marche/ajouter-type-marche.component';
import { ModifierTypeMarcheComponent } from './Views/Parametrages/TypeMarche/modifier-type-marche/modifier-type-marche.component';
import { ConsulterTypeMarcheComponent } from './Views/Parametrages/TypeMarche/consulter-type-marche/consulter-type-marche.component';
import { ListTypeMarcheComponent } from './Views/Parametrages/TypeMarche/list-type-marche/list-type-marche.component';
import { AjouterSoumissionnaireComponent } from './Views/Parametrages/Soumissionnaire/ajouter-soumissionnaire/ajouter-soumissionnaire.component';
import { ModifierSoumissionnaireComponent } from './Views/Parametrages/Soumissionnaire/modifier-soumissionnaire/modifier-soumissionnaire.component';
import { ConsulterSoumissionnaireComponent } from './Views/Parametrages/Soumissionnaire/consulter-soumissionnaire/consulter-soumissionnaire.component';


export function Ts(http:HttpClient){
  return new TranslateHttpLoader(http,'assets/i18n/','.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ListeTypeCritereComponent,
    AjouterTypeCritereComponent,
    UpdateTypeCritereComponent,
    NavbarComponent,
    FouterComponent,
    ConsultationTypeCritereComponent,
    AjouterOperationComponent,
    ConsultationOperationComponent,
    ListeOperationComponent,
    UpdateOperationComponent,
    UpdateOperateursComponent,
    AjouterOperateursComponent,
    ListeOperateursComponent,
    ConsultationOperateursComponent,
    ListeTypeCahierChargeComponent,
    AjouterTypeCahierChargeComponent,
    ConsulterTypeCahierChargeComponent,
    UpdateTypeCahierChargeComponent,
    ListPaysComponent,
    AjouterPaysComponent,
    ModifierPaysComponent,
    ConsultationPaysComponent,
    AjouterGouverneratComponent,
    ListGouverneratComponent,
    ModifierGouverneratComponent,
    ConsulterGouverneratComponent,
    ListDeviseComponent,
    AjouterDeviseComponent,
    ModifierDeviseComponent,
    ConsulterDeviseComponent,
    ListeSoumissionnaireComponent,
    AjouterVilleComponent,
    ListVilleComponent,
    ModifierVilleComponent,
    ConsulterVilleComponent,
    ConsulterFonctionComponent,
    ModifierFonctionComponent,
    AjouterFonctionComponent,
    ListFonctionComponent,
    ListFormeComponent,
    AjouterFormeComponent,
    ModifierFormeComponent,
    ConsulterFormeComponent,
    AjouterTypeMarcheComponent,
    ModifierTypeMarcheComponent,
    ConsulterTypeMarcheComponent,
    ListTypeMarcheComponent,
    AjouterSoumissionnaireComponent,
    ModifierSoumissionnaireComponent,
    ConsulterSoumissionnaireComponent
  ],
  imports: [
    BrowserModule,
    
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    MatSliderModule,
    MatSliderModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatButtonModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (Ts),
          deps: [HttpClient]
        } 
}),
    BrowserAnimationsModule,


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
