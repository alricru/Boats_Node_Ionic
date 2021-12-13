import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import {Boats, BoatsService } from 'src/app/services/boats.service';
import { ManagersService } from 'src/app/services/managers.service';
import { UserService } from 'src/app/services/user.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-create-boats',
  templateUrl: './create-boats.page.html',
  styleUrls: ['./create-boats.page.scss'],
})
export class CreateBoatsPage implements OnInit {
  boatForm: FormGroup;

  submitted = false;

  private file : File;

  Managers: any = []

  Users: any = []

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private BoatsService: BoatsService,
    private ManagersService: ManagersService,
    private userService: UserService,
    private storage: Storage
  ){}

  ngOnInit() {
    this.boatForm = this.formBuilder.group({
      brand: [''],
      model: [''],
      status: [''],
      userId: [''],
      managerId: [''],
      file: [null]
    })
  }
  ionViewDidEnter(){
    this.ManagersService.getManagers().subscribe((response) =>{
      this.Managers = response;
    })
    this.getUsers();
  }
  fileChange(fileChangeEvent){
    this.file = fileChangeEvent.target.files[0];
}

  onSubmit(){
    this.submitted = true;
    if (!this.boatForm.valid){
      console.log('Rellene los campos obligatorios')
      return false;
    }else{
      const boat:Boats = this.boatForm.value;
      this.BoatsService.createBoat(boat,this.file).subscribe(()=>{
        this.boatForm.reset;
        this.router.navigateByUrl("menu/list-boats");
      });
    }
    console.log(this.boatForm.value)
  }
  async getUsers() {
    let token = await this.storage.get("token");
    this.userService.getUsers(token).subscribe(response => {
      this.Users = response;
    })
  }
  cancel(){
    this.boatForm.reset;
    this.router.navigateByUrl("menu/list-boats").then(()=>{window.location.reload();});
  }
}
