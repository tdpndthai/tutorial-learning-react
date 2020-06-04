import React, {Component} from 'react';

class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="index.html">React-router</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                                aria-label="Toggle navigation">
                            Menu
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="tintuc.html">Danh sách tin</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="chitiet.html">Tin chi tiết</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="lienhe.html">Liên hệ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;