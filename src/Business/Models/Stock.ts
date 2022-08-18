export default class Stock {
    StockSymbol : string;
    Sector: string;
    Volume: number;
    RelativeStrengthTrend: number;
    Beta: number;
    Country: string;
    Time : string;

    constructor (stockSymbol: string, sector: string, volume: number, relativeStrengthTrend: number, beta: number, country: string, time: string) {
      this.StockSymbol = stockSymbol;
      this.Sector = sector;
      this.Volume = volume;
      this.RelativeStrengthTrend = relativeStrengthTrend;
      this.Beta = beta;
      this.Country = country;
      this.Time = time;
    }
}