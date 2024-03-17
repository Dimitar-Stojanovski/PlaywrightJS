import { test,expect } from "@playwright/test";


test.skip("Product Page add to basket", async ({page}) =>{
   await page.goto("/")
   

   const addToBasketButton = page.locator('[data-qa="product-button"]').first()
   const basketCounter = page.locator('[data-qa="header-basket-count"]')

   addToBasketButton.waitFor();
   await expect(addToBasketButton).toHaveText("Add to Basket")
   await expect(basketCounter).toHaveText('0')
   await addToBasketButton.click();

  await expect(addToBasketButton).toHaveText("Remove from Basket")
  await expect(basketCounter).toHaveText('1')

  //Going to checkout
  const checkoutLink = page.getByRole('link', {name:"Checkout"})
  
  await checkoutLink.click();
  
  await page.waitForURL("/basket")
  
  
})

