function validateEmail(email) {
    var re = /^[a-z0-9]+@[a-z.-]+\.[a-z]{2,3}/g;

   if(re.test(String(email).toLowerCase())){
       console.log('Valid')
   }else{
       console.log('Invalid')
   }
}
validateEmail('valid@email.bg');