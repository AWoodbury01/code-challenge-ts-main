import config from "./config"

export const htmlStatement = (customer: any, movies: any) => {
  let totalAmount = 0;
  let frequentRenterPoints = 0;
  let result = `<h1>Rental Record for <em>${customer.name}</em></h1>\n<ul>\n`;
  for (let r of customer.rentals) {
    let movie = movies[r.movieID];
    let thisAmount = 0;

    // switch (movie.code) {
    //   case MovieCode.REGULAR:
    //     thisAmount = 2;
    //     if (r.days > 2) {
    //       thisAmount += (r.days - 2) * 1.5;
    //     }
    //     break;
    //   case MovieCode.NEW:
    //     thisAmount = r.days * 3;
    //     break;
    //   case MovieCode.CHILDRENS:
    //     thisAmount = 1.5;
    //     if (r.days > 3) {
    //       thisAmount += (r.days - 3) * 1.5;
    //     }
    //     break;
    // }

    
    if (movie.code === "new") {
        thisAmount = r.days * 3;
    } else if (movie.code === config.categories.category1) {
        thisAmount = config.values.rentalFee.category1Fee;
        if (r.days > config.values.numberOfDays.category1Days) {
          thisAmount += (r.days - config.values.numberOfDays.category1Days) * 1.5;
        }
    } else if (movie.code === config.categories.category2) {
        thisAmount = config.values.rentalFee.category2Fee;
        if (r.days > config.values.numberOfDays.category2Days) {
          thisAmount += (r.days - config.values.numberOfDays.category2Days) * 1.5;
        }
    } else if (movie.code === config.categories.category3) {
        thisAmount = config.values.rentalFee.category3Fee;
        if (r.days > config.values.numberOfDays.category3Days) {
          thisAmount += (r.days - config.values.numberOfDays.category3Days) * 1.5;
        }
    } else if (movie.code === config.categories.category4) {
        thisAmount = config.values.rentalFee.category4Fee;
        if (r.days > config.values.numberOfDays.category4Days) {
          thisAmount += (r.days - config.values.numberOfDays.category4Days) * 1.5;
        }
    }

    frequentRenterPoints++;
    if (movie.code === "new" && r.days > config.values.frequentRenterPoints.amountOfDays) frequentRenterPoints++;

    result += `\t<li>${movie.title} - ${thisAmount}</li>\n`;
    totalAmount += thisAmount;
  }

  result += `</ul>\n<p>Amount owed is <em>${totalAmount}</em></p>\n`;
  result += `<p>You earned <em>${frequentRenterPoints}</em> frequent renter points</p>\n`;

  return result;
};