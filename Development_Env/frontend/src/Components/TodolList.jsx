import React, {useState}from "react"
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import List from "./List"

const TodoList = () =>{
    const [item, setItem] = useState("")
    const [newitem, setNewItem] = useState([])

    const itemEvent = (e) =>{
        setItem(e.target.value)
    }

    const handleClick = () =>{
        setNewItem( (preValues) =>{
            return(
                [...preValues,item]
            )
        });
        setItem(" ")
    }
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>Todo List</h1>
                    <br />
                    <input type="text" placeholder="Add Items" value={item} onChange={itemEvent}/>
                    <Button className="newBtn" onClick={handleClick}>
                        <AddIcon />
                    </Button>
                    <br />
                    <ol>
                        
                       { newitem.map( (val, index) =>{
                            return(
                                <List key={index} text={val}/>
                            )
                        })}
                    </ol>
                    <br />
                </div>
            </div>
        </>
    )
}

export default TodoList