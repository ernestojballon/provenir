import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogUser } from 'src/app/models/User';
import {BaseService} from './base.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService<LogUser>{

  constructor(public http: HttpClient) { 
    super(http, "user.json");
  }

}
