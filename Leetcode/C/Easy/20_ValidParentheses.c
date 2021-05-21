bool isValid(char *s){
  int f = -1, len = strlen(s);
  // 宣告儲存左邊括號的陣列
  char stackVal[len];

  // 當*s字串不為'\0'空白字元
  while(*s){
      // 先確認*s是否為某右括號
      if(*s == ')'){
          // 確認stackVal括號類別
          if(f >= 0 && stackVal[f--] == '(');
          else return 0;
      } else if (*s == ']'){
          if(f >= 0 && stackVal[f--] == '[');
          else return 0;
      } else if (*s == '}'){
          if(f >= 0 && stackVal[f--] == '{');
          else return 0;
      } else {
          // 推進不是右括號的所有符號
          stackVal[++f] = *s;
      }
      // 移動位址空間到下一個字元(指標常有的存取方式) -> 也可使用陣列方式存取
      s++;
  }
  // 確認最後stackVal是否清空(概念上)
  return f == -1;
}