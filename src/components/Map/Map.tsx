import { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { FC } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export const Map: FC = () => {
    const position: LatLngExpression = [48.240013, -1.368919]

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '18rem', width: '30rem' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    Adresse : la bite mon gaw
                </Popup>
            </Marker>
        </MapContainer>
    )
}
