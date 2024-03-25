const nodemailer = require('nodemailer');
require('dotenv').config();

export const sendotp = async(email:string)=>{
    console.log(process.env,"DKJCBSJBVHJDNVJKDNKJLVDHB")
const transporter = nodemailer.createTransport({
    service: 'gmail',
    
    auth: {
        user:process.env.USER,  
        pass:process.env.PASS
    }
});

function generateRandom4DigitNumber() {
    const otp=Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    return otp
}
const otp = generateRandom4DigitNumber();
const mailOptions = {
    from: 'abhijithunni00@gmail.com',     
    to: email,      
    subject: 'otp from bureaudesk',            
    text: `your otp is ${otp}`   
};

try {
    // Use await to wait for the email to be sent
    const info = await transporter.sendMail(mailOptions);
    console.log(info.response);
    // Return the generated OTP
    return otp;
} catch (error:any) {
    // If there's an error, throw it to be caught by the caller
    throw new Error(error.message);
}

}