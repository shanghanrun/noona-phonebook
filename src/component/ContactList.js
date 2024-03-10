import React from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import {useSelector} from 'react-redux'
import {useState, useEffect, useMemo} from 'react'

const ContactList = () => {
	const contactList= useSelector(state=> state.contactList)
	const keyword = useSelector(state => state.keyword)
	let [filteredList, setFilteredList] = useState([])

	useEffect(()=>{
		if(keyword !== ""){
			let list = contactList.filter((item)=> item.name.includes(keyword));
			setFilteredList(list)
		} else{
			setFilteredList(contactList)
		}
	},[keyword, contactList])
	// const contactList = useSelector(state => state.contactList)
  return (
	<div>
	  <SearchBox />
	  {/* {contactList.map((item,i)=>
	 	<ContactItem key={i} item={item} /> 
	  )} */}
	  <div>num: {filteredList.length}</div>
	  {filteredList.map((item,i)=> (
		<ContactItem key={i} item={item} />
	  ))}
	</div>
  )
}

export default ContactList
