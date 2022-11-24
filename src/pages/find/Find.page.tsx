import { Button } from "../../styled-components/button/button.styled";
import { MainContainer } from "../../styled-components/layout/layout.styled";
import { SearchForm, SearchInput } from "./styled-components/search.styled";
import searchIcon from "../../assets/img/magnify.png";
import { ChangeEvent, FormEvent, useState } from "react";
import BookList from "../../components/bookList/BookList";
import { getBooksByQuery } from "../../services/books.service";
import { useDispatch, useSelector } from "react-redux";
import { setBooksList, setCurrentPage, setTotalItems } from "../../redux/slices/books.slice";
import { RootState } from "../../redux/store";
import { H1 } from "../../styled-components/titles/titles.styled";
import Paginator from "../../components/paginator/Paginator";
import { adaptBookListToBookPreviewList } from "../../adapters/bookList.adapter";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import poweredByGoogle from "../../assets/img/powered-by-google.png";

function Find() {
  const booksList = useSelector((state: RootState) => state.reducer.booksList);
  const pagination = booksList.pagination;

  const dispatch = useDispatch();
  const [keywords, setKeywords] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const fetchBooks = async (page?: number) => {
    setLoading(true);
    setSearchParams({ ...searchParams, q: keywords, page: `${page || pagination.currentPage}` });
    const result = await getBooksByQuery(keywords, page || pagination.currentPage, 10);
    dispatch(setBooksList(adaptBookListToBookPreviewList(result.items)));
    if (page === 1 || pagination.currentPage === 1) {
      //Google Books API shows a lot of duplicate results, so above 300 (or so) there is useless data
      dispatch(setTotalItems(result.totalItems > 300 ? 300 : result.totalItems));
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeywords(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setCurrentPage(1));
    fetchBooks(1).finally(() => setLoading(false));
  };

  const handlePageChange = async (page: number) => {
    dispatch(setCurrentPage(page));
    fetchBooks(page).finally(() => setLoading(false));
  };

  return (
    <MainContainer>
      <header>
        <H1>Let&apos;s find you a book!</H1>
      </header>
      <SearchForm onSubmit={e => handleSubmit(e)}>
        <SearchInput placeholder="Search a book..." onChange={e => handleChange(e)} />
        <Button btnType="primary" type="submit" btnHeight="40">
          <img src={searchIcon} alt="Search button" />
        </Button>
      </SearchForm>
      <img src={poweredByGoogle} alt="Powered by Google" width="90px" height="12.3px" />
      {loading ? (
        <Loader />
      ) : booksList ? (
        <>
          <BookList bookList={booksList.books} detailed={true} />
          <Paginator
            currentPage={pagination.currentPage}
            totalItems={pagination.totalItems}
            itemsPerPage={10}
            onPageChange={(page: number) => handlePageChange(page)}
          />
        </>
      ) : (
        <></>
      )}
    </MainContainer>
  );
}

export default Find;
