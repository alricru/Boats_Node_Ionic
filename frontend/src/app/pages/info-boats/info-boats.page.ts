import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { BoatsService } from 'src/app/services/boats.service';
import { UserService } from 'src/app/services/user.service';
import { Storage } from '@ionic/storage';
import { ManagersService } from 'src/app/services/managers.service';

@Component({
  selector: 'app-info-boats',
  templateUrl: './info-boats.page.html',
  styleUrls: ['./info-boats.page.scss'],
})
export class InfoBoatsPage implements OnInit {

  public search: string = "";
  Boats: any = []
  userId: number;
  Managers: any = []

  constructor(private storage: Storage,private BoatsService: BoatsService, private router: Router, private ManagersService: ManagersService) { }

  ngOnInit() {
  }
  ionViewDidEnter(){

    this.getUserId()

    this.BoatsService.getBoats().subscribe((response) =>{
      this.Boats = response;
    })
    this.ManagersService.getManagers().subscribe((response) =>{
      this.Managers = response;
    })
  }
  setSearchInput(event){
    console.log(event.detail.value);
    this.search = event.detail.value;
  }

  getSearchInput(){
    return this.search;
  }

  async getUserId(){
    let token = await this.storage.get("userId");
    this.userId = token;
  }
  isAdmin(){
    if(localStorage.getItem("adminToken")){
      return true;
    }else{
      return false;
    }
  }
}
