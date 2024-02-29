const { expect } = require('@playwright/test');


exports.PaymentPage = class PaymentPage{
   
    /**
     * 
     * @param {import('@playwright/test').Page}page
     */

    constructor(page){
        this.page = page;
        this.discountCoupon = page.frameLocator('[data-qa="active-discount-container"]').locator('[data-qa="discount-code"]')
        this.discountInput = page.getByPlaceholder('Discount code')
    }

    getDiscountCoupon = async()=>{
        await this.discountCoupon.waitFor()
        return  await this.discountCoupon.innerText()
        
    }

    enterCouponCodeInput = async(coupon)=>{
        await this.discountInput.fill(coupon)
       
        
       
    }

    verifyTheValueInTheDiscountInput = async (code)=>{
        expect(await this.discountInput).toHaveValue(code)
        
         
    }




}