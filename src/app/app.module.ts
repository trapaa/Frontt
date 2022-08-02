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
    UpdateTypeCahierChargeComponent
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
