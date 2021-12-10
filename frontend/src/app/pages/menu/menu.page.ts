import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { title } from 'process';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit{
  username = '';
  pages = [];
  selectedPath='';

  constructor(private router:Router) {
    this.router.events.subscribe((event:RouterEvent)=>{
      this.selectedPath= event.url;
    })
  }

  ngOnInit() {
    if (localStorage.getItem('userToken')) {
      this.pages = [
        {title: 'Info',url: '/menu/info', icon:'information-circle-outline'},
        {title: 'Contact Us',url: '/menu/contact-us', icon: 'paper-plane-outline'},
        {title: 'Managers', url: '/menu/info-managers', icon:'person-outline'},
        {title: 'Boats', url: '/menu/info-boats', icon:'boat-outline'},
      ];
    } else if(localStorage.getItem('adminToken')) {
      this.pages = [
        {title: 'Info', url: '/menu/info', icon:'information-circle-outline' },
        {title: 'Contact Us', url: '/menu/contact-us', icon: 'paper-plane-outline'},
        {title: 'Managers', url: '/menu/info-managers', icon:'person-outline'},
        {title: 'Boats', url: '/menu/info-boats', icon:'boat-outline'},
        {title: 'Admin Managers', url: '/menu/list-managers', icon:'person-add'},
        {title: 'Admin Boats', url: '/menu/list-boats', icon:'boat'},
      ];
    }else{
      this.pages = [
        {title: 'Info',url: '/menu/info', icon:'information-circle-outline'},
        {title: 'Contact Us',url: '/menu/contact-us', icon: 'paper-plane-outline'},
        {title: 'Managers', url: '/menu/info-managers', icon:'person-outline'},
      ];
    }
  }
  logout(){
    localStorage.clear();
    Swal.fire('Se ha cerrado su sesión').then(()=>{this.router.navigate(['/menu/login']).then(() => { window.location.reload(); });});
  }
  isLogged(){
    if(localStorage.getItem('userToken') || localStorage.getItem('adminToken')){
      return true
    }else{
      return false
    }
  }
  login(){
    this.router.navigate(['/menu/login']).then(() => { window.location.reload(); });
  }
  //PROVISIONAL
  user(){
    if(localStorage.getItem('userToken')){
      return true;
    }else{
      return false;
    }
  }
  admin(){
    if(localStorage.getItem('adminToken')){
      return true
    }else{
      return false
    }
  }
}

