$(document).ready(function () {

    let tBody = $('tbody')

    function Student(name,birthyear,email,phone) {
        this.name = name;
        this.birthyear = birthyear;
        this.email = email;
        this.phone = phone;
        getIndex = function(){
            console.log($(this).index())
        }
    }

    //Orignal students array
    students = [
        new Student('Nguyễn Văn C',1992,'leonelmessi@gmail.com','0878151184'),
        new Student('Nguyễn Văn D',1989,'marcoreus@gmail.com','0878151184'),
        new Student('Nguyễn Văn B',1991,'edenharzard@gmail.com','0544289411'),
        new Student('Nguyễn Văn A',1999,'bernaldosilva@gmail.com','0123456789'),
        new Student('Nguyễn Văn F',2002,'nguyenquanghai@gmail.com','0359412411'),
        new Student('Nguyễn Văn E',1998,'ansufati@gmail.com','0359412411'),  
    ] 
    
    //Clone orignal array
    studentsClone = [...students]

    //Render default student list
    renderStudents(students)

    //Sort student list
    $('select').on('change', function (e) {
        e.preventDefault()
        var optionSelected = $("option:selected", this);
        var valueSelected = this.value;
        console.log(valueSelected)
        if(valueSelected == 'name-sort') {
            let newArr = studentsClone.sort(function(a,b) {
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return a.name - b.name;
            })
            tBody.empty();
            renderStudents(newArr)
        }
        else if(valueSelected == 'birthyear-sort') {
            let newArr = studentsClone.sort(function(a,b) {
                return a.birthyear - b.birthyear;
            })
            tBody.empty();
            renderStudents(newArr)
        }
        else if(valueSelected == 'phone-sort') {
            let newArr = studentsClone.sort(function(a,b) {
                return a.phone - b.phone;
            })
            tBody.empty();
            renderStudents(newArr)
        }
        else if(valueSelected == 'email-sort') {
            let newArr = studentsClone.sort(function(a,b) {
                if(a.email < b.email) { return -1; }
                if(a.email > b.email) { return 1; }
                return a.email - b.email;
            })
            tBody.empty();
            renderStudents(newArr)
        }
        else {
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

        //Remove funtion
        let removeBtn = $('.function-icon.remove')
        let confirmBox = $('#confirm-box')
        let acceptBtn = $('#accept')
        let cancelBtn = $('#cancel')
    
        removeBtn.on('click', function() {
            event.preventDefault();
            confirmBox.addClass('show')
            //Confirm delete user
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
    }
});