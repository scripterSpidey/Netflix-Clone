export const validateEmail =(email)=>{
    const isEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    if(isEmail) return null;
    else return 'Enter a valid email'
}

export const validatePassword = (password) =>{
    const isPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password)

    if(isPassword) return null;
    else return 'Enter a valid password: password must contain atleast 6 letters'
}