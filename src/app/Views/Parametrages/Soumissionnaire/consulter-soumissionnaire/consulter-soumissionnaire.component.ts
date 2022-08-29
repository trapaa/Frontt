import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'

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
  date:any
  id:any
n:any
  constructor(private Service:SoumissionnaireService,private router:Router,private route: ActivatedRoute,public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.n=new Soumissionnaire();
    this.id=localStorage.getItem('id')

   // this.n=new Soumissionnaire()
  
    
    this.Service.getone(this.id)
    
    .subscribe(data => {
          
      this.n=data 
      this.date=new Date();
      this.date=this.datepipe.transform(this.n.soumissionnaireAnneeCreation, 'yyyy-MM-dd');
console.log(this.date)
      console.log("s;w:")
      console.log(this.n.soumissionnaireReference)
      
     })
  }

}
