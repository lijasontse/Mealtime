import React from 'react'
import MarkerManager from '../../util/marker_manager';

class BusinessMap extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let mapOptions = {
      center: {
        lat: 37.773972,
        lng: -122.431297
      }, // San Francisco coords
      zoom: 11,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: true
    };

    if (this.props.businesses.length > 0) {
      mapOptions = {
        center: { lat: this.props.businesses[0].lat, lng: this.props.businesses[0].lng },
        zoom: 11,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true
      };
    // } else {

    //   mapOptions = {
    //     center: { lat: this.props.businesses.lat, lng: this.props.businesses.lng },
    //     zoom: 12
    //   }
    }

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.businesses);
    $("#map-container").css("position", "none !important");
  }

  componentDidUpdate() {

    let mapOptions
    if (Array.isArray(this.props.businesses)) {
      mapOptions = {
        center: { lat: this.props.businesses[0].lat, lng: this.props.businesses[0].lng },
        zoom: 11,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
      };
    } else {

      mapOptions = {
        center: { lat: this.props.businesses.lat, lng: this.props.businesses.lng },
        zoom: 11,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true
      }
    }


    this.map = new google.maps.Map(this.mapNode, mapOptions);

    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.businesses)
    $("#map-container").css("position", "none !important");
  }

  render() {
    return (
      <div id="map-container" style={{ height: '100%', position: 'static' }} ref={map => this.mapNode = map}>

      </div>
    )
  }
}

export default BusinessMap;