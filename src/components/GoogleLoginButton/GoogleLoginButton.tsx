import { useEffect } from "react";

import { decodeJWTPayload } from "../../utils/decodeJWTPayload";

type GoogleLoginButtonProps = {
  onSuccess: (credential: string) => void;
  onFailure: (error: string) => void;
};

export default function GoogleLoginButton({
  onSuccess,
  onFailure,
}: GoogleLoginButtonProps) {
  const handleCallbackResponse = (
    response: google.accounts.id.CredentialResponse,
  ) => {
    if (response.credential) {
      decodeJWTPayload(response.credential);

      onSuccess(response.credential);
    } else {
      onFailure("Login Error");
    }
  };

  useEffect(() => {
    if (window.google?.accounts?.id) {
      window.google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleCallbackResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("google-login-button") as HTMLElement,
        {
          type: "standard",
          theme: "outline",
          size: "large",
        },
      );
    }
  }, [onFailure]);

  return <div id="google-login-button"></div>;
}
