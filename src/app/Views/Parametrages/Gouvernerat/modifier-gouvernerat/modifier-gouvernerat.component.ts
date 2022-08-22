import { Component, OnInit } from '@angular/core';

import {gouvernorat} from '../../../../models/Gouvernerat'
import { GouverneratService } from '../../../../services/gouvernerat.service';
import { PaysService } from '../../../../services/pays.service';
import {  Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { TypeCahierCharges } from 'src/app/models/TypeCahierCharges';
import { Pays } from 'src/app/models/Pays';

@Component({
  selector: 'app-modifier-gouvernerat',
  templateUrl: './modifier-gouvernerat.component.html',
  styleUrls: ['./modifier-gouvernerat.component.css']
})
export class ModifierGouverneratComponent implements OnInit {

  constructor(private Service:GouverneratService,private router:Router,private ser:PaysService) { }
  selectedTeam = '';
  id:any
  n:any;
  List:any
  x:any
  form = {
    
    gouverneratLibelle: '',
    
    paysId: '',
    
    acceptTerms: false,
  };


  onSelected(value:string): void {
		this.selectedTeam = value;
    
	}


  onSubmit(): void {
    this.Service.update(this.id,this.n,this.selectedTeam).subscribe(
      ()=>  (this.router.navigate(['/list-gouvernerat']))
    )

    }

  ngOnInit(): void {
    this.id=localStorage.getItem('id')
    this.n=new gouvernorat();

   


    
   
 
     
     this.Service.getone(this.id)
     
     .subscribe(data => {
           
       this.n=data 
       console.log(this.n.pays.paysId)
       this.selectedTeam = this.n.pays.paysId;

       
      })

      this.ser.liste()
  
      .subscribe(data => {
            
        this.List=data    
       })
 
  }

}
