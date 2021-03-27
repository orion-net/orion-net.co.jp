import React from "react"
import renderer from "react-test-renderer"

import Main from "../src/pages/contact"

jest.mock("gatsby-plugin-image", () => {
  const StaticImageMock = () => <img>Mocked StaticImage component</img>

  return {
    StaticImage: StaticImageMock,
  }
})

describe("contact", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Main />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
