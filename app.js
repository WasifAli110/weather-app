let myInput = document.querySelector("#myInput");
let screenParagraph = document.querySelector("#myPara");
let form = document.querySelector("#weatherForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let temp = Number(myInput.value); // temperature

    let condition = temp > 24;
  
    // console.log("🚀 ~ condition:", condition);
  
    if (condition) {
      screenParagraph.innerText = "Today weather is hot";
  
      console.log("Today weather is hot");
    } else {
      screenParagraph.innerText = "Today weather is cold";
  
      console.log("Today weather is cold");
    }
  
    // 	console.log("button per click hua hy");
    // 	console.log("button per click hua hy");
  });    