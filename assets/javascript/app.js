var config = {
    apiKey: "AIzaSyB9GTc9gYfFFO0EuNHQJy9QAKzgYNMv_3I",
    authDomain: "emptracker-a4659.firebaseapp.com",
    databaseURL: "https://emptracker-a4659.firebaseio.com",
    projectId: "emptracker-a4659",
    storageBucket: "emptracker-a4659.appspot.com",
    messagingSenderId: "837593961377"
};

firebase.initializeApp(config);

const database = firebase.database();
const ref = database.ref();

// Initial Values
var name = "";
var role = "";
var rate = 0;
var start = "";


$('add-employee-btn').on('click', function () {
    let EmpName = $("#EmpName").val();
    let EmpRole = $("#EmpRole").val();
    let EmpDate = $("#EmpDate").val();
    let EmpRate = $("#EmpRate").val();



    $("#emp-table-body").append(`
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    `)
});