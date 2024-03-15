"use client";

import { Button, Navbar } from "flowbite-react";

function NavbarComponent() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="https://i.pinimg.com/564x/64/df/2d/64df2d621e9b420b1bc954bb501764b4.jpg"
          className="mr-3 h-10 sm:h-12"
          alt="Logo"
        />
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          Granola
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavbarComponent;
