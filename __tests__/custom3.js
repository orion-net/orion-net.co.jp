import React from "react"
import renderer from "react-test-renderer"

import Main from "../src/pages/custom3"

jest.mock("gatsby-plugin-image", () => {
  const StaticImageMock = () => <img>Mocked StaticImage component</img>

  return {
    StaticImage: StaticImageMock,
  }
})

describe("custom3", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Main />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
