
import {test} from "@playwright/test"
import { MyAccountPage } from "../page-objects/MyAccountPage"
import { getLoginToken } from "../api-calls/getLoginToken"
import { adminDetails } from "../data/adminDetails";
test.only('My account using cookie injection', async({page})=>{
    
    //retrieving the loginToken using node-fetch
    const token = await getLoginToken(adminDetails.username,adminDetails.password);
    console.warn({token})


    const accountPage = new MyAccountPage(page)
    await accountPage.visitMyAccount()

    //injecting the token
    await page.evaluate((loginTokenInsideThePage) => {
        document.cookie = "token=" + loginTokenInsideThePage
    }, [token])

    
    await accountPage.visitMyAccount()
    //await page.pause()


})

