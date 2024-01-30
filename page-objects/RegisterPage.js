import{v4 as uuidv4} from 'uuid'

export class RegisterPage{
    
    constructor(page){
        this.page = page;
        this.emailInput = page.getByPlaceholder('E-Mail')
        this.passwordInput = page.getByPlaceholder('Password')
        this.registerButton = page.getByRole('button',{name:'Register'})
    }

    signUpAsNewUser = async()=>{
        
        var email = this.getRandomEmail("@example",7)
       

        //Type email input
        await this.emailInput.fill(email)
        
        //Type into password
        let randomPassword = uuidv4()
        await this.passwordInput.fill(randomPassword)

        //Click Register Button
        await this.registerButton.click()
    }


    getRandomEmail =(domain,length)=>{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < length; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text + domain;
    }
}
