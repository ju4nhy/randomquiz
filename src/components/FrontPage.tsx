import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import data from '../data.ts';
import { FrontPageProps, TopicCategory } from '../types'
import { topics, instructions } from '../helpers/siteTexts.ts';

const FrontPage = ({ name, setName, setReady, setDataToUse }: FrontPageProps ) => {
	const [inputValue, setInputValue] = useState('')
	const [visible, setVisible] = useState(false)

	useEffect(() => {
    document.body.style.overflow = 'hidden';
		if (name) {
      const element = document.getElementById('task');
			if (element) {
				element.scrollIntoView({
					behavior: 'smooth', 
					block: 'start', 
				});
			}
    }
    return () => { document.body.style.overflow = "auto" };
  }, [name]);

	const handleClick = () => setName(inputValue)

	const handleSetData = (label: TopicCategory) => {
		const newData = data[label]; 
		setDataToUse([...newData]);
		setTimeout(() => {
			setReady(true);
		}, 1500);
		setVisible(true);
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		const regex = /^[a-zA-Z\s]*$/
		if (regex.test(event.target.value)) {
			setInputValue(event.target.value)
		} 
	}

	return (
		<div className="flex flex-col h-screen mx-96 items-center justify-center bg-black text-white border-x-8 border-gray-800">
			<img className="w-56 h-56" src={logo}></img>
			{!name && (
				<>
					<input className="rounded-md shadow-lg text-black p-4 mt-8" onChange={handleChange} value={inputValue} placeholder="Enter your name"></input>
					<button className="w-52 bg-amber-600 rounded-md shadow-lg hover:bg-amber-500 text-md font-bold mt-4 p-2" onClick={handleClick}>Enter</button>
				</>
			)}
			{name && name.length > 1 ?
				<div className="text-center">
					<h1 className="text-6xl my-8">Hello, {name}</h1>
					<div className="w-auto text-md bg-gray-800 text-white p-8 ">
						{instructions.split('.').map((sentence, index) => (
							sentence.trim() && (<span key={index}>{sentence}.<br /></span>)
						))}
					</div>
					<div className="max-w-xl bg-gray-800 p-8 py-6 my-6 font-bold">
						<h2>Choose a topic:</h2>
						{topics.map((topic, index) => (
							<button 
								key={topic.label}
								className={`w-28 p-2 text-sm rounded-md shadow-lg bg-amber-600 hover:bg-amber-500 mt-4 ${index !== 0 ? 'ml-4' : ''}`}
								onClick={() => handleSetData(topic.label)}
							>
							 	{topic.label.replace(/(\d+)/, ' $1').replace(/^./, (char) => char.toUpperCase())}
							</button>
						))}
					</div>
					{visible ? <h1 className="text-3xl text-green-500">Good luck!</h1> : null}
				</div>
			: null}
		</div>
	)
}

export default FrontPage