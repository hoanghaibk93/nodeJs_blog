const newsRouter = require('./news')
const siteRouter = require('./site')
const route = (app)=>{
  app.use('/news', newsRouter);
  app.use('/', siteRouter);
    
  
  // app.get('/', (req, res) => {
  //       res.render('home');
  //     })
    
  //     app.get('/search',(req,res)=>{
  //       console.log(req.query)
  //       res.render('search');
  //     })

      // app.post('/search',(req,res)=>{
      //   console.log(req.body)
      //   res.send("af");
      // })
}
module.exports = route;