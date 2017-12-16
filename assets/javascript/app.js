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
var EmpName = "";
var EmpRole = "";
var EmpRate = 0;
var EmpDate = "";


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
    let currentDate = 0;
    let months = currentDate - startDate;
    let print = `
      <tr>
            <td scope="row">${EmpName}</td>
            <td>${EmpRole}</td>
            <td>${EmpDate}</td>
            <td>${months}</td>
            <td>${EmpRate}</td>
            <td>${totalBilled}</td>
        </tr>`;
    $('#emp-table-body').append(print);
    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});

$('#add-employee-btn').on('click', function (event) {
    event.preventDefault();

    EmpName = $("#EmpName").val().trim();
    EmpRole = $("#EmpRole").val().trim();
    EmpDate = $("#EmpDate").val().trim();
    EmpRate = $("#EmpRate").val().trim();

    ref.push({
        EmpName,
        EmpRole,
        EmpDate,
        EmpRate
    });
});