import PropTypes from 'prop-types';

export default function Card({card, handleClick}) {

  return (
    <div>
      <button className="card">
        <img src={card.url} data-key={card.key} onClick={handleClick}/>
      </button>
    </div>
  )
}

Card.propTypes = {
  card: PropTypes.object,
  handleClick: PropTypes.func
}