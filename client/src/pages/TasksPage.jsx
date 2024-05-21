import {TasksList} from "../components/TasksList";
import {useEffect, useState} from "react";
import axios from 'axios'

export function TasksPage(){
    const [message, setMessage] = useState('');
    
    useEffect(() => {
       if(localStorage.getItem('token') === null){                   
           window.location.href = '/login';
       }
       else{
        (async () => {
          try {
            const {data} = await axios.get(   
                           'https://darkhaiass.pythonanywhere.com/tasks/home/', {
                            headers: 
                            {'Authorization': `Bearer ${localStorage.getItem('token')}`}
                            , withCredentials: true});
            setMessage(data.message);
         } catch (e) {
           console.log(e);
          //  window.location.href = '/login';
         }
        })();
      }
    }, []);
    
    return <TasksList tasks={message} />;
}