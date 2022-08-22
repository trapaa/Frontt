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
  selector: 'app-ajouter-ville',
  templateUrl: './ajouter-ville.component.html',
  styleUrls: ['./ajouter-ville.component.css']
})
export class AjouterVilleComponent implements OnInit {

  constructor(private Service:VilleService,private router:Router,private service1:GouverneratService) { }
  selectedTeam = '';
  
  n:any;
  List:any
  form = {
    
    villeNom: '',
   
    gouverneratId: '',
    
    acceptTerms: false,
  };


  onSelected(value:string): void {
		this.selectedTeam = value;
    
	}


  onSubmit(): void {
    this.Service.ajouter(this.n,this.selectedTeam).subscribe(
      ()=>  (this.router.navigate(['/list-ville']))
    )



    
  }
  ngOnInit(): void {
    this.n=new Ville();

    this.service1.liste()
  
    .subscribe(data => {
          
      this.List=data    
     })
  }

}
