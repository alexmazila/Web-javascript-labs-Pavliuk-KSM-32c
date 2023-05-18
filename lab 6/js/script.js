function filterBy (array,type){
    if (type === 'null'){
        type = 'object';
    }
    let filteredArray = array.filter(function (item){
        return typeof item !== type;
    });
    console.log(filteredArray);

}
let list = ['dog', null, 123, 'cat', 4n, true, false,{name: 'Alex'}];
let type = prompt('Enter category to filter the array (possible filters: number, string, boolean, null, undefined, symbol, bigint, object)');
filterBy(list,type);