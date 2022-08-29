import { Component, OnInit } from '@angular/core';

import {gouvernorat} from '../../../../models/Gouvernerat'
import { SoumissionnaireService } from '../../../../services/soumissionnaire.service';

import {  Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { TypeCahierCharges } from 'src/app/models/TypeCahierCharges';
import { Pays } from 'src/app/models/Pays';
import { Soumissionnaire } from 'src/app/models/Soumissionnaire';
import { Ville } from 'src/app/models/Ville';

@Component({
  selector: 'app-ajouter-soumissionnaire',
  templateUrl: './ajouter-soumissionnaire.component.html',
  styleUrls: ['./ajouter-soumissionnaire.component.css']
})
export class AjouterSoumissionnaireComponent implements OnInit {

  constructor(private Service:SoumissionnaireService,private router:Router) { }
  selectedTeam = '';
  gouv=new gouvernorat;
  vil=new Ville;
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
    soumissionnaireMailEntreprise: ['', [Validators.required, Validators.email]],
    soumissionnaireSiteWeb: '',
    soumissionnaireTitreRep: '',
    soumissionnaireMailRep: ['', [Validators.required, Validators.email]],
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


  onSelectedP(): void {
    

   
    this.n.gouvernorat.gouverneratId=this.gouv.gouverneratId
    this.n.ville.villeId=this.vil.villeId
    this.listeville=[]
    this.listegouvernerat=[]

     this.Service.listegouvernerat(this.n.pays.paysId)
  
     .subscribe(data => {
           
       this.listegouvernerat=data    
      })
    
	}

  onSelectedG(): void {
    this.Service.listeville(this.n.gouvernorat.gouverneratId)
  
    .subscribe(data => {
          
      this.listeville=data    
     })


     
    
	}


  onSubmit(): void {
    console.log(this.n);
    this.Service.ajouter(this.n).subscribe(
      
      ()=>  (this.router.navigate(['/list-sou']))
    )



    
  }
  ngOnInit(): void {



        this.n=new Soumissionnaire();


    this.Service.listeforme()
  
    .subscribe(data => {
          
      this.listeforme=data    
     })

     this.Service.listefonction()
  
     .subscribe(data => {
           
       this.listefonction=data    
      })

   

       this.Service.listepays()
  
       .subscribe(data => {
             
         this.listepays=data    
        })

        this.Service.listemarche()
  
        .subscribe(data => {
              
          this.listemarche=data    
         })



          this.Service.listeEtat()
  
          .subscribe(data => {
                
            this.listetat=data    
           })

  }

}
