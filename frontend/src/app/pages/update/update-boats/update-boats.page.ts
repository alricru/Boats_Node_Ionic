import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Boats, BoatsService } from 'src/app/services/boats.service';

@Component({
  selector: 'app-update-boats',
  templateUrl: './update-boats.page.html',
  styleUrls: ['./update-boats.page.scss'],
})
export class UpdateBoatsPage implements OnInit {

  boatForm: FormGroup;

  id: any;

  submitted = false;

  private file : File;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private activatedRoute: ActivatedRoute,
    private BoatsService: BoatsService
  ){this.id = this.activatedRoute.snapshot.paramMap.get('id');}

  ngOnInit() {
    this.fetchUser(this.id);
    this.boatForm = this.formBuilder.group({
      brand: [''],
      model: [''],
      status: [''],
      userId: [''],
      managerId: [''],
      file: [null]
    })
  }
  fetchUser(id){
    this.BoatsService.getBoat(id).subscribe((data) => {
      this.boatForm.setValue({
        brand: data['brand'],
        model: data['model'],
        status: data['status'],
        userId: data['userId'],
        managerId: data['managerId'],
        file: data['filename']
      });
    })
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
    this.BoatsService.updateBoats(this.id,boat,this.file).subscribe(()=>{
      this.boatForm.reset;
      this.router.navigateByUrl("menu/list-boats");
    });
  }
  console.log(this.boatForm.value)
}
cancel(){
  this.boatForm.reset;
  this.router.navigateByUrl("menu/list-boats").then(()=>{window.location.reload();});
}

}
