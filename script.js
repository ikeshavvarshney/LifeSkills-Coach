function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("content").classList.toggle("shift");
}

const questions = [
    {
      question: "What should you always wear while riding a two-wheeler?",
      options: ["Helmet", "Cap", "Sunglasses"],
      answer: "Helmet"
    },
    {
      question: "Which color on a traffic light means 'Stop'?",
      options: ["Red", "Green", "Yellow"],
      answer: "Red"
    },
    {
      question: "Which side of the road should pedestrians walk on in India?",
      options: ["Left side", "Right side", "Middle of the road"],
      answer: "Right side"
    },
    {
      question: "What should you do before crossing the road?",
      options: ["Look both ways", "Run quickly", "Close your eyes"],
      answer: "Look both ways"
    },
    {
      question: "Which traffic light means 'Go'?",
      options: ["Green", "Red", "Yellow"],
      answer: "Green"
    },
    {
      question: "What should drivers do at a zebra crossing?",
      options: ["Stop for pedestrians", "Honk to alert pedestrians", "Drive faster"],
      answer: "Stop for pedestrians"
    },
    {
      question: "What is the maximum speed limit in a school zone?",
      options: ["20-25 km/h", "40-50 km/h", "60 km/h"],
      answer: "20-25 km/h"
    },
    {
      question: "What is the safest way to cross a busy road?",
      options: ["Use a footbridge or subway", "Run across quickly", "Wave at vehicles"],
      answer: "Use a footbridge or subway"
    },
    {
      question: "What should cyclists wear at night for safety?",
      options: ["Reflective clothing", "Dark clothes", "Raincoat"],
      answer: "Reflective clothing"
    },
    {
      question: "When should you use a seatbelt?",
      options: ["Always", "Only on highways", "Only during night"],
      answer: "Always"
    },
    {
      question: "What is the function of a speed breaker?",
      options: ["Reduce vehicle speed", "Decorate the road", "Help drainage"],
      answer: "Reduce vehicle speed"
    },
    {
      question: "What should you avoid while driving?",
      options: ["Using mobile phones", "Checking mirrors", "Following signals"],
      answer: "Using mobile phones"
    },
    {
      question: "What is the minimum age for obtaining a driving license in India for a two-wheeler?",
      options: ["16 years", "18 years", "21 years"],
      answer: "18 years"
    },
    {
      question: "Which color are reflective road studs that mark the left edge of the road?",
      options: ["Red", "Green", "White"],
      answer: "Red"
    },
    {
      question: "Why should vehicles maintain a safe distance?",
      options: ["To avoid collisions", "To increase speed", "To block other vehicles"],
      answer: "To avoid collisions"
    },
    {
      question: "What does a yellow traffic light mean?",
      options: ["Slow down and prepare to stop", "Go faster", "Ignore"],
      answer: "Slow down and prepare to stop"
    },
    {
      question: "Who has the right of way at an uncontrolled intersection?",
      options: ["The vehicle on the right", "The bigger vehicle", "The faster vehicle"],
      answer: "The vehicle on the right"
    },
    {
      question: "What should elderly pedestrians do to be more visible?",
      options: ["Wear bright or reflective clothing", "Wave hands", "Walk faster"],
      answer: "Wear bright or reflective clothing"
    },
    {
      question: "What should you do if an ambulance is behind you?",
      options: ["Give way immediately", "Stop in the middle", "Ignore"],
      answer: "Give way immediately"
    },
    {
      question: "Why are seatbelts important?",
      options: ["Prevent injuries during accidents", "Keep driver awake", "Look stylish"],
      answer: "Prevent injuries during accidents"
    },
    {
      question: "What should you not do at a level crossing?",
      options: ["Cross when gates are open", "Cross when gates are closed", "Check both sides"],
      answer: "Cross when gates are closed"
    },
    {
      question: "What does a ‘No U-turn’ sign mean?",
      options: ["You cannot make a U-turn", "You cannot make a right turn", "You cannot stop"],
      answer: "You cannot make a U-turn"
    },
    {
      question: "What is the legal blood alcohol limit for drivers in India?",
      options: ["30 mg/100 ml of blood", "50 mg/100 ml", "Zero tolerance"],
      answer: "30 mg/100 ml of blood"
    },
    {
      question: "Why should you check mirrors before changing lanes?",
      options: ["To avoid accidents", "To see traffic lights", "To check your hair"],
      answer: "To avoid accidents"
    },
    {
      question: "Which side should you overtake from in India?",
      options: ["Right side", "Left side", "Either side"],
      answer: "Right side"
    },
    {
      question: "What should drivers do in foggy conditions?",
      options: ["Use fog lights and drive slowly", "Use high beam", "Speed up"],
      answer: "Use fog lights and drive slowly"
    },
    {
      question: "What does a red triangle warning sign mean?",
      options: ["Caution/Danger ahead", "Stop immediately", "Safe zone"],
      answer: "Caution/Danger ahead"
    },
    {
      question: "When should you use a horn?",
      options: ["Only to avoid danger", "At every crossing", "To greet friends"],
      answer: "Only to avoid danger"
    },
    {
      question: "What does a solid white line on the road mean?",
      options: ["Do not cross or change lanes", "Free to overtake", "Parking allowed"],
      answer: "Do not cross or change lanes"
    },
    {
      question: "Which type of crossing helps visually impaired people?",
      options: ["Audible signals", "Speed breakers", "Flashing lights"],
      answer: "Audible signals"
    },
    {
      question: "What should you do when your vehicle breaks down on the road?",
      options: ["Turn on hazard lights", "Leave it unattended", "Push it fast"],
      answer: "Turn on hazard lights"
    },
    {
      question: "Which lane should slow vehicles keep to?",
      options: ["Left lane", "Right lane", "Middle lane"],
      answer: "Left lane"
    },
    {
      question: "What should bikers avoid doing?",
      options: ["Carrying more than one passenger", "Wearing helmet", "Following signals"],
      answer: "Carrying more than one passenger"
    },
    {
      question: "What is hydroplaning?",
      options: ["Loss of traction due to water", "Engine overheating", "Brake failure"],
      answer: "Loss of traction due to water"
    },
    {
      question: "What is the use of cat’s eye reflectors on roads?",
      options: ["Guide drivers at night", "Decorate the road", "Reduce speed"],
      answer: "Guide drivers at night"
    },
    {
      question: "What should you do at a STOP sign?",
      options: ["Come to a complete halt", "Slow down slightly", "Ignore if no traffic"],
      answer: "Come to a complete halt"
    },
    {
      question: "What is the minimum safe distance to keep from the vehicle ahead?",
      options: ["At least 2 seconds gap", "1 car length", "Half meter"],
      answer: "At least 2 seconds gap"
    },
    {
      question: "Why should you not use high beam in city traffic?",
      options: ["It blinds other drivers", "It reduces visibility", "It increases speed"],
      answer: "It blinds other drivers"
    },
    {
      question: "What is defensive driving?",
      options: ["Driving cautiously to prevent accidents", "Driving aggressively", "Racing"],
      answer: "Driving cautiously to prevent accidents"
    },
    {
      question: "What should you do if traffic lights are not working?",
      options: ["Follow hand signals/police directions", "Ignore rules", "Go fast"],
      answer: "Follow hand signals/police directions"
    },
    {
      question: "What does a blue traffic sign usually indicate?",
      options: ["Information/Guidance", "Stop", "Danger"],
      answer: "Information/Guidance"
    },
    {
      question: "When driving downhill, what gear should you use?",
      options: ["Lower gear", "Neutral", "Highest gear"],
      answer: "Lower gear"
    },
    {
      question: "What is the purpose of road dividers?",
      options: ["Separate opposite traffic", "Beautify roads", "Provide parking"],
      answer: "Separate opposite traffic"
    },
    {
      question: "What should school buses have for safety?",
      options: ["CCTV & speed governors", "Dark windows", "Loud horns"],
      answer: "CCTV & speed governors"
    },
    {
      question: "What does a green arrow with red light mean?",
      options: ["You may go in the direction of arrow", "Stop completely", "Free movement"],
      answer: "You may go in the direction of arrow"
    },
    {
      question: "Why should children not play on roads?",
      options: ["Risk of accidents", "Noise pollution", "Dust"],
      answer: "Risk of accidents"
    },
    {
      question: "When should you switch on indicators?",
      options: ["Before turning or changing lanes", "After turning", "Only on highways"],
      answer: "Before turning or changing lanes"
    },
    {
      question: "What is the safest way to use a mobile while driving?",
      options: ["Use hands-free or don’t use at all", "Hold phone in hand", "Text while driving"],
      answer: "Use hands-free or don’t use at all"
    },
    {
      question: "Why should tires have proper air pressure?",
      options: ["Better grip & safety", "Better looks", "Less noise"],
      answer: "Better grip & safety"
    },
    {
      question: "What is the penalty for not wearing a helmet in India?",
      options: ["Fine and/or license suspension", "No penalty", "Just a warning"],
      answer: "Fine and/or license suspension"
    }
  ];
  

  const quesEl = document.getElementById("ques");
const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");
const op3 = document.getElementById("op3");
const message = document.getElementById("message");

const today = new Date().toDateString();

let lastAnswered = localStorage.getItem("lastAnswered");
let totalAnswered = localStorage.getItem("answeredCount") 
    ? parseInt(localStorage.getItem("answeredCount")) 
    : 0;

function disableOptions() {
    [op1, op2, op3].forEach(btn => btn.disabled = true);
}

if (lastAnswered === today) {
    message.textContent = "Congratulations you have answered a question! Visit again tomorrow.";
    disableOptions();
} else {
    const randomQ = questions[Math.floor(Math.random() * questions.length)];
    quesEl.textContent = randomQ.question;

    [op1, op2, op3].forEach((btn, i) => {
        btn.textContent = randomQ.options[i];
        btn.onclick = () => {
            if (localStorage.getItem("lastAnswered") === today) {
                message.textContent = "You already answered today's question!";
                return;
            }

            if (btn.textContent === randomQ.answer) {
                message.textContent = "Correct! 🎉";
            } else {
                message.textContent = "Oops! The correct answer is: " + randomQ.answer;
            }

            localStorage.setItem("lastAnswered", today);

            totalAnswered++;
            localStorage.setItem("answeredCount", totalAnswered);

            disableOptions();

            setTimeout(() => {
                message.textContent = "Congratulations you have answered a question! Visit again tomorrow.";
            }, 1500);
        };
    });
}

function getTotalAnswered() {
    return totalAnswered;
}

var streakno = document.getElementById("streakhead");
streakno.innerHTML=`${getTotalAnswered()} day streak`

console.log("Total questions answered:", getTotalAnswered());

const resetBtn = document.getElementById("re");

re.addEventListener("click", () => {
    localStorage.removeItem("answeredCount"); 
    localStorage.removeItem("answeredDate");  
    localStorage.removeItem("lastAnswered");  

    totalAnswered = 0;
    message.textContent = "Progress has been reset. You can answer again!";
    [op1, op2, op3].forEach(btn => btn.disabled = false); 
});