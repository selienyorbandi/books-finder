import { BookPreview } from "../../models/book.interface";
import {
  BookCover,
  BookItemContainer,
  BookItemContent,
  BookItemDescription,
  BookItemDetailedContainer,
} from "../../styled-components/bookItem/bookItem.styled";
import { H2, H3 } from "../../styled-components/titles/titles.styled";
import truncateStrings from "../../utils/truncateStrings";

function BookItem({ book, detailed }: { book: BookPreview; detailed: boolean }) {
  const author: string = book.author ? truncateStrings(book.author.toString(), 40) : "";
  return detailed ? (
    <BookItemDetailedContainer>
      <BookCover src={book.thumbnail} alt={`${book.title} thumbnail`} width="80px" height="129px" />
      <BookItemContent>
        <H2 type="main" maxwidth={310}>{truncateStrings(book.title, 35)}</H2>
        <H3 type="alt">{author}</H3>
        <BookItemDescription>{truncateStrings(book.description, 100)}</BookItemDescription>
      </BookItemContent>
    </BookItemDetailedContainer>
  ) : (
    <BookItemContainer>
      <BookCover
        src={book.thumbnail}
        alt={`${book.title} thumbnail`}
        width="185px"
        height="294px"
      />
      <H2 type="main">{truncateStrings(book.title, 17)}</H2>
      <H3 type="main">{author}</H3>
    </BookItemContainer>
  );
}

export default BookItem;
