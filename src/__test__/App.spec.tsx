import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import AdomBlocksEditor from "../AdomBlocksEditor"

test('demo', () => {
    expect(true).toBe(true)
})

test("Renders the main page", () => {
    render(<AdomBlocksEditor />)
    expect(true).toBeTruthy()
})