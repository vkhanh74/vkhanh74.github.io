
//Student object constructor
function Student(name,birthyear,email,phone) {
    this.name = name;
    this.birthyear = birthyear;
    this.email = email;
    this.phone = phone
}

//Orignal students array
students = [
    new Student('Vũ Văn Đại',1992,'leonelmessi@gmail.com','0878151184'),
    new Student('Trần Đức Nghĩa',1989,'marcoreus@gmail.com','0878151184'),
    new Student('Lê Văn Long',1991,'edenharzard@gmail.com','0544289411'),
    new Student('Đỗ Văn Đạt',1999,'bernaldosilva@gmail.com','0123456789'),
    new Student('Hoàng Thị Thu',2002,'nguyenquanghai@gmail.com','0359412411'),
    new Student('Nguyễn Đức Cảnh',1998,'ansufati@gmail.com','0359412411')
] 

//Render students
function renderStudent(arr) {
    let content = '';
    for(let i=0; i< arr.length; i++) {
        content += 
            `<tr>
                <td><span>${arr[i].name}</span></td>
                <td><span>${arr[i].birthyear}</span></td>
                <td><span>${arr[i].email}</span></td>
                <td><span>${arr[i].phone}</span></td>
                <td>
                    <a href="javascript:void(0)" class="function-icon edit")"><i class="far fa-edit"></i>Chỉnh sửa</a>
                    <a href="javascript:void(0)" class="function-icon remove" onclick="removeStudent(${i}, this)"><i class="far fa-edit"></i>Xóa</a>
                </td>
            </tr>
            `
    }
    $('tbody').html(content)
}

//Remove student
function removeStudent(index, deleteBtn) {
    if (confirm("Bạn có chắc chắn xóa người dùng này?")) {
        students.splice(index, 1);
        renderStudent(students);
    }
}

//Search column
function search(element,column) {
    $(element).on('keyup', function(){
        searchStudent = $(this).val()
        let result = students.filter(function(student){ 
            return student[column].toLowerCase().includes(searchStudent.toLowerCase())
        })
        renderStudent(result);
    })
}

//Sort column
function sort(element,column) {
    let a = 0;
    $(element).on('click', function(){
        a++
        if(a%2 !== 0) {
            students.sort(function(a, b){
                if (a[column] < b[column]) {
                    return -1;
                } 
        
                if (a[column] > b[column]) {
                    return 1;
                }
                return 0;
            });
            renderStudent(students);
        }
        else {
            students.sort(function(a, b){
                if (a[column] < b[column]) {
                    return 1;
                } 
        
                if (a[column] > b[column]) {
                    return -1;
                }
                return 0;
            });
            renderStudent(students);
        }
    })
}

$('#add-new').on('click', function(){
    event.preventDefault()
    $(this).hide()
    $('tbody').append(
        `<tr class="new-student-row">
            <td><input type="text" id="new-student-name" placeholder="Tên học viên"></td>
            <td><input type="text" id="new-student-birthyear" placeholder="Năm sinh"></td>
            <td><input type="text" id="new-student-email" placeholder="Email"></td>
            <td><input type="text" id="new-student-phone" placeholder="Số điện thoại"></td>
            <td>
                <a href="javascript:void(0) id="cancel-create" class="danger">Hủy</a>
                <a href="javascript:void(0)" id="confirm-create" class="success">Đồng ý</a>
            </td>
        </tr>`
    )
})

$(function () {
    renderStudent(students);
    search()
    sort('#full-name','name')
    sort('#birth-year','birthyear')
    sort('#email','email')
    sort('#phone','phone')
    search('#name-search','name')
    search('#email-search','email')
    search('#phone-search','phone')
})

    
