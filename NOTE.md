MovieIndex
  + NavBar
  + MovieApp
    + SearchBar
      + Keeps track of current search query
    + MovieList
    + MovieDetail


On click of movie list item:
+ send message to movieIndex with clicked on movie
+ movieIndex changes state to have a new selected movie
+ re render (this will update the movie detail)
