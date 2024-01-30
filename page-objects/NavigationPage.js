
export class NavigationPage{

    constructor(page){
        this.page = page;
        this.basketCounter = page.locator('[data-qa="header-basket-count"]')
        this.checkOutLink = page.getByRole('link', { name: 'Checkout' })
    }

    getBasketCount = async()=>{
        //return the number
        
        const text = await this.basketCounter.innerText();
        return parseInt(text)
        
    }

    goToCheckoutPage = async()=>{
        await this.checkOutLink.click()
    }

}