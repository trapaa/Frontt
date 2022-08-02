import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { TypeCahierCharges } from '../models/TypeCahierCharges';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeCahierChargeServiceService {

  constructor(private http:HttpClient) { }
  private baseUrl = environment.baseUrl+'/cahier' ;

  public liste(){
    return this.http.get(this.baseUrl);
  
  }

  public ajouter(TypeCahierCharges:TypeCahierCharges,typeCahierChargeIdType:any){
    return this.http.post(this.baseUrl+"/ajouter/"+typeCahierChargeIdType,TypeCahierCharges);
  
  }


  public getone(id:any){
    return this.http.get(this.baseUrl+"/getone/"+id);
  
  }

  public delete(id:any){
    return this.http.delete(this.baseUrl+"/supp/"+id);
  }


  update(id:any,TypeCahierCharges:any,typeCahierChargeIdType:any){
    return this.http.put(this.baseUrl+'/'+id+'/update/'+typeCahierChargeIdType,TypeCahierCharges);
  }


}
