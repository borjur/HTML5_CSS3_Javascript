var slaying = true;
// There it is!
var youHit = Math.floor(Math.random()*2);
var damageThisRound = Math.floor(Math.random() * 6 + 1);

var totalDamage = 0;
while (slaying) {
  if (youHit) {
      console.log("You hit!");
      totalDamage += damageThisRound;
          if (totalDamage >= 4) {
              console.log("You win!");
              slaying = false;
          } else {
              youHit = Math.floor(Math.random() * 2);
          }
  } else {
      console.log("You lose!");
      slaying = false;
  }
}