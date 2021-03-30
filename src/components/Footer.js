import { Link } from "gatsby"
import React from "react"

const copyright = "Copyright \u00a9 オリオン美容室, All rights reserved."

export const Footer = () => (
  <footer className="footer">
    <div className="footer-link">
      <Link className="privacy-policy-link" to="/privacy">
        プライバシーポリシー
      </Link>
    </div>
    <p className="copyright">{copyright}</p>
  </footer>
)
