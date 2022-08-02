import { Component, OnInit } from '@angular/core';
import {  Router,ActivatedRoute } from '@angular/router';

import {Operateurs} from '../../../../models/Operateurs'
import { OperateursService } from '../../../../services/operateurs.service';

@Component({
  selector: 'app-consultation-operateurs',
  templateUrl: './consultation-operateurs.component.html',
  styleUrls: ['./consultation-operateurs.component.css']
})
export class ConsultationOperateursComponent implements OnInit {
  id:any
  Operateurs:any
  constructor(private Service:OperateursService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id=localStorage.getItem('idO')
    this.Operateurs=new Operateurs()
  
    
    this.Service.getone(this.id)
    
    .subscribe(data => {
          
      this.Operateurs=data 
      
     })
  }

}
