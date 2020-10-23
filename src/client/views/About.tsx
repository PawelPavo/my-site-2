import * as React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Scroll from '../components/scroll/Scroll';
const Zoom = require('react-reveal/Zoom')


const About: React.FC<IAboutProps> = (props) => {
    return (
        <Zoom top>
            <Layout>
                <div className="hero-image">
                    <div className="row text-center h-25">
                    </div>
                    <main className="d-flex justify-content-center h-50">
                        <div className="row d-flex justify-content-center">
                            <div className="mobile-text display-2 font-weight-lighter text-light">Pawel Jaskolski</div>
                            <h3 className="text-light border border-bottom-0 border-right-0 pl-3 pt-3 ml-5">Software Developer</h3>
                        </div>
                    </main>
                    <div className="col-md-12 d-flex justify-content-center align-items-center">
                        <div className="display-2 font-weight-lighter"><Scroll /></div>
                    </div>
                </div>
                <div id="about">
                    <div className="h-25">
                        <Navigation />
                    </div>
                    <div className="row h-75">
                        <div className="col-md-12 d-flex justify-content-center align-items-center">
                            <div className="display-2 font-weight-lighter">About</div>
                        </div>
                    </div>
                </div>
            </Layout>
        </Zoom>
    )
}

const Layout = styled.div`
.hero-image {
    background-image: url("https://mocah.org/uploads/posts/1071997-sunlight-trees-forest-nature-green-dirt-road-pine-trees-jungle-foliage-rainforest-steps-tree-track-screenshot-woodland-habitat-natural-environment-atmospheric-phenomeno.jpg");
    height: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;

    .mobile-text {
        @media not all and (min-width: 576px) {
          font-size: 50px;
        }
      }    


}  
`

export interface IAboutProps { }

export default About;