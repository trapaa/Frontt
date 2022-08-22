import { Component, OnInit } from '@angular/core';
import {  Router,ActivatedRoute } from '@angular/router';

import {TypeCritere} from '../../../../models/TypeCritere'
import { FormeService } from '../../../../services/forme.service';
import { NgForm } from '@angular/forms';
import { Devise } from 'src/app/models/Devise';
import { formeJuridique } from 'src/app/models/Formejuridique';
@Component({
  selector: 'app-modifier-forme',
  templateUrl: './modifier-forme.component.html',
  styleUrls: ['./modifier-forme.component.css']
})
export class ModifierFormeComponent implements OnInit {

  id:any
  n:any
  constructor(private Service:FormeService,private router:Router,private route: ActivatedRoute) { }
  form = {
    
    formeJuridiqueNom: '',
   
    acceptTerms: false,
  };
  onSubmit(): void {
    this.Service.update(this.id,this.n).subscribe(
      ()=>  (this.router.navigate(['/list-forme']))
    )
  }
  onReset(form: NgForm): void {
    form.reset();
  }


  ngOnInit(): void {
    this.id=localStorage.getItem('id')
    this.n=new formeJuridique()
 
    
    this.Service.getone(this.id)
    
    .subscribe(data => {
          
      this.n=data 
      
     })
  }

}
