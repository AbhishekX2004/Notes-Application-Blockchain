import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import CreateArea from "./Components/CreateArea";
import {dkeeper_backend} from "../../declarations/dkeeper_backend";

function App() {
	const [list,setList] = React.useState([]);

	function updateList(note){
		dkeeper_backend.createNote(note.title,note.content);
   		setList([...list,note]);
	}

	function deleteNote(id){
		setList((list.filter((note,index)=>{
			return id !== index;
		})));
	}

  	return (
    	<div>
      		<Header />
      		<CreateArea addNote = {updateList} />
			{list.map((note,index) => {
				return <Note key = {index} id = {index} title = {note.title} content = {note.content} del = {deleteNote}/>;
			})}
      		<Footer />
    	</div>
  	);
}

export default App;
