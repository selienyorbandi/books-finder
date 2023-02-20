import { describe, it } from "vitest";
import "@testing-library/jest-dom";
import { adaptAuthentication } from "./authentication.adapter";

describe("adaptAuthentication", () => {
  it("should adapt authentication data correctly", () => {
    const authRes = {
      clientId: "1234",
      client_id: "1234",
      credential:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnb29nbGUuY29tIiwibmJmIjoxNTE2MjM5MDIyLCJhdWQiOiI0MjU3MDQxMzg2LXR0b2RheS1haXJzIiwic3ViIjoiMTIzNDU2Nzg5MCIsImVtYWlsIjoiZm9vQGJhci5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXpwIjoiNDI1NzA0MTM4Ni10dG9kYXktYWlycyIsIm5hbWUiOiJKb2huIERvZSIsInBpY3R1cmUiOiJodHRwczovL2ltYWdlcy5nb29nbGUuY29tL2h0dHBzOi8vaW1hZ2VzL3Bob3RvLmpwZyIsImdpdmVuX25hbWUiOiJKb2huIiwiZmFtaWx5X25hbWUiOiJEb2UiLCJpYXQiOjE1MTYyMzkwMjIsImV4cCI6MTUxNjI0MjYyMiwiZG9jdW1lbnRfaWQiOiIwMDAwMDAxMDAwMDAxMDAwMDAxMDAwMDAxIiwiaWF0IjoxNTE2MjM5MDIyLCJqdGkiOiJnYW1lLWFwcCJ9.NvqppafIuAL_vOsM_HjqNgijr7V-zaChy5UR7Vj39Y8",
      select_by: "email",
    };

    const expectedOutput = {
      jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnb29nbGUuY29tIiwibmJmIjoxNTE2MjM5MDIyLCJhdWQiOiI0MjU3MDQxMzg2LXR0b2RheS1haXJzIiwic3ViIjoiMTIzNDU2Nzg5MCIsImVtYWlsIjoiZm9vQGJhci5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXpwIjoiNDI1NzA0MTM4Ni10dG9kYXktYWlycyIsIm5hbWUiOiJKb2huIERvZSIsInBpY3R1cmUiOiJodHRwczovL2ltYWdlcy5nb29nbGUuY29tL2h0dHBzOi8vaW1hZ2VzL3Bob3RvLmpwZyIsImdpdmVuX25hbWUiOiJKb2huIiwiZmFtaWx5X25hbWUiOiJEb2UiLCJpYXQiOjE1MTYyMzkwMjIsImV4cCI6MTUxNjI0MjYyMiwiZG9jdW1lbnRfaWQiOiIwMDAwMDAxMDAwMDAxMDAwMDAxMDAwMDAxIiwiaWF0IjoxNTE2MjM5MDIyLCJqdGkiOiJnYW1lLWFwcCJ9.NvqppafIuAL_vOsM_HjqNgijr7V-zaChy5UR7Vj39Y8",
      email: "foo@bar.com",
      name: "John Doe",
      picture: "https://images.google.com/https://images/photo.jpg",
    };
    expect(adaptAuthentication(authRes)).toEqual(expectedOutput);
  });
});
