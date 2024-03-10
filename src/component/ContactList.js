import React from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import {useSelector, useDispatch} from 'react-redux'
import {useState, useEffect} from 'react'

const ContactList = () => {
	const dispatch = useDispatch()
	let contactList= useSelector(state=> state.contactList)
	const keyword = useSelector(state => state.keyword)
	let [filteredList, setFilteredList] = useState(contactList)

	const handleDelete = (id) => {
        // 삭제 작업을 처리하여 상태 업데이트
        const updatedList = filteredList.filter(item => item.id !== id)
        contactList = [...updatedList]
		dispatch({ type: 'delete_item', payload: updatedList })
    }

	useEffect(()=>{
		if(keyword !== ""){
			let list = contactList.filter((item)=> item.name.includes(keyword));
			setFilteredList(list)
		} else{  // keyword ==''
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
	  {filteredList.map((item,index)=> (
		<ContactItem key={index} item={item} handleDelete={handleDelete}/>
	  ))}
	</div>
  )
}

export default ContactList
