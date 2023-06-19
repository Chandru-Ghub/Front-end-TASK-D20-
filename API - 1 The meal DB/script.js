


fetch('https://www.themealdb.com/api/json/v1/1/categories.php').then((Strdata)=>{

    return Strdata.json();
}).then((data)=>{
    



        let itemsPerPage = 7;
        function renderData(page){
            let startIndex = (page - 1) * itemsPerPage;
            let endIndex = (startIndex + itemsPerPage);
            let productPerPage = data.categories.slice(startIndex,endIndex);

            let productContainer = document.getElementById('container');

            let product = '';
            productPerPage.forEach((e)=>{

                if(e.strCategory == 'Chicken' || e.strCategory == 'Beef' || e.strCategory == 'Lamb' ||e.strCategory == 'Goat'||e.strCategory == 'Pork'){
                    offer = '20%'
                }
                else if(e.strCategory == 'Starter'){
                    offer = '100%'
                }
                else{
                    offer = '30%'
                }
                product += `<div class = 'inner-container'>
                            <h5 class = 'food'>#${e.idCategory}. ${e.strCategory}  </h5>
                            <h4> ${offer}offer </h4>
                            <img class='img' src = '${e.strCategoryThumb}'/>
                            <div class = 'para'>
                            <p class = 'note'>${e.strCategoryDescription}</p>
                            </div>
                            </div>`

            })
            productContainer.innerHTML = product;

        //////// Filter product
            
        let filter = document.getElementById('inputdata');

        filter.addEventListener('keyup',filterProduct);

        function filterProduct(){

            let filterValue = filter.value.toUpperCase();
            // console.log(filterValue);

            let item = productContainer.querySelectorAll('.inner-container')
            // console.log(item);
            item.forEach((a)=>{
                // console.log(a);
                let foodName = a.querySelector('.food');
                

                if(foodName.innerHTML.toUpperCase().indexOf(filterValue)>-1){
                    a.style.display = 'initial';
                }
                else{
                    a.style.display = 'none';
                }
            })

        }

        }
        function renderPagination(page){

            noOfPages = Math.ceil(data.categories.length / itemsPerPage);
            let pageNumber = document.getElementById('pg');
            pageNumber.classList.add = 'pagenum';
            // pageNumber.innerHTML = `Page &nbsp <span> ${page} </span> of ${noOfPages}`;

            let prevPage =document.getElementById('previous');
            let nextPage =document.getElementById('next');

            prevPage.style.display = "inline-block";
            nextPage.style.display = "inline-block";
            
            if(page == 1){
                 prevPage.style.display = 'none';
               
        
            }
            if(page == Math.ceil(data.categories.length / itemsPerPage)){
                nextPage.style.display = 'none';
            }

        }
        let currentPage = 1;
        renderData(currentPage);
        renderPagination(currentPage);
        
        document.getElementById('previous').addEventListener('click',function(){
            currentPage--;
            renderData(currentPage);
            renderPagination(currentPage);
        })

        document.getElementById('next').addEventListener('click',function(){
            currentPage++;
            renderData(currentPage);
            renderPagination(currentPage)
        });
        
}).catch((error)=>{
    console.log(error)
})