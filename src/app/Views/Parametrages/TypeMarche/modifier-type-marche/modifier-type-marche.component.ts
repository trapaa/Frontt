import { Component, OnInit } from '@angular/core';

import { TypeMarcheService } from '../../../../services/type-marche.service';

import {  Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { TypeCahierCharges } from 'src/app/models/TypeCahierCharges';
import { Pays } from 'src/app/models/Pays';
import { TypeMarche } from 'src/app/models/TypeMarche';
@Component({
  selector: 'app-modifier-type-marche',
  templateUrl: './modifier-type-marche.component.html',
  styleUrls: ['./modifier-type-marche.component.css']
})
export class ModifierTypeMarcheComponent implements OnInit {

  constructor(private Service:TypeMarcheService,private router:Router) { }
  selectedTeam = '';
  id:any
  n:any;
  List:any
  form = {
    
   
    typeMarcheLibelle: '',
    typeMarcheAcronyme: '',
    typeMarcheDescription: '',
    typeMarcheOrdre: '',
    etatId: '',
    
    acceptTerms: false,
  };


  onSelected(value:string): void {
		this.selectedTeam = value;
    
	}


  onSubmit(): void {
    this.Service.update(this.id,this.n,this.selectedTeam).subscribe(
      ()=>  (this.router.navigate(['/list-type']))
    )

    }

  ngOnInit(): void {
    this.n=new TypeMarche();

    this.Service.liste1()
  
    .subscribe(data => {
          
      this.List=data    
     })


     this.id=localStorage.getItem('id')
   
 
     
     this.Service.getone(this.id)
     
     .subscribe(data => {
           
       this.n=data 
       this.selectedTeam=this.n.etat.etatId
       
      })
 
      
  }


}
