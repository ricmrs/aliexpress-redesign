//abrir window
//abrir browser
//achar a estrela

const star = window.document.querySelectorAll('.main-star');

for(i = 0; i < star.length; i++){
    star[i].style = "background: url('https://api.iconify.design/codicon/star-full.svg?color=%23c4c4c4&height=14') no-repeat center center / contain;";
    star[i].addEventListener('click', a =>{
        if(a.target.attributes.style.textContent == "background: rgba(0, 0, 0, 0) url(\"https://api.iconify.design/codicon/star-full.svg?color=%23c4c4c4&height=14\") no-repeat scroll center center / contain;"){
            a.target.style = "background: url('https://api.iconify.design/codicon/star-full.svg?color=%23F03D3F&height=14') no-repeat center center / contain;";
        }else{
            a.target.style = "background: url('https://api.iconify.design/codicon/star-full.svg?color=%23c4c4c4&height=14') no-repeat center center / contain;";
        }
    })    
}

//const estrela = window.document.querySelectorAll('.main-star.-teste');

//for(i=0; i < estrela.length; i++){
  //  estrela[i].style = "background: url('https://api.iconify.design/codicon/star-full.svg?color=%23c4c4c4&height=14') no-repeat center center / contain;";
    //console.log(estrela[i].style);
    //estrela[i].addEventListener('click', a => {
      //  console.log(a);
       // console.log(a.target.attributes.style.textContent);
        //if(a.target.attributes.style.textContent == "background: rgba(0, 0, 0, 0) url(\"https://api.iconify.design/codicon/star-full.svg?color=%23c4c4c4&height=14\") no-repeat scroll center center / contain;"){
          //  a.target.style = "background: url('https://api.iconify.design/codicon/star-full.svg?color=%23F03D3F&height=14') no-repeat center center / contain;";

//        }else{
  //          a.target.style = "background: url('https://api.iconify.design/codicon/star-full.svg?color=%23c4c4c4&height=14') no-repeat center center / contain;";

//        }
  //  })
//};

