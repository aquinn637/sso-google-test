import { configureTnsOAuth } from "nativescript-oauth2";

import {
  TnsOaProvider,
  TnsOaProviderOptionsGoogle,
  TnsOaProviderGoogle
} from "nativescript-oauth2/providers";

export function configureOAuthProviders() {
  
  const googleProvider = configureOAuthProviderGoogle();

  configureTnsOAuth([googleProvider]);
}

export function configureOAuthProviderGoogle(): TnsOaProvider {

  const googleProviderOptions: TnsOaProviderOptionsGoogle = {
      openIdSupport: "oid-full",
      clientId:
          "932931520457-buv2dnhgo7jjjjv5fckqltn367psbrlb.apps.googleusercontent.com",
      redirectUri:
          "com.googleusercontent.apps.932931520457-buv2dnhgo7jjjjv5fckqltn367psbrlb:/auth",
      urlScheme:
          "com.googleusercontent.apps.932931520457-buv2dnhgo7jjjjv5fckqltn367psbrlb",
      scopes: ["email"]
  };

  const googleProvider = new TnsOaProviderGoogle(googleProviderOptions);

  return googleProvider;
}