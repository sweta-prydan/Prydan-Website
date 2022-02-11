import React,{useState,useEffect} from 'react';

export default function Counter() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((counter) => counter + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return
    <div>
        {counter}
    </div>

};