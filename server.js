const express = require('express')
const app = express()


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.listen(3000)
    
app.listen(3000, function(error) {
    if (error) {
        console.log('Something went wrong', error)

    } else {
        console.log('Server is listening on port' + port)
    }
})