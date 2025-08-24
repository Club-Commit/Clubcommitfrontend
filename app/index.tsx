
import {  Redirect } from "expo-router";
import React from "react";

export default function Layout() {

  // if (isSignedIn) {
  //   return <Redirect href={"/(root)/(tabs)/home" as Href} />;
  // }

  return <Redirect href={"/(auth)/welcome"} />;
}
