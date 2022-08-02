import { Component, OnInit } from '@angular/core';


import {TypeCritere} from '../../../../models/TypeCritere'
import { ServiceService } from '../../../../services/service.service';
import { TypeCahierChargeServiceService } from '../../../../services/type-cahier-charge-service.service';
import {  Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { TypeCahierCharges } from 'src/app/models/TypeCahierCharges';

@Component({
  selector: 'app-update-type-cahier-charge',
  templateUrl: './update-type-cahier-charge.component.html',
  styleUrls: ['./update-type-cahier-charge.component.css']
})
export class UpdateTypeCahierChargeComponent implements OnInit {

  constructor(private Service:ServiceService,private router:Router,private ser:TypeCahierChargeServiceService) { }
  selectedTeam = '';
  n:any;
  List:any
  id:any
  id1:any
  form = {
    
    typeCahierChargesLibelle: '',
    ordre: '',
    typeCahierChargesDescription: '',
    TypeCritere: '',
    acceptTerms: false,
  };



  onSelected(value:string): void {
		this.selectedTeam = value;
    
	}

  onSubmit(): void {
    this.ser.update(this.id,this.n,this.selectedTeam).subscribe(
      ()=>  (this.router.navigate(['/list-cahier']))
    )
  }
  ngOnInit(): void {
    this.id=localStorage.getItem('id')
    this.n=new TypeCahierCharges();

    
    this.ser.getone(this.id)
    
    .subscribe(data => {
          
      this.n=data 
      this.selectedTeam = this.n.typeCritere.typeCritereId;
      
     })

     this.Service.liste()
  
     .subscribe(data => {
           
       this.List=data    
      })
  }

}
