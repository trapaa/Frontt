import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { formeJuridique } from '../models/Formejuridique';
@Injectable({
  providedIn: 'root'
})
export class FormeService {

  constructor(private http:HttpClient) { }
  private baseUrl = environment.baseUrl+'/forme' ;

  public liste(){
    return this.http.get(this.baseUrl);
  
  }

  public ajouter(forme:formeJuridique){
    return this.http.post(this.baseUrl+"/ajouter",forme);
  
  }

  public delete(id:any){
    return this.http.delete(this.baseUrl+"/supp/"+id);
  }



  update(id:any,forme:formeJuridique){
    return this.http.put(this.baseUrl+'/update'+'/'+id,forme);
  }

  public getone(id:any){
    return this.http.get(this.baseUrl+"/getone/"+id);
  
  }
}
