import React from "react"
import renderer from "react-test-renderer"

import Main from "../src/pages/menu"

describe("menu", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Main />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
