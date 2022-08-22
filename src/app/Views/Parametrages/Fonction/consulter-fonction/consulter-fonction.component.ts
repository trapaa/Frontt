import { Component, OnInit } from '@angular/core';
import {  Router,ActivatedRoute } from '@angular/router';
import { Devise } from 'src/app/models/Devise';
import { Fonction } from 'src/app/models/Fonction';

import {TypeCritere} from '../../../../models/TypeCritere'
import { FonctionService } from '../../../../services/fonction.service';
@Component({
  selector: 'app-consulter-fonction',
  templateUrl: './consulter-fonction.component.html',
  styleUrls: ['./consulter-fonction.component.css']
})
export class ConsulterFonctionComponent implements OnInit {
  id:any
  n:any
  constructor(private Service:FonctionService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=localStorage.getItem('id')
    this.n=new Fonction()
  
    
    this.Service.getone(this.id)
    
    .subscribe(data => {
          
      this.n=data 
      
     })
  }

}
