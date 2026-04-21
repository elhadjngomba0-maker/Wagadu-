const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/track/:id', (req,res)=>{
  res.json({
    trackingId: req.params.id,
    status: "En transit",
    path: [
      [14.7167,-17.4677],
      [48.8566,2.3522],
      [40.7128,-74.0060]
    ]
  });
});

app.listen(3000, ()=>console.log("Server running 🚀"));
