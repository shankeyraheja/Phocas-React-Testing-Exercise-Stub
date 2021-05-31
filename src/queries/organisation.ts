import { gql } from "@apollo/client";

export const ORGANISATION_QUERY = gql`
  query organisation {
    organisation(organisationId: "33a0c23c-cfbd-4136-98fa-954b6ce91ce2") {
      id
      name
      timezone
      createdAt
      updatedAt
    }
  }`

export type OrganisationResponse = {
  organisation: {
    id: string;
    name:string;
    timezone:string;
    createdAt:string;
    updatedAt:string;
  };
};

export type OrganisationVariables = {};
