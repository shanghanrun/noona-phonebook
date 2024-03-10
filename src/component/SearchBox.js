import React from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {useState} from 'react'

const SearchBox = () => {
	const [keyword, setKeyword] = useState('')
	const dispatch = useDispatch()
	const searchByName =(event)=>{
		event.preventDefault()
		console.log('called')
		dispatch({type:'search_by_name', payload:{keyword}})
		setKeyword("")
	}
  return (
	<Form onSubmit={searchByName} className="search-form">
		<Row>
		<Col lg={10}>
			<Form.Control value={keyword} 
				onChange={(e)=>setKeyword(e.target.value)} type="text" placeholder="이름검색" />
		</Col>
		<Col lg={2}>
			<Button variant="primary" type="submit">찾기</Button>
		</Col>
		</Row>
	</Form>
  )
}

export default SearchBox
