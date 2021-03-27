import React from "react"
import renderer from "react-test-renderer"

import Main from "../src/pages/access"

jest.mock("gatsby-plugin-image", () => {
  const StaticImageMock = () => <img>Mocked StaticImage component</img>

  return {
    StaticImage: StaticImageMock,
  }
})

jest.mock("../src/components/AccessMap", () => ({
  AccessMap: () => "Mocked map",
}))

describe("access", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Main />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
