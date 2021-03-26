import React from "react"
import renderer from "react-test-renderer"

import Main from "../src/pages/custom2"

describe("custom2", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Main />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
