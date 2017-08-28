// Loads the department list into the dropdown on the contact form.
function departmentDropdown() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if(xhr.status === 200) {
      responseObject = JSON.parse(xhr.responseText);

      var newContent = '';
      newContent += '<option selected disabled>Select a Department</option>';
      for (var i = 0; i <  responseObject.length; i++) {
        var email = responseObject[i].email;
        var emailName = email.split('@')[0];
        var emailURI = email.split('@')[1];
        newContent += '<option value="' + emailName + '(at)' + emailURI + '">' + responseObject[i].department + '</option>';

      }
      document.getElementById('department').innerHTML = newContent;
    }
  };
  xhr.open('GET', '/api/contacts.json', true);
  xhr.send('null');
}

function departmentDropdownList() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if(xhr.status === 200) {
      responseObject = JSON.parse(xhr.responseText);

      var newContent = '';
      newContent += '<option selected disabled>Select a Department</option>';
      for (var i = 0; i <  responseObject.length; i++) {
        var dept = responseObject[i].department;
        var deptStrip = dept.replace("& ", "").replace(/\s/g, "_");
        newContent += '<option value="' + deptStrip + '">' + dept + '</option>';
      }
      document.getElementById('department').innerHTML = newContent;
    }
  };
  xhr.open('GET', '/api/contacts.json', true);
  xhr.send('null');
}

function departmentInfo() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if(xhr.status === 200) {
      responseObject = JSON.parse(xhr.responseText);

      var newContent = '';
      for (var i = 0; i <  responseObject.length; i++) {
        newContent += '<div id="' + responseObject[i].department.replace(/ /g,'') + 'info" class="hidden">'
        newContent += '<h4>' + responseObject[i].department + '</h4>';
        newContent += '<strong>Phone:</strong> ' + responseObject[i].phone + '<br />';
        // newContent += responseObject[i].hours;
        newContent += '<strong>Address:</strong> ' + responseObject[i].address;
        newContent += '</div>'
      }
      document.getElementById('departmentInfo').innerHTML = newContent;
    } else {
      document.getElementById('department').innerHTML = '<i class="fa fa-rocket" aria-hidden="true"></i> <h4>Houstonian, We have a problem</h4>';
    }
  };
  xhr.open('GET', '/api/contacts.json', true);
  xhr.send('null');
}

// Changes the email in the action of the for to send to correct department.
function changeActionEmail(){
  document.getElementById('department').onchange = function(){
    var formHandler = 'https://formspree.io/';
    var email = '"removeReplaceB4Use"/' + this.value.replace('(at)', '@'); // Comment for production
    // var email = this.value.replace('(at)', '@'); // Uncomment for production
    document.getElementById('contact').action = formHandler + email;
  };
}
// Shows department info when selected from contact form
function showDeptInfo(){
}

// Outputs a list of the Department emails with department name.
function departmentEmail() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if(xhr.status === 200) {
      responseObject = JSON.parse(xhr.responseText);

      var newContent = '';
      for (var i = 0; i <  responseObject.length; i++) {
        newContent += responseObject[i].department + ' - ' + responseObject[i].email + '<br />';
      }
      document.getElementById('departmentEmail').innerHTML = newContent;
    }
  };
  xhr.open('GET', '/api/contacts.json', true);
  xhr.send('null');
}

// Outputs department contacts list into console.
function contactLogs() {
  $(document).ready(function(){
      $.getJSON('/api/contacts.json', function (data) {
        var results = data;
        console.log(results)
      });
  });
}

// Outputs department emails.
function getEmail(){
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if(xhr.status == 200){
      responseObject = JSON.parse(xhr.responseText);
      var newContent = '';
      for (var i = 0; i < responseObject.length; i++) {
        newContent = responseObject[i].email;
      }
      document.getElementById('emailList').innerHTML = newContent;
    }
  };
  xhr.open('GET', '/api/contacts.json', true);
  xhr.send(null);
}

// Snippets

// newContent += '<option value="' + responseObject[i].department.toLowerCase().replace('& ', '').replace(/ /g,'_') + '">' + responseObject[i].department + '</option>';

// No use at this time
function emailSelect() {
  $(document).ready(function(){
      $.getJSON('/api/contacts.json', function (data) {
        var results = data;
        console.log(results);
      });
  });
}
