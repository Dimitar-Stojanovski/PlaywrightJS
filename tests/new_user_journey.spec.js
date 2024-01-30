import {expect, test} from "@playwright/test";
import { ProductPage } from "../page-objects/productPage";
import { NavigationPage } from "../page-objects/NavigationPage";

import { Checkout } from "../page-objects/Checkout";
import { LoginPage } from "../page-objects/LoginPage";
import { RegisterPage } from "../page-objects/RegisterPage";
import { DeliveryDetailsPage } from "../page-objects/DeliveryDetailsPage";
import { deliveryDetails } from "../data/deliverydetails";

test.only("new user end to end full journey", async({page})=>{
    //productPage.visit()

    const productPage = new ProductPage(page)

    await productPage.visit()
    await productPage.sortByCheapest();
    //await page.pause();
    await productPage.addProductToBasket(3)

    const navigationPage = new NavigationPage(page);

    const basketCount = await navigationPage.getBasketCount()
    await expect(basketCount).toBeGreaterThanOrEqual(3)

    await navigationPage.goToCheckoutPage();
    await page.waitForURL('/basket');

    const checkout = new Checkout(page);
    await checkout.removeTheCheapestProduct()
    const itemsInCheckoutAfterRemoval = await checkout.countBasketItems();
    await expect(checkout.basketCards).toHaveCount(itemsInCheckoutAfterRemoval-1)
    await checkout.clickOnContinueToCheckoutBtn();

    //LoginPage
    const loginPage = new LoginPage(page);
    await page.waitForURL(/\/login/,{timeout:3000})
    loginPage.clickRegisterButton();
    await page.waitForURL(/\/signup/)
    
    //Register page
    const registerPage = new RegisterPage(page)
    await registerPage.signUpAsNewUser()
    await page.waitForURL('/delivery-details')
    
    //Delivery Details
    const deliveryDetailsPage = new DeliveryDetailsPage(page)
    
    await deliveryDetailsPage.fillDetails(deliveryDetails);
    await page.pause()
   
   

})