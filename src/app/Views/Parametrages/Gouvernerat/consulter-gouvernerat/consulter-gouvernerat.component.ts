import { Component, OnInit } from '@angular/core';


import {  Router,ActivatedRoute } from '@angular/router';
import { gouvernorat } from 'src/app/models/Gouvernerat';
import { Pays } from 'src/app/models/Pays';

import {TypeCahierCharges} from '../../../../models/TypeCahierCharges'
import { GouverneratService } from '../../../../services/gouvernerat.service';

@Component({
  selector: 'app-consulter-gouvernerat',
  templateUrl: './consulter-gouvernerat.component.html',
  styleUrls: ['./consulter-gouvernerat.component.css']
})
export class ConsulterGouverneratComponent implements OnInit {
  id:any
  n:any
  constructor(private Service:GouverneratService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=localStorage.getItem('id')

    this.n=new gouvernorat()
  
    
    this.Service.getone(this.id)
    
    .subscribe(data => {
          
      this.n=data 
      
     })
  }

}
