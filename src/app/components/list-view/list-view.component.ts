import { Component, OnInit } from '@angular/core';
import {CarlistService} from '../../services/http/carlist.service'
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import { Car } from 'src/app/models/Car';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  cars:Car[] = []

  constructor(private toastr: ToastrService,
              private listCarService:CarlistService,
              private router: Router) { }

  ngOnInit() {
    this.getCars();
  }
  getCars(){
    this.listCarService.getAll().subscribe((cars:Car[])=>{
      if(cars){
        this.cars = cars
      }else{
        cars = []
      }
    });
  }

}
