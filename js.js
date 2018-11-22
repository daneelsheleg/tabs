window.onload = function () {
   
    var tabs = document.querySelector('.tabs');
    tabs.addEventListener('click', Tab);
    function Tab(event){
        if (event.target.classList == 'tablink'){
            var data_tab = event.target.getAttribute('data-tab');
           var text = document.getElementsByClassName('text');
        
            for (i = 0; i < text.length; i++){
                if (data_tab == i){
                    text[i].classList.add('active');
                   
                }
                else{
                    text[i].classList.remove('active');
                }
            }
        }
    }
}

