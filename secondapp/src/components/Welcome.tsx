import React, { ChangeEvent, useEffect, useState } from 'react';
interface WelcomeProps{
    name : string
}
const Welcome: React.FC<WelcomeProps> = ({name}): JSX.Element => {
    const [time, setTime] = useState<Date>(() => new Date(Date.now()));
    const [message, setMessage]= useState<string>('');

    setInterval(() => {
        setTime(new Date(Date.now()));
      }, 1000);

      const updateMessage = (e:ChangeEvent<HTMLInputElement>):void => {
          const {value} = e.target;
            setMessage(value);
      }

      useEffect(()=>{
       const timer = setInterval(()=>{
           setTime(new Date(Date.now()));
       },1000);
       return () => {
           clearInterval(timer)
        };
      },[name]);
    return (
        <div>
            Welcome {name} !! {time.toUTCString()}
            <input type="text"
                value={message}
                onChange={updateMessage}
            >
            </input>
            Your Message : {message}
        </div>
    )
}

export default Welcome
