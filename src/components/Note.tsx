import React, { MouseEvent, } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import { ItemWall } from '../vendor/types'
import { CLIENT_ID } from '../vendor/constants'
import axios from 'axios'

const StyledItemWall = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	justify-content: space-around;
	width: 600px;
	margin: 0 auto 10px;
	border: 1px solid #000;
	border-radius: 4px;
`

const Paragraph = styled.p`
	word-break: break-all;
`

interface NoteProps {
	key: number
	item: ItemWall
	fetchData: () => Promise<void>
}

const Note = ({item, fetchData}:NoteProps) => {

	const deleteItem = async () => {
		const deletePost = await axios.delete(`https://api.todoist.com/rest/v1/tasks/${item.id}`, {
				headers: {
				'Authorization': `Bearer ${localStorage.getItem('access_token')}`
			}
		}
		)
		fetchData()
	}

	const closeItem = async () => {
		const closePost = await axios.post(`https://api.todoist.com/rest/v1/tasks/${item.id}/close`,
		{},
		{
				headers: {
				'Authorization': `Bearer ${localStorage.getItem('access_token')}`
			}
		}
		)
		fetchData()
	}

	const changeItem = async (newText: string) => {
		const changePost = await axios.post(`https://api.todoist.com/rest/v1/tasks/${item.id}`,
		{
			content: newText
		},
		{
				headers: {
				'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
				'Content-Type': 'application/json',
				'X-Request-Id': `${CLIENT_ID}`
			}
		}
		)
		fetchData()
	}

	return (
		<StyledItemWall>
			<h1>{item.id}</h1>
			<input type='checkbox' checked={item.completed} onChange={closeItem}/>
			<Paragraph>{item.content}</Paragraph>
			<Button>Изменить</Button>
			<Button onClick={deleteItem}>Удалить</Button>
		</StyledItemWall>
	)
}

export default Note