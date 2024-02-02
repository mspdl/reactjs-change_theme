"use client";

import Button from "@/components/Button";
import Container from "@/components/Container";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <Container>
        <header className="py-5">
          <h1 className="text-3xl">Page title</h1>
        </header>
        <section>
          <p className="py-5">Page content</p>
          <Button label="Click here" onClick={() => {}} />
        </section>
      </Container>
      <ThemeSwitch />
    </ThemeProvider>
  );
}
