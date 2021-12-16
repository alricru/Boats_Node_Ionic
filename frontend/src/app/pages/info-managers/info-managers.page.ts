import { AfterContentChecked, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ManagersService } from 'src/app/services/managers.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Autoplay, SwiperOptions,Zoom, EffectCube } from 'swiper';
import SwiperCore, {
  Pagination
} from 'swiper/core';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Pagination, EffectCube, Autoplay, Zoom]);
@Component({
  selector: 'app-info-managers',
  templateUrl: './info-managers.page.html',
  styleUrls: ['./info-managers.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InfoManagersPage implements AfterContentChecked {
  @ViewChild('swiper') swiper: SwiperComponent

  config: SwiperOptions = {
    pagination: true,
    effect: 'cube',
    autoplay: true,
    zoom: true
  }

  public search: string = "";
  Managers: any = []

  constructor(private ManagersService: ManagersService, private router: Router) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.ManagersService.getManagers().subscribe((response) =>{
      this.Managers = response;
    })
  }
  ngAfterContentChecked(){
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }
}
