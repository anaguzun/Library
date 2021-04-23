class Media {
constructor(title){
  this._title = title;
  this._isCheckedOut = false;
  this._ratings = [];
}
get title(){
  return this._title
}
get isCheckedOut(){
  return this._isCheckedOut;
}
get ratings(){
  return this._ratings;
}
set isCheckedOut(isCheckedOut){
  this._isCheckedOut = isCheckedOut;
}
toggleCheckOutStatus(){
  return this._isCheckedOut = !this._isCheckedOut;
}
getAverageRating(){
  const average = this._ratings.reduce((a, c) =>a + c);
  return average / this._ratings.length;
}

addRating(rating){
  return this._ratings.push(rating);
}
};
class Book extends Media {
  constructor(author, title, pages){
super(title);
this._author = author;
this._pages = pages;
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }
};

class Movie extends Media{
constructor(director, title, runTime){
  super(title);
  this._director = director;
  this._runTime = runTime;
}
get director(){
  return this._director;
}
get runTime(){
  return this._runTime;
}
};


class CD extends Media{
constructor(artist, title, songs){
  super(title);
  this._artist = artist;
  this._songs = songs;
}
get artist(){
  return this._artist;
}
get songs(){
  return this._songs;
}
};


const historyOfEverything = new Book('Bill Bryson', 'A short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(8);
historyOfEverything.getAverageRating();
console.log(historyOfEverything.getAverageRating());

const myMovie = new Movie('Cloud Atlas', 'Lana and Lilly Wachowski', 172);

myMovie.toggleCheckOutStatus();
console.log(myMovie.isCheckedOut);
myMovie.addRating(3);
myMovie.addRating(2);
myMovie.addRating(5);
myMovie.getAverageRating();
console.log(myMovie.getAverageRating());


const myCD = new CD('Dangerous', 'Michael Jackson', ['Will You Be There', 'Black or White', 'Remember the Time']);
myCD.toggleCheckOutStatus();
console.log(myCD.isCheckedOut);
myCD.addRating(1);
myCD.addRating(2);
myCD.addRating(4);
myCD.getAverageRating();
console.log(myCD.getAverageRating());