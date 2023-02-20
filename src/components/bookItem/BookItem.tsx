import { Link } from "react-router-dom";
import { BookPreview } from "../../models/book.interface";
import {
  BookCover,
  BookItemContainer,
  BookItemContent,
  BookItemDescription,
  BookItemDetailedContainer,
} from "../../styled-components/bookItem/bookItem.styled";
import { H2, H3 } from "../../styled-components/titles/titles.styled";
import arrayOfStringsToString from "../../utils/arrayOfStringsToString";
import truncateStrings from "../../utils/truncateStrings";

function BookItem({ book, detailed }: { book: BookPreview; detailed: boolean }) {
  const author: string = truncateStrings(arrayOfStringsToString(book.author), 40);
  return detailed ? (
    <Link to={`/book/${book.id}`} role="bookitem">
      <BookItemDetailedContainer>
        <BookCover
          src={book.thumbnail}
          alt={`${book.title} thumbnail`}
          width="80px"
          height="129px"
        />
        <BookItemContent>
          <H2 type="main" maxwidth={310}>
            {truncateStrings(book.title, 35)}
          </H2>
          {author && <H3 type="alt">{author}</H3>}
          <BookItemDescription>{truncateStrings(book.description, 100)}</BookItemDescription>
        </BookItemContent>
      </BookItemDetailedContainer>
    </Link>
  ) : (
    <Link to={`/book/${book.id}`} role="bookitem">
      <BookItemContainer>
        <BookCover
          src={book.thumbnail}
          alt={`${book.title} thumbnail`}
          width="185px"
          height="294px"
        />
        <H2 type="main">{truncateStrings(book.title, 17)}</H2>
        {author && <H3 type="main">{author}</H3>}
      </BookItemContainer>
    </Link>
  );
}

export default BookItem;
