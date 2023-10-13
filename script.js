console.log("Do i have my sanity?");

const peopleInSpaceSpan = document.querySelector(
	'[data-js="peopleInSpaceNumber"]'
);

function setPeopleInSpace(number) {
	peopleInSpaceSpan.textContent = `${number}`;
}

async function getPeopleInSpace() {
	const url = "http://api.open-notify.org/astros.json";
	const response = await fetch(url);

	const data = await response.json();

	const peopleInSpaceNumber = data.number;
	return peopleInSpaceNumber;
}

getPeopleInSpace().then((value) => {
	setPeopleInSpace(value);
});
