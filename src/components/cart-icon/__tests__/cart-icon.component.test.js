import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../../utils/test/test.utils";
import CartIcon from "../cart.component";

describe("cart icon tests", () => {
  test("Users preloaded state to render", () => {
    const initialCartItems = [
      { id: 1, name: "ItemA", imageUrl: "test", price: 10, quantity: 1 },
      { id: 1, name: "ItemB", imageUrl: "test", price: 10, quantity: 3 },
    ];
    renderWithProviders(<CartIcon />, {
      preloadedState: {
        cart: {
          cartItems: initialCartItems,
        },
      },
    });
    const cartIconElement = screen.getByText(4);
    expect(cartIconElement).toBeInTheDocument();
  });
});
