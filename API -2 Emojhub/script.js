//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

fetch('https://emojihub.yurace.pro/api/all').then((data)=>{
    return data.json();
}).then((a)=>{

    let card = '';
    let slide = '';
    let len = 0;
    let count = 1;
    a.forEach((s)=>{
        
        card += `  <div class="container">
                        <p id="emoj"> ${s.htmlCode}</p>
                        <p id="name">${count}: ${s.name}</p>
                        <p id = 'category'>${s.category}</p>
                        <p id="group">${s.group}</p>
       
                        </div>`
        
                        
        if(len < 24){
        if(count % 4 == 0){
        slide +=`<p id = eslide> ${s.htmlCode}</p>`
        len++
        }
                        
       }
        count++;
       
        
    })
        let product = document.getElementById('outer');
    product.innerHTML = card;
    let slider = document.getElementById('slide');
    slider.innerHTML = slide

    ///search filter emoji


    const searchProduct = document.getElementById('search')
    
    searchProduct.addEventListener('keyup',showEmoj)
    
    const clear = document.getElementById('slide');
    
    
function showEmoj(){
    let searchEmoj = searchProduct.value.toUpperCase();

    const box = product.querySelectorAll('.container');

    box.forEach((e)=>{
        let emojiName = e.querySelector('#name').innerHTML.toUpperCase();

        let emojGroup = e.querySelector('#group').innerHTML.toUpperCase();

        if(emojiName.indexOf(searchEmoj) > -1 || emojGroup.indexOf(searchEmoj) > -1){

            // clear.style.display = 'none';
            e.style.display = 'initial';
        }
        else{
            e.style.display = 'none';
           
        }
    })

}



});
