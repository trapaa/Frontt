import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TypeCritere } from '../models/TypeCritere';

import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  private baseUrl = environment.baseUrl+'/type' ;

  public liste(){
    return this.http.get(this.baseUrl);
  
  }

  public ajouter(TypeCritere:TypeCritere){
    return this.http.post(this.baseUrl+"/ajouter",TypeCritere);
  
  }

  public delete(id:any){
    return this.http.delete(this.baseUrl+"/supp/"+id);
  }



  update(id:any,TypeCritere:any){
    return this.http.put(this.baseUrl+'/update'+'/'+id,TypeCritere);
  }

  public getone(id:any){
    return this.http.get(this.baseUrl+"/getone/"+id);
  
  }

  
}
