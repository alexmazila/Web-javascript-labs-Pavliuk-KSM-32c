let number = prompt('Введіть число');
let answer = [];
for (let i=1;i<number;i++){
    if(i%5==0){
        answer.push(i)
    }
}
if(answer.length==0){
    console.log('Sorry, no numbers')
}else console.log('Числа кратні 5: '+answer)
