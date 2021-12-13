import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { BoatsService } from 'src/app/services/boats.service';

@Component({
  selector: 'app-info-boats',
  templateUrl: './info-boats.page.html',
  styleUrls: ['./info-boats.page.scss'],
})
export class InfoBoatsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
