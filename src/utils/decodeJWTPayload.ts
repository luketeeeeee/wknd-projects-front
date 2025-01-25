export const decodeJWTPayload = (credential: string) => {
  // credential is divided in 3 parts, separated by "."
  // the second part is the payload
  const encodedPayload = credential.split(".")[1];

  // the payload default format is base64Url
  // this line transforms it to base64
  const base64Payload = encodedPayload.replace(/-/g, "+").replace(/_/g, "/");

  // this will convert the base64 to a binary
  // then splits each value into it respective hex
  const jsonPayload = decodeURIComponent(
    atob(base64Payload)
      .split("")
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join(""),
  );

  // parse the json payload to JSON format
  const userData = JSON.parse(jsonPayload);
  console.log(userData);
};
