import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Devise } from '../models/Devise';


@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  constructor(private http:HttpClient) { }
  private baseUrl = environment.baseUrl+'/devise' ;

  public liste(){
    return this.http.get(this.baseUrl);
  
  }

  public ajouter(Devise:Devise){
    return this.http.post(this.baseUrl+"/ajouter",Devise);
  
  }

  public delete(id:any){
    return this.http.delete(this.baseUrl+"/supp/"+id);
  }



  update(id:any,Devise:any){
    return this.http.put(this.baseUrl+'/update'+'/'+id,Devise);
  }

  public getone(id:any){
    return this.http.get(this.baseUrl+"/getone/"+id);
  
  }
}
