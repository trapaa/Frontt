import { Component, OnInit } from '@angular/core';

import { VilleService } from '../../../../services/ville.service';
import { GouverneratService } from '../../../../services/gouvernerat.service';

import {  Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { TypeCahierCharges } from 'src/app/models/TypeCahierCharges';
import { Pays } from 'src/app/models/Pays';
import { Ville } from 'src/app/models/Ville';
@Component({
  selector: 'app-modifier-ville',
  templateUrl: './modifier-ville.component.html',
  styleUrls: ['./modifier-ville.component.css']
})
export class ModifierVilleComponent implements OnInit {

  constructor(private Service:VilleService,private router:Router,private Service1:GouverneratService) { }
  selectedTeam = '';
  id:any
  n:any;
  List:any
  form = {
   
    villeNon: '',
    gouverneratId: '',
    
    acceptTerms: false,
  };


  onSelected(value:string): void {
		this.selectedTeam = value;
    
	}


  onSubmit(): void {
    this.Service.update(this.id,this.n,this.selectedTeam).subscribe(
      ()=>  (this.router.navigate(['/list-ville']))
    )

    }

  ngOnInit(): void {
    this.n=new Ville();

    this.Service1.liste()
  
    .subscribe(data => {
          
      this.List=data    
     })


     this.id=localStorage.getItem('id')
   
 
     
     this.Service.getone(this.id)
     
     .subscribe(data => {
           
       this.n=data 
       this.selectedTeam=this.n.gouvernerat.gouverneratId
       
      })
 
      
  }


}
