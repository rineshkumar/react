import React, { useState } from 'react';
interface WelcomeProps{
    name : string
}
const Welcome: React.FC<WelcomeProps> = ({name}): JSX.Element => {
    const [time, setTime] = useState<Date>(() => new Date(Date.now()));
    setInterval(() => {
        setTime(new Date(Date.now()));
      }, 1000);
    return (
        <div>
            Welcome {name} !! {time.toUTCString()}
        </div>
    )
}

export default Welcome
