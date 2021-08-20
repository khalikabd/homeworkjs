class Convertsuhu {
    constructor() {
    }
    fromCelci(to, num) {
      if (to == "cel") {
        return num;
      }
      if (to == "rea") {
        return (4 / 5) * num;
      }
      if (to == "far") {
        return (9 / 5) * num + 32;
      }
    }
    fromReam(to, num) {
      if (to == "rea") {
        return num;
      }
      if (to == "cel") {
        return (5 / 4) * num;
      }
      if (to == "far") {
        return (9 / 4) * num + 32;
      }
    }
    fromFaren(to, num) {
      if (to == "far") {
        return num;
      }
      if (to == "cel") {
        return (5 / 9) * (num - 32);
      }
      if (to == "rea") {
        return (4 / 9) * (num - 32);
      }
    }
  }
  //objek yang sebenarnya dikembalikan sebagai hasil require panggilan.
module.export = Convertsuhu;


  