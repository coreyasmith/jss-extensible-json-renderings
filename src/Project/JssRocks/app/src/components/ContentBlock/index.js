import React from "react";
import { Text, RichText } from "@sitecore-jss/sitecore-jss-react";
import AtlSugMemberList from "../AtlSugMemberList";

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const ContentBlock = ({ fields, rendering: { atlSugMembers } }) => (
  <React.Fragment>
    <Text tag="h2" className="display-4" field={fields.heading} />

    <RichText className="contentDescription" field={fields.content} />

    {atlSugMembers && <AtlSugMemberList members={atlSugMembers} />}
  </React.Fragment>
);

export default ContentBlock;
