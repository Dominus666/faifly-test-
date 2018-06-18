let arr =  [ 5, 8, 2, 1, 15, 2, 3, 5, 9, 11, 10, 4, 3, 14, 1, 7, 10, 3, 2, 13];
let findWrapper = document.querySelector('.wrapper')



function addDiv (a) {

    let div = document.createElement('div');

        div.style.height = (a * 10) + "px";


        if(a > 0 && a <= 5){
            div.style.backgroundColor="green"
        }else if(a > 5 && a <= 10){
            div.style.backgroundColor="yellow"
        }else {
            div.style.backgroundColor="red" 
        }
        
        
    div.style.width="100%";


    findWrapper.appendChild(div);

}

for(let i = 0; i < arr.length; i++) {
    addDiv(arr[i])
}
