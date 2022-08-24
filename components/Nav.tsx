import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav>
        <Link href="/">
          <a>หน้าแรก</a>
        </Link>
        {"     |      "}
        <Link href="/home">
          <a>Home Page</a>
        </Link>
        {"     |      "}
        <Link href="/services">
          <a>Services Page</a>
        </Link>
      </nav>
    </>
  );
}
