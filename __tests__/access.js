import React from "react"
import renderer from "react-test-renderer"

import Main from "../src/pages/access"

jest.mock("../src/components/AccessMap", () => ({
  AccessMap: () => "Mocked map",
}))

describe("access", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Main />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
