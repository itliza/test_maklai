const testForm = document.querySelector(`#testForm`);

testForm.addEventListener(`submit`, e=>{
	e.preventDefault();

	let firstInput = parseInt((e.target.querySelector(`input[data-name="firstInput"]`).value).replaceAll(` `, ``));
	let secondInput = parseInt((e.target.querySelector(`input[data-name="secondInput"]`).value).replaceAll(` `, ``));
	let operator = e.target.querySelector(`select[data-name="operator"]`).value;

	if(!isNaN(firstInput && secondInput) || !(firstInput && secondInput) === null){
		if(operator === '+'){
			result = firstInput + secondInput;
		} else if (operator === '-'){
			result = firstInput - secondInput;
		} else if (operator === '*') {
			result = firstInput * secondInput;
		} else if (operator === '/'){
			result = firstInput / secondInput;
		}

		let resultDiv = e.target.querySelector(`#checkResult`);
		resultDiv.innerHTML = `${Math.round(result)}`;

	} else {
		alert(`Please, input numbers only and dont leave an empty input!!`)
	}

})