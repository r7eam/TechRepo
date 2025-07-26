import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { useState, useEffect } from 'react';

function Clock() {
    const [time ,setTime ] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
            },1000);

        return ()=>clearInterval(interval)
    }, []);

    const formattedTime = time.toLocaleTimeString(); 
    const formattedDate = time.toLocaleDateString();  
    return (
        <div>
            <Header />
            <h1>Timer: {formattedTime} clock</h1>
            <h2>Date: {formattedDate}</h2>
            <Footer />
        </div>
    );
}
export default Clock;
