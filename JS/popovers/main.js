$('.popover[data-trigger="focus"]').on('focus blur', function(e) {
    let title = $(this).attr('title')
    let content = $(this).attr('data-content')
    if( e.type == 'focus'){ 
        if($(this).attr('data-placement') == 'bottom') {
            $(this).parent().prepend(`<div class="popover-modal bottom"><div class="title"><h2>${title}</h2></div><div class="content"><p>${content}</P></div></div>`)
        }
        else if($(this).attr('data-placement') == 'left') {
            $(this).parent().prepend(`<div class="popover-modal left"><div class="title"><h2>${title}</h2></div><div class="content"><p>${content}</P></div></div>`)
        }
        else if($(this).attr('data-placement') == 'top') {
            $(this).parent().prepend(`<div class="popover-modal top"><div class="title"><h2>${title}</h2></div><div class="content"><p>${content}</P></div></div>`)
        }
        else {
            $(this).parent().prepend(`<div class="popover-modal right"><div class="title"><h2>${title}</h2></div><div class="content"><p>${content}</P></div></div>`)
        }
    }
    else{
        $(this).parent().children('.popover-modal').remove()
    }
})

let a = 0;

$('.popover[data-trigger="click"]').on('click', function(e) {
    a++;
    let title = $(this).attr('title')
    let content = $(this).attr('data-content')
    if(a%2 !== 0){ 
        if($(this).attr('data-placement') == 'bottom') {
            $(this).parent().prepend(`<div class="popover-modal bottom"><div class="title"><h2>${title}</h2></div><div class="content"><p>${content}</P></div></div>`)
        }
        else if($(this).attr('data-placement') == 'left') {
            $(this).parent().prepend(`<div class="popover-modal left"><div class="title"><h2>${title}</h2></div><div class="content"><p>${content}</P></div></div>`)
        }
        else if($(this).attr('data-placement') == 'top') {
            $(this).parent().prepend(`<div class="popover-modal top"><div class="title"><h2>${title}</h2></div><div class="content"><p>${content}</P></div></div>`)
        }
        else {
            $(this).parent().prepend(`<div class="popover-modal right"><div class="title"><h2>${title}</h2></div><div class="content"><p>${content}</P></div></div>`)
        }
    }
    else {
        $(this).parent().children('.popover-modal').remove()
    }
})

$('.popover[data-trigger="hover"]').on('mouseover', function(e){
    let title = $(this).attr('title')
    let content = $(this).attr('data-content')
    if($(this).attr('data-placement') == 'bottom') {
        $(this).parent().prepend(`<div class="popover-modal bottom"><div class="title"><h2>${title}</h2></div><div class="content"><p>${content}</P></div></div>`)
    }
    else if($(this).attr('data-placement') == 'left') {
        $(this).parent().prepend(`<div class="popover-modal left"><div class="title"><h2>${title}</h2></div><div class="content"><p>${content}</P></div></div>`)
    }
    else if($(this).attr('data-placement') == 'top') {
        $(this).parent().prepend(`<div class="popover-modal top"><div class="title"><h2>${title}</h2></div><div class="content"><p>${content}</P></div></div>`)
    }
    else {
        $(this).parent().prepend(`<div class="popover-modal right"><div class="title"><h2>${title}</h2></div><div class="content"><p>${content}</P></div></div>`)
    }
}).on('mouseleave', function(e){
    $(this).parent().children('.popover-modal').remove()
})

