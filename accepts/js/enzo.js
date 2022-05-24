document.querySelectorAll('.cont-triggers_item').forEach((item)=>{
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '')

        document.querySelectorAll('.cont-triggers_item').forEach((child) => child.classList.remove('cont-triggers_item--active')
        );
        document.querySelectorAll('.content-content_item').forEach((child) => child.classList.remove('content-content_item--active')
        );

        item.classList.add('cont-triggers_item--active');
        document.getElementById(id).classList.add('content-content_item--active');
    });
});