

import { expect } from "@playwright/test"

export class ProductPage{
    
    constructor(page){
        this.page=page
        this.addButtons = page.locator('[data-qa=\'product-button\']')
        this.sortDropdown = page.locator('select.sort-dropdown')
        
    }


    visit = async()=>{
        await this.page.goto("/")
        
    }

    addProductToBasket = async(index)=>{
        

        for(let i = 0;i<index;i++){
           await this.addButtons.nth(i).waitFor()
           await expect(this.addButtons.nth(i)).toHaveText("Add to Basket")
           await this.addButtons.nth(i).click();
           await expect(this.addButtons.nth(i)).toHaveText("Remove from Basket")

          
        }
    }

    sortByCheapest = async()=>{
        await this.sortDropdown.waitFor()
        await this.sortDropdown.selectOption('price-asc')
    }

    

    
}