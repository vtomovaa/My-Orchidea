import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { IOrchid } from '../shared/interfaces/orchid';
import {environment} from '../../environments/environment';
import { map } from 'rxjs/operators';

const API_URL = environment.apiUrl + "/jsonstore"
@Injectable({
  providedIn: 'root'
})
export class OrchidService {

  constructor(private http: HttpClient) { }
  addOrchid(data: any){
    return this.http.post(`${API_URL}/orchids`, {data})
  }
  getMyOrchids(user: string | undefined) { 
    if(!user) {
      return of([]);
    }
     return this.http.get<{ [key: string]: any }>(`${API_URL}/orchids`)
     .pipe(
       map(response => {
         const orchids: IOrchid[] = [];
         for (const key in response) {
           if (response.hasOwnProperty(key)) {
             // can create an orchid obj to include the ID
             //  { identifierName, name make etc}
             let orchid = response[key].data;
             if (orchid.owner == user) {
               orchid["_id"] = key;
               orchids.push(orchid);
             }
           }
         }
         return orchids;
       })
     );
  }
  getAllOrchids(){
    // let all = this.http.get<any>(`${API_URL}/orchids`)
    // return all;
    return this.http.get<{ [key: string]: any }>(`${API_URL}/orchids`)
    .pipe(
      map(response => {
        const orchids: IOrchid[] = [];
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            // can create an orchid obj to include the ID
            //  { identifierName, name make etc}
            let orchid = response[key].data;
            orchid["_id"] = key;
            orchids.push(orchid);
          }
        }
        return orchids;
      })
    );
  }
  getOneOrchid(id: string){
    return this.http.get<any>(`${API_URL}/orchids/${id}`) .pipe(
      map(response => {
        let orchid: IOrchid = response.data;
        orchid["_id"] = response["_id"];
        
        return orchid;
      })
    );
  }
  editOrchid(id: string | undefined, data: any){
    return this.http.put<any>(`${API_URL}/orchids/${id}`, {data, _id: id}) .pipe(
      map(response => {
        let orchid: IOrchid = response.data;
        orchid["_id"] = response["_id"];
        
        return orchid;
      })
    );
  }
  deleteOrchid(id: string | undefined){
    return this.http.delete(`${API_URL}/orchids/${id}`)
  }
  
  addToFavourite(orchid: IOrchid){
    return this.editOrchid(orchid?._id, orchid )
  }
  getFavouriteOrchids(user: string | undefined){ 
   if(!user) {
     return of([]);
   }
    return this.http.get<{ [key: string]: any }>(`${API_URL}/orchids`)
    .pipe(
      map(response => {
        const orchids: IOrchid[] = [];
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            // can create an orchid obj to include the ID
            //  { identifierName, name make etc}
            let orchid = response[key].data;
            if (orchid.addedBy.indexOf(user) > -1) {
              orchid["_id"] = key;
              orchids.push(orchid);
            }
          }
        }
        return orchids;
      })
    );
  }
  removeFromFavourites(orchid: IOrchid){
    return this.editOrchid(orchid?._id, orchid )
  }
}
