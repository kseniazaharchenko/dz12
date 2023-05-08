function generateKey(length, characters = '123') {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  
  // приклад використання
  console.log(generateKey(10)); // випадковий ключ довжиною 10 символів
  console.log(generateKey(5, "abc123")); // випадковий ключ довжиною 5 символів із символів "abc123"
  
  const characters = '123';
  const key = generateKey(16, characters);
  console.log(key); // .