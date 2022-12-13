//от Никиты, отмена ошибочных меток
var ch=document.getElementsByClassName("checkbox_");
var chs=document.querySelectorAll("em");
var otm=document.getElementsByClassName("fieldCan");
var but=document.getElementsByName("but")[0];
var form = document.forms.myForm;
var c = 0;

function onchange(e) {
  for (var i = 0; i < 6; i++){
      if (otm[i * 2].oldvalue && otm[i * 2 + 1].oldvalue) {
			  chs[(otm[i*2].oldvalue-1)*5+(otm[i*2+1].oldvalue-1)].className="ch1";
			  chs[(otm[i*2].oldvalue-1)*5+(otm[i*2+1].oldvalue-1)].className="checkbox-custom";
        ch[(otm[i * 2].oldvalue - 1) * 5 + (otm[i * 2 + 1].oldvalue - 1)].checked = true;
			  otm[i*2].oldvalue="";
			  otm[i*2+1].oldvalue="";
		}
      if (otm[i * 2].value && otm[i * 2 + 1].value && otm[i * 2 + 1].value < 6 && ch[(otm[i * 2].value - 1) * 5 + (otm[i * 2 + 1].value - 1)] && ch[(otm[i * 2].value - 1) * 5 + (otm[i * 2 + 1].value - 1)].checked) {
			chs[(otm[i*2].value-1)*5+(otm[i*2+1].value-1)].className="checkbox-custom";
			chs[(otm[i*2].value-1)*5+(otm[i*2+1].value-1)].className="ch1";
        ch[(otm[i * 2].value - 1) * 5 + (otm[i * 2 + 1].value - 1)].checked = false;
			otm[i*2].oldvalue=otm[i*2].value;
			otm[i*2+1].oldvalue=otm[i*2+1].value;
		}
	}
}
function onclick(e) {
  e.target.disabled = true;
  for (var i = 0; i < 6; i++){
		if (otm[i*2].value && otm[i*2+1].value && otm[i*2+1].value<6 && ch[(otm[i*2].value-1)*5+(otm[i*2+1].value-1)] && ch[(otm[i*2].value-1)*5+(otm[i*2+1].value-1)].checked){
			chs[(otm[i*2].value-1)*5+(otm[i*2+1].value-1)].className="checkbox-custom";
			chs[(otm[i*2].value-1)*5+(otm[i*2+1].value-1)].className="ch1";
			ch[(otm[i*2].value-1)*5+(otm[i*2+1].value-1)].checked=false;
			otm[i*2].oldvalue=otm[i*2].value;
			otm[i*2+1].oldvalue=otm[i*2+1].value;
		}
  }
  //console.log("Количество меток = " + c);
}
function onreset(e) {
  for (var i = 0; i < 150; i++) {
    ch[i].disabled = false;
  }
  for (var i = 0; i < 6; i++) {
    if (otm[i * 2].oldvalue && otm[i * 2 + 1].oldvalue)
    {
      chs[(otm[i * 2].oldvalue - 1) * 5 + (otm[i * 2 + 1].oldvalue - 1)].className = "ch1";
      chs[(otm[i * 2].oldvalue - 1) * 5 + (otm[i * 2 + 1].oldvalue - 1)].className = "checkbox-custom";
      otm[i * 2].oldvalue = "";
      otm[i * 2 + 1].oldvalue = "";
		}
	}
  for (i = 0; i < 16; i++) {
    otm[i].disabled = false;
  }
  for (i = 1; i <= 22; i++) {
    form.elements['b' + i].removeAttribute("readonly");
    form.elements['b' + i].style.color = "black";
    form.elements['b' + i].style.textDecoration = "none";
	}
  for (var i = 1; i <= 4; i++) {
    form.elements['questB' + i].removeAttribute("readonly");
    form.elements['pointB' + i].removeAttribute("readonly");
	}
	form.elements.but.disabled=false;
}

function onsubmit(e) {
  for (var i = 0; i < 150; i++) {
    ch[i].disabled = true;
  }
	form.submit();
	//e.preventDefault();
  for (var i = 0; i < 6; i++) {
      if (otm[i * 2].oldvalue && otm[i * 2 + 1].oldvalue) {
        ch[(otm[i * 2].oldvalue - 1) * 5 + (otm[i * 2 + 1].oldvalue - 1)].disabled = true;
      }
	}
  for (var i = 0; i < 150; i++) {
    if (ch[i].checked) {
        ch[i].disabled = false;
      }
  }
}
function getChar(event) {
	if (event.which == null) {
		if (event.keyCode < 32) { 
			return null; }
		return event.key;
		//return String.fromCharCode(event.keyCode)
	}
	if (event.which != 0 && event.charCode != 0) {
		if (event.which < 32) {
			return null; }
		return event.key;
		//return String.fromCharCode(event.keyCode);
	}
	return null;
}
function onkeypress(e){
	e = e || event;
  if (e.ctrlKey || e.altKey || e.metaKey) { return; }
	var chr = getChar(e);
	if (chr == null) { return };
  if (chr < '0' || chr > '9') {
		return false;
	}
}
for (var i = 0; i < 150; i++){
  if (ch[i])
    ch[i].addEventListener("click", onclick);
}
for (var i = 0; i < 22; i++){
  if (otm[i]) {
    otm[i].addEventListener("change", onchange);
    otm[i].onkeypress = onkeypress;
  }
}

if (form)
  form.addEventListener("reset", onreset);
if (but)
  but.addEventListener("click", onsubmit);
//form.addEventListener("submit", onsubmit);

//блокировка полей для ввода в случае, если предмет не выбран
//if (opt == '0') {
//	for(var i=0;i<300;i++) {
//		ch[i].disabled=true;
//	}
//	for(var i=0;i<12;i++) {
//		otm[i].disabled=true;
//	}
//	for(var i=1;i<=12;i++) {
//		form.elements['b'+i].setAttribute("readonly", "readonly");
//	}
//	for(var i=1;i<=2;i++) {
//		form.elements['questB'+i].setAttribute("readonly", "readonly");
//		form.elements['pointB'+i].setAttribute("readonly", "readonly");
//	}
//	form.elements.but.disabled = true;
//	form.addEventListener("click", form.elements.subj.focus());
//}

//замена ошибочных ответов части B
function changeB() { //функция блокировки непустых полей части B
	for (i=1;i<=22;i++) {
		//if (inp[i].value != '') inp[i].setAttribute("readonly", "readonly");
	}
}

	var i = 0;
	var j = 0;
	var questB = [];
	var pointB = [];
	var inp = [];

	//var form = document.forms.myForm;
if (form) {
	for (i=1;i<=4;i++) {
		questB[i] = form.elements['questB'+i];
		questB[i].onkeypress = onkeypress;
		questB[i].oninput = calculate;
		questB[i].onkeyup = calculate;
    pointB[i] = form.elements['pointB' + i];
    pointB[i].onkeypress = "return event.keyCode!=13";
    //pointB[i].addEventListener("keydown", function (event) { if (event.key === "Enter") { event.preventDefault(); console.log("Enter"); }});
		pointB[i].oninput = calculate;
		pointB[i].onkeyup = calculate;
	}
	for (i=1;i<=22;i++) {
		inp[i] = form.elements['b'+i];
    inp[i].addEventListener("blur", changeB);
    inp[i].onkeypress = "return event.keyCode!=13";
    //inp[i].addEventListener("keydown", function (event) { if (event.key === "Enter") { event.preventDefault(); console.log("Enter");} });
  }
}

function calculate() {
  if (form) {
		//для замены ошибочных ответов
		var qB = [];
		var pB = [];
		for (i=1;i<=4;i++) {
			qB[i] = questB[i].value;
			pB[i] = pointB[i].value;
		}
		for (i=1;i<=22;i++) {
			for (j=1;j<=4;j++) {
				if (qB[j] == '' || pB[j] == '') {
					inp[i].style.color = "black";
					inp[i].style.textDecoration = "none";
				}
				if (qB[j] == i && pB[j] != '') {
					inp[i].style.color = "gray";
					inp[i].style.textDecoration = "line-through";
				}
				else {
					inp[i].style.color = "black";
					inp[i].style.textDecoration = "none";
				}
			}
		}
		for (i=1;i<=22;i++) {
			for (j=1;j<=4;j++) {
				if (qB[j] == i && pB[j] != '') {
					inp[i].style.color = "gray";
					inp[i].style.textDecoration = "line-through";
				}
			}
    }
  }
}
calculate();
