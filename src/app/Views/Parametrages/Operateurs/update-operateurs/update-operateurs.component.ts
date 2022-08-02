import { Component, OnInit } from '@angular/core';
import {  Router,ActivatedRoute } from '@angular/router';

import {Operateurs} from '../../../../models/Operateurs'
import { OperateursService } from '../../../../services/operateurs.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-operateurs',
  templateUrl: './update-operateurs.component.html',
  styleUrls: ['./update-operateurs.component.css']
})
export class UpdateOperateursComponent implements OnInit {
  id:any
  n:any
  constructor(private Service:OperateursService,private router:Router,private route: ActivatedRoute) { }
  form = {
    
    operateursSymbole: '',
    operateursDescription: '',
    
    acceptTerms: false,
  };
  onSubmit(): void {
    this.Service.update(this.id,this.n).subscribe(
      ()=>  (this.router.navigate(['/list-operateur']))
    )
  }
  onReset(form: NgForm): void {
    form.reset();
  }
  ngOnInit(): void {
    this.id=localStorage.getItem('idO')
    this.n=new Operateurs()

    
    this.Service.getone(this.id)
    
    .subscribe(data => {
          
      this.n=data 
      
     })
  }

}
