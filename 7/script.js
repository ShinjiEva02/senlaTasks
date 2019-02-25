function createHolder(number) {
  return {
    number,
    getValue : function() {
      return this.number;
    },
    setValue : function(a) {
      this.number = a;
    }
  }
}

let obj = createHolder(5);
console.log(obj.getValue()); // returns 5
obj.setValue(2);
console.log(obj.getValue()); // returns 2