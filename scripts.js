const menuToggle = document.querySelector('.menuToggle');


menuToggle.addEventListener('click',function(e){
    e.preventDefault();

    document.querySelector('.navbar .nav-items').classList.toggle('active');
    console.log('hi')
});