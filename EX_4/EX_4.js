
   


// A

  function delay(duration){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve('hi')
    }, duration) })
}
    
    function logHi(){
    console.log('hi');
}       
    delay(2000).then(logHi)




//Б


//1)
/*  new Promise((resolve, reject) => {
  let m = 10
    setTimeout(() => {
      resolve(m)
    },3000)
  }).then((result) => {
    let k = result + 2
    console.log(k)                      // Эту сделал Я
    return result + 2 
  }).then((result) => {
    let f = result 
   setTimeout(() => {
   resolve(f)
},2000)
}).then((result) => {
  console.log(result)
})  */


//2)
const promise = new Promise((resolve, reject) => {
  let m = 10
  setTimeout(() => 
  resolve(m) ,3000)
  }).then(result => {
  console.log(result = result+=2)
  return result                                // эту кореш помог
  }).then(result => {
  console.log(result)
  result += 2
  return new Promise(resolve => {
  setTimeout(() => resolve(result), 2000)
  })
  }).then(data => console.log(data))
  
  console.log(promise)
/* return result * 2
  }).then((result) => {
     console.log(result)
  }) */






// В

/*  let promise_1 = new Promise((reject, resolve) => {
  setTimeout(() => {
    resolve('sucsess');
  }, (Math.random() < 2000))
  setTimeout(() => {
    reject('error');
  }, (Math.random() > 2000)) 
  resolve('ok')
  reject('no')
  
})
promise_1.then(result =>{
  console.log(result + ' ')

  error => {
      console.log(error + reject)
  }})
promise_1.then()  */


/* let promise_2 = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve('sucsess');
  }, 2000)
  setTimeout(() => {
    reject(newError());
  }, (Math.random() > 2000)) 
})

promise_2.then(result =>{
  console.log(result + ' ')

  error => {
      console.log(reject + error + '')
  }})
promise_2.then()
 */

/* 
 promise_3 = new Promise((resolve, reject) => {
 
  if (Math.random() > .5) {
    resolve("Успех")
  } else {
    reject("Ошибка")
  }
}

promise_3.then.resolve(result) {
  console.log("Успешно завершено с результатом " + result);
}

function  reject(error) {
  console.log("Завершено с ошибкой " + error);
}
 */
