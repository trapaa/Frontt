import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Operateurs} from '../../../../models/Operateurs'
import { OperateursService } from '../../../../services/operateurs.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-ajouter-operateurs',
  templateUrl: './ajouter-operateurs.component.html',
  styleUrls: ['./ajouter-operateurs.component.css']
})
export class AjouterOperateursComponent implements OnInit {
  n:any
  constructor(private Service:OperateursService,private router:Router) { }
  form = {
    
    operateursSymbole: '',
    operateursDescription: '',
    
    acceptTerms: false,
  };
  onSubmit(): void {
    this.Service.ajouter(this.n).subscribe(
      ()=>  (this.router.navigate(['/list-operateur']))
    )
  }
  onReset(form: NgForm): void {
    form.reset();
  }
  ngOnInit(): void {
    this.n=new Operateurs()
  }

}
