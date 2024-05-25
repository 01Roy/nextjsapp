"use client";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";

function Header() {
  return (
    <div>
      <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Next App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="/products" className="nav-link">
                Our Products
              </Link>
              <Link href="/about" className="nav-link">
                About
              </Link>
              <Link href="/services" className="nav-link">
                Services
              </Link>
              <Link href="/blog" className="nav-link">
                Blog
              </Link>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
              <Link href="/quotes" className="nav-link">
                Quotes
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
