// function showData() {
//     let showName = document.getElementById('input-name').value;
//     let showEmail = document.getElementById('input-email').value;
//     let showPhone = document.getElementById('input-phone').value;
//     let showSubject = document.getElementById('input-subject').value;
//     let showMessage = document.getElementById('input-message').value;

//     console.log(showName);
//     console.log(showEmail);
//     console.log(showPhone);

//     if(showName =='') {
//         return alert('Nama Harus diisi')
//     }
//     if(showEmail =='') {
//         return alert('Email harus diisi')
//     }
//     if(showPhone =='') {
//         return alert('Telefon Harus diisi')
//     }
//     if(showSubject =='') {
//         return alert('Subject Harus diisi')
//     }

//     if ( 
//         showName !=''&&
//         showPhone !=''&&
//         showSubject !=''&&
//         showMessage !=''
//     ) { 
//         return alert(" Data berhasil di input")
//     }

//     let emailReceiver = 'spotifyrizko@gmail.com'

//     let a = document.createElement('a'); 
//     a.href = `mailto:${emailReceiver}?subject:${showSubject}&body= Hello, my name is ${showName}, ${showMessage}`
//     // %0D%0A
//     // https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${subject}&body=${message}
//     a.click()
// }

function ShowData() {
    console.log("hello ");
    const name = document.getElementById("input-name").value;
    const email = document.getElementById("input-email").value;
    const phone = document.getElementById("input-phone").value;
    const subject = document.getElementById("input-subject").value;
    const message = document.getElementById("input-message").value;
  
    const emailReceiver = "spotifyruizko@gmail.com";
    const msg = `Hello, \nMy name is ${name} \nHandphone: ${phone} \n\n${message} \n\n\n`;
  
    if (
      name !== "" &&
      email !== "" &&
      phone !== "" &&
      subject !== "" &&
      message !== ""
    ) {
      const a = document.createElement("a");
      a.href = `mailto: ${emailReceiver}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(msg)}`;
      a.click();
    } else {
      alert("Tolong melengkapi form.");
    }
  }