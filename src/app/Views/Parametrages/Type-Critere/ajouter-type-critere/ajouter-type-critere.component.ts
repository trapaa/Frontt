import { Component, OnInit } from '@angular/core';
import {TypeCritere} from '../../../../models/TypeCritere'
import { ServiceService } from '../../../../services/service.service';
import {  Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ajouter-type-critere',
  templateUrl: './ajouter-type-critere.component.html',
  styleUrls: ['./ajouter-type-critere.component.css']
})
export class AjouterTypeCritereComponent implements OnInit {
n:any


  constructor(private Service:ServiceService,private router:Router) { }

  
  form = {
    
    typeCritereLibelle: '',
    typeCritereLibelleAr: '',
    typeCritereDescription: '',
    typeCritereDescriptionAr: '',
    acceptTerms: false,
  };
  onSubmit(): void {
    this.Service.ajouter(this.n).subscribe(
      ()=>  (this.router.navigate(['/list']))
    )
  }
  onReset(form: NgForm): void {
    form.reset();
  }


  ngOnInit(): void {
this.n=new TypeCritere()

  }


  savenatureCritere(){
    this.Service.ajouter(this.n).subscribe(
      ()=>  (this.router.navigate(['/list']))
    )
  }
    return(){
      this.router.navigate(['/list']);
    }



  ajouter(){
  
   
      
       
    this.Service.ajouter(this.n)
   
      .subscribe(data => {
            
        console.log(data )  
        
      


        this.router.navigate(['/list']);


       })
    
        
  }


}


