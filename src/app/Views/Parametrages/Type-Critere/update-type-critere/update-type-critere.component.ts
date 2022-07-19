import { Component, OnInit } from '@angular/core';
import {  Router,ActivatedRoute } from '@angular/router';

import {TypeCritere} from '../../../../models/TypeCritere'
import { ServiceService } from '../../../../services/service.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-update-type-critere',
  templateUrl: './update-type-critere.component.html',
  styleUrls: ['./update-type-critere.component.css']
})
export class UpdateTypeCritereComponent implements OnInit {
id:any
n:any
verif:any
  constructor(private Service:ServiceService,private router:Router,private route: ActivatedRoute) { }
  form = {
    
    typeCritereLibelle: '',
    typeCritereLibelleAr: '',
    typeCritereDescription: '',
    typeCritereDescriptionAr: '',
    acceptTerms: false,
  };
  onSubmit(): void {
    this.Service.update(this.id,this.n).subscribe(
      ()=>  (this.router.navigate(['/list']))
    )
  }
  onReset(form: NgForm): void {
    form.reset();
  }

  update(){
    
    this.Service.update(this.id,this.n)
  
      .subscribe(data => {
            
   
        this.router.navigate(['/list']);
       })}

       annuler(){
        this.router.navigate(['/list']);
        localStorage.removeItem("verif")
        
       }


  ngOnInit(): void {
    this.id=localStorage.getItem('id')
    this.n=new TypeCritere()
    this.verif=localStorage.getItem('verif')
    
    this.Service.getone(this.id)
    
    .subscribe(data => {
          
      this.n=data 
      
     })
  }

}
