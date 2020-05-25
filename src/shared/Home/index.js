import React from 'react';
import {Link} from 'react-router-dom';
const Home = () => {
    return (<div>
        <h1>Hello Home</h1>
        <Link to="/news">News</Link>
        <br/>
        <Link to="/">Home</Link>
    </div>
    )
}
export default Home;