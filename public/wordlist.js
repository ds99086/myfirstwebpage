window.addEventListener("load", function() {
 




    let wordColumn = document.querySelector("#geneticsWordList");

    for (let i = 0; i < terminologies.length; i++) {
        term =  terminologies[i];
        wordColumn.innerHTML +=
        `<div class="card">
        <img class="card-img-top" src="https://medlineplus.gov/images/PX00006G_PRESENTATION.jpeg" alt="Card image cap">
        <div class="card-body">
          <h4 class="card-title">${term.word}</h4>
          <p class="card-text">${term.definition}</p>
        </div>
      </div>`;
        
    } 
    


});