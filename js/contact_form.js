function sendMail() {
    var params = {
      from_name: document.getElementById("from_name").value,
      from_email: document.getElementById("from_email").value,
      phone: document.getElementById("phone").value,
      query: document.getElementById("query").value,
    };
  
    const serviceID = "service_tj20qpq";
    const templateID = "template_kllv78r";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("from_name").value = "";
          document.getElementById("from_email").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("query").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }  