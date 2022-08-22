import { Component, OnInit } from '@angular/core';
import {  Router,ActivatedRoute } from '@angular/router';
import { Devise } from 'src/app/models/Devise';

import {TypeCritere} from '../../../../models/TypeCritere'
import { DeviseService } from '../../../../services/devise.service';

@Component({
  selector: 'app-consulter-devise',
  templateUrl: './consulter-devise.component.html',
  styleUrls: ['./consulter-devise.component.css']
})
export class ConsulterDeviseComponent implements OnInit {
  id:any
  n:any
  constructor(private Service:DeviseService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=localStorage.getItem('id')
    this.n=new Devise()
  
    
    this.Service.getone(this.id)
    
    .subscribe(data => {
          
      this.n=data 
      
     })
  }

}
