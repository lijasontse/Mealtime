import { connect } from 'react-redux';
import BusinessIndex from './business_index.jsx';
import React from 'react';
import { 
  fetchBusinesses 
} from '../../actions/business_actions';

const mapStateToProps = ( {entities: { businesses } }) => ({
  businesses: Object.values(businesses)
});

const mapDispatchToProps = dispatch => ({
  fetchBusinesses: () => dispatch(fetchBusinesses()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndex);
