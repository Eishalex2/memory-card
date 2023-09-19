import PropTypes from 'prop-types';


export default function Card({imageUrl, id, name, handleClick}) {

  function toTitleCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <div className='card-front'>
        <button className="cardBtn">
          <img src={imageUrl} 
            data-key={id} 
            onClick={handleClick} 
            alt={name}/>
          <p>{toTitleCase(name)}</p>
        </button>
      </div>
    </>

  )
}

Card.propTypes = {
  card: PropTypes.object,
  handleClick: PropTypes.func,
  imageUrl: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string
}