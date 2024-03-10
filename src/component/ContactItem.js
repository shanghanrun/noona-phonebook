import React from 'react'
import {Row, Col} from 'react-bootstrap'

const ContactItem = ({item}) => {
  return (
	<Row>
	  <Col lg={2}>
	  	<img width={100} src="https://tse2.mm.bing.net/th?id=OIP.CyWOZUh-iap_O46jmMhqKwHaHa&pid=Api&P=0&h=220" />
	  </Col>
	  <Col lg={10}>
	  	<div>{item.name}</div>
	  	<div>{item.phoneNumber}</div>
	  </Col>
	</Row>
  )
}

export default ContactItem
