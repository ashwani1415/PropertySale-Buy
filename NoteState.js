import React,{useState} from 'react'
import NoteContext from './NoteContext'


export default function NoteState(props) {
const [isshown,setIsShown]=useState(true);
const [user,setUser]= useState("Guest")

  return (
   <NoteContext.Provider value={{isshown,setIsShown,user,setUser}}>
   {props.children}
   </NoteContext.Provider>
  )
}