import LocationMarker from '../LocationMarker';

const Markers = ({ places, onLeftSideOpen }) => {
  return (
    <>
      {places?.map((place, index) => {
        return (
          <LocationMarker
            key={`${place.coords}${index}`}
            place={place}
            hasID
            onLeftSideOpen={onLeftSideOpen}
          />
        );
      })}
    </>
  );
};
export default Markers;
