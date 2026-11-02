import * as React from 'react';
import NavBar from '../components/nav';
import Footer from '../components/Footer';
import '../assets/scss/pages.scss';
import '../assets/scss/resume.scss';
import Breadcrumb from '../components/common/Broadcrumb/Breadcrumb';
import { resume } from '../data/resume-data';
import SEO from '../components/common/Seo';
import { RESUME_URL, SITE_IMAGE } from '../constants';

const Portfolio = () => {
  const breadcrumbs = [
    { name: 'Home', link: '/' },
    { name: 'Resume', link: '/resume' }
  ];
  return (
    <>
      <SEO
        title="Resume | Ashish Patel: Senior Software Engineer | React | TypeScript | Node.js | FastAPI"
        description="Senior Software Engineer with 5+ years of experience building production-grade web applications using React, TypeScript, Next.js, Node.js, and FastAPI."
        keywords="resume, senior software engineer, javascript, typescript, react, next.js, node.js, fastapi, ashish patel"
        url={RESUME_URL}
        image={SITE_IMAGE}
      />
      <div className="min-vh-100 ">
        <NavBar />
        <div className="container p-0">
          <Breadcrumb className="mt-3 d-block" breadcrumbs={breadcrumbs} />
          <div className="resume mt-5">
            <h1 className="text-white">Ashish Patel</h1>
            <p className="resume-role">
              Senior Software Engineer | React | TypeScript | Node.js | FastAPI
            </p>
            <a href="mailto:aspatel808@gmail.com" className="d-block mb-2">
              aspatel808@gmail.com
            </a>
            <p>
              <a href="tel:+919155940717">+91-91559-40717</a>
              {', '}
              <a href="tel:+917319733340">+91-73197-33340</a>
            </p>
            <p>Pratapgarh, Prayagraj, UP</p>
            <p className="resume-links">
              <a href="https://linkedin.com/in/ashish-patel-38a966166" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <span> | </span>
              <a href="https://github.com/ashkr808" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <span> | </span>
              <a href="https://worldsofashishpatel.com" target="_blank" rel="noreferrer">
                worldsofashishpatel.com
              </a>
            </p>
            {Object.entries(resume).map(([heading, details]) => {
              return (
                <React.Fragment key={heading}>
                  <hr />
                  <div className="row m-0 p-0">
                    <div className="col-md-4 p-0">
                      <h5 className="resume-heading mb-4">{heading}</h5>
                    </div>
                    <div className="col-md-8 p-0">
                      {details.map((detail, index) => (
                        <div key={`${heading}-${index}`} className={index !== 0 ? 'mt-4 pt-3' : ''}>
                          {detail.title && <h6 dangerouslySetInnerHTML={{ __html: detail.title }} />}
                          {detail.subtitle && (
                            <p
                              dangerouslySetInnerHTML={{
                                __html: detail.subtitle
                              }}
                            />
                          )}
                          {detail.para && (
                            <p
                              dangerouslySetInnerHTML={{
                                __html: detail.para
                              }}
                            />
                          )}
                          {detail.list && (
                            <ul className="resume-list">
                              {detail.list.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          )}
                          {detail.extra && <p className="resume-extra">{detail.extra}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Portfolio;
