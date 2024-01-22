import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '../components/navbar';
import SideBar from '@/components/SideBar';
import './globals.css';
import { Col, Container, Row } from 'reactstrap';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zawadi Uni',
  description: 'Developed by Daniel Irungu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const LeftSection = () => (
    <Col xs lg="2">
      <div className="sticky-top">
        <SideBar />
      </div>
    </Col>
  );
  return (
    <html lang="en">

      <body className={inter.className}>
        <ToastContainer />
        <Container fluid>
          <Row className="justify-content-md-center main-page">
            <LeftSection />
            <Col xs lg="10">
              <NavBar />
              {children}</Col>
          </Row>
        </Container>
      </body>
    </html>
  )
}
