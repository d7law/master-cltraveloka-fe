const { application_name } = require('pg/lib/defaults');
const App = require('./App');

const post = process.env.PORT || 5000;
App.listen(port, () =>{
    console.log(`Listening: http://localhost:${post}`);
});