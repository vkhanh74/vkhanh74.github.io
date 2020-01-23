function sortable() {
    $("ul.list-items").sortable({
        connectWith: ".list-items",
        cancel: '.unmoveable-item',
    });
    $("#sortable1, #sortable2, #sortable3").disableSelection();
}

function addItem() {
    $('.list-add').on('submit', function (e) {
        e.preventDefault()
        let dataFor = $(this).attr('data-for')
        let inputType = $(this).children('input').val();
        $(this).prev().append(`<li class="item">${inputType}<span class="remove"><i class="fas fa-trash"></i></span></li>`);
        $(this).children('input').val('')
        removeItem()
    })
}

function removeItem() {
    $('.remove').on('click', function (e) {
        let confirmNotify = confirm("Are you sure to delete this task!")
        if (confirmNotify) {
            $(this).parent().remove()
        }
    })
}

$(function () {
    sortable()
    addItem()
    removeItem()
});