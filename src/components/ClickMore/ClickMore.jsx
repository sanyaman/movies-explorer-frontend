import './ClickMore.css';

function ClickMore({ clickMore }) {
    return (
        <div className={!clickMore ? 'click-more__hide' : 'click-more'}>
            <button className='click-more__button' type='button'>Ещё</button>
        </div>
    )
};

export default ClickMore;