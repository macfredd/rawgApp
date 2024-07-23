import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DatesService {
  public currentDate: Date;

  constructor() {
    this.currentDate = new Date();
  }

  getDates() {
    return {
      lastYear: new Date(
        this.currentDate.getFullYear() - 1,
        this.currentDate.getMonth(),
        this.currentDate.getDate()
      ),
      last6Months: new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() - 6,
        this.currentDate.getDate()
      ),
      lastMonth: new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() - 1,
        this.currentDate.getDate()
      ),
      lastWeek: new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth(),
        this.subtractDays(this.currentDate.getDate(), 7)
      ),
      nextWeek: new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth(),
        this.currentDate.getDate() + 7
      ),
      future: (days: number) =>
        new Date(
          this.currentDate.getFullYear(),
          this.currentDate.getMonth(),
          this.currentDate.getDate() + days
        ),
    };
  }

  private subtractDays(date: number, days: number): number {
    return date - days;
  }

  public formatDate(date: Date): string {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  }
}
