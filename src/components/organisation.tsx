import React from "react";
import { useQuery } from "@apollo/client";
import { OrganisationResponse, OrganisationVariables, ORGANISATION_QUERY } from "../queries/organisation";


function Organisation() {
  const { loading, error, data } = useQuery<OrganisationResponse, OrganisationVariables>(ORGANISATION_QUERY);

  if (loading) {
    return <>loading...</>;
  }
  if (error) {
    return <>Error</>;
  }

  if (data === undefined) {
    throw new Error("unexpected state"); //if not loading data should be defined
  }
  return (
    <div>
    <br/>
      <h2>I am proud to have an opportunity to be part of {data.organisation.name} team</h2>
      <br/>
      <h2>My Organisation Details</h2>
      <h4>Organisation ID:  {data.organisation.id}</h4>
      <h4>Name:  {data.organisation.name}</h4>
      <h4>Timezone:  {data.organisation.timezone}</h4>
      <h4>CreatedAt:  {data.organisation.createdAt}</h4>
      <h4>UpdatedAt:  {data.organisation.updatedAt}</h4>

    </div>
  );
}

export default Organisation;
