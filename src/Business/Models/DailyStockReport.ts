import Stock from '@/Business/Models/Stock';

export default class DailyStockReport {
    Date: Date;
    Stocks: Array<Stock>

    constructor (date: Date, stocks: Array<Stock>) {
      this.Date = date;
      this.Stocks = stocks;
    }
}