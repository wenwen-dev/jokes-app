const express = require("express");
const app = express();
const server = app.listen(process.env.PORT || 8080, ()=>console.log("Listening"));

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json()); //Qs: why need this?

app.locals.playlists = [];

app.post('/playlists', (req, res)=> {
  if (req.body.name !== '') {
    app.locals.playlists.push(req.body);
  }
  res.send(app.locals.playlists);
})

app.patch('/playlists/:playlist', (req, res)=>{
  console.log("received a PATCH request");
  let playlistFound = app.locals.playlists.find(playlist=>playlist.name===req.params.playlist);
  playlistFound.jokes.push(req.body);
  res.status(200).send('Successful patch');
})

app.get('/playlists', (req, res) => {
  res.send(app.locals.playlists);
})

