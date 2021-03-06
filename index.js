const
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  mongoose =require('mongoose'),
  Team = require('./models/Team.js')

  mongoose.connect('mongodb://localhost/basketball', (err) => {
    console.log(err || "Connected to mongo!")
  })

app.use(morgan('dev'))
app.use(bodyParser.json())


app.get('/'), (req, res) => {
  res.json({message: "Hello World"})
})

app.use('/teams', require('./routes/teams.js'))
//
// app.get('/teams', (req, res) => {
//   Team.find({}, (err, teamsFromDB) => {
//     res.json(teamsFromDB)
//   })
// })
//
// app.post('/teams', (req, res) => {
//   Team.create(req.body, (err, newTeam) => {
//     res.json({success: true, team: newTeam})
//   })
// })
//
// app.get('/teams/:id', (req, res) => {
//   Team.findById(req.params.id, (err, singleTeam) => {
//     res.json(singleTeam)
//   })
// })
//
//
//   app.patch('/teams/:id', (req, res) => {
//     Team.findByIdAndUpdate(req.params.id, req.params.body, {new: true}, (err, updatedTeam) => {
//       res.json({success: true, team: updatedTeam})
//     })
//   })
//
//   app.delete('/teams/:id', (req, res) => {
//     Team.findByIdAndRemove(req.params.id, (err, deletedTeam) => {
//       res.json({success: true, removed: deletedTeam})
//     })
//   })

app.listen(3000, (err) => {
  console.log(err || "Server running on 3000.");
})
