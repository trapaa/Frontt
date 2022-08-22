import { Component, OnInit } from '@angular/core';
import {  Router,ActivatedRoute } from '@angular/router';

import {TypeCritere} from '../../../../models/TypeCritere'
import { DeviseService } from '../../../../services/devise.service';
import { NgForm } from '@angular/forms';
import { Devise } from 'src/app/models/Devise';

@Component({
  selector: 'app-modifier-devise',
  templateUrl: './modifier-devise.component.html',
  styleUrls: ['./modifier-devise.component.css']
})
export class ModifierDeviseComponent implements OnInit {
  id:any
  n:any
  constructor(private Service:DeviseService,private router:Router,private route: ActivatedRoute) { }
  form = {
    
    deviseIdentifiant: '',
    deviseNom: '',
    deviseNbDecimale: '',
    deviseNomDecimale: '',
    acceptTerms: false,
  };
  onSubmit(): void {
    this.Service.update(this.id,this.n).subscribe(
      ()=>  (this.router.navigate(['/list-devise']))
    )
  }
  onReset(form: NgForm): void {
    form.reset();
  }


  ngOnInit(): void {
    this.id=localStorage.getItem('id')
    this.n=new Devise()
 
    
    this.Service.getone(this.id)
    
    .subscribe(data => {
          
      this.n=data 
      
     })
  }

}
