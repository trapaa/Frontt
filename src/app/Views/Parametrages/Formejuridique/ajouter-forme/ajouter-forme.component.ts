import { Component, OnInit } from '@angular/core';
import {TypeCritere} from '../../../../models/TypeCritere'
import { FormeService } from '../../../../services/forme.service'
import {  Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Devise } from 'src/app/models/Devise';
import { formeJuridique } from 'src/app/models/Formejuridique';
@Component({
  selector: 'app-ajouter-forme',
  templateUrl: './ajouter-forme.component.html',
  styleUrls: ['./ajouter-forme.component.css']
})
export class AjouterFormeComponent implements OnInit {
  n:any
  constructor(private Service:FormeService,private router:Router) { }
  form = {
    
    formeJuridiqueNom: '',
    
    acceptTerms: false,
  };
  onSubmit(): void {
    this.Service.ajouter(this.n).subscribe(
      ()=>  (this.router.navigate(['/list-forme']))
    )
  }
  onReset(form: NgForm): void {
    form.reset();
  }
  ngOnInit(): void {
    this.n=new formeJuridique()
  }

}
