import { Component } from '@angular/core';
import { BoxServiceService } from '../box-service.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.scss'],
})
export class BoxListComponent {
  squares: { id: number; title: string }[] = [];
  newSquareTitle: string = '';
  visible: boolean = false;

  constructor(
    private boxService: BoxServiceService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.loadSquares();
  }

  loadSquares() {
    this.boxService.getSquares().subscribe((data) => {
      this.squares = data;
    });
  }

  addSquare() {
    if (this.newSquareTitle.trim() !== '') {
      const newSquare = { title: this.newSquareTitle };
      this.boxService.addSquare(newSquare).subscribe((square) => {
        this.squares.push(square);
        this.newSquareTitle = '';
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Square added successfully!',
        });
      });
    }
  }

  deleteSquare(index: number) {
    const squareId = this.squares[index].id;

    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this square?',
      header: 'Confirm Deletion',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.boxService.deleteSquare(squareId).subscribe(
          () => {
            this.loadSquares();
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Square deleted successfully!',
            });
          },
          (error) => {
            console.error('Error deleting square:', error);
          }
        );
      },
      reject: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Cancelled',
          detail: 'Square deletion cancelled',
        });
      },
    });
  }

  viewSquare(index: number) {
    const squareId = this.squares[index].id;
    alert(`Navigating to square with ID: ${squareId}`);
  }

  showDialog() {
    this.visible = true;
  }
}
