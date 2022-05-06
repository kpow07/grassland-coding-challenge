import { Component, Inject, OnInit, ViewEncapsulation } from "@angular/core";
import { FruitTableViewModel } from "./fruit-table-view-model";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { Fruit } from "src/app/models/fruit";
import { Sort } from "@angular/material/sort";

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

  sortData(sort: Sort) {
    if (!sort.active || sort.direction === "") {
      return;
    }

    this.viewModel.filteredData$.next(
      this.viewModel.filteredData$.value.sort((a, b) => {
        const isAsc = sort.direction === "asc";
        switch (sort.active) {
          case "id":
            return this.compare(a.id, b.id, isAsc);
          case "name":
            return this.compare(a.name, b.name, isAsc);
          case "genus":
            return this.compare(a.genus, b.genus, isAsc);
          case "calories":
            return this.compare(
              a.nutritions.calories,
              b.nutritions.calories,
              isAsc
            );
          case "carbohydrates":
            return this.compare(
              a.nutritions.carbohydrates,
              b.nutritions.carbohydrates,
              isAsc
            );
          case "sugar":
            return this.compare(a.nutritions.sugar, b.nutritions.sugar, isAsc);
          default:
            return 0;
        }
      })
    );
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  openModal(fruit: Fruit) {
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
