
const CurrencyAPI = require("./CurrencyAPI");
const axios = require('axios') 

//jest.mock('axios') 

const currencies = require('../__mocks__/currencies.json')

describe("getCurrencies", () => {
    test("get dolar", async () => {
        let subject = new CurrencyAPI();

        let ret = await subject.getCurrency("USD");

        expect(ret).toBeGreaterThan(0);
    })

    test("empty currency", async () => {
        let subject = new CurrencyAPI();

        await expect(subject.getCurrency(null))
        .rejects
        .toThrow('Can not get currency from API');
    })

    test("wrong currency", async () => {
        let subject = new CurrencyAPI();

        await expect(subject.getCurrency("daj kamienia"))
        .rejects
        .toThrow("Can not get currency from API");
    })
})

describe("mocked currencies", () => {
    test("check currency USD from JSON (mocked)", async () => {

      /*  axios.get.mockImplementationOnce(() => { 
            return Promise.resolve({data: currencies }) 
        }) 
*/
        let subject = new CurrencyAPI();

        let ret = await subject.getCurrency("USD");

        expect(ret).toEqual(4.0984);
    })
})