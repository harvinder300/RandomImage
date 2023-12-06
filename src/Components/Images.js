import React, { useState } from "react";
import Axios from 'axios';
import { Button, Card } from "react-bootstrap";

function GetRandomImage() {
    const [image, setImage] = useState([]);

    const getImage = () => {
        Axios.get("https://api.unsplash.com/search/photos?page=1&query=nature&client_id=EjOxEWYYLRy_E9bDPODWxsV__aAwkSawvGjguqSR3vo")
            .then((response) => {
                setImage(response.data.results);
            })
            .catch((error) => {
                console.error('Error fetching images: ', error);
            });
    }

    return (
        <div>
            <Card style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                {image.map((value, index) => (
                    <div
                        className="card"
                        key={index}
                        style={{
                            width: '250px',
                            margin: '10px',
                            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                            transition: 'transform 0.3s ease',
                            position: 'relative', /* Add position relative to enable absolute positioning within */
                            overflow: 'hidden' /* Hide the overlay initially */
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }} /* Scale up on hover */
                        onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }} /* Scale back to normal on mouse out */
                    >
                        <img
                            src={value.urls.small}
                            alt={`Nature ${index}`}
                            style={{ width: '100%', height: 'auto' }}
                        />
                        <div
                            className="overlay"
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                top: '0',
                                left: '0',
                                opacity: '0',
                                transition: '0.5s ease',
                                backgroundColor: 'rgba(0,0,0,0.5)',
                                borderRadius: '5px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <p style={{ color: '#fff', textAlign: 'center' }}>Image Details</p>
                        </div>
                    </div>
                ))}
            </Card>

            <Button onClick={getImage}>Get Image</Button>
        </div>
    );
}

export default GetRandomImage;
