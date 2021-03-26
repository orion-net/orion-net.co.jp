import React from "react"
import { Map, TileLayer, Popup, Marker } from "react-leaflet"

const position = [35.564414, 139.612416]
const zoom = 16

const Message = () => (
  <>
    オリオン美容室
    <br />
    <a
      target="_blank"
      href="https://www.google.com/maps?q=高津区久末 オリオン美容室"
      rel="noreferrer"
    >
      Google Mapsで開く
    </a>
  </>
)

export const AccessMap = () => (
  <Map center={position} zoom={zoom}>
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
    />

    <Marker position={position}>
      <Popup>
        <Message />
      </Popup>
    </Marker>
  </Map>
)
