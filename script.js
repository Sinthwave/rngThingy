function main(){
  console.clear();
  running();
}

//ok so I 0-indexed this bitch, shouldn't matter tho
function getRandomInt(max) {
    var rng = Math.floor(Math.random() * max);
    // console.log(rng);
    return rng
}

function running(){
  document.getElementById("dropped").innerHTML = `Running simulation.`;

  setTimeout(() => {
    var max = document.getElementById("odds").value;
  console.log(max);
  var rng, id = 0;

  while (rng != 0) {
    rng = getRandomInt(max);
    id++;
  }

  console.log(`Total rolls: ${id}`);
  document.getElementById("dropped").innerHTML = `You got that mf in ${id} kills.`;

  if(id < max){
    document.getElementById("reactionImg").src = "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/22413053/Screen_Shot_2021_04_01_at_9.33.25_AM.png?quality=90&strip=all&crop=0,0,100,100"
  }
  else{
    document.getElementById("reactionImg").src = "https://media.tenor.com/O14R4p9-t-sAAAAM/get-stick-bugged-lol.gif"
  }
  
  console.log("Success");
  }, 1000);
}