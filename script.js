var n=16; //take grid column value as you want

const bigContainer = document.querySelector('.bigContainer')

for(var i = 1; i < n; i++) {
    bigContainer.innerHTML+='<div class="row">';

    for(j = 0; j < n; j++) {
        bigContainer.innerHTML+='<div class="smallBox">';
    }
}

const smallBox = document.querySelector('.smallBox');

bigContainer.addEventListener('mouseover', () => {
    if (event.target.matches('.smallBox')) {
        event.target.classList.add('permahover');
    }
});