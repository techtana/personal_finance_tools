import React from "react";


const Contact = () => {
  return (
    <>
      <h1>Thanks for checking this page!</h1>
      <p>
          &#128075; Hi! My name is Tech. 
          These are some of the tools I created over years to better understand and make decisions about my personal finance.
          They usually started off with drafting a bunch of excel sheets. As the calculation starts getting repetitive and friends and family 
          started asking more about how I do my finances, I thought of compiling these tiny tools in one place where people can access easily.
      </p>
      <p>
          This project uses ReactJS and hosted on GitHub's Pages. 
          I don't collect data on this page, all calculation is processed at client-side. 
      </p>
      <p>
          I'm currently planning my next project to create a tracking tool similar to Mint. Now that Intuit bought the app and replacing it with CreditKarma, 
          I went back to my excel file as a tracking tool. Which of course, it's very versatile but not fitting my need. 
          Plus, many tools are still missing. Connecting directly to banks would be great, but that is a lot of work (and potentially cost) to execute. 
          So, it's likely I will approach it by allowing people to take photo of their receipt and using ML to help extract those numbers. 
          Should be fun!
      </p>

      <p>Contact me at <a href="mailto:phacharapol.tana@gmail.com">phacharapol (dot) tana (at) gmail (dot) com</a></p>
      <p>Buy me a coffee via <a href="https://venmo.com/?txn=pay&audience=public&recipients=tech_tana&note=Buy%20Tech%20a%20Coffee!%E2%9D%A4%EF%B8%8F">Venmo</a>. Thank you!&#129505;</p>
    </> 
  );
}

export default Contact;