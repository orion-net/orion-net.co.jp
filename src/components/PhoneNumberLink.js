import React from "react"

export const PhoneNumberLink = ({ number }) => (
  <a className="phone-link" href={`tel:${number}`}>
    {number}
  </a>
)
