

const printer = function(n, symbol) {
  if (n <= 0){
    return "";
  }
  return symbol + printer(n-1, symbol);
};



const typeOfLine = function(spaceNum, asteriskNum) {
  if (asteriskNum <= 0) {
    return;
  }
  
  console.log(printer(spaceNum, " ") + printer(asteriskNum, "*"));
  return(typeOfLine(spaceNum+1, asteriskNum-2));
};

const triangleStars = function(stars){
  return typeOfLine(0, 2 * stars -1 );
};
    
const pow = function(base, n){
  if (base <= 1 || n <= 1 || typeof(base) !== 'number' || typeof(n) !== 'number'){
    return ;
  }
  
  if (n === 2) {
      return base * base;
  }
  
  return base * pow(base, n-1);
};

const reverse = function(str){

    const len = str.length;

    const reverseStr = function(str, num){
      if (num <= 0){
        return '';
      }
      return str[num -1] + reverseStr(str, num-1);
      
    };
    
    return reverseStr(str, len);
    

};

const starline = function(n) {
	if (n === 0) {
		return "";
	}
	return  "* " + starline(n - 1);
};

const starline2 = function(m) {
  if (m === 0) {
    return "";
  }
  return ' *' + starline2(m - 1);
};

const printr = function(starr, boo) {
  if (boo === 0){
    return;
  }
  
  console.log(starline(starr));
  console.log(starline2(starr));
  printr(starr, boo-1);
};

const checkerboard = function(starr){
  if (starr % 2 === 0){
    printr(starr, (starr/2));
  }
  if (starr % 2 !== 0){
    printr(starr, (starr-1)/2);
  }
};
