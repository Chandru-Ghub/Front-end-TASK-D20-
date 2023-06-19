
//Found  the total page
//Generate the random page out of 505 pages
const randomPage = Math.floor((Math.random()*505));

let page = `https://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=${randomPage}`
fetch(page).then((data)=>{
    return data.json();
}).then((fdata)=>{


  itemsPerPage = 3;

  function renderData(page){
  let startIndex = (page-1)*itemsPerPage;
  let endIndex = (startIndex + itemsPerPage);
  let productPerPage = fdata.slice(startIndex,endIndex);

    
    let content = '';

    productPerPage.forEach((a)=>{

        content += `<div class = 'comic'>
                        <img class = 'img' src="${a.image}" alt="">
                        <h4 class = 'name'>${a.name}</h4>
                        <p class = 'ep'>Episode:</p>
                        <p class = 'fepisode'>${a.firstEpisode}</p>
                        <p class = 'vb' >VoiceBy:</p>
                        <p class = 'voiceby'>${a.voicedBy}</p>
                        <p class = 'vb' >Occupation:</p>
                        <p class = 'voiceby'>${a.occupation}</p>
                    </div>`
    })
    

    document.getElementById('ct').innerHTML = content;
}

function renderPagination(page){

    prevPage = document.getElementById('left');
    nextPage = document.getElementById('right');

    
prevPage.style.display = "inline-block";
nextPage.style.display = "inline-block";

    if(page==1){
        prevPage.style.display = 'none'
       
    }
    
    if(page == Math.ceil(fdata.length/itemsPerPage)){
        nextPage.style.display = 'none'
       
    }
   
}

currentPage = 1;
renderData(currentPage);
renderPagination(currentPage);

document.getElementById('left').addEventListener('click',(()=>{

currentPage--
renderData(currentPage);
renderPagination(currentPage);

}))

document.getElementById('right').addEventListener('click',(()=>{

currentPage++
renderData(currentPage);
renderPagination(currentPage);

}))

}).catch((error)=>{
    console.log(error);
})