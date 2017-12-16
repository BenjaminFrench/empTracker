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


name = $("#EmpName").val().trim();
role = $("#EmpRole").val().trim();
rate = $("#EmpRate").val().trim();
start = $("#EmpDate").val().trim();

ref.push({
    name,
    role,
    rate,
    start
});

ref.on("child_added", function (snapshot) {
    // Log everything that's coming out of snapshot
    console.log(snapshot.val());
    console.log(snapshot.val().name);
    console.log(snapshot.val().role);
    console.log(snapshot.val().start);
    console.log(snapshot.val().rate);
    // Change the HTML to reflect
    let totalBilled = 0;
    let startDate = 0;
    let months = currentDate - start;
    let print = `
      <tr>
            <td scope="row">${name}</td>
            <td>${role}</td>
            <td>${start}</td>
            <td>${}</td>
            <td>${rate}</td>
            <td>${totalBilled}</td>
        </tr>`;
    $('emp-table-body').append(print);
    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});

$('add-employee-btn').on('click', function () {
    let EmpName = $("#EmpName").val();
    let EmpRole = $("#EmpRole").val();
    let EmpDate = $("#EmpDate").val();
    let EmpRate = $("#EmpRate").val();


    // $("#emp-table-body").append(`
    // <tr>
    //     <td></td>
    //     <td></td>
    //     <td></td>
    //     <td></td>
    //     <td></td>
    //     <td></td>
    // </tr>
    // `)
});