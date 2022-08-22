import { Component, OnInit } from '@angular/core';
import {  Router,ActivatedRoute } from '@angular/router';
import { Devise } from 'src/app/models/Devise';
import { formeJuridique } from 'src/app/models/Formejuridique';

import {TypeCritere} from '../../../../models/TypeCritere'
import { FormeService } from '../../../../services/forme.service';
@Component({
  selector: 'app-consulter-forme',
  templateUrl: './consulter-forme.component.html',
  styleUrls: ['./consulter-forme.component.css']
})
export class ConsulterFormeComponent implements OnInit {
  id:any
  n:any
  constructor(private Service:FormeService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=localStorage.getItem('id')
    this.n=new formeJuridique()
  
    
    this.Service.getone(this.id)
    
    .subscribe(data => {
          
      this.n=data 
      
     })
  }

}
