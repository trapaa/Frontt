import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pays } from '../models/Pays';
@Injectable({
  providedIn: 'root'
})
export class PaysService {

  constructor(private http:HttpClient) { }

  private baseUrl = environment.baseUrl+'/pays' ;

  public liste(){
    return this.http.get(this.baseUrl);
  
  }

  public liste1(){
    return this.http.get(environment.baseUrl+'/devise');
  
  }

  public ajouter(pays:Pays,id:any){
    return this.http.post(this.baseUrl+"/ajouter/"+id,pays);
  
  }


  public getone(id:any){
    return this.http.get(this.baseUrl+"/getone/"+id);
  
  }

  public delete(id:any){
    return this.http.delete(this.baseUrl+"/supp/"+id);
  }


  update(id:any,pays:Pays,id1:any){
    return this.http.put(this.baseUrl+'/'+id+'/update/'+id1,pays);
  }












}
