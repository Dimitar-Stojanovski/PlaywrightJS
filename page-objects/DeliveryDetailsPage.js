export class DeliveryDetailsPage{

    constructor(page){
        this.page = page;
        this.firstNameInput = page.getByPlaceholder('First name')
        this.lastNameInput = page.getByPlaceholder('Last name')
        this.streetInput = page.getByPlaceholder('Street')
        this.postCodeInput = page.getByPlaceholder('Post code')
        this.cityInput = page.getByPlaceholder('City')
        this.countryDropdown = page.locator("//select[contains(@class,'country-dropdown')]")
    }

    fillDetails=async(deliveryDetails)=>{
        await this.firstNameInput.fill(deliveryDetails.firstName)
        await this.lastNameInput.fill(deliveryDetails.lastName)
        await this.streetInput.fill(deliveryDetails.street)
        await this.postCodeInput.fill(deliveryDetails.postCode)
        await this.cityInput.fill(deliveryDetails.city)
        await this.countryDropdown.selectOption(deliveryDetails.country)
    }
}