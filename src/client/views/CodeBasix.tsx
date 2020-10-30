import * as React from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

const Slide = require('react-reveal/Slide');

const CodeBasix: React.FC<ICodeBasixProps> = (props) => {

    return (
        <>
            <Layout>
                <div className="hero-image">
                    <div className="container h-100 no-gutters">
                        <div className="row">
                            <Slide bottom>
                                <div className="col-md-4 logo mobile-logo">
                                </div>
                            </Slide>
                            <div className="col-md-8">
                                <div className="row justify-content-end my-5 py-5 link">
                                    <Slide top>
                                        <h4 className="font-weight-light">Welcome</h4>
                                        <h4 className="font-weight-light mx-5">About</h4>
                                        <h4 className="font-weight-light">Services</h4>
                                        <h4 className="font-weight-light ml-5">Contact</h4>
                                    </Slide>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-10 mt-5">
                                <Slide left>
                                    <div className="display-1 ml-5 font-weight-lighter">Move forward...</div>
                                </Slide>
                                <Slide right>
                                    <div className="display-1 ml-5 font-weight-lighter">Go back to basics!</div>
                                </Slide>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

const Layout = styled.div`
.logo {
    text-align: center;
    background-image: url('https://news-api.s3.us-east-2.amazonaws.com/codeBasix-NoBG.png');
    background-size: contain;
    background-position: 50% 0;
    background-repeat: no-repeat;
    height: 300px;
}

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
          font-size: 50px;
          text-align: left;

        }
      }    


} 


.mobile-logo {
    @media not all and (min-width: 768px) {
      height:100px
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