import { Component, OnInit,ViewChild } from '@angular/core';
import { SoumissionnaireService } from '../../../../services/soumissionnaire.service';
import {  Router } from '@angular/router';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import swal from 'sweetalert';
import { Pays } from 'src/app/models/Pays';
import { Soumissionnaire } from 'src/app/models/Soumissionnaire';
@Component({
  selector: 'app-liste-soumissionnaire',
  templateUrl: './liste-soumissionnaire.component.html',
  styleUrls: ['./liste-soumissionnaire.component.css']
})
export class ListeSoumissionnaireComponent implements OnInit {

  title="pagination";
  page : number=1;
  count : number = 0;
  tableSize: number =10;
  tableSizes : any=["all",5 ,10 ,15 ,20];
L:any=[]
  List:any

  displayedColumns= [  'soumissionnaireRaisonSociale','soumissionnaireNumeroRegistreCommerce','soumissionnaireMatriculeFiscal','pays','Opération']
  dataSource !:MatTableDataSource<any>;
  @ViewChild('paginator') paginator! :MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;
  constructor(private Service:SoumissionnaireService,private router:Router) { }
  filterData ($event:any) {
    this.dataSource.filter=$event.target.value;

   


  }


  deletee(p:Soumissionnaire) {
    
    swal({
      title: "Etes-vous sûr de vouloir supprimer cet enregistrement?",
     
      icon: "warning",
      buttons: ["NON","OUI"],
      dangerMode: true,
    })
      .then((willDelete) => {
  
        if (willDelete) {
          let i =this.L.indexOf(p)
          
          this.Service.delete(p.soumissionnaireReference).subscribe(
            
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
  
  
  
    modifier(id:number){
      this.router.navigate(['/modifier-sou']);
      localStorage.setItem("id",JSON.stringify(id));
   
         
          
    }
  
    consulter(id:number){
      this.router.navigate(['/consulter-sou']);
      localStorage.setItem("id",JSON.stringify(id));
   
         
          
    }



  
  


  ngOnInit(): void {
   

    this.Service.liste()
  
    .subscribe(data => {
          
      this.List=data  
      console.log(this.List);  
     })

     this.Service.liste().subscribe((response:any)=>{
     
      this.dataSource=new MatTableDataSource(response);
  
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort= this.matSort;
      
    });
  }
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
