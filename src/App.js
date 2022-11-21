import React, { Component } from "react";
import songs from './songs';
import './index.css'
import SongCard from './SongCard'
class App extends Component {
 
  constructor()
  {
   
   super();
    this.state={
      song:songs
    }
  }
   sr=()=>
   {
    var k=this.state.song;
    k.sort(function(a,b){return a.rating - b.rating});
    console.log(k)
    this.setState({song:[...k]});
   }
   st=()=>{
var k=this.state.song;
function compareStrings(a, b) {
  // Assuming you want case-insensitive comparison
  a = a.toLowerCase();
  b = b.toLowerCase();

  return (a < b) ? -1 : (a > b) ? 1 : 0;
}

var pp=k.sort(function(a, b) {
  return compareStrings(a.title, b.title);
})
console.log(pp);
this.setState({song:[...pp]});
   }
  render() {
   
    return (
      <div id="super-tunes">
        <div>
          <button onClick={this.sr}>Sort By Rating</button>
          <button onClick={this.st}>Sort By Title</button>
          {console.log(this.state.song)}
        </div>
        <h2 id="st-title">SuperTunes - Songs of the Week</h2>
        {
            this.state.song.map(a=>{
            
                return(<SongCard input={a}/>)
            })
        }
      </div>
    );
  }
}

export default App;
