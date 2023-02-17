import { BookPreview } from "../../models/book.interface";
import { BookListContainer } from "../../styled-components/bookList/bookList.styled";
import BookItem from "../bookItem/BookItem";

function BookList({ bookList, detailed }: { bookList: BookPreview[]; detailed: boolean }) {
  return (
    <BookListContainer>
      {bookList.map(book =>
        book.title ? <BookItem book={book} key={book.id} detailed={detailed} /> : null
      )}
    </BookListContainer>
  );
}
export default BookList;
