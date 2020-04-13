var allData = [];
var httpReq = new XMLHttpRequest();
    httpReq.open("GET","https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR04fjL-ELMJJuInlc-IRkrALjq7X5T_xywKIk654Mk6H2iIcI7oSF1gLkU" ) 
    httpReq.send();
    httpReq.onreadystatechange = function()
    {
        if(httpReq.readyState == 4 && httpReq.status == 200)
        {
    
            allData =  JSON.parse( httpReq.response).results; 
            displayData();
        }
    }
    


function displayData()
{


    console.log(allData);


    var temp = ``;

    for(var i = 0 ; i <allData.length ; i++)
    {
        temp +=`    <div class="col-lg-4 py-2">
        <div class="post">
          <div class="test">
            <img class="img-fluid" src="https://image.tmdb.org/t/p/w500${allData[i].poster_path}" alt="">
            <div class="layer">
              <h3>${allData[i].title}</h3>
              <p>${allData[i].overview}</p>
              <p>Rate:${allData[i].vote_average}</p>
              <p>${allData[i].release_date}</p>
            </div>
          </div>
        </div>
      </div>
        `;
    }

    document.getElementById("rowData").innerHTML = temp;
}



$("#toggleBtn").click(function () {$(".side-menu").animate({left:'0px'},1000 )
$ ("#toggleBtn").hide(1000)
$ ("#exitBtn").show(1000)
$ (".list-menu").show(1500)
  
    
})



$("#exitBtn").click(function () {$(".side-menu").animate({left:'-250px'},1000 )
$ ("#exitBtn").hide(1000)
$ ("#toggleBtn").show(1000)
$ (".list-menu").hide(1000)
    
})



function validateName(userName) {
  var userNameRegex = /^[A-Z][a-z]{3,8}/;
  if (userNameRegex.test(userName) == false) {
    document.getElementById("btnSub").disabled ="true";
      
  } else {

      document.getElementById("btnSub").removeAttribute("disabled") ="flase";
  }
}



function validateMail(userMail) {
  var userMailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (userMailRegex.test(userMail) == false) {
    document.getElementById("btnSub").disabled ="true";
      
  } else {

      document.getElementById("btnSub").removeAttribute("disabled") ="flase";
  }
}


function validatePhone(userPhone) {
  var userPhoneRegex = /^(002)?01[0125][0-9]{8}$/;
  if (userPhoneRegex.test(userPhone) == false) {
    document.getElementById("btnSub").disabled ="true";
      
  } else {

      document.getElementById("btnSub").removeAttribute("disabled") ="flase";
  }
}

function validateAge(userAge) {
  var userAgeRegex = /([1-7][0-9]|80)/;
  if (userAgeRegex.test(userAge) == false) {
    document.getElementById("btnSub").disabled ="true";
      
  } else {

      document.getElementById("btnSub").removeAttribute("disabled") ="flase";
  }
}






function validatePass(userPass) {
  var userPassRegex =/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/ ;
  if (userPassRegex.test(userPass) == false) {
    document.getElementById("btnSub").disabled ="true";
      
  } else {

      document.getElementById("btnSub").removeAttribute("disabled") ="flase";
  }
}



