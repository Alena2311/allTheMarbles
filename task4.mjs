const trafficLightColours = {
  red: "red",
  green: "green",
  yellow: "yellow",
};

const actions = {
  [trafficLightColours.red]: "STOP",
  [trafficLightColours.green]: "GO",
  [trafficLightColours.yellow]: "SLOW",
};

const switchLimits = {
  [trafficLightColours.red]: 2,
  [trafficLightColours.green]: 3,
  [trafficLightColours.yellow]: 1,
};

let currentState = trafficLightColours.red;
let counter = 0;

function nextState(state) {
  if (state === trafficLightColours.red) return trafficLightColours.green;
  if (state === trafficLightColours.green) return trafficLightColours.yellow;
  if (state === trafficLightColours.yellow) return trafficLightColours.red;
  return trafficLightColours.red;
}

function update() {
  console.log(actions[currentState] || "BROKEN");

  counter++;

  if (counter > switchLimits
[currentState]) {
    currentState = nextState(currentState);
    counter = 0;
  }
}

update();
update();
update();
update();
update();
update();
update();
update();