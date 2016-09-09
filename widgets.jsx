import React from 'react';
import ReactDOM from 'react-dom';
import Congrats from './congrats';
import Tabs from './tabs';
import Clock from './clock';
import Weather from './weather';
import AutoComplete from './autocomplete';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.querySelector("#root");
	ReactDOM.render(
		<Widgets />, root
	);
});

class Widgets extends React.Component {
  constructor () {
		super();
	}

	render () {
		const tabData = [{title: "tab1", content: "content1"},
		{title: "tab2", content: "content2"},
		{title: "tab3", content: "content3"}];

		const names = ["Jen", "Vic", "John"];
		return (
			<div>
				<Tabs tabData={tabData} />
				<Clock />
				<Weather />
				<AutoComplete names={names} />
		</div>
		);
	}
}
