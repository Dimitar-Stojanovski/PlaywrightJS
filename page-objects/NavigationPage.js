
const isDesktopViewPort = (page)=>{
    const size = page.viewportSize()
    return size.width>=600
}

export class NavigationPage{

     /**
     * 
     * @param {import('@playwright/test').Page}page
     */
    

    constructor(page){
        this.page = page;
        this.basketCounter = page.locator('[data-qa="header-basket-count"]')
        this.checkOutLink = page.getByRole('link', { name: 'Checkout' })
        this.hamburgerButton = page.locator('[data-qa="burger-button"]')
    }

    getBasketCount = async()=>{
        //return the number
        
        const text = await this.basketCounter.innerText();
        return parseInt(text)
        
    }

    goToCheckoutPage = async()=>{
        if(isDesktopViewPort(this.page)){
           
            await this.checkOutLink.click()
        } else{
            await this.hamburgerButton.click()
            await this.checkOutLink.click()
        }
        
    }

}