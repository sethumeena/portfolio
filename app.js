const navMenu = document.querySelector('.nav-menu');
const toggleMenu = document.querySelector('.nav-toggle');
const closeMenu = document.querySelector('.nav-close');


toggleMenu.addEventListener('click', ()=>{
  navMenu.classList.toggle('show')
});

closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
  });

  const navLink = document.querySelectorAll('.nav-link');

  navLink.forEach(link =>{
      link.addEventListener('click',()=>{
          navMenu.classList.remove('show');
      })
  })

  const sections = document.querySelectorAll('section[id]');
  

  window.addEventListener('scroll', ()=>{
    scrollActive();
  },false);

  function scrollActive(){
    const scrollY = window.pageYOffset;

     sections.forEach(section =>{
  
         const sectionHeight = section.offsetHeight;
         const sectionTop = section.offsetTop - 50 ;

         const sectionId = section.getAttribute('id');
         if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight){
                 document.querySelector('.nav-menu a[href*=' + sectionId +']').classList.add('active');
                 
         }else{
           document.querySelector('.nav-menu a[href*=' + sectionId +']').classList.remove('active');
      


         }
     })
  }


  window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      status.classList.add('success');
      status.innerHTML = "Thank you! Message sent successfully!!";
    }

    function error() {
      status.classList.add('error');

      status.innerHTML = "Oops! There was a problem. Try again";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
  