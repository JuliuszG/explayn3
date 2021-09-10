import React, { useRef, useEffect } from 'react';
import Layout from '../components/layout';
// import Landing from "../components/landingPage/landing"
import Desktop from '../components/navigation/desktop';
import Mobile from '../components/navigation/mobile';
import SEO from '../components/seo';
import { useMediaQuery } from 'react-responsive';
import Footer from '../components/footer';
import styled from 'styled-components'

const Policy = ({ location }) => {
  const caseStudyRef = useRef(null);

  const isMobile = useMediaQuery({
    query: '(max-device-width: 950px)',
  });
  const Container = styled.div`
    min-height: 100vh;
    max-width: 1400px;
    padding-top: 20vh;
    margin: 0 auto;
    font-family: 'Poppins';
    ol {
        list-style: decimal;
        li {
            margin: 10px 0;
            line-height: 140%;
            .sub {
                list-style: disc;
                margin-left: 30px;
                margin-top: 10px;
                margin-bottom: 10px;
            }
        }
    }
    .section {
        margin-bottom: 40px;
    }
    h1,h2,h3,h4 {
        text-align: center;
        font-weight: 600;
    }
    h1, h2 {
        font-size: 44px;
        margin-bottom: 50px;
    }
    h3 {
        font-size: 20px;
        margin-bottom: 20px;
    }
    h6 {
        font-style: italic;
        font-size: 14px;
        font-weight: 300;
    }
    .cookie {
        line-height: 140%;
        margin-bottom: 80px;
    }
    @media (max-width: 1450px) {
        max-width: 1200px;
    }
    @media (max-width: 1250px) {
        max-width: 800px;
    }
    @media (max-width: 800px) {
        max-width: 100%;
        padding: 5vh 5% 0;
    }
  `
  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      if (
        location?.state?.scrollAnchor === '#caseStudy' &&
        caseStudyRef.current !== null
      ) {
        caseStudyRef.current.scrollIntoView();
      }
    }, 500);
    return () => {
      clearTimeout(scrollTimeout);
    };
  }, [location.state, caseStudyRef.current]);

  return (
    <Layout>
      <SEO title="Home" />
      {isMobile ? <Mobile /> : <Desktop />}
        <Container>
            <h1>PRIVACY POLICY</h1>
            <div className="section">
                <h3>§ 1</h3>
                <h3>General information</h3>
                <ol>
                    <li>
                        The administrator of personal data collected via this website is EXPLAYN Mateusz Karaśkiewicz registered office address Tadeusza Boya-Żeleńskiego 31, 95-100, Zgierz, NIP: [7322174525], (hereinafter: “the Administrator”), who is also the Service Provider
                    </li>
                    <li>
                        Personal data collected by the Administrator via the website are processed in accordance with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of individuals with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46/EC (so-called General Data Protection Regulation, hereinafter: “GDPR”) and the Personal Data Protection Act of May 10, 2018.
                    </li>
                </ol>
            </div>
            <div className="section">
                <h3>§ 2</h3>
                <h3>System logs</h3>
                <ol>
                    <li>
                        Each visit of the User visiting our website is automatically registered on the server in the so-called system logs. The data saved in this way include, among others: date, time of the visit and IP address. Data form system logs is used only for the purposes of server administration and keeping statistics of website visits.
                    </li>
                </ol>
            </div>
            <div className="section">
                <h3>§ 3</h3>
                <h3>Cookies and other similar technologies</h3>
                <ol>
                    <li>
                        This website uses the so-called Cookies, information saved by servers on the User’s end device, which servers can read each time this end device connects. EXPLAYN may also use other technologies with similar or identical functions to cookies. In this Privacy Policy, information on cookies also applies to other similar technologies used on the www.explayn.it website. Cookies usually contain the name of the website domain they come from, the storage time on the end device and a unique number. Cookies may be placed on the User’s and device and then used by external suppliers cooperating with EXPLAYN for monitoring traffic and activity on the website.
                    </li>
                    <li>
                        The cookie techniques is used by most extensive websites to improve the quality of the website, in particular
                        <ol className="sub">
                            <li>creating viewing statistics for individual content</li>
                            <li>personalization of services provided with the use of the website,</li>
                            <li>maintaining user sessions,</li>
                            <li>authentication of people using the website,</li>
                            <li>providing Users with personalized advertising content.</li>
                        </ol>
                    </li>
                    <li>
                        This website uses the following types of cookies:
                        <ul className="sub">
                            <li>“necessary” cookies, enabling the use of services available on the website, e.g. enabling the use of session,</li>
                            <li>“functional” cookies, enabling “remembering” the settings selected by the User and personalizing the User’s interface, e.g. in terms of the selected mobile / classic version, the last phrases entered by the User, the appearance of the website, the state of the bookmarks mechanism, etc.</li>
                            <li>“analytical” cookies, enabling the monitoring of Users’ activity on the website.</li>
                        </ul>
                    </li>
                    <li>
                        Cookies are not used to process or store personal data, they cannot be used to directly identify the User and do not introduce configuration changes in the browser and telecommunications end device. The User has the option to independently define the conditions for using cookies and can disable their use at any time, using the web browser settings or service configuration. This can cause most web pages to be missing or not displayed properly.
                    </li>
                    <li>
                        In some cases, it is possible to set the browser to ask for the User’s consent to cookies in each case. This gives the User the ability to control cookies, but may slow down the browser’s performance. In order to easily manage cookies, select a browser from the list below and follow the instructions:
                        <ol className="sub">
                            <li>Internet Explorer,</li>
                            <li>Firefox,</li>
                            <li>Chrome,</li>
                            <li>Opera,</li>
                            <li>Safari.</li>
                        </ol>
                        Mobile devices:
                        <ol className="sub">
                            <li>Android,</li>
                            <li>Windows Phone,</li>
                            <li>Blackberry,</li>
                            <li>Safari.</li>
                        </ol>
                    </li>
                    <li>
                        Failure to change the cookie settings means that they will be stored on the User’s end device, and thus the EXPLAYN will store information on the User’s end device and access them.
                    </li>
                </ol>
            </div>
            <div className="section">
                <h3>§ 4</h3>
                <h3>Type of personal data processed, purpose and scope of data collection</h3>
                <h6>Purpose of processing and legal basis</h6>
                <ol>
                    <li>
                        The Administrator processes personal data via this website in the case of:
                        <ol className="sub">
                            <li>using the contact form by the user. Personal data is processed on the basis of art. 6 sec. 1 letter f) GDPR as the Administrator’s legitimate interest.</li>
                        </ol>
                    </li>
                    <h6>Type of processed personal data</h6>
                    <li>
                        The administrator processes the following categories of user’s personal data:
                        <ol className="sub">
                            <li>first name and last name,</li>
                            <li>e-mail address,</li>
                            <li>phone number.</li>
                        </ol>
                    </li>
                    <h6>Period of personal data archiving</h6>
                    <li>
                        User’s personal data is stored by the Administrator:
                        <ol className="sub">
                            <li>in case of the basis for data processing is the performance of the contract, as long as it is necessary to perform the contract, and after that time for a period corresponding to the period of limitation of claims. Unless a special provision provides otherwise, the limitation period is six years, and for claims for periodic benefits and claims related to running a business – three years.</li>
                            <li>in case of the basis for data processing is consent, as long as the consent is not revoked, and after revocation of consent for a period of time corresponding to the period of limitation of claims that may be raised by the Administrator and which may be raised against him. Unless a special provision provides otherwise, the limitation period is six years, and for claims for periodic benefits and claims related to running a business – three years.</li>
                        </ol>
                    </li>
                    <li>
                    When using the website, additional information may be downloaded, in particular: the IP address assigned to the user’s computer or the external IP address of the Internet provider, domain name, browser type, access time, type of operating system.
                    </li>
                    <li>
                    Navigation data may also be collected from the User, including information about links and links in which they decide to click or other activities undertaken on the website. The legal basis for this type of activity is the legitimate interest of the Administrator (Article 6 sec. 1 letter f) of GDPR), consisting in facilitating the use of electronic services and improving the functionality of these services.
                    </li>
                    <li>
                    Providing personal data by the user is voluntary.
                    </li>
                    <li>
                    Personal data will also be processed in an automated manner in the form of profiling, provided that the user agrees to it pursuant to Article 6 sec. 1 letter a) of GDPR. The consequence of profiling will be assigning a profile to a given person in order to make decisions about him or to analyze or predict his preferences, behaviors and attitudes.
                    </li>
                    <li>
                    The Administrator takes special care to protect the interests of data subjects, and in particular ensures that the data collected by him are:
                    <ol className="sub">
                        <li>processed in accordance with the law,</li>
                        <li>collected for specified, lawful purposes and not subjected to further processing inconsistent with these purposes,</li>
                        <li>factually correct and adequate in relation to the purposes for which they are processed and stored in a form that allows the identification of persons to whom they relate, no longer than it is necessary to achieve the purpose of processing.</li>
                    </ol>
                    </li>
                </ol>
            </div>
            <div className="section">
                <h3>§ 5</h3>
                <h3>Provision of personal data</h3>
                <ol>
                    <li>
                    User’s personal data is transferred to service providers used by the Administrator when running the website. Service providers to whom personal data are transferred, depending on contractual arrangements and circumstances, or are subject to the Administrator’s instructions as to the purposes and method of data processing or independently define the purposes and methods of their processing.
                    </li>
                    <li>
                    User’s personal data is stored only within the European Economic Area (EEA).
                    </li>
                </ol>
            </div>
            <div className="section">
                <h3>§ 6</h3>
                <h3>The right to control, access and correct your own data</h3>
                <ol>
                    <li>
                    The data subject has the right to access their personal data and the right to rectify, delete, limit processing, the right to transfer data, the right to object, the right to withdraw consent at any time without affecting the lawfulness of the processing that has been carried out, on the basis of consent before its withdrawal.
                    </li>
                    <li>
                    Legal basis of the User’s request:
                    <ol className="sub">
                        <li>access to data – Article 15 GDPR,</li>
                        <li>data rectification – Article 16 GDPR,</li>
                        <li>deletion of data – Article 17 GDPR,</li>
                        <li>restriction of processing – Article 18 GDPR,</li>
                        <li>data portability – Article 20 GDPR,</li>
                        <li>objection – Article 21 GDPR,</li>
                        <li>withdrawal of consent – Article 7 sec. 3 GDPR.</li>
                    </ol>
                    </li>
                    <li>In order to exercise the abovementioned rights, you can send an appropriate e-mail to the following address: we@explayn.it .</li>
                    <li>In the event of a user having the right resulting from the above rights, the Administrator fulfills the request or refuses to comply with it immediately, but no later than within one month after receiving it. However, if – due to the complexity of the request or the number of requests – the Administrator will not be able to meet the request within the next two months, informing the user in advance within one month of receiving the request – about the intended extension of the deadline and its reasons.</li>
                    <li>In the event of it is found that the processing of personal data violates the provisions of the GDPR, the data subject has the right to lodge a complaint with the President of the Personal Data Protection Office.</li>
                </ol>
            </div>
            <div className="section">
                <h3>§ 7</h3>
                <h3>Final Provisions</h3>
                <ol>
                    <li>
                    The Administrator uses technical and organizational measures to ensure protection of the processed personal data protected, and in particular, protects the data against unauthorized disclosure, removal by an unauthorized person, processing in violation of applicable law and change, loss, damage or destruction.
                    </li>
                    <li>
                    The Administrator provides appropriate technical measures to prevent the acquisition and modification by unauthorized persons of personal data sent electronically.
                    </li>
                    <li>
                    In matters not covered by this Privacy Policy, the provision of GDPR and other relevant provisions of Polish law shall apply accordingly.
                    </li>
                </ol>
            </div>
            <h2 id="cookie">Cookies</h2>
            <p className="cookie">
            I agree to and accept that EXPLAYN will collect, make automatic decisions about, analyze and catalog information about Internet electronic addresses which have connected with the device I have used, information about the type of the device I have used, including the type and version of software installed on the device, for the purpose of determining my Internet activities (the Sser profile). Automatic decision-making does not involve sensitive data. The agreement is in force for the period when it is legally binding, or until a Party withdraws from the agreement. Withdrawing from the agreement shall result in removing the user’s profile.
            </p>
        </Container>
      <Footer />
    </Layout>
  );
};

export default Policy;
