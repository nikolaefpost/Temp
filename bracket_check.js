  function test (){
    let newString = prompt('введите строку на проверку','var list = function (e) var self = this;var first, last, head;self.insert = function (value) {var node = new Node(value);if (first == null) {first = last = node;} else {var head = first;while (head.next != null) {head = head.next;}head.next = node;last = head.next;}}}')
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
    let newString = prompt('введите строку на проверку','var list = function (e) {var self = this;var first, last, head;self.insert = function (value) {var node = new Node(value);if (first == null) {first = last = node;} else {var head = first;while (head.next != null) {head = head.next;}head.next = node;last = head.next;}}]');
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
