const {expect} = require('@playwright/test')

exports.DeliveryDetailsPage= class DeliveryDetailsPage{

    /**
     * 
     * @param {import('@playwright/test').Page}page 
     */

    constructor(page){
        this.page = page;
        this.firstNameInput = page.getByPlaceholder('First name')
        this.lastNameInput = page.getByPlaceholder('Last name')
        this.streetInput = page.getByPlaceholder('Street')
        this.postCodeInput = page.getByPlaceholder('Post code')
        this.cityInput = page.getByPlaceholder('City')
        this.countryDropdown = page.locator("//select[contains(@class,'country-dropdown')]")
        this.saveAddressForNextTimeBtn = page.getByRole('button',{name:"Save address for next time"})
        this.saveAddressContainer = page.locator('[data-qa="saved-address-container"]')
        this.savedAddressContainerValues = page.locator('//div[@data-qa=\'saved-address-container\']/p')
    }

    fillDetails=async(deliveryDetails)=>{
        await this.firstNameInput.fill(deliveryDetails.firstName)
        await this.lastNameInput.fill(deliveryDetails.lastName)
        await this.streetInput.fill(deliveryDetails.street)
        await this.postCodeInput.fill(deliveryDetails.postCode)
        await this.cityInput.fill(deliveryDetails.city)
        await this.countryDropdown.selectOption(deliveryDetails.country)
    }

    clickSaveAddresBtn = async ()=>{
        await this.saveAddressForNextTimeBtn.click()
    }

    verifyAddressContainerIsIncreasing =async()=>{
        const addressCountBeforeSaving = await this.saveAddressContainer.count()
        await expect(this.saveAddressContainer).toHaveCount(addressCountBeforeSaving +1)
    }

    verifyUserDetaisInContainer = async(deliveryDetails)=>{
     
      var allElements = await this.savedAddressContainerValues.count();

      for(var i=0;i<allElements;i++){

        for(var a=0;a<deliveryDetails;i++){
            expect(this.savedAddressContainerValues.nth(i)).toHaveText(deliveryDetails[a])
        }
      }


  
    }
}