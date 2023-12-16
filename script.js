function removeTrailingZeros(str) {
  return str.replace(/\.?0*$/, "");
}
function divisionIntoTwoParts(arr, percent) {
  // Вычисление первого значения (percent%)
  const firstValue = arr.map((x) => removeTrailingZeros(((x * percent) / 100).toFixed(10)));

  // Вычисление второго значения ((100 - percent)%)
  const secondValue = arr.map((x) => removeTrailingZeros(((x * (100 - percent)) / 100).toFixed(10)));

  // Вычисление итоговых сумм для обоих значений
  const totalFirstValue = removeTrailingZeros(firstValue.reduce((acc, val) => acc + parseFloat(val), 0).toFixed(10));
  const totalSecondValue = removeTrailingZeros(secondValue.reduce((acc, val) => acc + parseFloat(val), 0).toFixed(10));

  // Вычисление и вывод общей суммы от входных данных
  const totalInput = removeTrailingZeros(arr.reduce((acc, val) => acc + val, 0).toFixed(10));

  // Очищаем предыдущие результаты
  document.getElementById("output").innerHTML = "";

  // Создаем таблицу для вывода результатов
  const table = document.createElement("table");
  table.classList.add("output-table");

  // Добавляем заголовок таблицы
  const headerRow = table.insertRow(0);
  const headerCell1 = headerRow.insertCell(0);
  const headerCell2 = headerRow.insertCell(1);
  const headerCell3 = headerRow.insertCell(2);
  headerCell1.textContent = "Input";
  headerCell2.textContent = `Calculation at ${percent}%`;
  headerCell3.textContent = `Calculation at ${100 - percent}%`;

  // Добавляем строки с данными
  arr.forEach((value, index) => {
    const row = table.insertRow(index + 1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.textContent = value;
    cell2.textContent = firstValue[index];
    cell3.textContent = secondValue[index];
  });

  // Добавляем строки с итогами
  const totalRow = table.insertRow();
  const totalCell1 = totalRow.insertCell(0);
  const totalCell2 = totalRow.insertCell(1);
  const totalCell3 = totalRow.insertCell(2);
  totalCell1.textContent = `Итог: ${totalInput}`;
  totalCell2.textContent = `Итог: ${totalFirstValue}`;
  totalCell3.textContent = `Итог: ${totalSecondValue}`;

  // Вставляем таблицу на страницу
  document.getElementById("output").appendChild(table);
}

function calculate() {
  const arrayInput = document.getElementById("arrayInput").value;
  const percentInput = document.getElementById("percentInput").value;

  console.log("Array Input:", arrayInput);
  console.log("Percent Input:", percentInput);

  // Преобразование входной строки в массив чисел
  const arr = arrayInput.split(",").map(Number);

  // Вызов вашей существующей функции
  divisionIntoTwoParts(arr, percentInput);
}
