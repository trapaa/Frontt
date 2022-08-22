import { Component, OnInit } from '@angular/core';

import {gouvernorat} from '../../../../models/Gouvernerat'
import { PaysService } from '../../../../services/pays.service';

import {  Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { TypeCahierCharges } from 'src/app/models/TypeCahierCharges';
import { Pays } from 'src/app/models/Pays';

@Component({
  selector: 'app-modifier-pays',
  templateUrl: './modifier-pays.component.html',
  styleUrls: ['./modifier-pays.component.css']
})
export class ModifierPaysComponent implements OnInit {

  constructor(private Service:PaysService,private router:Router) { }
  selectedTeam = '';
  id:any
  n:any;
  List:any
  form = {
    
    paysLibelle: '',
    paysCode: '',
    deviseId: '',
    
    acceptTerms: false,
  };


  onSelected(value:string): void {
		this.selectedTeam = value;
    
	}


  onSubmit(): void {
    this.Service.update(this.id,this.n,this.selectedTeam).subscribe(
      ()=>  (this.router.navigate(['/list-pays']))
    )

    }

  ngOnInit(): void {
    this.n=new Pays();

    this.Service.liste1()
  
    .subscribe(data => {
          
      this.List=data    
     })


     this.id=localStorage.getItem('id')
   
 
     
     this.Service.getone(this.id)
     
     .subscribe(data => {
           
       this.n=data 
       this.selectedTeam=this.n.devise.deviseId
       
      })
 
      
  }

}
