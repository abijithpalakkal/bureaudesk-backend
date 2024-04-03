const nodemailer = require('nodemailer');
require('dotenv').config();

export const sendotp = async(data:any)=>{
    console.log(process.env,"DKJCBSJBVHJDNVJKDNKJLVDHB")
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:process.env.USER,  
        pass:process.env.PASS
    }
});
const mailOptions = {
    from: 'abhijithunni00@gmail.com',     
    to: data.email,      
    subject: 'you have been invited to bureaudesk.login to bureaudesk with this password.change your password as soon as you logged in',            
    text: `your password is ${data.password}`   
};

try {
    // Use await to wait for the email to be sent
    const info = await transporter.sendMail(mailOptions);
    // Return the generated OTP
    return info;
} catch (error:any) {
    // If there's an error, throw it to be caught by the caller
    throw new Error(error.message);
}

}