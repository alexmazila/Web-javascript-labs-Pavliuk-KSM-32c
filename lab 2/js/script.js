let number = prompt('Введіть число');
let answer = [];
for (let i=1;i<number;i++){
    if(i%5==0){
        answer.push(i)
    }
}
if(answer.length==0){
    alert('Sorry, no numbers')
}else alert('Числа кратні 5: '+answer)
