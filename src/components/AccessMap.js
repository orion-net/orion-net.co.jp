import React from "react"
import { Icon } from "leaflet"
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerIconRetina from "leaflet/dist/images/marker-icon-2x.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"

if (typeof window !== "undefined") {
  Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIconRetina,
    shadowUrl: markerShadow,
  })
}

const position = [35.564414, 139.612416]
const zoom = 16

const Message = () => (
  <>
    オリオン美容室
    <br />
    <a target="_blank" href="https://g.co/kgs/qtBHz3" rel="noreferrer">
      Google Mapsで開く
    </a>
  </>
)

export const AccessMap = () => (
  <MapContainer center={position} zoom={zoom}>
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
    />

    <Marker position={position}>
      <Popup>
        <Message />
      </Popup>
    </Marker>
  </MapContainer>
)
