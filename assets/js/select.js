//сброс значений элементов формы и запоминание выбранной опции Select
//document.getElementById("subj").onchange = function() {
//	localStorage.setItem('subj', document.getElementById("subj").value);
//	document.getElementById("myForm").reset();
//	document.getElementById("hint").style.display='none';
//	document.getElementById("hint").innerHTML = "";
//	if (localStorage.getItem('subj')) {
//		document.getElementById("subj").options[localStorage.getItem('subj')].selected = true;
		
//	}
//}
if (document.getElementById("subj")) {
  switch (document.getElementById("subj").value) {
    case '5':
      document.getElementById("hint").style.display = 'block';
      document.getElementById("hint").innerHTML = "<a style='color: #337ab7; text-decoration: none;' href='assets/files/05_spr.pdf' target='_blank'>Справочные материалы /</a><a style='color: #337ab7; text-decoration: none;' href='assets/files/05_sprb.pdf' target='_blank'> Даведачныя матэрыялы</a>";
      break;
    case '8':
      document.getElementById("hint").style.display = 'block';
      document.getElementById("hint").innerHTML = "При заполнении поля части В используйте языковую раскладку «Немецкий (Германия)». В этой раскладке для написания немецких букв «Y, Z, Ü, Ö, Ä» на клавиатуре используются клавиши с русскими буквами «Я, Н, Х, Ж, Э» соответственно (т. е. «Y» = «Я», «Z» = «Н», «Ü» = «Х», «Ö» = «Ж», «Ä» = «Э»).";
      break;
    case '9':
      document.getElementById("hint").style.display = 'block';
      document.getElementById("hint").innerHTML = "При заполнении поля части B используйте раскладку клавиатуры «Испанский (Испания, международная сортировка)». На клавиатуре буква Ññ соответствует клавише «ж». Для написания букв под ударением нажмите клавишу «э», затем необходимую испанскую/латинскую букву";
      break;
    case '10':
      document.getElementById("hint").style.display = 'block';
      document.getElementById("hint").innerHTML = "Перед тем как записать ответы на задания части В выберите французский язык (<b>FR</b>) на языковой панели. При наборе текста на клавиатуре с раскладкой QWERTY (<b>EN</b>) следует учесть несовпадение в размещении некоторых букв: <p style=''><table style='width:300px;text-align:center;' summary=''><tr><td><b>FR</b></td><td>A</td><td>Z</td><td>Q</td><td>M</td><td>W</td></tr><tr><td><b>EN</b></td><td>Q</td><td>W</td><td>A</td><td>:</td><td>Z</td></tr></table><p>Буквы с надстрочными и подстрочными знаками расположены на клавиатуре с раскладкой QWERTY (<b>EN</b>) на следующих клавишах:<p style=''><table style='width:300px;text-align:center;' summary=''><tr><td><b>FR</b></td><td>à</td><td>é</td><td>è</td><td>ç</td><td>ù</td><td>‘</td></tr><tr><td><b>EN</b></td><td>0</td><td>2</td><td>7</td><td>9</td><td>\"</td><td>4</td></tr></table><p>Особым способом набираются буквы со значком ^ (<i>accent circonflexe</i>) â, ê, û, ô: нажмите последовательно клавишу со значком {, а за ней – клавишу с нужной буквой (a, e, u или o).<p>Слова, содержащие буквы с надстрочными и подстрочными знаками, следует набирать не заглавными, а строчными буквами.<p>Желаем успеха!";
      break;
    case '15':
      document.getElementById("hint").style.display = 'block';
      document.getElementById("hint").innerHTML = "При заполнении поля части B используйте раскладку клавиатуры «Китайский (упрощенное письмо, КНР)». На клавиатуре пользуйтесь латинскими буквами для транскрибирования китайских иероглифов";
      break;
  }
}
