import { Component, OnInit } from '@angular/core';
import {  Router,ActivatedRoute } from '@angular/router';

import {TypeCritere} from '../../../../models/TypeCritere'
import { FonctionService } from '../../../../services/fonction.service';
import { NgForm } from '@angular/forms';
import { Devise } from 'src/app/models/Devise';
import { Fonction } from 'src/app/models/Fonction';
@Component({
  selector: 'app-modifier-fonction',
  templateUrl: './modifier-fonction.component.html',
  styleUrls: ['./modifier-fonction.component.css']
})
export class ModifierFonctionComponent implements OnInit {

  id:any
  n:any
  constructor(private Service:FonctionService,private router:Router,private route: ActivatedRoute) { }
  form = {
    
    fonctionLibelle: '',
    
    acceptTerms: false,
  };
  onSubmit(): void {
    this.Service.update(this.id,this.n).subscribe(
      ()=>  (this.router.navigate(['/list-fonction']))
    )
  }
  onReset(form: NgForm): void {
    form.reset();
  }


  ngOnInit(): void {
    this.id=localStorage.getItem('id')
    this.n=new Fonction()
 
    
    this.Service.getone(this.id)
    
    .subscribe(data => {
          
      this.n=data 
      
     })
  }

}
