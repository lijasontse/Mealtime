import React from 'react';
import Link from 'react-router-dom';

const BusinessIndexItem = ({ business }) => {
  <div className="businesses-index-header">
    <ul className="biz-index-ul">
      <li className="biz-lists">
        <div className="biz-name">{business.name}</div>
      </li>
      <div className="biz-category">{business.category}</div>
    </ul>
  </div>
}