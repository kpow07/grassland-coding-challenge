import { Component, Inject, OnInit, ViewEncapsulation } from "@angular/core";
import { FruitTableViewModel } from "./fruit-table-view-model";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { Fruit } from "src/app/models/fruit";

@Component({
  selector: "app-fruit-table",
  templateUrl: "./fruit-table.component.html",
  styleUrls: ["./fruit-table.component.scss"],
  providers: [FruitTableViewModel],
})
export class FruitTableComponent implements OnInit {
  columnsToDisplay = [
    "id",
    "name",
    "genus",
    "calories",
    "carbohydrates",
    "sugar",
  ];

  options = [
    { value: "nameAsc", viewValue: "Name Ascending" },
    { value: "nameDes", viewValue: "Name Descending" },
    { value: "carbsAsc", viewValue: "Carbohydrates Ascending" },
    { value: "carbsDes", viewValue: "Carbohydrates Descending" },
  ];

  fruit: Fruit;

  constructor(
    public viewModel: FruitTableViewModel,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  applyFilter(event: string) {
    let searchTerm = event.toLowerCase();
    this.viewModel.filteredData$.next(
      this.viewModel.fruitData$.value.filter(
        (fruit) =>
          fruit.genus.toLowerCase().includes(searchTerm) ||
          fruit.name.toLowerCase().includes(searchTerm) ||
          fruit.family.toLowerCase().includes(searchTerm) ||
          fruit.order.toLowerCase().includes(searchTerm)
      )
    );
  }
  onSelectEvent(event: string) {
    if (event === "nameAsc") {
      this.viewModel.filteredData$.next(
        this.viewModel.filteredData$.value.sort((a, b) =>
          a.name.localeCompare(b.name)
        )
      );
    } else if (event === "nameDes") {
      this.viewModel.filteredData$.next(
        this.viewModel.filteredData$.value.sort((a, b) =>
          b.name.localeCompare(a.name)
        )
      );
    } else if (event === "carbsAsc") {
      this.viewModel.filteredData$.next(
        this.viewModel.filteredData$.value.sort(
          (a, b) => a.nutritions.carbohydrates - b.nutritions.carbohydrates
        )
      );
    } else if (event === "carbsDes") {
      this.viewModel.filteredData$.next(
        this.viewModel.filteredData$.value.sort(
          (a, b) => b.nutritions.carbohydrates - a.nutritions.carbohydrates
        )
      );
    }
  }

  openModal(fruit: Fruit) {
    console.log(fruit);
    const dialogRef = this.dialog.open(DialogData, {
      disableClose: true,
      width: "50%",
      data: fruit,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.fruit = fruit;
    });
  }
}
@Component({
  selector: "app-modal",
  styleUrls: ["../modal/modal.component.scss"],
  templateUrl: "../modal/modal.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class DialogData {
  constructor(
    public dialogRef: MatDialogRef<DialogData>,
    @Inject(MAT_DIALOG_DATA) public data: Fruit
  ) {}

  closeModal(): void {
    this.dialogRef.close();
  }
}
