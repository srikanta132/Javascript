const div = (n1,n2)=>n1/n2;
const multi = (n1,n2)=>n1*n2;
const sub = (n1,n2)=>n1-n2;
const add = (n1,n2)=>n1+n2;
switch('/'){
    case '+':{
      console.log(add(5,6));
      break;
    }
    case '-':{
      console.log(sub(5,6));
      break;
    }
    case '*':{
      console.log(multi(5,6));
      break;
    }
    case '/':{
      console.log(div(5,6));
      break;
    }
    }