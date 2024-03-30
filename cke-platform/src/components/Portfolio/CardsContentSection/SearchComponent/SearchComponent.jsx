
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchComponent.css';

const SearchComponent = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-container">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input
        type="text"
        className="search-input"
        placeholder="Search title"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchComponent;
