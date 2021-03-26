import React from "react"
import renderer from "react-test-renderer"

import Main from "../src/pages/custom3"

describe("custom3", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Main />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
