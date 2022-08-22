import { Component, OnInit } from '@angular/core';


import {  Router,ActivatedRoute } from '@angular/router';
import { Pays } from 'src/app/models/Pays';

import {TypeCahierCharges} from '../../../../models/TypeCahierCharges'
import { PaysService } from '../../../../services/pays.service';

@Component({
  selector: 'app-consultation-pays',
  templateUrl: './consultation-pays.component.html',
  styleUrls: ['./consultation-pays.component.css']
})
export class ConsultationPaysComponent implements OnInit {
  id:any
  n:any
  constructor(private Service:PaysService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=localStorage.getItem('id')

    this.n=new Pays()
  
    
    this.Service.getone(this.id)
    
    .subscribe(data => {
          
      this.n=data 
      
     })
  }

}
