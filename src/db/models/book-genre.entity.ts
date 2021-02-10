import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Genre from './genre.entity';
import Book from './book.entity';

@Entity()
export default class BookGenre {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn({ name: 'book_id' })
  bookId: number;

  @PrimaryColumn({ name: 'genre_id' })
  genreId: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  // Associations
  @ManyToOne(() => Book, (book) => book.genreConnection, { primary: true })
  @JoinColumn({ name: 'book_id' })
  book: Book[];

  @ManyToOne(() => Genre, (genre) => genre.bookConnection, { primary: true })
  @JoinColumn({ name: 'genre_id' })
  genre: Genre[];
}
