// AN OBJECT
const details = {
  firstName: "Stone",
  lastName: "Adekunle",
  birthYear: 2000,
  job: "Programmer",
  hasDriversLicense: true,
  friends: ["Katlyn", "Helen", "Joy", "Arnold", "John"],

  //  OBJECT WITHIN AN OBJECT
  phone_number: {
    mobile: "789466829",
    landline: "945U8986",
  },

  //   THE METHOD

  getDetails: function () {
    return `My name is 
        ${details.firstName} ${details.lastName} and i am a ${
      2023 - this.birthYear
    } years old, who works as a ${this.job}. please call me on ${
      details.phone_number.landline
    }`;
  },
};

console.log(details.getDetails());

// USING CONSTRUTORS
class fruits {
  constructor(_citrus, _berries, _melon, _stoneFruit, _trophical) {
    this.citrus = _citrus;
    this.berries = _berries;
    this.melon = _melon;
    this.stoneFruit = _stoneFruit;
    this.trophical = _trophical;
  }

  changeFruit(_trophical) {
    this.trophical = _trophical;
  }
}

let citrus = "oranges";
let berries = " kiwifruit";
let melon = "watermelons";
let stoneFruit = "apricots";
let trophical = "bananas";


class Picture {
  constructor(picdisplay) {
    this.picdisplay = picdisplay;
  }
  picsispresent() {
    return this.picdisplay + " is the Background in the  ";
  }
}

class River extends Picture {
  constructor(list, rivercolor) {
    super(list);
    this.rivercolor = rivercolor;
  }
  showpic() {
    return this.picsispresent() + this.rivercolor;
  }
}

let newPicture = new River("Aqua Blue", "Picture Displayed Below");
document.getElementById("try").innerHTML = newPicture.showpic();
