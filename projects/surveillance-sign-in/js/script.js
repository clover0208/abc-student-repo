window.onload = function () {
  document.getElementById("password1").onchange = validatePassword;
  document.getElementById("password2").onchange = validatePassword;
}
function validatePassword(){
  var pass2=document.getElementById("password2").value;
  var pass1=document.getElementById("password1").value;
  if(pass1!=pass2)
    document.getElementById("password2").setCustomValidity("Passwords Don't Match");
  else
    document.getElementById("password2").setCustomValidity('');
    //empty string means no validation error
}


//store the value in json
let movies = [];
        // example {id:1592304983049, title: 'Deadpool', year: 2015}
        const addMovie = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let movie = {
                id: Date.now(),
                title: document.getElementById('FirstName').value,
                year: document.getElementById('LastName').value
            }
            movies.push(movie);
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

            //for display purposes only
            console.warn('added' , {movies} );
            let pre = document.querySelector('#msg pre');
            pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);

            //saving to localStorage
            localStorage.setItem('MyMovieList', JSON.stringify(movies) );
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', addMovie);
        });
