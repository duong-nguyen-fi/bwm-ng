import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rental } from './../shared/rental.model';
import { RentalService } from './../shared/rental.service';

@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  currentId: string;
  rental: Rental;

  constructor(private route: ActivatedRoute, private rentalService: RentalService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        console.log(params);
        this.getRental(params.get('rentalId'));
      }
    );
  }

  getRental(rentalId: string) {
    this.rentalService.getRentalsById(rentalId).subscribe(
      (rental) => {
        this.rental = rental;
        console.log(rental.category);
      },
      (err) => {

      } 
    );
  }

}
