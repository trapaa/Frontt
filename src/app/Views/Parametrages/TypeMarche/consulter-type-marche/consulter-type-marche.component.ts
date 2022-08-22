import { Component, OnInit } from '@angular/core';


import {  Router,ActivatedRoute } from '@angular/router';
import { Pays } from 'src/app/models/Pays';
import { TypeMarche } from 'src/app/models/TypeMarche';

import {TypeCahierCharges} from '../../../../models/TypeCahierCharges'
import { TypeMarcheService } from '../../../../services/type-marche.service';
@Component({
  selector: 'app-consulter-type-marche',
  templateUrl: './consulter-type-marche.component.html',
  styleUrls: ['./consulter-type-marche.component.css']
})
export class ConsulterTypeMarcheComponent implements OnInit {

  id:any
  n:any
  constructor(private Service:TypeMarcheService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=localStorage.getItem('id')

    this.n=new TypeMarche()
  
    
    this.Service.getone(this.id)
    
    .subscribe(data => {
          
      this.n=data 
      
     })
}}
