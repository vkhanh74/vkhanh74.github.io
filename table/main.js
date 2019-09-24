$(document).ready(function () {

    let tBody = $('tbody')

    //Orignal students array
    students = [
        {name: 'Nguyễn Văn C', birthyear: '1992', email: 'leonelmessi@gmail.com', phone: '0878151184'},
        {name: 'Nguyễn Văn D', birthyear: '1989', email: 'marcoreus@gmail.com', phone: '0841051342'},
        {name: 'Nguyễn Văn B', birthyear: '1991', email: 'edenharzard@gmail.com', phone: '0544289411'},
        {name: 'Nguyễn Văn A', birthyear: '1999', email: 'bernaldosilva@gmail.com', phone: '0123456789'},
        {name: 'Nguyễn Văn F', birthyear: '2002', email: 'nguyenquanghai@gmail.com', phone: '0359412411'},
        {name: 'Nguyễn Văn E', birthyear: '1998', email: 'ansufati@gmail.com', phone: '0395181312'},
        
    ]
    
    //Clone orignal array
    studentsClone = [...students]

    //Render default student list
    renderStudents(students)

    //Sort student list
    $('select').on('change', function (e) {
        var optionSelected = $("option:selected", this);
        var valueSelected = this.value;
        console.log(valueSelected)
        if(valueSelected == 'name-sort') {
            event.preventDefault()
            let newArr = studentsClone.sort(function(a,b) {
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return a.name - b.name;
            })
            tBody.empty();
            renderStudents(newArr)
        }
        else if(valueSelected == 'birthyear-sort') {
            event.preventDefault()
            let newArr = studentsClone.sort(function(a,b) {
                return a.birthyear - b.birthyear;
            })
            tBody.empty();
            renderStudents(newArr)
        }
        else if(valueSelected == 'phone-sort') {
            event.preventDefault()
            let newArr = studentsClone.sort(function(a,b) {
                return a.phone - b.phone;
            })
            tBody.empty();
            renderStudents(newArr)
        }
        else if(valueSelected == 'email-sort') {
            event.preventDefault()
            let newArr = studentsClone.sort(function(a,b) {
                if(a.email < b.email) { return -1; }
                if(a.email > b.email) { return 1; }
                return a.email - b.email;
            })
            tBody.empty();
            renderStudents(newArr)
        }
        else {
            event.preventDefault()
            tBody.empty();
            renderStudents(students)
        }
    });

    //Render a student 
    function renderStudents(arrName) {
        $.each(arrName, (index, value) => {
            tBody.append(
                `<tr>
                    <td>${value.name}</td>
                    <td>${value.birthyear}</td>
                    <td>${value.email}</td>
                    <td>${value.phone}</td>
                    <td>
                        <a href="#" class="function-icon edit"><i class="far fa-edit"></i>Chỉnh sửa</a>
                        <a href="#" class="function-icon remove"><i class="far fa-edit"></i>Xóa</a>
                    </td>
                </tr>`
            )
        })
    }

    //Remove funtion

    let removeBtn = $('.function-icon.remove')
    let confirmBox = $('#confirm-box')
    let acceptBtn = $('#accept')
    let cancelBtn = $('#cancel')

   
    removeBtn.on('click', () => {
        event.preventDefault();
        confirmBox.addClass('show')
        // Confirm
        acceptBtn.on('click', () => {
            event.preventDefault();
            confirmBox.fadeOut('50', () => {
                confirmBox.removeClass('show').removeAttr('style')
                $(this).parent().parent().remove();
            })
        })
    })
    
    //Close confirm box
    cancelBtn.on('click', function(){
        event.preventDefault();
        confirmBox.fadeOut('50', function(){
            confirmBox.removeClass('show').removeAttr('style')
        })
    })

});