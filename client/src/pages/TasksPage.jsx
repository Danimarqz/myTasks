import {TasksList} from "../components/TasksList";
import {useEffect, useState} from "react";

export function TasksPage(){
    const [message, setMessage] = useState('');
    useEffect(() => {
       if(localStorage.getItem('token') === null){                   
           window.location.href = '/login'
       }
       else{
        (async () => {
          try {
            const {data} = await axios.get(   
                           'http://localhost:8000/tasks/home/', user, {
                            headers: 
                            {'Content-Type': 'application/json'}
                            , withCredentials: true});
            setMessage(data.message);
         } catch (e) {
           console.log('not auth')
         }
        })()};
    }, []);
    return <TasksList />;
}