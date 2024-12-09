import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoxServiceService } from '../box-service.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  square: { id: number; title: string } | null = null;

  constructor(
    private route: ActivatedRoute,
    private boxService: BoxServiceService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.boxService.getSquareById(id).subscribe(
        (data) => {
          this.square = data;
        },
        (error) => {
          console.error('Error fetching square details:', error);
        }
      );
    }
  }
}
