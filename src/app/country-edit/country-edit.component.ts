import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CountryPopulation } from '../country-population';
import { environment } from '../../environments/environment.development';
@Component({
  selector: 'app-country-edit',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './country-edit.component.html',
  styleUrl: './country-edit.component.scss'
})
export class CountryEditComponent {
form!: FormGroup;
  population: CountryPopulation | undefined;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute){}
  
  ngOnInit():void{
      this.form = new FormGroup({
        Name: new FormControl("", Validators.required),
        ISO2: new FormControl("", Validators.required),
        ISO3: new FormControl("", Validators.required)
      });
  }

  onSubmit(){
    
  }

  populationData(){
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.http.get<CountryPopulation>(`${environment.baseUrl}api/Countries/GetPopulation/${id}`).subscribe({
      next: result => {
        this.population = result;
        this.form.patchValue(this.population); 
      },
      error: error => console.error(error)
    });
  }

}
