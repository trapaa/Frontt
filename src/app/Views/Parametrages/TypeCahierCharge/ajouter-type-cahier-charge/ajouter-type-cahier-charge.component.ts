import { Component, OnInit } from '@angular/core';

import {TypeCritere} from '../../../../models/TypeCritere'
import { ServiceService } from '../../../../services/service.service';
import { TypeCahierChargeServiceService } from '../../../../services/type-cahier-charge-service.service';
import {  Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { TypeCahierCharges } from 'src/app/models/TypeCahierCharges';

@Component({
  selector: 'app-ajouter-type-cahier-charge',
  templateUrl: './ajouter-type-cahier-charge.component.html',
  styleUrls: ['./ajouter-type-cahier-charge.component.css']
})
export class AjouterTypeCahierChargeComponent implements OnInit {

  constructor(private Service:ServiceService,private router:Router,private ser:TypeCahierChargeServiceService) { }
  selectedTeam = '';
  
  n:any;
  List:any
  form = {
    
    typeCahierChargesLibelle: '',
    ordre: '',
    typeCahierChargesDescription: '',
    typeCritereId: '',
    acceptTerms: false,
  };

  onSelected(value:string): void {
		this.selectedTeam = value;
    
	}


  onSubmit(): void {
    this.ser.ajouter(this.n,this.selectedTeam).subscribe(
      ()=>  (this.router.navigate(['/list-cahier']))
    )



    
  }
  onReset(form: NgForm): void {
    form.reset();
  }
  ngOnInit(): void {
    this.n=new TypeCahierCharges();

    this.Service.liste()
  
    .subscribe(data => {
          
      this.List=data    
     })
  }

}
