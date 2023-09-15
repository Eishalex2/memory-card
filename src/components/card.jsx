import PropTypes from 'prop-types';


export default function Card({imageUrl, id, name, handleClick}) {

  return (
    <div>
      <button className="card">
        <img src={imageUrl} 
          data-key={id} 
          onClick={handleClick} 
          alt={name}/>
      </button>
    </div>
  )
}

Card.propTypes = {
  card: PropTypes.object,
  handleClick: PropTypes.func
}