'use client';
import {useEffect} from 'react';
import Image from 'next/image.js';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import PageHeader from '../../ui/PageHeader/PageHeader.js';
import Calltoaction from '../../ui/CalltoAction/calltoaction.js';
import AboutMenu from '../../ui/AboutMenu/aboutmenu.js';
import 'public/assets/css/member.scss';
import Ceo from 'public/assets/images/memebers/ceosouga.png';
import Aska from 'public/assets/images/memebers/cdo-image.png';
import Koji from 'public/assets/images/memebers/profile-image.png';
import Dai from 'public/assets/images/memebers/profileimage2.png';
import Ahmad from 'public/assets/images/memebers/pmahmad.png';
import Bushra from 'public/assets/images/memebers/hrbushra.png';
import Arshia from 'public/assets/images/memebers/hrarshia.png';
import Snobar from 'public/assets/images/memebers/hrsnobar.png';
import Hira from 'public/assets/images/memebers/bdhira.png';
import Faizan from 'public/assets/images/memebers/bdfaizan.png';
import Kashif from 'public/assets/images/memebers/devkashif.png';
import Azeem from 'public/assets/images/memebers/devazeem.png';
import Shahnwaz from 'public/assets/images/memebers/officeshahnawaz.png';
import Hamza from 'public/assets/images/memebers/devhamza.png';
import Waleed from 'public/assets/images/memebers/waleed.png';
import AhmadZahid from 'public/assets/images/memebers/Ahmad.png';
import hmzaSiddique from 'public/assets/images/memebers/hmzaSiddique.png';
import Zain from 'public/assets/images/memebers/Zain.png';
import Shan from 'public/assets/images/memebers/officeshan.png';

export default function MemberPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section className='section-member'>
        <div id='memeber-page-header'>
          <PageHeader title='Member' subtext='メンバー' />
        </div>
        <div className='section-member-content'>
          <Container>
            <Row className='row row-cols-2 row-cols-md-3 row-cols-lg-4'>
              <Col className='member-col'>
                <Card className='member-card'>
                  <Image loading='lazy' title='CEO' src={Ceo} className='member-img' alt='CEO' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Souga Nakamura</Card.Title>
                    <Card.Text className='member-designation'>CEO</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <Image loading='lazy' title='Aska' src={Aska} className='member-img' alt='ASKA' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Aska Ikeda</Card.Title>
                    <Card.Text className='member-designation'>COO</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <Image loading='lazy' title='Koji Endo' src={Koji} className='member-img' alt='KOJI ANDO' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Koji Endo</Card.Title>
                    <Card.Text className='member-designation'>Project Manager</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <Image loading='lazy' title='Dai Katsumura' src={Dai} className='member-img' alt='DAI KATSUMURA' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Dai Katsumura</Card.Title>
                    <Card.Text className='member-designation'>Project Manager</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <Image loading='lazy' title='Muhammad Ahmad' src={Ahmad} className='member-img' alt='PM AHMAD' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Muhammad Ahmad</Card.Title>
                    <Card.Text className='member-designation'>Project Manager</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <Image loading='lazy' title='Bushra Riaz' src={Bushra} className='member-img' alt='HR BUSHRA' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Bushra Riaz</Card.Title>
                    <Card.Text className='member-designation'>HR Manager</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col className='member-col'>
                <Card className='member-card'>
                  <Image loading='lazy' title='Arshia Iqbal' src={Arshia} className='member-img' alt='HR ARSHIA' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Arshia Iqbal</Card.Title>
                    <Card.Text className='member-designation'>HR Manager</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <Image loading='lazy' title='Faizan Haider' src={Faizan} className='member-img' alt='BD FAIZAN' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Faizan Haider</Card.Title>
                    <Card.Text className='member-designation'>Business Developer</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col className='member-col'>
                <Card className='member-card'>
                  <Image
                    loading='lazy'
                    title='Azeem Ul Hassan'
                    src={Azeem}
                    className='member-img'
                    alt='AZEEM DEVELOPER'
                  />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Azeem Ul Hassan</Card.Title>
                    <Card.Text className='member-designation'>Software Developer</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <Image loading='lazy' title='Hamza Ashfaq' src={Hamza} className='member-img' alt='HAMZA DEVELOPER' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Hamza Ashfaq</Card.Title>
                    <Card.Text className='member-designation'>Software Developer</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col className='member-col'>
                <Card className='member-card'>
                  <Image
                    loading='lazy'
                    title='Muhammad Kashif Zia'
                    src={Kashif}
                    className='member-img'
                    alt='KASHIF DEVELOPER'
                  />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Muhammad Kashif Zia</Card.Title>
                    <Card.Text className='member-designation'>Software Developer</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col className='member-col'>
                <Card className='member-card'>
                  <Image
                    loading='lazy'
                    title='Shahnawaz'
                    src={Shahnwaz}
                    className='member-img'
                    alt='SHAHNAWAZ ASSISTANT'
                  />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Shahnawaz</Card.Title>
                    <Card.Text className='member-designation'>CEO Assistant</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <Image loading='lazy' title='Ali Shan' src={Shan} className='member-img' alt='SHAN' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Ali Shan</Card.Title>
                    <Card.Text className='member-designation'>Facilities Maintenance</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <Image loading='lazy' title='Hira Ijaz' src={Hira} className='member-img' alt='Hira Ijaz' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Hira Ijaz</Card.Title>
                    <Card.Text className='member-designation'>Business Developer</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col className='member-col'>
                <Card className='member-card'>
                  <Image loading='lazy' title='Snobar' src={Snobar} className='member-img' alt='HR Snobar' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Snobar</Card.Title>
                    <Card.Text className='member-designation'>HR Manager</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <Image loading='lazy' title='Zain Ishtiaq' src={Zain} className='member-img' alt='Zain Ishtiaq' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Zain Ishtiaq</Card.Title>
                    <Card.Text className='member-designation'>UI / UX Designer</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col className='member-col'>
                <Card className='member-card'>
                  <Image loading='lazy' title='Ahmad Zahid' src={AhmadZahid} className='member-img' alt='Ahmad Zahid' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Ahmad Zahid</Card.Title>
                    <Card.Text className='member-designation'>Software Developer</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <Image
                    loading='lazy'
                    title='Hamza Siddique'
                    src={hmzaSiddique}
                    className='member-img'
                    alt='Hamza Siddique'
                  />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Hamza Siddique</Card.Title>
                    <Card.Text className='member-designation'>Software Developer</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <Image loading='lazy' title='Waleed Ahmad' src={Waleed} className='member-img' alt='Waleed Ahmad' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Waleed Ahmad</Card.Title>
                    <Card.Text className='member-designation'>Software Developer</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <AboutMenu />
        <Calltoaction />
      </section>
    </div>
  );
}
