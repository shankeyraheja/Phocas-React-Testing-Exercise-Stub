import React from "react";
import { useQuery } from "@apollo/client";
import { MeResponse, MeVariables, ME_QUERY } from "../queries/me";

function Me() {
  const { loading, error, data } = useQuery<MeResponse, MeVariables>(ME_QUERY);

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
      <h1>Hello, I am {data.me.firstName} {data.me.lastName}.</h1>
      <h2>Email: {data.me.email}</h2>
    </div>
  );
}

export default Me;
