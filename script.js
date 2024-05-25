const form = document.getElementById('form');
const formQuery = document.querySelector('#form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Bajo peso';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        description = 'Peso saludable';
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (bmi >= 25 && bmi <= 29.9) {
        description = 'Sobrepeso';
    } else if (bmi >= 30) {
        description = 'Obesidad';
    }

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
});
