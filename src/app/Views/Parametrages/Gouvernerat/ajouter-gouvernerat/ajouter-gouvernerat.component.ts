import { Component, OnInit } from '@angular/core';

import {gouvernorat} from '../../../../models/Gouvernerat'
import { PaysService } from '../../../../services/pays.service';
import { GouverneratService } from '../../../../services/gouvernerat.service';

import {  Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { TypeCahierCharges } from 'src/app/models/TypeCahierCharges';
import { Pays } from 'src/app/models/Pays';

@Component({
  selector: 'app-ajouter-gouvernerat',
  templateUrl: './ajouter-gouvernerat.component.html',
  styleUrls: ['./ajouter-gouvernerat.component.css']
})
export class AjouterGouverneratComponent implements OnInit {

  constructor(private Service:GouverneratService,private router:Router,private ser:PaysService) { }
  selectedTeam = '';
  
  n:any;
  List:any
  form = {
    
    gouverneratLibelle: '',
    
    paysId: '',
    
    acceptTerms: false,
  };


  onSelected(value:string): void {
		this.selectedTeam = value;
    
	}


  onSubmit(): void {
    this.Service.ajouter(this.n,this.selectedTeam).subscribe(
      ()=>  (this.router.navigate(['/list-gouvernerat']))
    )



    
  }
  ngOnInit(): void {
    this.n=new gouvernorat();

    this.ser.liste()
  
    .subscribe(data => {
          
      this.List=data    
     })
  }

}
