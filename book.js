class booklist extends book{
    constructor(marked, book_object, array, book){
        this.marked = marked;
        this.book_object = book_object;
        this.array = array;
        this.book = book;
        super(title, genre, author, read, date);
            constructor(title, genre, author, read, date);{
                this.title = title;
                this.genre = genre;
                this.author = author;
                this.read = read;
                this.date = date;
            }
    }
}

booklist.prototype.read = function(){
    return '(this.marked + this.book) the book being read';
}
booklist.prototype.date = function(){
    return '(this.date) (date now)';
}
booklist.prototype.finished = function(){
    return '(this.read + this.book) just finished read the book';
}
booklist.prototype.next_book = function(){
    return '(this.book) next book to read';
}
booklist.prototype.list_book= function(){
    return'(this.array) list of the unread book';
}