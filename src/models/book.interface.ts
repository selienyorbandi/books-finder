//? ------------------------ API MODELS -------------------------------------------------

//Book object from https://www.googleapis.com/books/v1/volumes/:volumeId
export interface ApiBook {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: [
      {
        type: string;
        identifier: string;
      },
      {
        type: string;
        identifier: string;
      }
    ];
    readingModes: {
      text: boolean;
      image: boolean;
    };
    pageCount: number;
    printedPageCount: number;
    printType: string;
    categories: string[];
    averageRating: number;
    ratingsCount: number;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: {
      containsEpubBubbles: false;
      containsImageBubbles: false;
    };
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
    };
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
  };
  layerInfo: {
    layers: [
      {
        layerId: string;
        volumeAnnotationsVersion: string;
      }
    ];
  };
  saleInfo: {
    country: string;
    saleability: string;
    isEbook: boolean;
    listPrice: {
      amount: number;
      currencyCode: string;
    };
    retailPrice: {
      amount: number;
      currencyCode: string;
    };
    buyLink: string;
    offers: [
      {
        finskyOfferType: number;
        listPrice: {
          amountInMicros: number;
          currencyCode: string;
        };
        retailPrice: {
          amountInMicros: number;
          currencyCode: string;
        };
      }
    ];
  };
  accessInfo: {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: false;
    textToSpeechPermission: string;
    epub: {
      isAvailable: boolean;
      acsTokenLink: string;
    };
    pdf: {
      isAvailable: boolean;
      acsTokenLink: string;
    };
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: false;
  };
}

//Books list from https://api.nytimes.com/svc/books/v3/lists.json?list=:category&api-key=:apiKey
export interface ApiBestSellersBookList {
  status: string;
  copyright: string;
  num_results: number;
  last_modified: string;
  results: [
    {
      list_name: string;
      display_name: string;
      bestsellers_date: string;
      published_date: string;
      rank: number;
      rank_last_week: number;
      weeks_on_list: number;
      asterisk: number;
      dagger: number;
      amazon_product_url: string;
      isbns: [
        {
          isbn10: string;
          isbn13: string;
        },
        {
          isbn10: string;
          isbn13: string;
        },
        {
          isbn10: string;
          isbn13: string;
        }
      ];
      book_details: [
        {
          title: string;
          description: string;
          contributor: string;
          author: string;
          contributor_note: string;
          price: string;
          age_group: string;
          publisher: string;
          primary_isbn13: string;
          primary_isbn10: string;
        }
      ];
      reviews: [
        {
          book_review_link: string;
          first_chapter_link: string;
          sunday_review_link: string;
          article_chapter_link: string;
        }
      ];
    }
  ];
}

//* ------------------------ APP MODELS -------------------------------------------------

//Full detail por each Book Page
export interface Book {
  id: string;
  title: string;
  subtitle: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string; //DOMParser
  isbn_10: string;
  isbn_13: string;
  pageCount: number;
  printType: string;
  categories: string[];
  averageRating: number;
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
  };
  language: string;
  previewLink: string;
  googleBookLink: string;
}

//Book minimal info for lists previews
export interface BookPreview {
  id: string;
  title: string;
  thumbnail: string;
}

export const bookEmptyState: Book = {
  id: "",
  title: "",
  subtitle: "",
  authors: [],
  publisher: "",
  publishedDate: "",
  description: "",
  isbn_10: "",
  isbn_13: "",
  pageCount: 0,
  printType: "",
  categories: [],
  averageRating: 0,
  imageLinks: {
    smallThumbnail: "",
    thumbnail: "",
    small: "",
    medium: "",
    large: "",
    extraLarge: "",
  },
  language: "",
  previewLink: "",
  googleBookLink: "",
};

export const booksPreviewEmptyState: BookPreview[] = [
  {
    id: "",
    title: "",
    thumbnail: "",
  },
];

export const bookSliceEmptyState = {
  currentBook: bookEmptyState,
  booksList: booksPreviewEmptyState,
};
