import React from 'react'
import {Form, Button} from 'react-bootstrap';
import {useState} from 'react';
import {useDispatch} from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

const id = uuidv4();

const ContactForm = () => {
	const [name, setName] =useState('')
	const [phoneNumber, setPhoneNumber]=useState(0)
	const actionSender = useDispatch()
	const addContact=(e)=>{
		e.preventDefault()
		actionSender({type:'add_contact', payload:{id, name, phoneNumber, keyword:""}})
		setName(''); setPhoneNumber(0)
	}
  return (
	<div>
		<Form onSubmit={addContact}>
			<Form.Group className="mb-3" controlId="formName">
				<Form.Label>이름</Form.Label>
				<Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="이름을 입력해주세요" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="formContact">
				<Form.Label>전화번호</Form.Label>
				<Form.Control value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} type="number" placeholder="전화번호를 입력해주세요" />
			</Form.Group>
			<Button variant="primary" type="submit">
				추가
			</Button>
		</Form>
	</div>
  )
}

export default ContactForm
