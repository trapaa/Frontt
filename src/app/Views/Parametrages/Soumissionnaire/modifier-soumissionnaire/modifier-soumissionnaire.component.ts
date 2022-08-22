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
  selector: 'app-modifier-soumissionnaire',
  templateUrl: './modifier-soumissionnaire.component.html',
  styleUrls: ['./modifier-soumissionnaire.component.css']
})
export class ModifierSoumissionnaireComponent implements OnInit {

  constructor(private Service:SoumissionnaireService,private router:Router) { }
  paysId = '';
  id:any
  n:any;
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
    Fonction: '',
    formejuridique: '',
    gouvernorat: '',
    pays: '',
    ville: '',
    typemarche: '',
    etatCompte: '',
    acceptTerms: false,
  };


  onSelectedpays(value:any): void {
    this.paysId=value;

    
	}

  onSelected(value:any): void {
		console.log(value);

    
	}

 

  onSubmit(): void {

    this.Service.update(this.n).subscribe(
      ()=>  (this.router.navigate(['/list-sou']))
    )

    }

  ngOnInit(): void {
    this.n=new Soumissionnaire();
    this.pays=new Pays();

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


     this.id=localStorage.getItem('id')
   
 
     
     this.Service.getone(this.id)
     
     .subscribe(data => {
           
       this.n=data 

       
      })

      this.Service.listeEtat()
  
      .subscribe(data => {
            
        this.listetat=data    
       })
 
      
  }
}
