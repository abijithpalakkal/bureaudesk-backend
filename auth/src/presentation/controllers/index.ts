import { logoutcontroller } from "./logout";
import { userSignupcontroller } from "./otpsignup";
import { userLoginController } from "./userlogin";
import { otpResendController } from "./otpresend";
import { updateUserController } from "./updateuser";

export const controllers = (dependencies: any) => {
    return {
        otpsignup: userSignupcontroller(dependencies),
        userlogin: userLoginController(dependencies),
        userlogout: logoutcontroller(),
        otpResend:otpResendController(dependencies),
        updateuser:updateUserController(dependencies),
     
    }
}