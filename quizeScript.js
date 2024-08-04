const quizes = [
  {
    Question: "what color is the sky",
    Options: ["blue", "yellow", "green", "white"],
    response: "",
    Answer: "blue",
  },
  {
    Question: "what is the sum of 1 + 1 ",
    Options: ["8", "2", "6", "3"],
    response: "",
    Answer: "2",
  },
  {
    Question: "WHEN i will get rich",
    Options: ["soon", "one week", "3 months", "4 months"],
    response: "",
    Answer: "3 months",
  },
];

let currentQuestionIndex = 0;

// CALLING VARIABLES
const DOMoptions = document.getElementById("options");
const DOMquestion = document.getElementById("question");
const DOMprogress = document.getElementById("quiz-progress");
const NextBut = document.getElementById("next");
const PrevBut = document.getElementById("previous");
const submitBut = document.getElementById("submit");
const scoreSquare = document.getElementById("square")


scoreSquare.classList.remove("square")
scoreSquare.innerHTML = "";
// EVENT LISTENERS
NextBut.addEventListener("click", () => {
  if (currentQuestionIndex < quizes.length - 1) {
    currentQuestionIndex++;
    quizeApp(currentQuestionIndex);
  } else {
    currentQuestionIndex = 0;
    quizeApp(currentQuestionIndex);
  }
});

PrevBut.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    quizeApp(currentQuestionIndex);
  } else {
    currentQuestionIndex = 0;
  }
});

quizes.forEach((element) => {
  DOMprogress.innerHTML += '<div id="question-number" ></div>';
});


submitBut.addEventListener("click", () => {
  
  const allResponses = quizes.filter((element )=>{
    
    return element.response !== "" ;
  }) 
  console.log(allResponses);
if ( allResponses.length == quizes.length ) {

  const correctResponses = quizes.filter((element )=>{
    
    return element.response === element.Answer ;
  }) 

  scoreSquare.innerHTML = ` Score : ${correctResponses.length }`
  scoreSquare.classList.add("square")
}
 

  
});


// MAIN FUNCTION

function quizeApp(params) {

  // display seen progress bar
  const seenQuestion = document.querySelectorAll("#question-number");
  seenQuestion.forEach((element) => {
    element.classList.remove("seen");
  });
  seenQuestion[params].classList.add("seen");

  // DISPLAY QUESTION AND OPTIONS
  DOMquestion.innerHTML = quizes[params].Question;
  DOMoptions.innerHTML = "";
  quizes[params].Options.forEach((element) => {
    DOMoptions.innerHTML += `<div class="theoption"  >${element}</div>`;
  });

  // USER RESPONSES
  const options = document.querySelectorAll(".theoption");
  // TO SIFT THROUGHT OPTIONS AND HIGHLIGHT RESPONSES
  for (let i = 0; i <= currentQuestionIndex; i++) {
    if (quizes[i].response !== "") {
      // options.forEach((element) => {element.id = ''})
      options.forEach((element) => {
        if (element.textContent === quizes[params].response) {
          element.id = "response";
        }
      });
    }
  }

// TO HIGHLIGHT THE RESPONSE WHEN CLICKING
  options.forEach((element) => {
    element.addEventListener("click", () => {
      quizes[params].response = element.innerHTML;
      if (quizes[params].response !== "") {
        options.forEach((element) => {
          element.id = "";
        });
        element.id = "response";
      }
    });
  });

  scoreSquare.classList.remove("square")
  scoreSquare.innerHTML = "";


}








quizeApp(currentQuestionIndex);

// PROGRESS BAR CODE
