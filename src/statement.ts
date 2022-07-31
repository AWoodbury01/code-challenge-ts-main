import config from "./config"

export const statement = (customer: any, movies: any): string => {
  let totalAmount = 0;
  let frequentRenterPoints = 0;
  let result = `Rental Record for ${customer.name}\n`;
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
        thisAmount = config.values.amountOfTime.category1Amount;
        if (r.days > config.values.numberOfDays.category1Days) {
          thisAmount += (r.days - config.values.numberOfDays.category1Days) * 1.5;
        }
    } else if (movie.code === config.categories.category2) {
        thisAmount = config.values.amountOfTime.category2Amount;
        if (r.days > config.values.numberOfDays.category2Days) {
          thisAmount += (r.days - config.values.numberOfDays.category2Days) * 1.5;
        }
    } else if (movie.code === config.categories.category3) {
        thisAmount = config.values.amountOfTime.category3Amount;
        if (r.days > config.values.numberOfDays.category3Days) {
          thisAmount += (r.days - config.values.numberOfDays.category3Days) * 1.5;
        }
    } else if (movie.code === config.categories.category4) {
        thisAmount = config.values.amountOfTime.category4Amount;
        if (r.days > config.values.numberOfDays.category4Days) {
          thisAmount += (r.days - config.values.numberOfDays.category4Days) * 1.5;
        }
    }

    frequentRenterPoints++;
    if (movie.code === "new" && r.days > config.values.frequentRenterPoints.amountOfDays) frequentRenterPoints++;

      result += `\t${movie.title}\t${thisAmount}\n`;
      totalAmount += thisAmount;
  }

  result += `Amount owed is ${totalAmount}\n`;
  result += `You earned ${frequentRenterPoints} frequent renter points\n`;

  return result;
};