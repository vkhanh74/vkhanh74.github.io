
//Student constructor function
function Student(name,birthyear,email,phone) {
    this.name = name;
    this.birthyear = birthyear;
    this.email = email;
    this.phone = phone;
    this.render = () => `
    <tr>
        <td><span>${this.name}</span></td>
        <td><span>${this.birthyear}</span></td>
        <td><span>${this.email}</span></td>
        <td><span>${this.phone}</span></td>
        <td>
            <a href="javascript:void(0)" class="function-icon edit"><i class="far fa-edit"></i>Chỉnh sửa</a>
            <a href="javascript:void(0)" class="function-icon remove" onclick="removeStudent()"><i class="far fa-edit"></i>Xóa</a>
        </td>
    </tr>`
}


let requestData = []

$.ajax({
  url: "https://fake-rest-api-nodejs.herokuapp.com/users",
}).done(function(data) {
  renderStudent(data);
});

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
        content += `
        <tr>
            <td><span>${arr[i].name}</span></td>
            <td><span>${arr[i].birthday}</span></td>
            <td><span>${arr[i].email}</span></td>
            <td><span>${arr[i].phone}</span></td>
            <td>
                <a href="javascript:void(0)" class="function-icon edit"><i class="far fa-edit"></i>Chỉnh sửa</a>
                <a href="javascript:void(0)" class="function-icon remove" onclick="removeStudent()"><i class="far fa-edit"></i>Xóa</a>
            </td>
        </tr>`
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
function search() {
    $('#search').on('keyup', function(){
        let searchStudent = $(this).val()
        let toLower = searchStudent.toLowerCase()
        let result = students.filter(function(student){ 
            return student.name.toLowerCase().includes(toLower) || student.birthyear.toString().includes(toLower) || student.email.toLowerCase().includes(toLower) || student.phone.toLowerCase().includes(toLower)
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
            sortFunc()
            renderStudent(students);
        }
        else {
            sortFunc(-1)
            renderStudent(students);
        }
    })

    function sortFunc(reverse = 1) {
        students.sort(function(a, b){
            if (a[column] < b[column]) {
                return -1*reverse;
            } 
            if (a[column] > b[column]) {
                return 1*reverse;
            }
            return 0;
        });
    }
}

//Create student
function createStudent() {
    $('#student-modal').hide()
    $('#create-student').on('click', function(event) {
        event.preventDefault();
        $('#student-modal').show()
        $('#close-modal').on('click', function(event) {
            event.preventDefault();
            $('#student-modal').hide()
        });
    });

}

$(function () {
    renderStudent(students);
    search()
    sort('#full-name','name')
    sort('#birth-year','birthyear')
    sort('#email','email')
    sort('#phone','phone')
    createStudent()
})

    
