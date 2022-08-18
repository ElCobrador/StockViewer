import DailyStockReport from './DailyStockReport';
import Stock from './Stock';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-webpack-loader-syntax

export default class MockedData {
  static MockSymbols : Array<string> = ['PLL', 'EDR', 'PFHC', 'CFVI', 'BE', 'AMRS', 'CHPT', 'MERC', 'BBVA', 'CCEP', 'ENVX', 'FE']
  static Sectors : Array<string> = ['Basic Materials', 'Communication Services', 'Energy', 'Financial Services', 'Industrials', 'Consumer Cyclical', 'Utilities', 'Healthcare']

  static GetDailyStockReport () : Array<DailyStockReport> {
    const numberOfDays = 4;
    const numberOfStocksEachDay = 20;

    const date = new Date('2022-09-23');
    const dailyStockReports : Array<DailyStockReport> = [];
    for (let i = 0; i < numberOfDays; i += 1) {
      const stocks : Array<Stock> = [];

      for (let j = 0; j < numberOfStocksEachDay; j += 1) {
        const symbol = this.MockSymbols[this.getRandomInt(this.MockSymbols.length)];
        const sector = this.Sectors[this.getRandomInt(this.Sectors.length)];
        const volume = this.getRandomInt(1000000000);
        const relativeStrengthTrend = this.getRandomInt(10000) / 1000;
        const beta = this.getRandomInt(300) / 100;
        const country = 'US';

        stocks.push(new Stock(symbol, sector, volume, relativeStrengthTrend, beta, country, ''));
      }
      date.setDate(date.getDate() - 1);
      dailyStockReports.push(new DailyStockReport(date, stocks));
    }

    return dailyStockReports;
  }

  static getRandomInt (max: number) {
    return Math.floor(Math.random() * max);
  }
}