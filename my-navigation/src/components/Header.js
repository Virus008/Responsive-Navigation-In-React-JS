import React from 'react';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a class="navbar-brand" href="#">Virus008</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mynav" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="mynav">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link" href="#">About</a>
                            <a class="nav-item nav-link" href="#">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;