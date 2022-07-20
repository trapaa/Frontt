import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Operateurs } from '../models/Operateurs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperateursService {

  constructor(private http:HttpClient) { }
  private baseUrl = environment.baseUrl+'/operateur' ;


  public liste(){
    return this.http.get(this.baseUrl);
  
  }

  public ajouter(Operateurs:Operateurs){
    return this.http.post(this.baseUrl+"/ajouter",Operateurs);
  
  }

  public delete(id:any){
    return this.http.delete(this.baseUrl+"/supp/"+id);
  }



  update(id:any,Operateurs:any){
    return this.http.put(this.baseUrl+'/update'+'/'+id,Operateurs);
  }

  public getone(id:any){
    return this.http.get(this.baseUrl+"/getone/"+id);
  
  }
}
