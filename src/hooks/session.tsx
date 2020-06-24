import React from "react";
import { makeRedirectUri, useAuthRequest, dismiss } from "expo-auth-session";
import { maybeCompleteAuthSession } from "expo-web-browser";
import { Alert, Platform } from "react-native";

const auth0ClientId = "Qi0YYCQqOMnytXOGBZDIE5TE6BDwam53";
const authorizationEndpoint = "https://dev-7-7ft-qx.us.auth0.com/authorize";

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = makeRedirectUri({ useProxy });

maybeCompleteAuthSession();

export const useToken = () => {
  const [token, setToken] = React.useState<string | null>(null);
  const [request, result, promptAsync] = useAuthRequest(
    {
      redirectUri,
      clientId: auth0ClientId,
      responseType: "id_token",
      scopes: ["openid", "profile"],
      extraParams: {
        nonce:
          Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15),
      },
    },
    { authorizationEndpoint }
  );

  React.useEffect(() => {
    if (!result) return;

    if (result.type === "success") {
      const jwtToken = result.params.id_token;
      setToken(jwtToken);
    } else if (result.type === "error") {
      Alert.alert("Authentication error", "something went wrong");
      return;
    }
  }, [result]);

  const doLogin = () => {
    promptAsync({ useProxy });
  };

  const doLogout = () => {
    dismiss();
    setToken(null);
  };

  return { token, doLogin, doLogout };
};
