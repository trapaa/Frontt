import { Component, OnInit,ViewChild } from '@angular/core';
import { TypeMarcheService } from '../../../../services/type-marche.service';
import {  Router } from '@angular/router';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import swal from 'sweetalert';
import { Pays } from 'src/app/models/Pays';
import { TypeMarche } from 'src/app/models/TypeMarche';
@Component({
  selector: 'app-list-type-marche',
  templateUrl: './list-type-marche.component.html',
  styleUrls: ['./list-type-marche.component.css']
})
export class ListTypeMarcheComponent implements OnInit {

  title="pagination";
  page : number=1;
  count : number = 0;
  tableSize: number =10;
  tableSizes : any=["all",5 ,10 ,15 ,20];
L:any=[]
  List:any

  displayedColumns= [  'typeMarcheId','typeMarcheLibelle','typeMarcheAcronyme','typeMarcheDescription','typeMarcheOrdre','etat','Opération']
  dataSource !:MatTableDataSource<any>;
  @ViewChild('paginator') paginator! :MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;
  constructor(private Service:TypeMarcheService,private router:Router) { }
  filterData ($event:any) {
    this.dataSource.filter=$event.target.value;

   


  }




  
  Supprimer(id:any){
    this.Service.delete(id)
  
      .subscribe(data => {
            
       this.List=data 
       this.dataSource=new MatTableDataSource(this.List) 
       this.dataSource.paginator= this.paginator;
       this.dataSource.sort= this.matSort;
       
        })
       
        
  }

deletee(p:TypeMarche) {
    
  swal({
    title: "Etes-vous sûr de vouloir supprimer cet enregistrement?",
   
    icon: "warning",
    buttons: ["NON","OUI"],
    dangerMode: true,
  })
    .then((willDelete) => {

      if (willDelete) {
        let i =this.L.indexOf(p)
        
        this.Service.delete(p.typeMarcheId).subscribe(
          
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
    this.router.navigate(['/modifier-type']);
    localStorage.setItem("id",JSON.stringify(id));
 
       
        
  }

  consulter(id:number){
    this.router.navigate(['/consulter-type']);
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
