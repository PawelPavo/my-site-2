import * as React from 'react';
import styled from 'styled-components';
import CodeBasixCard from './CodeBasixCard';

const Slide = require('react-reveal/Zoom')

const CodeBasixAbout: React.FC<ICodeBasixAboutProps> = (props) => {

    return (
        <Layout>
            <main className="container h-100 hero-image2">
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <Slide left>
                            <div className="display-3 font-weight-lighter mobile-text">About Us</div>
                        </Slide>
                    </div>
                </div>
                <div className="row justify-content-end">
                    <div className="col-md-6">
                        <div className="card" style={{ maxWidth: "540px" }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src="https://cdn-imstrong-www.imstrong.co/v2/assets/img/customers/default.png" className="card-img" alt="Avatar Image" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body bg-primary text-light">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card my-3" style={{ maxWidth: "540px" }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src="https://cdn-imstrong-www.imstrong.co/v2/assets/img/customers/default.png" className="card-img" alt="Avatar Image" />
                                </div>
                                <div className="col-md-8">
                                <div className="card-body bg-primary text-light">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ maxWidth: "540px" }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src="https://cdn-imstrong-www.imstrong.co/v2/assets/img/customers/default.png" className="card-img" alt="Avatar Image" />
                                </div>
                                <div className="col-md-8">
                                <div className="card-body bg-primary text-light">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

const Layout = styled.div`

.hero-image2 {
    background-image: url("https://news-api.s3.us-east-2.amazonaws.com/codeBasix-siteBGflipped.jpeg");
    height: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    .mobile-text {
        @media not all and (min-width: 576px) {
          font-size: 30px;
        }
    } 

.mobile-text {
    @media not all and (min-width: 768px) {
      font-size: 50px;
    }
  }

  .mobile-logo {
    @media not all and (min-width: 768px) {
        height:auto;
    }
  } 
`

export interface ICodeBasixAboutProps { }

export default CodeBasixAbout;