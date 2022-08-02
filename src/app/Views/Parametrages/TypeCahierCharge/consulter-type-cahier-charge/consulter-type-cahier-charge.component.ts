import { Component, OnInit } from '@angular/core';

import {  Router,ActivatedRoute } from '@angular/router';

import {TypeCahierCharges} from '../../../../models/TypeCahierCharges'
import { TypeCahierChargeServiceService } from '../../../../services/type-cahier-charge-service.service';

@Component({
  selector: 'app-consulter-type-cahier-charge',
  templateUrl: './consulter-type-cahier-charge.component.html',
  styleUrls: ['./consulter-type-cahier-charge.component.css']
})
export class ConsulterTypeCahierChargeComponent implements OnInit {
  id:any
  TypeCahierCharges:any
  constructor(private Service:TypeCahierChargeServiceService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=localStorage.getItem('id')

    this.TypeCahierCharges=new TypeCahierCharges()
  
    
    this.Service.getone(this.id)
    
    .subscribe(data => {
          
      this.TypeCahierCharges=data 
      
     })
  }

}
