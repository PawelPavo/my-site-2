import * as React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const Bounce = require('react-reveal/Bounce')
const Slide = require('react-reveal/Slide')



const HomeComp: React.FC<IHomeCompProps> = (props) => {
    const [show, setShow] = React.useState<string>('none')
    const [eyes, setEyes] = React.useState<boolean>(false)

    const handleShow = async (checked: any) => {
        setEyes(!eyes)
        if (show === 'none') {
            setShow('block')
        } else {
            setShow('none')
        }
    }
    return (
        <>
            <div className="mb-5 sticky-top">
                <Navigation />
            </div>
            <div className="row d-flex justify-content-center align-items-center">
                <Slide right>
                    <h1 className="font-weight-lighter border-primary border border-left-0 border-top-0 pl-5 pt-5 pb-2 pr-2">A little bit about me...</h1>
                </Slide >
            </div>
            <main className="d-flex justify-content-center mt-5">
                <div className="row d-flex justify-content-center align-items-center mt-3">
                    <Slide left>
                        <div className="col-md-3 mt-3">
                            <div className="font-weight-lighter text-center">
                                <img
                                    src={!eyes ? `${"https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png"}` : `${"https://news-api.s3.us-east-2.amazonaws.com/MeEyesClosed2.png"}`}
                                    className=""
                                    style={{ width: "160px", height: "auto " }}
                                    alt="Pawel Eyes Open">
                                </img>
                            </div>
                            <div className="font-weight-lighter text-center py-2">
                                <a
                                    href="https://news-api.s3.us-east-2.amazonaws.com/Pawel+SoftDev+Resume+August+20+AWS.pdf"
                                    target="_blank">
                                    Download My Resume
                                </a>
                            </div>
                        </div>
                    </Slide>
                    <div className="col-md-8 text-justify font-weight-lighter border border-primary border-right-0 border-bottom-0 pt-4">
                        <Slide right>
                            <div className="px-3">My name is Pawel and I am a software developer with a background in healthcare administration. I am originally from Poland but immigrated to the US when I was 10 years old and lived in cities such as New York, West Palm Beach and Fort Lauderdale.</div>
                            <div className="px-3 mt-2">
                                Even when working in the healthcare industry, I was always interested in how the software works and the code behind it. I decided that I wanted to shift my focus onto a new career path and dedicated my time to becoming a software developer.
                        </div>
                        </Slide>
                        <MyBioStyle>
                            <Slide bottom>
                                <div style={{ display: `${show}` }} className="px-3">
                                    <div className="row pl-3 mt-3">
                                        <h4 className="font-weight-lighter">A little bit more about me...</h4>
                                    </div>
                                    <div className="mt-2">
                                        <p>I am an avid problem solver. I won’t give up until the problem in front of me is solved. I believe this quality is what makes me an excellent software developer. Not only do I want to find answers, but it’s important to me that I get a full understanding of what I am trying to solve. Along with my dedicated work ethic, I am a hardworking individual who brings passion and insight into everything I do. I have proven experience in leading a team and working with them towards finding the best solutions. I am hungry for building and fine-tuning more applications and learning new technologies along the way.</p>
                                        <p className="font-weight-bold">Tech I am currently using includes:</p>
                                        <ul>
                                            <li>JavaScript</li>
                                            <li>TypeScript</li>
                                            <li>React</li>
                                            <li>NodeJS</li>
                                            <li>MySQL</li>
                                            <li>HTML/CSS/SASS</li>
                                        </ul>
                                        <p className="font-weight-bold">Tech I am interested in learning:</p>
                                        <ul>
                                            <li>Go</li>
                                            <li>Python</li>
                                            <li>JS Testing frameworks such as Mocha / Jest</li>
                                            <li>Node with Chai </li>
                                            <li>React utility Enzyme</li>
                                        </ul>
                                        <p>In my free time, I enjoy researching and investing in the stock market, while maybe sipping on a Jai Alai, my favorite beer. And in the background, I’ll have a soccer match playing. I also enjoy going out to different restaurants trying to find the best fried calamari with my girlfriend, who created my awesome avatar … by the way!</p>
                                    </div>
                                </div>
                            </Slide>
                        </MyBioStyle>
                        <div className="row d-flex justify-content-center align-items-center">
                            <Slide right>
                                <button
                                    className="btn btn-outline-primary px-3 my-5 rounded-0 border-bottom-0 border-right-0"
                                    type="button"
                                    onClick={handleShow}>
                                    Read {eyes ? 'Less' : 'More...I won\'t look.'}
                                </button>
                            </Slide>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

const MyBioStyle = styled.div`

`

export interface IHomeCompProps { }

export default HomeComp;