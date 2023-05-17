function math(a,b,func){
    if(func === '+'){
        let c=a+b;
        console.log(`Відповідь: ${c}`)
    }
    else if(func === '-'){
        let c=a-b;
        console.log(`Відповідь: ${c}`)
    }
    else if(func === '/'){
        let c=a/b;
        console.log(`Відповідь: ${c}`)
    }
    else if(func === '*'){
        let c=a*b;
        console.log(`Відповідь: ${c}`)
    } else{
        console.log('Помилка вводу дії')
    }
}
let a = parseInt(prompt('Введіть перше число'));
let b = parseInt(prompt('Введіть друге число'));
let func = prompt('Введіть математичну дію');
math(a,b,func);
