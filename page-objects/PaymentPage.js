const { expect } = require('@playwright/test');
import { cardDetails } from '../data/cardDetails';


exports.PaymentPage = class PaymentPage{
   
    /**
     * 
     * @param {import('@playwright/test').Page}page
     */

    constructor(page){
        this.page = page;
        this.discountCoupon = page.frameLocator('[data-qa="active-discount-container"]').locator('[data-qa="discount-code"]')
        this.discountInput = page.getByPlaceholder('Discount code')
        this.submitDiscountBtn = page.getByRole('button', {name:'Submit discount'})
        this.discountActivatedMsg = page.locator('[data-qa="discount-active-message"]')
        this.totalValue = page.locator('[data-qa="total-value"]')
        this.discountedValue = page.locator('[data-qa="total-with-discount-value"]')
        
        //cardDetais
        this.creditCardOwnerInput = page.getByPlaceholder('Credit card owner')
        this.cardNumber = page.getByPlaceholder('Credit card number')
        this.validUntil = page.getByPlaceholder('Valid until')
        this.cvcCard = page.getByPlaceholder('Credit card CVC')
        this.payButton = page.getByRole('button', {name:'Pay'})


    }

    getDiscountCoupon = async()=>{
        await this.discountCoupon.waitFor()
        return  await this.discountCoupon.innerText()
        
    }

    enterCouponCodeInput = async(coupon)=>{
        await this.discountInput.waitFor({state:'visible'})
        await this.discountInput.fill(coupon)
       
        
       
    }

    verifyTheValueInTheDiscountInput = async (code)=>{
      
        expect(await this.discountInput).toHaveValue(code)
        
         
    }

    clickOnSubmitDiscountBtn = async()=>{
        await this.submitDiscountBtn.click()
    }

    checkingThatDiscountMessageIsNotDisplayed =async()=>{
        expect(await this.discountActivatedMsg).toBeHidden()
    }

    verifyThatDiscountMsgIsSuccesfullyDisplayed = async()=>{
        //await this.discountActivatedMsg.waitFor()
       await expect(await this.discountActivatedMsg).toHaveText('Discount activated!')
    }

    checkThatDiscountedPriceIsLowerThanOriginal = async()=>{
        // find total value
        const totalValueElement = await this.totalValue.innerText()
        // replace string of total value
        const totalValueReplacedString = totalValueElement.replace("$","")
        //parse it to int
        const totalNumberAsInt = parseInt(totalValueReplacedString)

        //find discounted value
        const discountedValueElement = await this.discountedValue.innerText()
        // replace string of discounted value
        const discountedValueReplacedString = discountedValueElement.replace("$","")
        //parse discounted value to int
        const discountetNumberAsInt = parseInt(discountedValueReplacedString)

        expect(discountetNumberAsInt).toBeLessThan(totalNumberAsInt)

    }

    fillCardDetails = async(cardDetails)=>{
        await this.creditCardOwnerInput.fill(cardDetails.creditCardOwner)
        await this.cardNumber.fill(cardDetails.creditCardNumber)
        await this.validUntil.fill(cardDetails.validUntil)
        await this.cvcCard.fill(cardDetails.cardCVC)
    }

    clickPayButton = async()=>{
        await this.payButton.click()
    }




}