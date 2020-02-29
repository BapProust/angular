let coll = document.getElementsByClassName("collapse");
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {

    alert("ca clique");

    this.classList.toggle("active");
    let content = document.getElementsByClassName("subContent");
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

