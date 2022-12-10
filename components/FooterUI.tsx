import { Footer } from 'flowbite-react';
import React from 'react';

const FooterUi = () => {
    return (
        <>
            <Footer container={true}>
                <Footer.Copyright
                    href="#"
                    by="ZWS™"
                    year={2022}
                />
                <Footer.LinkGroup>
                    <Footer.Link href="#">
                        Acerca De
                    </Footer.Link>
                    <Footer.Link href="#">
                        Política de Privacidad
                    </Footer.Link>
                    <Footer.Link href="#">
                        Licencia
                    </Footer.Link>
                    <Footer.Link href="#">
                        Contacto
                    </Footer.Link>
                </Footer.LinkGroup>
            </Footer>
        </>
    );
};

export default FooterUi;