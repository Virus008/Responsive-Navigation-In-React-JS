import React from 'react';

class Home2 extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="jumbotron">
                    <h3>Hello,</h3>
                    <p>This is Home page.</p>
                </div>
                <div className="page-content">
                    <h5>Hash Router</h5>
                    <ul>
                        <li>A router which uses client side hash routing.</li>
                        <li>Whenever, there is a new route get rendered, it updated the browser URL with hash routes. (eg., /#/contact)</li>
                        <li>Hash portion of the URL won’t' be handled by server, server will always send the index.html for every request and ignore hash value. Hash value will be handled by react router.</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Home2;


