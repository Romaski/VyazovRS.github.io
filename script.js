var 	//Объявление переменных
	select = document.getElementById('slcNumberElements'), 
	el = "",elMoving1 = "", elMoving2 = "",
	sortArray = [];

document.getElementById("slcNumberElements").addEventListener('change', function (e) { //действия при выборе из выпадающего списка
	sortArray = [];
	for (var i = 0; i <= 14; i++) { //заполнение массива рандомными элементами, вывод элементов в блок, показ блока
		if (i <= Number(e.target.value) && e.target.value != 0) {	
			el = document.getElementById('value'+i);
			el.style.display = 'block';
			sortArray.push( Math.round( Math.random() * 100 ));
			el.textContent = sortArray[i];
		} else { //скрытие блоков
			el = document.getElementById('value'+i);
			el.style.display = 'none';
		}
	}
	console.log( sortArray );
	var sortDiv = document.getElementById('SortArr');
	
	if (e.target.value == 0) { //проверка, что если ничего не выбранно, то ничего не отображать
		sortDiv.style.display = 'none';
	} else {
		sortDiv.style.display = 'block';
	}
	document.getElementById('Sort').onclick = function() { //действие по нажатию на кнопку, вывод в блоки отсортированного массива
		var result = BubbleSort(sortArray); 
	}
})

function BubbleSort(A) {      // A - массив, который нужно
                            // отсортировать по возрастанию.
	var n = A.length;
	for (var i = 0; i < n-1; i++) {
		for (let j = 0; j < n-1-i; j++) {
			if (A[j+1] < A[j]) {
				var t = A[j+1]; 
				A[j+1] = A[j]; 
				A[j] = t; 
					elMoving1 = document.getElementById('value'+(j+1));
					elMoving2 = document.getElementById('value'+(j));
					var tmp = elMoving2.textContent;
					elMoving2.textContent = elMoving1.textContent;
					elMoving1.textContent = tmp;
			}
		}
	}                     
	return A;    // На выходе сортированный по возрастанию массив A.
}