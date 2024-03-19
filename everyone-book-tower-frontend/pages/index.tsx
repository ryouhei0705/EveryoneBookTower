import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from "react";

const inter = Inter({ subsets: ['latin'] })
const BASE_URL: string = "api_url/api";
const BOOKS_ENDPOINT: string = "/books";
const BOOKS_READ_ENDPOINT: string = "/books/all";

// 本のデータの型
type Book = {
  name: string;
  day: string;
}

// propsの型
type Props = {
  initialBooks: Book[];
}

// 読書データを追加する関数
const createBooks = async () => {
  const response = await fetch(BASE_URL+BOOKS_ENDPOINT);
  const res = await response.json();
  return res;
}

// 読書データをとってくる関数
const readBooks = async () => {
  // const response = await fetch(BASE_URL + BOOKS_READ_ENDPOINT);
  // const res = await response.json();
  // return res;
  return [
    {
      name: '流星の絆',
      day: '2024/02/28/23:54:50',
    }, {
      name: 'きんフレ',
      day: '2024/02/29/03:14:50',
    }
  ];
}

// 読書データを更新する関数
const updateBooks = async () => {
  const response = await fetch(BASE_URL + BOOKS_ENDPOINT);
  const res = await response.json();
  return res;
}

// 読書データを削除する関数
const deleteBooks = async () => {
  const response = await fetch(BASE_URL + BOOKS_ENDPOINT);
  const res = await response.json();
  return res;
}

export default function Home(props: Props) {
  // 読書データ
  const [books, setBooks] = useState<Book[]>(props.initialBooks);

  return (
    <>
      {/* 読書データを一覧表示 */}
      <table>
        <tbody>
          {books && books.map((book: Book) => (
            <tr>
              <td>{book.name}</td>
              <td>{book.day}</td>
              <td>
                <form onSubmit={updateBooks}>
                  <input type="text" value="書籍名"/>
                  <button type="submit">更新</button>
                </form>
              </td>
              <td>
                <button type="button" onClick={deleteBooks}>削除</button>
              </td>
            </tr>
          ))}
        </tbody>
        <thead>
          <tr>
            <th>書籍名</th>
            <th>読書日</th>
            <th>更新</th>
            <th>削除</th>
          </tr>
        </thead>
      </table>

      {/* 作成ボタン */}
      <form onSubmit={createBooks}>
        <input type="text" value="書籍名"/>
        <button type="submit">作成</button>
      </form>
    </>
  )
}

export const getServerSideProps = async () => {
  const res = await readBooks();
  return {
    props: {
      initialBooks: res
    }
  };
};