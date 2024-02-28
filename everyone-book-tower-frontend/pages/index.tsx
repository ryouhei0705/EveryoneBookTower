import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from "react";

const inter = Inter({ subsets: ['latin'] })

type Book = {
  name: string;
  day: string;
}

export default function Home() {
  const [books, setBooks] = useState<Book[]>([
      {
        name: '流星の絆',
        day: '2024/02/28/23:54:50',
      }, {
        name: 'きんフレ',
        day: '2024/02/29/03:14:50',
      }
    ]);

  // setBooks([
  //   {
  //     name: '流星の絆',
  //     day: '2024/02/28/23:54:50',
  //   }, {
  //     name: 'きんフレ',
  //     day: '2024/02/29/03:14:50',
  //   }, {
  //     name: 'よくわかる',
  //     day: '2024/03/29/03:14:50',
  //   }
  // ]);

  return (
    <table>
      {books && books.map((book: Book) => (
        <tr>
          <td>{book.name}</td>
          <td>{book.day}</td>
        </tr>
      ))}
      <tr>
        <th>書籍名</th>
        <th>読書日</th>
      </tr>
    </table>
  )
}
