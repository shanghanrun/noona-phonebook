import React from 'react'
import {Container} from 'react-bootstrap'

const ContactItem = ({item, index, handleDelete}) => {
	function deleteItem(id){   
		handleDelete(id)
	}
  return (
	<Container>
		<div className="item">
			<div className="item-img" lg={2}>
				<img width={100} src="https://tse2.mm.bing.net/th?id=OIP.CyWOZUh-iap_O46jmMhqKwHaHa&pid=Api&P=0&h=220"  alt=""/>
			</div>
			<div className="item-text" lg={10}>
				<div>{item.name}</div>
				<div>{item.phoneNumber}</div>
				<button>수정</button>
				<button onClick={()=>deleteItem(item.id)}>삭제</button>
			</div>
		</div>
	</Container>
  )
}

export default ContactItem
