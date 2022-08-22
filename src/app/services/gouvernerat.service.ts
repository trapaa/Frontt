import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { gouvernorat } from '../models/Gouvernerat';
@Injectable({
  providedIn: 'root'
})
export class GouverneratService {

  constructor(private http:HttpClient) { }
  private baseUrl = environment.baseUrl+'/gouv' ;


  public liste(){
    return this.http.get(this.baseUrl);
  
  }

  public liste1(){
    return this.http.get(environment.baseUrl+'/pays');
  
  }

  public ajouter(Gouvernerat:gouvernorat,id:any){
    return this.http.post(this.baseUrl+"/ajouter/"+id,Gouvernerat);
  
  }


  public getone(id:any){
    return this.http.get(this.baseUrl+"/getone/"+id);
  
  }

  public delete(id:any){
    return this.http.delete(this.baseUrl+"/supp/"+id);
  }


  update(id:any,Gouvernerat:gouvernorat,id1:any){
    return this.http.put(this.baseUrl+'/'+id+'/update/'+id1,Gouvernerat);
  }
}
