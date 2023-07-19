const day= document.querySelector("#day");
const image= document.querySelector("#changeImg");

const dayNight= (event) =>
{
   if(day.textContent.includes("Night"))
   {
      image.src= "./images/night.jpg";
      day.textContent= "Change to Day";
      day.style.background= "#fff";
      day.style.color= "orange";
   }
   else
   {
      image.src= "./images/day.jpg";
      day.textContent= "Change to Night";
      day.style.background= "#000";
      day.style.color= "#fff";
   }
}

day.addEventListener('click', dayNight);