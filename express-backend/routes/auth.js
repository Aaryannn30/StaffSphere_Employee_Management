const express = require('express');
const router = express();

router.get('/',(req,res)=>{
    obj = {
        'a' : 'this is ex',
        'Number' : 34
    }
    res.json(obj)
})

module.exports = router