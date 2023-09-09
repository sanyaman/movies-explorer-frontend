import './ClickMore.css';

function ClickMore({ onClick }) {
    return (
        <div className='click-more'>
            <button className='click-more__button' type='button' onClick={onClick}>Ещё</button>
        </div>
    )
};

export default ClickMore;