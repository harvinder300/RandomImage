import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon
} from "react-share";

function RandomImage() {
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedImageUrl = localStorage.getItem('imageUrl');
        if (savedImageUrl) {
            setImageUrl(savedImageUrl);
            setLoading(false);
        }
    }, []);

    const fetchRandomImage = () => {
        setLoading(true);

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
                localStorage.setItem('imageUrl', URL.createObjectURL(blob));
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    };

    const shareUrl = imageUrl;
    const message = 'Check out this awesome image!';

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
            <h1 style={{ marginBottom: '20px', fontFamily: 'Arial, sans-serif', color: '#333' }}>Random Image Generator</h1>
            {loading ? (
                <div className="skeleton-loader" style={{ width: '18rem', height: '250px', backgroundColor: '#ddd', borderRadius: '12px', marginBottom: '20px' }}></div>
            ) : (
                imageUrl && (
                    <Card className="shadow-lg mb-5 bg-black rounded-3" style={{ width: '18rem', marginTop: '20px', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.4)', overflow: 'hidden' }}>
                        <Card.Body style={{ display: 'flex', justifyContent: 'center', borderRadius: '12px', transition: 'transform 0.3s ease-in-out' }}>
                            <img
                                src={imageUrl}
                                alt="Random Image"
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'contain',
                                    borderRadius: '12px',
                                    transition: 'transform 0.3s ease-in-out',
                                    transform: 'scale(1)', /* Initial state */
                                }}
                                onMouseOver={(e) => { e.target.style.transform = 'scale(1.1)'; }} /* Scale up on hover */
                                onMouseOut={(e) => { e.target.style.transform = 'scale(1)'; }} /* Scale back to normal on mouse out */
                            />
                        </Card.Body>
                    </Card>

                )
            )}
            <div style={{ display: 'flex', marginTop: '20px' }}>
                <Button variant="primary" style={{ borderRadius: '20px', backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }} onClick={fetchRandomImage}>
                    Generate
                </Button>
                <div style={{ marginLeft: '10px' }}>
                    <FacebookShareButton url={shareUrl} quote={message} style={{ borderRadius: '20px', backgroundColor: '#3b5998', color: '#fff', border: 'none', padding: '10px 20px', fontFamily: 'Arial, sans-serif' }}>
                        <FacebookIcon size={40} round={true} style={{ marginTop: '3px' }} />
                    </FacebookShareButton>
                </div>
                <div style={{ marginLeft: '10px' }}>
                    <WhatsappShareButton url={shareUrl} quote={message} separator=":: " style={{ borderRadius: '20px', backgroundColor: '#25D366', color: '#fff', border: 'none', padding: '10px 20px', fontFamily: 'Arial, sans-serif' }}>
                        <WhatsappIcon size={40} round={true} style={{ marginTop: '3px' }} />
                    </WhatsappShareButton>
                </div>
            </div>
        </div>
    );
}

export default RandomImage;
