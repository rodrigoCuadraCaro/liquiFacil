import {Button, Card, Container, Form, Row} from "react-bootstrap";
import Image from "next/image";
import NavbarUI from "../components/NavbarUI";

export default function Home() {
  return (
      <>
        <Container>
          <Row>
            <div className={'col-md-6'}>
              <section className={'position-relative py-4 py-xl-5'}>
                <Container>
                  <Row className={'mb-5'}>
                    <div className={'col-md-8 col-xl-6 text-center mx-auto'}>
                      <h2>Login</h2>
                      <p className={'w-lg-50'}> Bienvenidos</p>
                    </div>
                  </Row>
                  <Row className={'d-flex justify-content-center'}>
                    <div className={'col-md-6 col-xl-4'}>
                      <Card className={'mb-5'}>
                        <Card.Body className={'d-flex flex-column align-items-center'}>
                          <div className="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                 fill="currentColor" viewBox="0 0 16 16" className="bi bi-person">
                              <path
                                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                            </svg>
                          </div>
                          <Form className={'text-center'} method={'post'}>
                            <Form.Control className={'mb-3'} type={'email'} name={'email'} placeholder={'Email'}></Form.Control>
                            <Form.Control className={'mb-3'} type={'password'} name={'password'} placeholder={'Password'}></Form.Control>
                            <Button className={'mb-3 d-block w-100'} type={'submit'}>Login</Button>
                            <p className={'text-muted'}>¿Olvidaste tu contraseña?</p>
                          </Form>
                        </Card.Body>
                      </Card>
                    </div>
                  </Row>
                </Container>
              </section>
            </div>
            <div className={'col-md-6'}>
              <Image className={'pr-0'} src={'/images/office_space_kj3wup.jpg'} alt={'Picture'} width={'476'} height={'697'}/>
            </div>
          </Row>
        </Container>
      </>
  )
}