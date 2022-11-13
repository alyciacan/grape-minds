import './ErrorPage.css';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className="error-page">
            <h2>The page you are looking for does not exist.</h2>
            <Link to="/dashboard">
                 <button type="button" className="dashboard-btn">Home</button>
            </Link>
        </section>
    )
};

export default ErrorPage;