import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '../components/navbar';
import SideBar from '@/components/SideBar';
import './globals.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        <Container fluid>
          <Row className="justify-content-md-center">
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
