/*!
* Start Bootstrap - Agency v7.0.5 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

var pw = "daily"

function inputPW() {
    swal({
        title: "Warning",
        content: "input",
        text: "Input Password!",
        button: {
            text: "Submit",
        },
    }).then((result) => {
        if (result == pw) {
            swal({
                title: "Successed",
                text: "Access Complete",
                icon: "success",
            }).then(() => {
                document.getElementsByClassName('hid')[0].className = "";
            });
        } else {
            swal({
                title: "Failed",
                text: "Wrong Password",
                icon: "error",
            }).then(() => {
                setTimeout(()=>{inputPW();}, 100);
            });
        }
    })
}