import { Injectable } from '@angular/core';
import { Ville } from '../models/Ville';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VilleService {

  constructor(private http:HttpClient) { }

  private baseUrl = environment.baseUrl+'/ville' ;

  public liste(){
    return this.http.get(this.baseUrl);
  
  }

  public liste1(){
    return this.http.get(environment.baseUrl+'/devise');
  
  }

  public ajouter(Ville:Ville,id:any){
    return this.http.post(this.baseUrl+"/ajouter/"+id,Ville);
  
  }


  public getone(id:any){
    return this.http.get(this.baseUrl+"/getone/"+id);
  
  }

  public delete(id:any){
    return this.http.delete(this.baseUrl+"/supp/"+id);
  }


  update(id:any,Ville:Ville,id1:any){
    return this.http.put(this.baseUrl+'/'+id+'/update/'+id1,Ville);
  }

}
