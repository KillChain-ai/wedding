for(let i=0;i<50;i++){

let particle=document.createElement("div");

particle.className="particle";

particle.style.left=
Math.random()*100+"vw";

particle.style.animationDuration=
10+Math.random()*20+"s";

particle.style.animationDelay=
Math.random()*10+"s";

particle.style.width=
Math.random()*4+2+"px";

particle.style.height=
particle.style.width;

document.body.appendChild(
particle
);

}