import { Component, OnInit } from '@angular/core';
import {TypeCritere} from '../../../../models/TypeCritere'
import { FonctionService } from '../../../../services/fonction.service';
import {  Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Devise } from 'src/app/models/Devise';
import { Fonction } from 'src/app/models/Fonction';
@Component({
  selector: 'app-ajouter-fonction',
  templateUrl: './ajouter-fonction.component.html',
  styleUrls: ['./ajouter-fonction.component.css']
})
export class AjouterFonctionComponent implements OnInit {

  n:any
  constructor(private Service:FonctionService,private router:Router) { }
  form = {
    
    fonctionLibelle: '',
   
    acceptTerms: false,
  };
  onSubmit(): void {
    this.Service.ajouter(this.n).subscribe(
      ()=>  (this.router.navigate(['/list-fonction']))
    )
  }
  onReset(form: NgForm): void {
    form.reset();
  }
  ngOnInit(): void {
    this.n=new Fonction()
  }


}
