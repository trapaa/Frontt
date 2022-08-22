import { Component, OnInit,ViewChild } from '@angular/core';
import { TypeCahierChargeServiceService } from '../../../../services/type-cahier-charge-service.service';
import {  Router } from '@angular/router';
import swal from 'sweetalert';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { TypeCahierCharges } from 'src/app/models/TypeCahierCharges';

@Component({
  selector: 'app-liste-type-cahier-charge',
  templateUrl: './liste-type-cahier-charge.component.html',
  styleUrls: ['./liste-type-cahier-charge.component.css']
})
export class ListeTypeCahierChargeComponent implements OnInit {
  title="pagination";
  page : number=1;
  count : number = 0;
  tableSize: number =10;
  tableSizes : any=["all",5 ,10 ,15 ,20];
  L:any=[]
  List:any

  displayedColumns= [  'typeCahierChargesId','ordre','typeCahierChargesLibelle','typeCahierChargesDescription','TypeCritere','Opération']
dataSource !:MatTableDataSource<any>;
@ViewChild('paginator') paginator! :MatPaginator;
@ViewChild(MatSort) matSort! : MatSort;
  constructor(private Service:TypeCahierChargeServiceService,private router:Router) { }
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



  deletee(p:TypeCahierCharges) {
    
    swal({
      title: "Etes-vous sûr de vouloir supprimer cet enregistrement?",
     
      icon: "warning",
      buttons: ["NON","OUI"],
      dangerMode: true,
    })
      .then((willDelete) => {
  
        if (willDelete) {
          let i =this.L.indexOf(p)
          
          this.Service.delete(p.typeCahierChargesId).subscribe(
            
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
    this.router.navigate(['/modifier-cahier']);
    localStorage.setItem("id",JSON.stringify(id));
 
       
        
  }

  consulter(id:number){
    this.router.navigate(['/consulter-cahier']);
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
