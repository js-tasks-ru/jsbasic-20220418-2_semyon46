
let calculator = {

    read: function(a,b){
      this.d=a
      this.c=b
     
    },

  sum(){return this.d+this.c},
  mul(){return this.d*this.c},
};



console.log(calculator.returnVasya())
calculator.read(2,5)
// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
