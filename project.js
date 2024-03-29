const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

document.getElementById("load-text").onmouseover = event => {
    let iterations = 0

   const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {
        if (index < iterations) {
            return event.target.dataset.value[index];
        }
        
        return symbols[Math.floor(Math.random() * 26)]
   })
    .join("");

    if(iterations >= event.target.dataset.value.length) clearInterval(interval);

    iterations += 1 / 6;
}, 30);
}

window.onload = function () {
    const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
    const target = document.getElementById("load-text");
    let iterations = 0;
  
    const interval = setInterval(() => {
      target.innerText = target.innerText.split("")
        .map((letter, index) => {
          if (index < iterations) {
            return target.dataset.value[index];
          }
  
          return symbols[Math.floor(Math.random() * symbols.length)];
        })
        .join("");
  
      if (iterations >= target.dataset.value.length) clearInterval(interval);
  
      iterations += 1 / 6;
    }, 30);
  };

