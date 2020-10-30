import * as React from 'react';
import Navigation from '../components/Navigation';
import Typical from 'react-typical'
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import CodeBasixCard from './CodeBasixCard';

const Slide = require('react-reveal/Zoom')

const MyProjects = [
    {
        id: 1,
        name: "Stunning Design",
        description: "First impressions count. The key to a successful business on the web is outstanding web design. The way for any business to achieve success on the internet is to establish a brand. In order to do this, you must have a great looking, website to grab visitor's attention.",
    },
    {
        id: 2,
        name: "We Work With You",
        description: "We care about our clients! We take the time to show you the ins and outs of your website so you have control over your online business. Of course we are always there to help if you need!",
    },
    {
        id: 3,
        name: "Responsive and Mobile-Ready",
        description: "With over 60% of website traffic coming from mobile devices, having a responsive website is a must! All our websites come mobile-ready to provide the best user experience.",
    },
];

const CodeBasixComp: React.FC<ICodeBasixCompProps> = (props) => {
    const [name, setName] = React.useState<string>('My Projects')

    const handleClick = async (e: any) => {
        setName(e.target.textContent)
    }

    return (
        <Layout>
            <main className="container h-100">
                <div className="row">
                    <div className="col-md-12 mx-auto text-center my-5">
                        <Slide bottom>
                            <div className="display-3 font-weight-lighter mobile-text">Web Services</div>
                        </Slide>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-8">
                        {MyProjects.map(project => (
                            <CodeBasixCard key={project.name} project={project} click={handleClick} />
                        ))}
                    </div>
                    <Slide right>
                        <div className="col-md-4 my-auto mx-auto">
                            <a href="#home">
                                <img src="https://news-api.s3.us-east-2.amazonaws.com/codeBasix-NoBG.png" className="img-fluid mobile-logo" alt="codeBasix logo" />
                            </a>
                            <div className="logo"></div>
                        </div>
                    </Slide>
                </div>
            </main>
        </Layout>
    )
}

const Layout = styled.div`
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

export interface ICodeBasixCompProps { }

export default CodeBasixComp;