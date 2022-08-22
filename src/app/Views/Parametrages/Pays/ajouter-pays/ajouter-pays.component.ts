import { Component, OnInit } from '@angular/core';

import {gouvernorat} from '../../../../models/Gouvernerat'
import { PaysService } from '../../../../services/pays.service';

import {  Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { TypeCahierCharges } from 'src/app/models/TypeCahierCharges';
import { Pays } from 'src/app/models/Pays';

@Component({
  selector: 'app-ajouter-pays',
  templateUrl: './ajouter-pays.component.html',
  styleUrls: ['./ajouter-pays.component.css']
})
export class AjouterPaysComponent implements OnInit {

  constructor(private Service:PaysService,private router:Router) { }
  selectedTeam = '';
  
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
    this.Service.ajouter(this.n,this.selectedTeam).subscribe(
      ()=>  (this.router.navigate(['/list-pays']))
    )



    
  }
  ngOnInit(): void {
    this.n=new Pays();

    this.Service.liste1()
  
    .subscribe(data => {
          
      this.List=data    
     })
  }

}
