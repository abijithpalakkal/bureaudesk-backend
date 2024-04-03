function generateRandomPassword() {
    const length = 8;
    const numbers = '0123456789';
    const lowerAlphabets = 'abcdefghijklmnopqrstuvwxyz';
    const upperAlphabets = lowerAlphabets.toUpperCase();
    const charset = numbers + lowerAlphabets + upperAlphabets;
    let password = '';
  
    // Ensure at least one number
    password += numbers[Math.floor(Math.random() * numbers.length)];
  
    // Ensure at least one lowercase alphabet
    password += lowerAlphabets[Math.floor(Math.random() * lowerAlphabets.length)];
  
    // Ensure at least one uppercase alphabet
    password += upperAlphabets[Math.floor(Math.random() * upperAlphabets.length)];
  
    // Generate the rest of the password
    for (let i = 0; i < length - 3; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
  
    // Shuffle the characters to ensure randomness
    password = password.split('').sort(() => Math.random() - 0.5).join('');
  
    return password;
  }
  export default generateRandomPassword
 