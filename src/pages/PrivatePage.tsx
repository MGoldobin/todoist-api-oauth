import React, { useEffect, useState } from 'react'
import fetchJsonp from 'fetch-jsonp'
import styled from 'styled-components'
import Note from '../components/Note'
import Button from '../components/Button'
import { AUTH_URL, GET_TOKEN_URL } from '../vendor/constants'
import { getCodeUri } from '../vendor/getCodeUri'
import { ItemWall } from '../vendor/types'
import axios from 'axios'

const StyledPrivatePage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 20px 0;
`

const InputArea = styled.div`
	display: flex;
	align-items: center;
`

const PrivatePage = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [data, setData] = useState<ItemWall[]|null>(null)
  const [inputValue, setInputValue] = useState('')

	const fetchData = async () => {
		if(!localStorage.getItem('access_token')) {
			const data = await axios.post(GET_TOKEN_URL(getCodeUri()))
			localStorage.setItem('access_token', data.data.access_token);
		}

		const projects = await axios.get('https://api.todoist.com/rest/v1/projects', {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('access_token')}`
			}
		})
		
		const arr = await axios.get('https://api.todoist.com/rest/v1/tasks', {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('access_token')}`
			}
		})
		setData(arr.data)
	}

	const addItem = async (text: string) => {
		const addPost = await axios.post('https://api.todoist.com/rest/v1/tasks', 
			{
				content: text
			}, 
			{
				headers: {
				'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
				'Content-Type': 'application/json' }
			}
		)
		setInputValue('')
		fetchData()
	}

	useEffect(() => {
		setIsLoading(true)
		
		fetchData()
		.catch(console.error)
		.finally(() => setIsLoading(false))
	}, [])

	return (
		<StyledPrivatePage>
			<InputArea>
				<input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
				<Button dis={isLoading} onClick={() => addItem(inputValue)}>Добавить</Button>
			</InputArea>
			{
				isLoading
				? <div>Загрузка...</div>
				: data && data.map(el => <Note key={el.id} item={el} fetchData={fetchData}/>)
			}
		</StyledPrivatePage>
	)
}

export default PrivatePage