import React from "react"
import renderer from "react-test-renderer"

import Main from "../src/pages/index"

describe("index", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Main />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
