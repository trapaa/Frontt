import { Component, OnInit } from '@angular/core';


import {  Router,ActivatedRoute } from '@angular/router';
import { Pays } from 'src/app/models/Pays';
import { Soumissionnaire } from 'src/app/models/Soumissionnaire';

import {TypeCahierCharges} from '../../../../models/TypeCahierCharges'
import { SoumissionnaireService } from '../../../../services/soumissionnaire.service';
@Component({
  selector: 'app-consulter-soumissionnaire',
  templateUrl: './consulter-soumissionnaire.component.html',
  styleUrls: ['./consulter-soumissionnaire.component.css']
})
export class ConsulterSoumissionnaireComponent implements OnInit {

  id:any
  n:any
  constructor(private Service:SoumissionnaireService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=localStorage.getItem('id')

   // this.n=new Soumissionnaire()
  
    
    this.Service.getone(this.id)
    
    .subscribe(data => {
          
      this.n=data 
      console.log("s;w:")
      console.log(this.n)
      
     })
  }

}
