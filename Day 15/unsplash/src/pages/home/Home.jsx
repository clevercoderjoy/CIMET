import './home.css';
import { useState } from 'react';
import axios from 'axios';
import { client_id, unsplashApiUrl } from '../../utils/constants';
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();
    const [userInput, setUserInput] = useState({
        type: "",
        query: "",
        quantity: 10,
        orientation: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInput(userInput => ({ ...userInput, [name]: name === "quantity" ? Number(value) : value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let images = [];
        setUserInput({
            type: "",
            query: "",
            quantity: 10,
            orientation: "",
        });
        try {
            images = await generateImages();
        }
        catch (e) {
            console.log(e);
        }
        navigate("/results", { state: { images } })
    }

    const generateImages = async () => {

        switch (userInput.type) {
            case "query": {
                const response = await axios.get(`${unsplashApiUrl}/search/photos`, {
                    params: {
                        client_id: client_id,
                        query: userInput.query,
                        per_page: userInput.quantity,
                        orientation: userInput.orientation,
                    }
                })
                return response.data.results;
            };
            case "random": {
                const response = await axios.get(`${unsplashApiUrl}/photos/random`,
                    {
                        params: {
                            client_id: client_id,
                            count: userInput.quantity === 0 ? 5 : userInput.quantity,
                            orientation: userInput.orientation,
                        }
                    }
                )
                return response.data;
            }
        }
    }

    return (
        <div className="home-page">
            <form className="home-container" onSubmit={handleSubmit}>
                <fieldset className="home-input-container">
                    <div className="input-group">
                        <label htmlFor="image-type">Image Generation Type</label>
                        <select id="image-type" value={userInput.type} name="type" onChange={handleChange} required>
                            <option value="">Select Image Generation type</option>
                            <option value="query">Query</option>
                            <option value="random">Random</option>
                        </select>
                    </div>
                    <div className="input-group" style={{ display: userInput.type === "query" ? "block" : "none" }}>
                        <label htmlFor="image-query">Image Generation Query</label>
                        <textarea
                            name="query"
                            id="image-query"
                            onChange={handleChange}
                            value={userInput.query}
                            required={userInput.type === "query" ? true : false}
                            placeholder="Describe the images you want."
                        ></textarea>
                    </div>
                    <div className="input-group">
                        <label htmlFor="image-quantity">Quantity</label>
                        <input
                            value={userInput.quantity}
                            type="number"
                            id="image-quantity"
                            onChange={handleChange}
                            name="quantity"
                            required
                            placeholder="Number of images to be generated?"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="image-orientation">Orientation</label>
                        <select id="image-orientation" value={userInput.orientation} name="orientation" onChange={handleChange} required>
                            <option value="">Select Image Orientation</option>
                            <option value="portrait">Portrait</option>
                            <option value="landscape">Landscape</option>
                        </select>
                    </div>
                </fieldset>
                <div className="home-buttons-container">
                    <button type="submit" id="image-generate">
                        Generate Images
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Home;