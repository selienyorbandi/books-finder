import { BookPreview } from "../../models/book.interface";
import { BookCover } from "../../styled-components/bookItem/bookCover.styled";
import { BookItemContainer } from "../../styled-components/bookItem/bookItemContainer.styled";
import { H2 } from "../../styled-components/titles/h2/h2.styled";
import { H3 } from "../../styled-components/titles/h3/h3.styled";

function BookItem({ book }: { book: BookPreview }) {
  return (
    <BookItemContainer>
      <BookCover
        src={book.thumbnail}
        alt={`${book.title} thumbnail`}
        width="185px"
        height="294px"
      />
      <H2>{book.title.length <= 17 ? book.title : book.title.slice(0, 17) + "..."}</H2>
      <H3>{book.author ? book.author[0] : ""}</H3>
    </BookItemContainer>
  );
}

export default BookItem;
