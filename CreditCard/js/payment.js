

var data = []; // array
// 1) FORM HANDELLING
var selectedRow = null;
// 1.1 ) form submission 
const onFormSubmit = () => {


    if (validate()) {
     let formData = readFormData();
  
    if (selectedRow == null) {
    insertNewRecord(formData);
     restForm();
    } else updateRecord(formData);
 } else{
     console.log("validation failed");
    }
 };
 
 // 1.2) validation of data
 const  validate = () =>  {
 
    
     let isValid = true;
      //cardNumber validation - if empty it will show a warning msg 
     if (document.getElementById("cardNumber").value === "") {
        
         isValid = false;
         document.getElementById("cardNumberValidationError").classList.remove("hide");
     }
 
     //cardNumber validation - if not empty it will hide the warning msg 
     else { 
         isValid = true; 
         if(
             !document.getElementById("cardNumberValidationError").classList.contains("hide")
         ) {
             document.getElementById("cardNumberValidationError").classList.add("hide");
         }
     }
 
      //Expirattion validation
     if (document.getElementById("Expirattion").value === "") {
        
         isValid = false;
         document.getElementById("ExpirattionValidationError").classList.remove("hide");
     }
       //Expirattion validation - if not empty it will hide the warning msg 
       else { 
         isValid = true; 
         if(
             !document.getElementById("ExpirattionValidationError").classList.contains("hide")
         ) {
             document.getElementById("ExpirattionValidationError").classList.add("hide");
         }
     }
 
     //CV validation
     if (document.getElementById("CV").value === "") {
        
             isValid = false;
             document.getElementById("CVValidationError").classList.remove("hide");
     }
    
     //CV validation - if not empty it will hide the warning msg 
     else { 
         isValid = true; 
         if(
             !document.getElementById("CVValidationError").classList.contains("hide")
         ) {
             document.getElementById("CVValidationError").classList.add("hide");
         }
     }
     //cardowner validation
     if (document.getElementById("cardowner").value === "") {
        
              isValid = false;
              document.getElementById("cardownerValidationError").classList.remove("hide");
 }
  //cardowner validation - if not empty it will hide the warning msg 
  else { 
     isValid = true; 
     if(
         !document.getElementById("cardownerValidationError").classList.contains("hide")
     ) {
         document.getElementById("cardownerValidationError").classList.add("hide");
     }
 }
 
     return isValid;
 };
 
 const readFormData = () => {
      var formData = {};
      // to get the data from the all input fields
     formData.fullName = document.getElementById("cardNumber").value;
     formData.email = document.getElementById("Expirattion").value;
     formData.salary = document.getElementById("CV").value;
     formData.city = document.getElementById("cardowner").value;
     return formData;

 };
 function restForm(){
        document.getElementById("cardNumber").value ="";
        document.getElementById("Expirattion").value ="";
        document.getElementById("CV").value ="";
        document.getElementById("cardowner").value ="";
  };

  const insertNewRecord = (obj) => {
    data.push(obj);
    displayRecord();
  };


  