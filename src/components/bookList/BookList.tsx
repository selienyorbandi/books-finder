import { BookPreview } from "../../models/book.interface";
import { BookListContainer } from "../../styled-components/bookList/bookList.styled";
import BookItem from "../bookItem/BookItem";

function BookList({ bookList }: { bookList: BookPreview[] }) {
  return (
    <BookListContainer>
      {bookList.map(book => (
        <BookItem book={book} key={book.id} />
      ))}
    </BookListContainer>
  );
}
export default BookList;
