import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from 'src/app/models/Car';
import {BaseService} from './base.service'

@Injectable({
  providedIn: 'root'
})
export class CarlistService extends BaseService<Car>{

  constructor(public http: HttpClient) { 
    super(http, "carlist.json");
  }
  
}
