import './home.css';

const Home = () => {
    return (
        <div className="home-page">
            <form className="home-container">
                <fieldset className="home-input-container">
                    <div className="input-group">
                        <label htmlFor="image-type">Image Generation Type</label>
                        <select id="image-type" name="type" required>
                            <option value="">Select type</option>
                            <option value="query">Query</option>
                            <option value="random">Random</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="image-quantity">Quantity</label>
                        <input
                            type="number"
                            id="image-quantity"
                            name="quantity"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="image-orientation">Orientation</label>
                        <select id="image-orientation" name="orientation" required>
                            <option value="">Select orientation</option>
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