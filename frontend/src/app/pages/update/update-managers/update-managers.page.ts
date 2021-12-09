import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Managers, ManagersService } from 'src/app/services/managers.service';

@Component({
  selector: 'app-update-managers',
  templateUrl: './update-managers.page.html',
  styleUrls: ['./update-managers.page.scss'],
})
export class UpdateManagersPage implements OnInit {

  managerForm: FormGroup;

  id: any;

  submitted = false;

  private file : File;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private activatedRoute: ActivatedRoute,
    private ManagersService: ManagersService
  ){this.id = this.activatedRoute.snapshot.paramMap.get('id');}

  ngOnInit() {
    this.fetchUser(this.id);
    this.managerForm = this.formBuilder.group({
      name: [''],
      surname: [''],
      repairedboats: [''],
      description: [''],
      file: [null]
    })
  }
  fetchUser(id){
    this.ManagersService.getManager(id).subscribe((data) => {
      this.managerForm.setValue({
        name: data['name'],
        surname: data['surname'],
        repairedboats: data['repairedboats'],
        description: data['description'],
        file: data['file']
      });
    })
  }
  fileChange(fileChangeEvent){
    this.file = fileChangeEvent.target.files[0];
}
onSubmit(){
  this.submitted = true;
  if (!this.managerForm.valid){
    console.log('Rellene los campos obligatorios')
    return false;
  }else{
    const manager:Managers = this.managerForm.value;
    this.ManagersService.updateManagers(manager.id,manager,this.file).subscribe(()=>{
      this.managerForm.reset;
      this.router.navigateByUrl("menu/list-managers");
    });
  }
  console.log(this.managerForm.value)
}
cancel(){
  this.managerForm.reset;
  this.router.navigateByUrl("menu/list-managers").then(()=>{window.location.reload();});
}
}
