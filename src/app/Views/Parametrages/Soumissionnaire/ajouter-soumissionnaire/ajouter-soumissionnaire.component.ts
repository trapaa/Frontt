import { Component, OnInit } from '@angular/core';

import {gouvernorat} from '../../../../models/Gouvernerat'
import { SoumissionnaireService } from '../../../../services/soumissionnaire.service';

import {  Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { TypeCahierCharges } from 'src/app/models/TypeCahierCharges';
import { Pays } from 'src/app/models/Pays';
import { Soumissionnaire } from 'src/app/models/Soumissionnaire';

@Component({
  selector: 'app-ajouter-soumissionnaire',
  templateUrl: './ajouter-soumissionnaire.component.html',
  styleUrls: ['./ajouter-soumissionnaire.component.css']
})
export class AjouterSoumissionnaireComponent implements OnInit {

  constructor(private Service:SoumissionnaireService,private router:Router) { }
  selectedTeam = '';
  
 n=new Soumissionnaire();
  List:any
  listetat:any
  listeforme:any
  listefonction:any
  listegouvernerat:any
  listepays:any
  listemarche:any
  listeville:any
  pays:any
  form = {
    
    
    soumissionnaireRaisonSociale: '',
    soumissionnaireCapital: '',
    soumissionnaireMatriculeFiscal: '',
    soumissionnaireAdresseSiegeSocial: '',
    soumissionnaireAffiliationCnss: '',
    soumissionnaireNumeroRib: '',
    soumissionnaireLieuOuvertureCompte: '',
    soumissionnaireAnneeCreation: '',
    soumissionnaireIdentifiant: '',
    soumissionnaireNom: '',
    soumissionnairePrenom: '',
    soumissionnaireTel: '',
    soumissionnaireFax: '',
    soumissionnaireMailEntreprise: '',
    soumissionnaireSiteWeb: '',
    soumissionnaireTitreRep: '',
    soumissionnaireMailRep: '',
    soumissionnaireTelRep: '',
  
   soumissionnaireNumeroRegistreCommerce: '',
   codePostaleId: '', 
   
    soumissionnaireAutreAdresse: '',
    etat: '',
    fonction: '',
    formejuridique: '',
    gouvernorat: '',
    pays: '',
    ville: '',
    typemarche: '',
   
    etatCompte: '',
    
    acceptTerms: false,
  };


  onSelected(value:string): void {
		this.selectedTeam = value;
    
	}


  onSubmit(): void {
    this.Service.ajouter(this.n).subscribe(
      ()=>  (this.router.navigate(['/list-sou']))
    )



    
  }
  ngOnInit(): void {


    this.Service.listeforme()
  
    .subscribe(data => {
          
      this.listeforme=data    
     })

     this.Service.listefonction()
  
     .subscribe(data => {
           
       this.listefonction=data    
      })

      this.Service.listegouvernerat()
  
      .subscribe(data => {
            
        this.listegouvernerat=data    
       })

       this.Service.listepays()
  
       .subscribe(data => {
             
         this.listepays=data    
        })

        this.Service.listemarche()
  
        .subscribe(data => {
              
          this.listemarche=data    
         })

         this.Service.listeville()
  
         .subscribe(data => {
               
           this.listeville=data    
          })

          this.Service.listeEtat()
  
          .subscribe(data => {
                
            this.listetat=data    
           })

  }

}
