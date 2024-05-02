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
        leadName: name,
        leadEmail: email,
        leadNumber: number,
        leadCollegeName: collegename,
        leadPassedout: passedout,
        leadBranch: branch,
        leadCourse: course,
        leadProgram: program,
        leadHowDoYouKnow: howDoYouKnow,
        leadLandingSource: "skillcentral"
    };
   
    // API endpoint
    const apiUrl = "http://65.0.90.148:5377/content-manager/collection-types/application::lead.lead";
   
    // Bearer token
    const bearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MzM3YTRlYTZlNmFiYzAzYmRkNTJjYyIsImlhdCI6MTcxNDY0OTY4MCwiZXhwIjoxNzE3MjQxNjgwfQ.O8WdyoBP9EBHH_n9ZQFcvKr27DRMU5XnHOaJPjM0-xw";
   
    // Fetch options
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${bearerToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    };
   
    // Making the fetch request
    fetch(apiUrl, fetchOptions)
      .then(response => {
        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON from the response
      })
      .then(data => {
        console.log('Response:', data); // Do something with the response data
        // Optionally, you can reset the form after successful submission
        document.getElementById('myForm').reset();
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }