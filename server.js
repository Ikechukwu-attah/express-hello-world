/********************************************************************************** 
 * WEB322 – Assignment 1
 *  I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *  Name: _Ikechukwu Anthony Attah_______ Student ID: __123456789_ Date: __10/09/2023__
 *  Online (Cyclic) URL: https://precious-pink-fossa.cyclic.app/
 * *********************************************************************************
    
    */

const app = require("./app");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
