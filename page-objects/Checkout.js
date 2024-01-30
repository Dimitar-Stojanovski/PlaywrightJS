
export class Checkout{

    constructor(page){
        this.page = page
        this.basketCards = page.locator('[data-qa="basket-card"]')
        this.basketItemPrice = page.locator('[data-qa="basket-item-price"]')
        this.removeItemBtn = page.locator('[data-qa="basket-card-remove-item"]')
        this.continueToCheckoutBtn = page.getByText('Continue to Checkout')
    }

    removeTheCheapestProduct = async()=>{
        const allprices = await this.basketItemPrice.allInnerTexts()
        // Finding the cheapest element using the map function in Javascript
        const justNumbers = allprices.map((element)=>{
            const withoutDollarSign = element.replace("$","")
            return parseInt(withoutDollarSign)
            
        })
        const smallesPrice = Math.min(...justNumbers)
        const smallestPriceIndex = justNumbers.indexOf(smallesPrice)

        //Click on remove button to the card with smallest number
        await this.removeItemBtn.nth(smallestPriceIndex).click()

        console.warn({smallestPriceIndex})
    }

    clickOnContinueToCheckoutBtn = async()=>{
        await this.continueToCheckoutBtn.click();
    }

    countBasketItems = async()=>{
       return await this.basketCards.count()
    }
}