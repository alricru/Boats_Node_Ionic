import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

export class Boats{
  id: number;
  brand: string;
  model: string;
  status: string;
  userId: number;
  managerId: number;
  file = File;
}

const hhtpOptionsUsingFormData ={
  headers: new HttpHeaders({ 'enctype': 'multipart/form-data; boundary=----WebKitFormBoundaryuL67FWkv1CA'})
}

@Injectable({
  providedIn: 'root'
})
export class BoatsService {

  endpoint = "http://localhost:4000/api/boat";

  constructor(private httpClient: HttpClient) { }

  createBoat(Boats: Boats, file: File): Observable<any>{
    let bodyencoded = new FormData();
    bodyencoded.append("brand",Boats.brand);
    bodyencoded.append("model", Boats.model);
    bodyencoded.append("status",Boats.status);
    bodyencoded.append("userId",Boats.userId.toString());
    bodyencoded.append("managerId",Boats.managerId.toString());
    bodyencoded.append("file",file);
    return this.httpClient.post<Boats>(this.endpoint, bodyencoded, hhtpOptionsUsingFormData)
      .pipe(
        catchError(this.handleError<Boats>('Error occured'))
      );
  }
  getBoat(id): Observable<Boats[]>{
    return this.httpClient.get<Boats[]>(this.endpoint + '/' + id)
    .pipe(
      tap(_ => console.log('boats fetched: ${id}')),
      catchError(this.handleError<Boats[]>('Get boats id=${id}'))
    );
  }

  getBoats(): Observable<Boats[]>{
    return this.httpClient.get<Boats[]>(this.endpoint)
    .pipe(
      tap(User => console.log('Boats retrieved!')),
      catchError(this.handleError<Boats[]>('Get Boats', []))
    );
  }

  updateBoats(id, Boats: Boats, file:File): Observable<any> {
    let bodyencoded = new FormData();
    bodyencoded.append("brand",Boats.brand);
    bodyencoded.append("model", Boats.model);
    bodyencoded.append("status",Boats.status);
    bodyencoded.append("userId",Boats.userId.toString());
    bodyencoded.append("managerId",Boats.managerId.toString());
    bodyencoded.append("file", file);
    return this.httpClient.put(this.endpoint + '/' + id, bodyencoded, hhtpOptionsUsingFormData)
    .pipe(
      tap(_ => console.log('boats updated: ${id}')),
      catchError(this.handleError<Boats[]>('Update boats'))
    );
  }

  deleteBoats(id): Observable<Boats[]>{
    return this.httpClient.delete<Boats[]>(this.endpoint + '/' + id)
    .pipe(
      tap(_ => console.log('boat deleted: ${id}')),
      catchError(this.handleError<Boats[]>('Delete boat'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }}
