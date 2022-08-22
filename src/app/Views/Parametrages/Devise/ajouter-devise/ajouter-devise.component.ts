import { Component, OnInit } from '@angular/core';
import {TypeCritere} from '../../../../models/TypeCritere'
import { DeviseService } from '../../../../services/devise.service';
import {  Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Devise } from 'src/app/models/Devise';
@Component({
  selector: 'app-ajouter-devise',
  templateUrl: './ajouter-devise.component.html',
  styleUrls: ['./ajouter-devise.component.css']
})
export class AjouterDeviseComponent implements OnInit {
  n:any
  constructor(private Service:DeviseService,private router:Router) { }
  form = {
    
    deviseIdentifiant: '',
    deviseNom: '',
    deviseNbDecimale: '',
    deviseNomDecimale: '',
    acceptTerms: false,
  };
  onSubmit(): void {
    this.Service.ajouter(this.n).subscribe(
      ()=>  (this.router.navigate(['/list-devise']))
    )
  }
  onReset(form: NgForm): void {
    form.reset();
  }
  ngOnInit(): void {
    this.n=new Devise()
  }

}
