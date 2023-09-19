
let toode = {
    nimetus: "Müsli",
    hind: 3.50,
    kogus: 2,

    koguhind: function() {
      return this.hind * this.kogus;
    },

    muudaKogus: function(uusKogus) {
      this.kogus = uusKogus;
    },

    kuvaSisu: function() {
      console.log(`Toode: ${this.nimetus}, Hind: ${this.hind} EUR, Kogus: ${this.kogus}`);
    }
  };
  
  // Loome ostukorvi objekti
  let ostukorv = {
    tooted: [],

    kuvatooted: function() {
      this.tooted.forEach(function(toode) {
        console.log(`${toode.nimetus} - ${toode.hind} EUR - Kogus: ${toode.kogus}`);
      });
    },
  
    lisaToode: function(nimetus, hind, kogus) {
      let uusToode = {
        nimetus: nimetus,
        hind: hind,
        kogus: kogus
      };
      this.tooted.push(uusToode);
    },

    koguSumma: function() {
      let summa = 0;
      this.tooted.forEach(function(toode) {
        summa += toode.koguhind();
      });
      return summa;
    }
  };

  toode.kuvaSisu();
  console.log("Toote koguhind:", toode.koguhind());
  toode.muudaKogus(3);
  toode.kuvaSisu();
  
  ostukorv.lisaToode("Kohv", 5.80, 2);
  ostukorv.lisaToode("Šokolaad", 2.50, 4);
  ostukorv.kuvatooted();
  console.log("Ostukorvi kogu summa:", ostukorv.koguSumma());
  