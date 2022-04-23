
let calculator = {

    read: function(a,b){
      this.d=a
      this.c=b
     
    },

  sum(){return this.d+this.c},
  mul(){return this.d*this.c},
};


// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
