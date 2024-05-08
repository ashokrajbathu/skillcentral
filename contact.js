function submitForm() {
    const name = document.getElementById('form_name').value;
    const email = document.getElementById('form_email').value;
    const number = document.getElementById('form_number').value;
    const collegename = document.getElementById('form_college').value;
    const passedout = document.getElementById('form_passedoutyear').value;
    const branch = document.getElementById('form_branch').value;
    const course = document.getElementById('form_course').value;
    const program = document.getElementById('form_program').value;
    const howDoYouKnow = document.getElementById('form_howdoyouknow').value;
   
    const requestData = {
        leadFirstName: name,
        leadEmail: email,
        leadMobileNumber: number,
        leadCollegeName: collegename,
        leadPassedout: passedout,
        leadBranch: branch,
        leadCourse: course,
        leadProgram: program,
        leadHowDoYouKnow: howDoYouKnow,
        leadLandingSource: "skillcentral"
    };
   
    const apiUrl = "https://crmbackend.websoc.ai/content-manager/collection-types/application::lead.lead";
   
    const bearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MzM3YTRlYTZlNmFiYzAzYmRkNTJjYyIsImlhdCI6MTcxNDY0OTY4MCwiZXhwIjoxNzE3MjQxNjgwfQ.O8WdyoBP9EBHH_n9ZQFcvKr27DRMU5XnHOaJPjM0-xw";
   
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${bearerToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    };
   
    fetch(apiUrl, fetchOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); 
      })
      .then(data => {
        console.log('Response:', data);
        document.getElementById('contact-form').reset();
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
}

function validateEmail() {
  var email = document.getElementById("form_email").value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var emailInput = document.getElementById("form_email");
  var emailError = document.getElementById("email_error");

  if (emailRegex.test(email)) {
      emailInput.classList.remove("error");
      emailError.textContent = "";
      return true;
  } else {
      emailInput.classList.add("error");
      emailError.textContent = "Please enter a valid email";
      return false;
  }
}

function validateMobile() {
  var mobile = document.getElementById("form_number").value;
  var mobileRegex = /^[6-9]\d{9}$/;
  var mobileInput = document.getElementById("form_number");
  var mobileError = document.getElementById("mobile_error");

  if (mobileRegex.test(mobile)) {
      mobileInput.classList.remove("error");
      mobileError.textContent = "";
      return true;
  } else {
      mobileInput.classList.add("error");
      mobileError.textContent = "Please enter a valid mobile number";
      return false;
  }
}