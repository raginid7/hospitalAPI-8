# hospitalAPI
Backend Skill Test 3

#Tech Used:
node-js and mongoDb

#Purpose:
An API for the doctors of a Hospital which has been allocated by the
govt for testing and quarantine + well being of COVID-19 patients

#Steps to use the API:

1. Start the api and check if it is working by calling "http://localhost:8005/api/v1/home". (GET REQUEST)
2. You will recieve a Welcome message as response.
3.  a.To register the doctor use the url "http://localhost:8005/api/v1/doctor/register" (POST REQUEST).
   b.Mandatory fields are: name, username, password and confirm_password for succcessful posting the data.
   c.Whether registering a new doctor or an existing one you will receive the response accordingly.

4. After registring the doctor, you can login the doctor to authenicate and generate a token for authorization.
   a. use the url: "http://localhost:8005/api/v1/doctor/login" (POST REQUEST)
   b. Mandatory fields are : username and password ..
   c. the generated token will be used to authenicate and register the patients and reports by the logged in doctor.

5. After registering a doctor and successfully authorizing the doctor, you can register a patient using
   a. "http://localhost:8005/api/v1/patients/register" (POST REQUEST)
   b. Mandatory fields are : name , phoneNumber, confirm_phoneNumber and (initial_status) status
   c. whether registering a new patient or an existing one you will receive the response accordingly.

6. Then in order to create a report for a patient using his/her id by
   a. using the url :"http://localhost:8005/api/v1/doctor/patients/:id/create_report" (POST REQUEST)
   b. give the status and date fields in the body and in the header the authentication token generated after the doctor logged in.

7.a.If you have created report for a patient, you can look all his/her reports using
  b.use the url :"http://localhost:8005/api/v1/home/patients/:id/all_reports" (GET REQUEST).
  c.You will get the desired response with all the reports of the user with the provided id when and who created with what status.

8. a.At any moment if we need to get all reports of all patients with a specific status filtered we can also do so using
   b. "http://localhost:8005/api/v1/home/reports/:status" (GET REQUEST).
   c.You will get all reports of all patients which the specified status at present with the hospital.
