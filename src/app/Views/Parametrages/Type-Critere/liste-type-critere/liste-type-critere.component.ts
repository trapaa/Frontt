
import { ServiceService } from '../../../../services/service.service';
import {  Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import swal from 'sweetalert';
import { TypeCritere } from 'src/app/models/TypeCritere';



@Component({
  selector: 'app-liste-type-critere',
  templateUrl: './liste-type-critere.component.html',
  styleUrls: ['./liste-type-critere.component.css']
})
export class ListeTypeCritereComponent implements OnInit {
List:any;
L:any=[]
title="pagination";
page : number=1;
count : number = 0;
tableSize: number =10;
tableSizes : any=["all",5 ,10 ,15 ,20];


displayedColumns= [  'typeCritereId','typeCritereLibelle','typeCritereDescription','typeCritereLibelleAr','typeCritereDescriptionAr','Opération']
dataSource !:MatTableDataSource<any>;
@ViewChild('paginator') paginator! :MatPaginator;
@ViewChild(MatSort) matSort! : MatSort;


  constructor(private Service:ServiceService,private router:Router) { }



  
  Supprimer(id:number){
    this.Service.delete(id)
  
      .subscribe(data => {
            
       this.List=data 
       this.dataSource=new MatTableDataSource(this.List) 
       this.dataSource.paginator= this.paginator;
       this.dataSource.sort= this.matSort;
       
        })
       
        
  }




  deletee(p:TypeCritere) {
    
    swal({
      title: "Etes-vous sûr de vouloir supprimer cet enregistrement?",
     
      icon: "warning",
      buttons: ["NON","OUI"],
      dangerMode: true,
    })
      .then((willDelete) => {
  
        if (willDelete) {
          let i =this.L.indexOf(p)
          
          this.Service.delete(p.typeCritereId).subscribe(
            
            ()=>{this.L.splice(i,1);
           /*
             this.nature = this.nature.filter(n => {
          
                console.log(this.dataSource);
                return n.natureCritereId != id;
  
                      
  */
  this.ngOnInit();
       
       
              });
         ;
          
        } 
      });
  
  }



  update(id:number){
    this.router.navigate(['/update']);
    localStorage.setItem("id",JSON.stringify(id));
       
        
  }



  consulter(id:number){
    this.router.navigate(['/consulter']);
    localStorage.setItem("id",JSON.stringify(id));
 
       
        
  }

 

  filterData ($event:any) {
    this.dataSource.filter=$event.target.value;

  }

  ngOnInit(): void {
    this.Service.liste()
  
    .subscribe(data => {
          
      this.List=data    
     })

     this.Service.liste().subscribe((response:any)=>{
     
      this.dataSource=new MatTableDataSource(response);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort= this.matSort;
      
    });
  }

  ///Pagination
onTableDataChange(event :any){
  this.page=event;
  this.Service.liste();
}
onTableSizeDataChange(event :any){
  this.tableSize=event.target.value;
  this.page=1;
  this.Service.liste();
}

}
