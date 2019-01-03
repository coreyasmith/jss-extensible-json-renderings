import React from 'react';

const AtlSugMemberList = ({ members }) => (
  <React.Fragment>
    <strong>ATLSUG Members</strong>
    <ul>
      {members.map(i => (
        <li>{i}</li>
      ))}
    </ul>
  </React.Fragment>
);

export default AtlSugMemberList;
