import "react";
import { render, screen } from "@testing-library/react";
import Gig from "./Gig";

describe("Gig component", () => {
  it("displays band name", () => {
    const bandName = "The Beatles";
    render(<Gig bandName={bandName} />);
    expect(screen.getByText(bandName)).toBeInTheDocument();
  });

  it("displays gig image", () => {
    const imageUrl =
      "https://www.historic-newspapers.co.uk/wp-content/uploads/sites/5/2020/03/Beatles_ad_1965_just_the_beatles_crop.jpg";

    render(<Gig imageUrl={imageUrl} />);

    const gigImage = screen.getByAltText("Band Image");
    expect(gigImage).toBeInTheDocument();
    expect(gigImage).toHaveAttribute("src", imageUrl);
  });

  it("displays gig description", () => {
    const description =
      "In those years, the Beatles effectively reinvented the meaning of rock and roll as a cultural form.";

    render(<Gig description={description} />);

    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it("displays gig date and time", () => {
    const dateTime = "09.08.2023";

    render(<Gig dateTime={dateTime} />);

    expect(screen.getByText(dateTime)).toBeInTheDocument();
  });

  it("displays gig location", () => {
    const location = "London";

    render(<Gig location={location} />);

    expect(screen.getByText(location)).toBeInTheDocument();
    console.debug(screen.getByText(location))
  });
});
