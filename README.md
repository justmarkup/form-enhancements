# Form enhancements

JavaScript helpers to enhance a form.

## Most used passwords

### Include most-used-passwords.js on your site

```
<script src="most-used-passwords/most-used-passwords.js"></script>
```

### Initialize

```
<script>
  mostUsedPasswords.init();
</script>
```

### Options

```
<script>
  mostUsedPasswords.init({
    formElement: '[data-most-used-pw="true"]', // Selector for the form (must be a valid CSS selector)
    passwordElement: '[type="password"]', // Selector for the password input field (must be a valid CSS selector)
    warnText: 'You are trying to use one of the 25 most used passwords of 2015. We know you can do better and choose a safer password.',
    warnClasses: 'message warn', // classes added to the warn message
    passwords: [
      '123456', 
      'password', 
      '12345678', 
      'qwerty', 
      '12345', 
      '123456789', 
      'football', 
      '1234', 
      '1234567', 
      'baseball', 
      'welcome', 
      '1234567890', 
      'abc123', 
      '111111', 
      '1qaz2wsx', 
      'dragon', 
      'master', 
      'monkey', 
      'letmein', 
      'login', 
      'princess', 
      'qwertyuiop', 
      'solo', 
      'passw0rd', 
      'starwars'
    ] // list of passwords 
  });
</script>
```

### Example

You can find an working example at [most-used-passwords/example.html](https://github.com/justmarkup/form-enhancements/most-used-passwords/example.html)
