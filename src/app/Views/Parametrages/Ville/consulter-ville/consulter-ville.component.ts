import { Component, OnInit } from '@angular/core';


import {  Router,ActivatedRoute } from '@angular/router';
import { Pays } from 'src/app/models/Pays';
import { Ville } from 'src/app/models/Ville';

import {TypeCahierCharges} from '../../../../models/TypeCahierCharges'
import { VilleService } from '../../../../services/ville.service';

@Component({
  selector: 'app-consulter-ville',
  templateUrl: './consulter-ville.component.html',
  styleUrls: ['./consulter-ville.component.css']
})
export class ConsulterVilleComponent implements OnInit {

  id:any
  n:any
  constructor(private Service:VilleService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=localStorage.getItem('id')

    this.n=new Ville()
  
    
    this.Service.getone(this.id)
    
    .subscribe(data => {
          
      this.n=data 
      
     })
  }

}
