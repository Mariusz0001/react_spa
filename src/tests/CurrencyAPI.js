const axios = require('axios');

class CurrencyAPI
{
    async getCurrency(_currency = "USD"){
        try{
            
          let _ret = await axios.get("https://api.nbp.pl/api/exchangerates/tables/A?format=json");  
          let _mid = null;

          _ret.data.forEach(element => {
              element.rates.forEach(item => {
                if(item.code === _currency)
                _mid = item.mid;
              })
          });

          if(_mid === null)//test
            throw new Error("Can not get currency from API");

          return _mid;
        }
        catch(e){
          throw new Error("Can not get currency from API");
        }
    }
}

export default CurrencyAPI;
//module.exports = CurrencyAPI;