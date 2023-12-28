import { Observable } from "rxjs";
import { CustomHttpRespone } from "../model/custom-http-response";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";





@Injectable({
    providedIn: 'root'
  })
  export class purchaserequestService {

  
    
  
  
    server: any;
  
    constructor(private http:HttpClient) {}
  
      
  
    public createpurchaserequest(FormData: any): Observable< purchaserequest | HttpErrorResponse> {
      return this.http.post<purchaserequest>('${this.host}/purchase-requisition/create', FormData);
  
      
  }  
  
  
  }




