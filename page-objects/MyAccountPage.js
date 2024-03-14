

exports.MyAccountPage= class MyAccountPage{
    /**
     * 
     * @param {import('@playwright/test').Page}page 
     */

    constructor(page){
        this.page = page;
        
    }

    visitMyAccount = async()=>{
        await this.page.goto("/my-account")
    }
}