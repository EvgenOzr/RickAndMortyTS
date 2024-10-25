import err_morty from '../../images/morty.jpeg'
import './ErrorIndicator';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <div className='error-indicator-img'>
                <img src={err_morty} alt="error icon" />
            </div>
            <span className="boom">Error!</span>
            <span>
                An error was occured!
            </span>
        </div>
    );
};

export default ErrorIndicator;
