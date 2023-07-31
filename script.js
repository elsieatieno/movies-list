      let movies = [
        {
          title: "The Notebook",
          img: "https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_UX182_CR0,0,182,268_AL_.jpg",
          rating: 5
        },
        {
          title: "Our Times",
          img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Our_Times%2C_Movie_Poster.jpg/220px-Our_Times%2C_Movie_Poster.jpg",
          rating: 5
        },
        {
          title: "Avengers",
          img: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
          rating: 4
        }
      ];
  
      let movieTable = document.createElement("table");
      let movieTableHead = document.createElement("thead");
      let movieTableHeadRow = document.createElement("tr");
      let movieTableHeaderHeading1 = document.createElement("th");
      let movieTableHeaderHeading2 = document.createElement("th");
      let movieTableHeaderHeading3 = document.createElement("th");
      let movieTableHeaderHeading4 = document.createElement("th");
  
      movieTableHeaderHeading1.innerHTML = "Image";
      movieTableHeaderHeading2.innerHTML = "Title";
      movieTableHeaderHeading3.innerHTML = "Rating";
      movieTableHeaderHeading4.innerHTML = "";
  
      movieTable.setAttribute("class", "table table-striped");
  
      movieTableHeadRow.appendChild(movieTableHeaderHeading1);
      movieTableHeadRow.appendChild(movieTableHeaderHeading2);
      movieTableHeadRow.appendChild(movieTableHeaderHeading3);
      movieTableHeadRow.appendChild(movieTableHeaderHeading4);
      movieTableHead.appendChild(movieTableHeadRow);
      movieTable.appendChild(movieTableHead);
  
      document.getElementById("table").appendChild(movieTable);
  
      function createMovieCellElementsAndAttachEvents(row, title, img, rating) {
        let imgCell = document.createElement("td");
        let titleCell = document.createElement("td");
        let ratingCell = document.createElement("td");
        let deleteCell = document.createElement("td");
        let imageElement = document.createElement("img");
  
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "X";
        deleteButton.classList.add('btn');
        deleteButton.classList.add('btn-sm');
        deleteButton.classList.add('btn-danger');
        addDeleteEvent(deleteButton);
        deleteCell.appendChild(deleteButton);
        deleteCell.classList.add('align-middle');
  
        setCellContent(titleCell, imgCell, ratingCell, imageElement, title, img, rating);
        addImageCellEvents(imgCell);
        row.appendChild(imgCell);
        row.appendChild(titleCell);
        row.appendChild(ratingCell);
        row.appendChild(deleteCell);
      }
  
      function setCellContent(titleCell, imageCell, ratingCell, imageEl, title, image, rating) {
        imageEl.src = image;
        imageEl.alt = "image not found";
        imageEl.width = 70;
        imageEl.classList.add('img-thumbnail');
        titleCell.classList.add('align-middle');
  
        ratingCell.setAttribute("class", "align-middle");
  
        titleCell.innerHTML = title;
  
        let ratingSpanThumbsUp = document.createElement("span");
        ratingSpanThumbsUp.classList.add("fa");
        ratingSpanThumbsUp.classList.add("fa-thumbs-up");
        ratingSpanThumbsUp.style.padding = "10px";
  
        let ratingSpanThumbsDown = document.createElement("span");
        ratingSpanThumbsDown.classList.add("fa");
        ratingSpanThumbsDown.classList.add("fa-thumbs-down");
  
        let ratingSpanNumber = document.createElement("span");
        ratingSpanNumber.style.cssText = "font-size:20px;";
        ratingSpanNumber.innerHTML = rating;
        ratingSpanNumber.style.padding = "10px";
  
        increaseRating(ratingSpanThumbsUp, ratingSpanNumber);
        decreaseRating(ratingSpanThumbsDown, ratingSpanNumber);
        ratingCell.appendChild(ratingSpanThumbsUp);
        ratingCell.appendChild(ratingSpanThumbsDown);
        ratingCell.appendChild(ratingSpanNumber);
  
        imageCell.appendChild(imageEl);
      }
  
      function hideShowElement(el) {
        if (el.style.display === "none") {
          el.style.display = "block";
        } else {
          el.style.display = "none";
        }
      }
  
      document.getElementById("new-movie").addEventListener("click", function () {
        let el = document.getElementById("new-movie-form");
        hideShowElement(el);
      });
  
      function addImageCellEvents(imgCell) {
        imgCell.addEventListener("mouseover", function () {
          imgCell.childNodes[0].width = 90;
        });
        imgCell.addEventListener("mouseout", function () {
          imgCell.childNodes[0].width = 70;
        });
      }
  
      function addDeleteEvent(button) {
        button.addEventListener("click", function (event) {
          console.log(event.target.parentNode.parentNode);
          movieTable.removeChild(event.target.parentNode.parentNode);
        });
      }
  
      function increaseRating(ratingSpanThumbsUp, ratingSpanNumber) {
        ratingSpanThumbsUp.addEventListener("click", function () {
          let newRating = Number(ratingSpanNumber.innerHTML) + 1;
          ratingSpanNumber.innerHTML = newRating;
        });
      }
  
      function decreaseRating(ratingSpanThumbsDown, ratingSpanNumber) {
        ratingSpanThumbsDown.addEventListener("click", function () {
          let newRating = Number(ratingSpanNumber.innerHTML) - 1;
          ratingSpanNumber.innerHTML = newRating;
        });
      }
  
      let body = document.createElement("tbody");
      movieTable.appendChild(body);
      movies.forEach(function (movie) {
        let row = document.createElement("tr");
        createMovieCellElementsAndAttachEvents(row, movie.title, movie.img, movie.rating);
        body.appendChild(row);
      });
  
      function addMovie(movieform, event) {
        event.preventDefault();
  
        let imgsrc = movieform[0].value;
        let title = movieform[1].value;
        let rating = movieform[2].value;
  
        if (imgsrc == "" || title == "" || rating == "") {
          document.getElementById("status").innerHTML = "OOPS! Please fill in all the fields.";
        } else {
          document.getElementById("status").innerHTML = "";
          let row = document.createElement("tr");
          createMovieCellElementsAndAttachEvents(row, title, imgsrc, rating);
  
          movieTable.insertBefore(row, movieTable.childNodes[1]);
          movieform[0].value = "";
          movieform[1].value = "";
          movieform[2].value = "";
          hideShowElement(document.getElementById("new-movie-form"));
        }
      }

  