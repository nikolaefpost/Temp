  function test (){
    //let newString = prompt('введите строку на проверку','var list = function (e) var self = this;var first, last, head;self.insert = function (value) {var node = new Node(value);if (first == null) {first = last = node;} else {var head = first;while (head.next != null) {head = head.next;}head.next = node;last = head.next;}}}')
    let j=0;
    for( let i=0; i<newString.length ; i++){
      if ((newString[i]=='(') ||(newString[i]=='{')||(newString[i]=='[')) {
        j++;
      }
      if ((newString[i]==')') ||(newString[i]=='}')||(newString[i]==']')) {
        j--;
      }
    }
    if (j>0) nuberArea0.innerHTML='В строке: "' + newString +'" не хватает ' + j + ' закрывающихся скобок.';
    if (j<0) nuberArea0.innerHTML='В строке: "' + newString +'" не хватает ' + j + ' открывающихся скобок.';
    else nuberArea0.innerHTML='Строка: "' + newString +'" прошла проверку.';
  }

  function test1 (){
    let newString = prompt('введите строку на проверку','var list = function (e) {var self = this;var first, last, head;self.insert = function (value) {var node = new Node(value);if (first == null) {first = last = node;} else {var head = first;while (head.next != null) {head = head.next;}head.next = node;last = head.next;}}}]');
    let arr = [0, 0, 0];
    for( let i=0; i<newString.length ; i++){
      if (newString[i]=='(') arr[0]++;
      if (newString[i]=='{') arr[1]++;
      if (newString[i]=='[') arr[2]++;
      if (newString[i]==')') arr[0]--;
      if (newString[i]=='}') arr[1]--;
      if (newString[i]==']') arr[2]--;
    }
    if (arr[0]==0 && arr[1]==0 && arr[2]==0) {
      nuberArea0.innerHTML='Строка: "' + newString +'" прошла проверку.';
      return true;
    }
    else {
      for (let m = 0; m < arr.length; m++) {
        if  (arr[m]<0) arr[m]= 'не хватает ' + arr[m] +' открывающихся скобок.';
        if  (arr[m]>0) arr[m]= 'не хватает ' + arr[m] +' закрывающихся скобок.';
        if (arr[m] == 0) arr[m]= 'соответствуют.';
      }
      nuberArea0.innerHTML='В строке: "' + newString + '"' + '<br>' +  '  скобки () '+ arr[0] +'<br>'+ ' скобки {} '+ arr[1] + '<br>'+ ' скобки [] '+ arr[2];
      return false;
    }
  }

  function sameNumbers() {         																					// работает с любыми символами
    const userNumber = prompt("Введите любое число:", "1232323");
    nuberArea1.innerHTML= 'В числе: '+ userNumber;
    var arrayOfStrings = userNumber.split('');
    var m=i=j=k=0;
    while (j>=0 &&  i < arrayOfStrings.length) {
      j =	arrayOfStrings.indexOf(arrayOfStrings[i], (j+1));
      if (arrayOfStrings[i] && j>=0) {
        arrayOfStrings[j]=undefined;
        k++;
      }
      if	(j==-1 && k>0)  {
        nuberArea1.innerHTML+= ', число '+ arrayOfStrings[i] + ' повторяется ' + k +' раз(а)';
        m++; k=0;
      }
      if (j<0){
        i++;  j=i;
      }
    }
    if (m<=0) nuberArea1.innerHTML+= ', числа не повторяются.';
  }

  function test2 (){
    let newString = prompt('введите строку на проверку','var list = function (e) {{var self = this;var first, last, head;self.insert = function (value) {var node = new Node(value);if (first == null) {first = last = node;} else {var head = first;while (head.next != null) {head = head.next;}head.next = node;last = head.next;}}}');
    let a=b=c=0;
    let arr = [0, 0, 0];
    let arr1 = [0, 0, 0];
    let arrSym = [["(",")"],["{","}"],["[","]"]]
    for( let i=0; i<newString.length ; i++){
      if (newString[i]=='(') arr[0]++;
      if (newString[i]=='{') arr[1]++;
      if (newString[i]=='[') arr[2]++;
      if (newString[i]==')') arr[0]--;
      if (newString[i]=='}') arr[1]--;
      if (newString[i]==']') arr[2]--;
    }
    if (arr[0]==0 && arr[1]==0 && arr[2]==0) {
      nuberArea0.innerHTML='Строка: "' + newString +'" прошла проверку.';
      return true;
    }
    else {
      for (let m = 0; m < arr.length; m++) {
        if  (arr[m]<0) arr1[m]= 'не хватает ' + arr[m] +' открывающихся скобок.';
        if  (arr[m]>0) arr1[m]= 'не хватает ' + arr[m] +' закрывающихся скобок.';
        if (arr[m] == 0) arr1[m]= 'соответствуют.';
      }
      for (var i = 0; i < 3; i++) {
        if (arr[i]>0) {
          a = newString.lastIndexOf(arrSym[i][1]);
          b = arrSym[i][1];
        }
        if (arr[i]<0) {
          a = newString.indexOf(arrSym[i][0]);
          b = arrSym[i][0];
        }
        var ww  ='<span>'+newString.slice(0, a)+'<span style="color:red;">' +b + '</span>'+newString.slice(a+1, newString.length)+'</span>';
      }
      nuberArea0.innerHTML='В строке: "' + ww + '"' + '<br>' +  '  скобки () '+ arr1[0] +'<br>'+ ' скобки {} '+ arr1[1] + '<br>'+ ' скобки [] '+ arr1[2];
      return false;
    }
  }


  function test3 (){
  let  arr = [];
  //let arrSym = ["(","{","["]
    let newString = prompt('введите строку на проверку','var list = function (e) {var self = this;var first, last, head;self.insert = function [(value)] {var node = new Node(value);if (first == null) {first = last = node;} else {var head = first;while (head.next != null) {head = head.next;}head.next = node;last = head.next;}}}');
    for( let i=0; i<newString.length ; i++){
      if( (newString[i]=='(') || (newString[i]=='{') || (newString[i]=='[') || (newString[i]==')') || (newString[i]=='}') || (newString[i]==']')) arr.push(newString[i]);
    }
    console.log(arr);
    var a=b=c=d=e=0;
    while (arr.length>0 ) {
      e=arr.length;
      a = arr.indexOf('(', (a+1));
      console.log(a);
      console.log(arr);
      if (arr[a+1]==')') {
        arr.splice(a, 2);
        a=0;
      }
      if (a==-1) {

        b = arr.indexOf('{', (b+1));
        console.log(b);
        console.log(arr);
        if (arr[b+1]=='}') {
          arr.splice(b, 2);
          b=0;
        }
        if (b==-1) {

          c = arr.indexOf('[', (c+1));
          console.log(c);
          console.log(arr.length);
          if (arr[c+1]==']') {
            arr.splice(c, 2);
            c=0;
          }
          if ((c==-1)&&(b==-1)&&(a==-1)) {
            a=b=c=0;
            d=arr.length;
            if (e=d) {
              break;
            }
          }
        }
      }
    }
  }
