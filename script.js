function appendC() {
    let fname = document.querySelector('#fname');
    let lname = document.querySelector('#lname');
    var table = document.querySelector('#f');
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = fname.value + " " + lname.value;
    cell2.innerHTML = email.value;
    alert('Contact Added to List');
}

    var fname = document.getElementById('fname')
    var subject = document.getElementById('subject')
    var body = document.getElementById('body')
    var mobile = document.getElementById('mobile')
    var small_mobile = document.getElementById('small_mobile')
    function sendmail() {
        body.innerHTML = body.innerHTML + ' '
        window.location.href = 'mailto:shivtejmailbox@gmail.com?&subject=' + subject.value + "&body=" + small_mobile.value + body.value + mobile.value;
      }
      
      window.addEventListener('load', openMailApplication);