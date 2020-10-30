import * as React from 'react';
import styled from 'styled-components';
import CodeBasixComp from '../components/CodeBasixComp';
import CodeBasixAbout from '../components/CodeBasixAbout';

const Slide = require('react-reveal/Slide');

const CodeBasix: React.FC<ICodeBasixProps> = (props) => {

    return (
        <>
            <Layout>
                <div className="hero-image">
                    <div id="home" className="container h-100 no-gutters">
                        <div className="row">
                            <Slide top>
                                <div className="col-md-4">
                                    <a href="#home">
                                        <img
                                            src="https://news-api.s3.us-east-2.amazonaws.com/codeBasix-NoBG.png"
                                            className="img-fluid mobile-logo mt-3"
                                            alt="codeBasix logo"
                                        />
                                    </a>
                                </div>
                            </Slide>
                            <div className="col-md-8 mt-5">
                                <div className="row justify-content-end mt-5 ">
                                    <Slide top>
                                        <h4 className="font-weight-lighter mobile-nav-text">Welcome</h4>
                                        <a href="#about">
                                            <h4 className="font-weight-lighter mx-5 mobile-nav-text">About</h4>
                                        </a>
                                        <a href="#services">
                                            <h4 className="font-weight-lighter mobile-nav-text">Services</h4>
                                        </a>
                                        <h4 className="font-weight-lighter ml-5 mobile-nav-text">Contact</h4>
                                    </Slide>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-10 mt-5">
                                <Slide left>
                                    <div className="display-1 ml-5 font-weight-lighter mobile-text mobile-margin ">Move forward...</div>
                                </Slide>
                                <Slide right>
                                    <div className="display-1 ml-5 font-weight-lighter mobile-text">Go back to basics!</div>
                                </Slide>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
            <div id="services">
                <div className="col-md-12">
                    <div><CodeBasixComp /></div>
                </div>
            </div>
            <div id="about">
                <div><CodeBasixAbout /></div>
            </div>
        </>
    )
}

const Layout = styled.div`
.hero-image {
    background-image: url("https://news-api.s3.us-east-2.amazonaws.com/codeBasix-siteBG.jpg");
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


    .mobile-nav-text {
        @media not all and (min-width: 576px){
            font-size: 15px;
            margin-top: -100px;
            margin-right: 15px;
        }
    }   
    .mobile-margin {
        @media not all and (min-width: 576px) {
          margin-top: 50%
        }
    } 
}




.mobile-logo {
    @media not all and (min-width: 768px) {
      height:100px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
}
.home {
    width: 250px;
    height: 300px;
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
    animation: gradient 15s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

`

export interface ICodeBasixProps { }

export default CodeBasix;