import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { adaptBook } from "../../adapters/book.adapter";
import { setCurrentBook } from "../../redux/slices/books.slice";
import { RootState } from "../../redux/store";
import { getBookById } from "../../services/books.service";
import { Button } from "../../styled-components/button/button.styled";
import { MainContainer } from "../../styled-components/layout/layout.styled";
import parse from "html-react-parser";
import {
  BookAuthors,
  BookButtons,
  BookCategories,
  BookCategory,
  BookDescription,
  BookDetails,
  BookExtraDetail,
  BookExtraDetails,
  BookSubtitle,
  BookTitle,
  BookWrapper,
  LeftColumn,
} from "./Book.styled";
import { BookCover } from "../../styled-components/bookItem/bookItem.styled";
import poweredByGoogle from "../../assets/img/powered-by-google.png";

function Book() {
  const book = useSelector((state: RootState) => state.booksReducer.currentBook);
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    if (id) getBookById(id).then(res => dispatch(setCurrentBook(adaptBook(res))));
  }, [id]);

  const getCover = () => {
    return `https://books.google.com/books/publisher/content/images/frontcover/${id}?fife=w400-h600&source=gbs_api`;
  };

  //non-repeated categories
  const getCategories = () => {
    const categories: string[] = [];

    book.categories.forEach(cat => {
      categories.push(...cat.split("/").map(c => c.trim()));
    });

    const uniqueCategories = new Set(categories);
    return [...uniqueCategories];
  };
  console.log(book);
  return (
    <MainContainer>
      <BookWrapper>
        <BookDetails>
          <header>
            <BookTitle>{book.title}</BookTitle>
            {book.subtitle && <BookSubtitle>{book.subtitle}</BookSubtitle>}
            <BookAuthors>
              By{" "}
              <span>
                {book.authors.map(
                  (author, i) => `${author}${i < book.authors.length - 1 ? ", " : ""}`
                )}
              </span>
            </BookAuthors>
          </header>
          <BookDescription>
            <h4>Description</h4>
            <div>{parse(book.description)}</div>
          </BookDescription>
          <BookCategories>
            <h4>Categories</h4>
            <ul>
              {getCategories().map((category, index) => (
                <BookCategory key={`${category}#${index}`}>
                  <Link to={`/find?q=subject:${category}`}>{category}</Link>
                </BookCategory>
              ))}
            </ul>
          </BookCategories>
          <BookExtraDetails>
            <BookExtraDetail>
              <h4>Pages</h4>
              <p>{book.pageCount}</p>
            </BookExtraDetail>
            <BookExtraDetail>
              <h4>ISBN</h4>
              <p>{book.isbn_13}</p>
            </BookExtraDetail>
            <BookExtraDetail>
              <h4>Publisher</h4>
              <p>{book.publisher}</p>
            </BookExtraDetail>
            <BookExtraDetail>
              <h4>Published Date</h4>
              <p>{book.publishedDate}</p>
            </BookExtraDetail>
          </BookExtraDetails>
        </BookDetails>
        <LeftColumn>
          <BookCover src={getCover()} width="300px" height="450px" />
          <BookButtons>
            <Button btnType="primary">Add to favs</Button>
            <Button btnType="secondary">
              <a href={book.googleBookLink} target="_blank" rel="noreferrer">
                Buy it
              </a>
            </Button>
          </BookButtons>
          {book.isEmbeddable ? (
            <a
              href={`https://play.google.com/books/reader?id=${id}`}
              target="_blank"
              rel="noreferrer">
              <img
                src="https://www.google.com/intl/en/googlebooks/images/gbs_preview_sticker1.png"
                alt="Google Preview"
                width="80px"
              />
            </a>
          ) : (
            <img src={poweredByGoogle} alt="Powered by Google" width="100px" height="13.67px" />
          )}
        </LeftColumn>
      </BookWrapper>
    </MainContainer>
  );
}

export default Book;
