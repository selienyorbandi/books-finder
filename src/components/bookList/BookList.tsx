import { BookPreview } from "../../models/book.interface";
import { BookListContainer } from "../../styled-components/bookList/bookList.styled";
import BookItem from "../bookItem/BookItem";

function BookList({ bookList, detailed }: { bookList: BookPreview[]; detailed: boolean }) {
  return (
    <BookListContainer>
      {bookList.map(book => (
        <BookItem book={book} key={book.id} detailed={detailed} />
      ))}
    </BookListContainer>
  );
}
export default BookList;
