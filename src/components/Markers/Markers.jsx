import LocationMarker from '../LocationMarker';

const Markers = ({ places }) => {
  return (
    <>
      {places?.map((place, index) => {
        return <LocationMarker key={`${place.coords}${index}`} place={place} />;
      })}
    </>
  );
};
export default Markers;
