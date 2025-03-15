import { Component , OnInit} from '@angular/core';
import { CountryPopulation } from '../country-population';
import { HttpClient } from '@angular/common/http';
import { Country } from '../country';
import { environment } from '../../environments/environment.development';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-population',
  imports: [RouterLink],
  templateUrl: './country-population.component.html',
  styleUrl: './country-population.component.scss'
})
export class CountryPopulationComponent {
    // Changed from countrypopulation array to type countrypopulation
    public population: CountryPopulation | undefined;

    constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void{
      this.getCountryWithPopulation();
    }
 
    // Injected activated route dependency
    getCountryWithPopulation() {
          let id = this.activatedRoute.snapshot.paramMap.get("id");
          this.http.get<CountryPopulation>(`${environment.baseUrl}api/Countries/GetPopulation/${id}`).subscribe({
            next: result => this.population = result, 
            error: error => console.error(error)
          }
          );
        }

}
