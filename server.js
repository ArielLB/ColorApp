const express = require ('express');


const app = express();



//serve static assets in production

    app.use(express.static('src'));
  


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server running on port ${PORT}`));