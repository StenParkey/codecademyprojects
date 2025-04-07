let menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string') {
        this._meal = mealToCheck;
      } else {
        console.log('Please input a valid meal as a string')
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number') {
        this._price = priceToCheck;
      } else {
        console.log('Please input a valid price as a number')
      }
    },
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Todays special is ${this._meal} for \$${this._price}!`
      } else {
        return 'Meal or price was not set correctly!'
      }
    }
  }
  menu.meal = 'corndog';
  menu.price = 1
  console.log(menu)
  console.log(menu.todaysSpecial)