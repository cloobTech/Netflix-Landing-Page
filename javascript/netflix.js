// myfunc = function (e) {
//     let active = document.querySelectorAll(".view").forEach(view =>{
//         view.classList.remove("active");
//         e.target.parentNode.classList.add("active");
//         console.log(this.classList)
     

//     })

// }

var c = console.log.bind(document);

newFunc = function(e){
    let active = document.querySelectorAll(".view");
    for (let index = 0; index < active.length; index++) {
        const view = active[index];
        view.classList.remove("active");
        e.target.parentNode.classList.add("active"); 
        if (e.target.parentNode === active[index]){
            function rowCheck (e){
                let rowImage = document.querySelectorAll(".row-image");
                for (let i = 0; i < rowImage.length; i++){
                    let rowImageDisplay = rowImage[i];
                    rowImageDisplay.classList.remove("flex");
                    
                    
                }
                rowImage[index].classList.add("flex")
            
            }
        
      rowCheck()  
    }
    
    }

}


let row = document.querySelector(".row-click");
row.addEventListener("click", newFunc);





