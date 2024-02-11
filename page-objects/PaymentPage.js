const{expect} = require('@playwright/tests')

exports.PaymentPage = class PaymentPage{
   
    /**
     * 
     * @param {import('@playwright/test').Page}page
     */

    constructor(page){
        this.page = page;
    }
}