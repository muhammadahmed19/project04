class CurrencyConverter {
    private exchangeRates = {
      USD: 1, // 1 USD = 1 USD (base currency)
      EUR: 0.85, // 1 USD = 0.85 EUR
      GBP: 0.73, // 1 USD = 0.73 GBP
    };
  
    convert(amount: number, fromCurrency: string, toCurrency: string): number {
      const rate = this.exchangeRates[toCurrency] / this.exchangeRates[fromCurrency];
      return amount * rate;
    }
  }
  
  // Example usage
  const converter = new CurrencyConverter();
  const amount = 100;
  const fromCurrency = "USD";
  const toCurrency = "EUR";
  const convertedAmount = converter.convert(amount, fromCurrency, toCurrency);
  console.log(`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
  