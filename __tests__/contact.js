import React from "react"
import renderer from "react-test-renderer"

import Main from "../src/pages/contact"

describe("contact", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Main />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
