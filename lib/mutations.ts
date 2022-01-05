import fetcher from "./fetcher";

export const auth = (
  mode: "signin" | "signout",
  body: { email: string; password: string }
) => {
  return fetcher(`/${mode}`, body);
};
