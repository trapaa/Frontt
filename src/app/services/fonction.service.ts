import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Fonction } from '../models/Fonction';
@Injectable({
  providedIn: 'root'
})
export class FonctionService {

  constructor(private http:HttpClient) { }
  private baseUrl = environment.baseUrl+'/fonction' ;

  public liste(){
    return this.http.get(this.baseUrl);
  
  }

  public ajouter(fonction:Fonction){
    return this.http.post(this.baseUrl+"/ajouter",fonction);
  
  }

  public delete(id:any){
    return this.http.delete(this.baseUrl+"/supp/"+id);
  }



  update(id:any,fonction:Fonction){
    return this.http.put(this.baseUrl+'/update'+'/'+id,fonction);
  }

  public getone(id:any){
    return this.http.get(this.baseUrl+"/getone/"+id);
  
  }
}
