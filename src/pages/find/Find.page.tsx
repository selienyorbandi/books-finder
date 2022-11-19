import { Button } from "../../styled-components/button/button.styled";
import { MainContainer } from "../../styled-components/layout/layout.styled";
import { SearchForm, SearchInput } from "./styled-components/search.styled";
import searchIcon from "../../assets/img/magnify.png";
import { ChangeEvent, FormEvent, useState } from "react";
import BookList from "../../components/bookList/BookList";
import { getBooksByQuery } from "../../services/books.service";
import { useDispatch, useSelector } from "react-redux";
import { setBooksList } from "../../redux/slices/books.slice";
import { RootState } from "../../redux/store";
import { H1 } from "../../styled-components/titles/titles.styled";

function Find() {
  const booksList = useSelector((state: RootState) => state.reducer.booksList);
  const dispatch = useDispatch();
  const [keywords, setKeywords] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeywords(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await getBooksByQuery(keywords, 1);
    dispatch(setBooksList(result));
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
      {booksList ? <BookList bookList={booksList.books} detailed={true}/> : <></>}
    </MainContainer>
  );
}

export default Find;
