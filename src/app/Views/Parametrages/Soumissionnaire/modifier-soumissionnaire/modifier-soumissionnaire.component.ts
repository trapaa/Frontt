import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
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

  constructor(private Service:SoumissionnaireService,private router:Router,public datepipe: DatePipe) { }
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
  date:any
  idP:any;
  idG:any;


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



  onSelectedP(): void {
    

    this.n.gouvernorat.gouverneratId=""
    this.n.ville.villeId=""
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
this.n.soumissionnaireAnneeCreation=this.date;
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

      

       this.Service.listepays()
  
       .subscribe(data => {
             
         this.listepays=data    
        })

        this.Service.listemarche()
  
        .subscribe(data => {
              
          this.listemarche=data    
         })

      


     this.id=localStorage.getItem('id')
   
 
     
     this.Service.getone(this.id)
     
     .subscribe(data => {
      
       this.n=data 
       this.idG=this.n.gouvernorat.gouverneratId;
       this.idP=this.n.pays.paysId;
       this.date=new Date();
       this.date=this.datepipe.transform(this.n.soumissionnaireAnneeCreation, 'yyyy-MM-dd');
console.log(this.date)
this.Service.listeville( this.idG)
  
      .subscribe(data => {
            
        this.listeville=data    
       })
this.Service.listegouvernerat(this.idP)
      
.subscribe(data => {
      
  this.listegouvernerat=data  
  console.log("hhhh")  
 })

       
      })

     

      this.Service.listeEtat()
  
      .subscribe(data => {
            
        this.listetat=data    
       })
 
      
  }
}
