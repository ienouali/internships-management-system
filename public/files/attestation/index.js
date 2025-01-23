module.exports = ({nom,prenom,startDate}) => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const now = dd + '/' + mm + '/' + yyyy;
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Attestation PDF</title>
    <style>
        section {
        margin-top: 150px;
        }
        .container {
            margin: 50px 100px;
            position: relative; 
        }
        h1 {
            text-transform: uppercase;
            font-size: 22pt;
            text-align: center;
            font-weight: 400;
        }
        p {
            margin-top: 100px;
            font-size: 18pt;
            line-height: 2; 
        }
        img {
            margin-left: 5px;
            width: 120px;
            height: auto;
            position: absolute;
            top: 10px; 
        }
        footer {
        margin-bottom: 400px;
        }
         div{
            text-align: center;
        }
        small {
        text-align: center;
        clear: both;
        position: relative;
        margin-top: -300px;
        }
        span {
        color: #195fae;
        }
        
    </style>
</head>
<body>
    <img src="%SRC%" alt="logo"/>
    <section>
    <div class="container">
        <h1>attestation de stage</h1>
        <p> 
            Nous soussignées « COMPANY NAME »
            attestons par la présente M. <strong>${nom.toUpperCase()} ${prenom.toLowerCase()}</strong>
            titulaire de la CIN N°  <strong>"CIN"</strong> est stagiaire  au sein de notre société depuis <strong>${startDate.split('-').reverse().join('-')}</strong>.
             
        </p>
    </div>
    <footer class="container">
    <p>Le&nbsp;<strong>${now}</strong></p>
    </footer>
         <div>  <small>" COMPANY ADDRESS "</small></div>
       <div>  <small>  " COMPANY DETAILS "</small></div>
       <div> <small> Tel: <span>"PHONE"</span>  E-mail: <span>"EMAIL"</span> – site : <span>"WEBSITE"</span></small></div>
</section>
</body>
</html>
      `
};