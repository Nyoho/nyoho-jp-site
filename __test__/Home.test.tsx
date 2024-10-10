import { expect, test } from "vitest"
import { render, screen, within } from "@testing-library/react"
import Home from "../pages/index"

test("Pages Router", () => {
  render(<Home />);
  const headerElement = screen.getByRole('banner')
  expect(headerElement).toBeDefined()

  const imgElement = within(headerElement).getByRole('img')
  expect(imgElement).toBeDefined()

})
