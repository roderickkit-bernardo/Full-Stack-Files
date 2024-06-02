import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Added this test to check for this string: Roderick Bernardo's first react app
test("check custom text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Roderick Bernardo's first react app/i);
  expect(linkElement).toBeInTheDocument();
});

// Added this test to check for this string: Roderick Bernardo's first react app
test("check custom text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Roderick Bernardo's first react app/i);
  expect(linkElement).toBeInTheDocument();
});
