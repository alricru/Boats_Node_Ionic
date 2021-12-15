import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { BoatsService } from 'src/app/services/boats.service';
import { UserService } from 'src/app/services/user.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-info-boats',
  templateUrl: './info-boats.page.html',
  styleUrls: ['./info-boats.page.scss'],
})
export class InfoBoatsPage implements OnInit {

  public search: string = "";
  Boats: any = []
  userId: number;

  constructor(private storage: Storage,private BoatsService: BoatsService, private router: Router) { }

  ngOnInit() {
  }
  ionViewDidEnter(){

    this.getUserId()

    this.BoatsService.getBoats().subscribe((response) =>{
      this.Boats = response;
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
}
