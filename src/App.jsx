import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import firebase from './Firebase'

function App() {
  const [todo, setTodo] = useState("")

  const test=firebase.firestore().collection("todo")

  const readData=()=>{
    test.onSnapshot(snap=>{
      const items=[]
      snap.forEach(data=>{
        items.push(data.data())
      })
      setTodo(items)
    })
  }

  useEffect(()=>{
    readData()
  },[])

  return (
    <div className="App">
      {
        todo && todo.map(ele=>{
          return(
            <div>
              <span>{ele.id}:-</span>
              <span>{ele.title}</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
