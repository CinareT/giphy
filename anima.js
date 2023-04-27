var counter=0
$('.add').on('click',function()
{
    $('h1').css({
        color: "red",
        backgroundColor: "black",
        transition: "all 1s"
    })
    var text=document.querySelector('input');
    var img=document.createElement('img');
    var div=document.querySelector('.box');
    var remove=document.querySelector(`.remove`)
    text=text.value;
    var counter=0;
    $.ajax({
        method:"GET",
        url:`https://api.giphy.com/v1/gifs/random?api_key=4YEFJdiRWAvSIgJBfWUljKjNGWPS7Xvu&tag=${text}&rating=g`
    }).then(function(response)
    {
      text=text.value;
       img.setAttribute('src',response.data.images.fixed_height.url);
       
       img.style.width='200px';
       img.style.height='200px';
       img.style.padding='10px'
       div.append(img);
       
      
    }).catch(function(err)
    {
      console.log('xeta '+err)
    })

    
})


$('.remove').on('click', function(){
    $(".box").empty();
})
