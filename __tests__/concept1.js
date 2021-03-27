import React from "react"
import renderer from "react-test-renderer"

import Main from "../src/pages/concept1"

jest.mock("gatsby-plugin-image", () => {
  const StaticImageMock = () => <img>Mocked StaticImage component</img>

  return {
    StaticImage: StaticImageMock,
  }
})

describe("concept1", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Main />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
