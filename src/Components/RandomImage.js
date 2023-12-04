import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {
    FacebookShareButton,
    WhatsappShareButton,
    FacebookIcon
} from "react-share";
function RandomImage() {
    const [imageUrl, setImageUrl] = useState('');

    const fetchRandomImage = () => {
        const category = 'nature';
        const apiKey = 'CpvvBwO/mT3ZESl4YdgmmA==sQ0Bbgjqez8djoZV'; // Replace with your API key

        fetch(`https://api.api-ninjas.com/v1/randomimage?category=${category}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey,
                'Accept': 'image/jpg'
            }
        })
            .then(response => response.blob())
            .then(blob => {
                setImageUrl(URL.createObjectURL(blob));
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    const shareUrl=imageUrl;
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
            <h1>Random Image Generator</h1>
            {imageUrl &&
                <Card className="shadow p-3 mb-5 bg-white rounded" style={{ width: '18rem', marginTop: '80px' }}>
                    <Card.Body style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={imageUrl} alt="Random Image" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '12px' }} />
                    </Card.Body>
                </Card>
            }
            <Button variant="primary" style={{ marginTop: '20px' }} onClick={fetchRandomImage}>Generate</Button>
            <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={40} round={true} style={{ marginTop: '10px' }} />
            </FacebookShareButton>
        </div>
    );
}

export default RandomImage;
