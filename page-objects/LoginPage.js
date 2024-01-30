export class LoginPage{

    constructor(page){
        this.page = page
        this.registerBtn = page.getByRole('button',{name:'Register'})
    }

    clickRegisterButton= async()=>{
        await this.registerBtn.click()
    }
}