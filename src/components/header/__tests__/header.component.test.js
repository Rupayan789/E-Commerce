import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import Header from "../header";

describe("header component test", () => {
  test("it should render sign in link and no sign out link if there is no current user", () => {
    renderWithProviders(<Header />, {
      preloadedState: {
        user: {
          currentUser: null,
        },
      },
    });
    const signInLink = screen.getByText(/sign in/i);
    expect(signInLink).toBeInTheDocument();
    const signOutLink = screen.queryByText(/sign out/i);
    expect(signOutLink).toBeNull();
  });

  test("it should render sign out link and no sign in link if there is current user", () => {
    renderWithProviders(<Header />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });
    const signInLink = screen.queryByText(/sign in/i);
    expect(signInLink).toBeNull();
    const signOutLink = screen.queryByText(/sign out/i);
    expect(signOutLink).toBeInTheDocument();
  });
});
