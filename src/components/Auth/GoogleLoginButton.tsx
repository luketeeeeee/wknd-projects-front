import { useEffect } from "react";

type GoogleLoginButtonProps = {
  onSuccess: (credential: string) => void;
  onFailure: (error: string) => void;
};

export default function GoogleLoginButton({
  onSuccess,
  onFailure,
}: GoogleLoginButtonProps) {
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

  const handleCallbackResponse = (
    response: google.accounts.id.CredentialResponse,
  ) => {
    if (response.credential) {
      onSuccess(response.credential);
    } else {
      onFailure("Login Error");
    }
  };

  return <div id="google-login-button"></div>;
}
