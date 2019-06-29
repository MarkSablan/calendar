let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();


let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

let banner = document.getElementById('banner');

showCalendar(currentMonth, currentYear);

function showCalendar(month, year){
	let firstDay = (new Date(year, month)).getDay();
	let daysInMonth = 32 - new Date(year, month, 32).getDate();
	console.log(daysInMonth);

	let calendar = document.getElementById('cal-body');

	calendar.innerHTML = '';

	banner.innerHTML = months[month] + ' ' + year;

	// select

	let date = 1;
	for(let i = 0; i < 6; i++){
		let row = document.createElement('div');

		for(let j = 0; j < 7; j++){
			if(i === 0 && j < firstDay){
				let cell = document.createElement('p');
				let cellText = document.createTextNode('');
				cell.appendChild(cellText);
				row.appendChild(cell);
			}

			else if(date > daysInMonth){
				break;
			}

			else{
				let cell = document.createElement('p');
				let cellText = document.createTextNode(date);
				if(date === today.getDate() && year === today.getFullYear() && month === today.getMonth){
					// add calass
				}

				cell.appendChild(cellText);
				row.appendChild(cell);
				date++;
			}
		}

		calendar.appendChild(row);

	}
}

function next(){
	currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
	currentMonth = (currentMonth + 1) % 12;
	showCalendar(currentMonth, currentYear);
}

function prev(){
	currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
	currentMonth = (currentMonth === 0) ?  11 : currentMonth - 1;
	showCalendar(currentMonth, currentYear);
}

function jump(){
	currentMonth = document.getElementById("month").value;
	currentYear = document.getElementById("year").value;
	showCalendar(currentMonth, currentYear);
}


function current(){
	showCalendar(today.getMonth(), today.getFullYear());
}



console.log(`Current month : ${currentMonth} \nCurrent Year : ${currentYear}`);