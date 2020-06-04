import React, {Component} from 'react';

class NewDetails extends Component {
    render() {
        return (
            <div>
                <div>
                    <header className="masthead tintuc">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-lg-12 my-auto">
                                    <div className="header-content mx-auto">
                                        <h1 className="mb-1" style={{textAlign: 'center'}}>Chi tiết</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/*begin tin tức*/}
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <img src="http://placehold.jp/900x600.png" className="img-fldid" />
                            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                            <hr className="my-2" />
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        </div>
                    </div>
                    <div className="container">
                        <h4 className="card-title text-center">Tin liên quan</h4>
                        <div className="row">
                            <div className="col-12">
                                <div className="card-deck">
                                    <div className="card">
                                        <a href="chitiet.html"><img className="card-img-top" src="http://placehold.jp/500x300.png" alt="Card image cap" /></a>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <a href="chitiet.html"><img className="card-img-top" src="http://placehold.jp/500x300.png" alt="Card image cap" /></a>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <a href="chitiet.html"><img className="card-img-top" src="http://placehold.jp/500x300.png" alt="Card image cap" /></a>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default NewDetails;