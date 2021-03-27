import React from "react"
import renderer from "react-test-renderer"

import Main from "../src/pages/404"

jest.mock("gatsby-plugin-image", () => {
  const StaticImageMock = () => <img>Mocked StaticImage component</img>

  return {
    StaticImage: StaticImageMock,
  }
})

describe("404", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Main />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
