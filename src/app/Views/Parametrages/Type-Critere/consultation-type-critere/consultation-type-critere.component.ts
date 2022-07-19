import { Component, OnInit } from '@angular/core';
import {  Router,ActivatedRoute } from '@angular/router';

import {TypeCritere} from '../../../../models/TypeCritere'
import { ServiceService } from '../../../../services/service.service';
@Component({
  selector: 'app-consultation-type-critere',
  templateUrl: './consultation-type-critere.component.html',
  styleUrls: ['./consultation-type-critere.component.css']
})
export class ConsultationTypeCritereComponent implements OnInit {
  id:any
  typeCritere:any
  constructor(private Service:ServiceService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {


    this.id=localStorage.getItem('id')
    this.typeCritere=new TypeCritere()
  
    
    this.Service.getone(this.id)
    
    .subscribe(data => {
          
      this.typeCritere=data 
      
     })
  }

}
