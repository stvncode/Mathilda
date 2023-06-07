import { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { FC } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export const Map: FC = () => {
    const position: LatLngExpression = [48.107153, -1.652638]

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '25rem', width: '50rem' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    Adresse : 6 Rue de Jouanet, 35700 Rennes
                </Popup>
            </Marker>
        </MapContainer>
    )
}
