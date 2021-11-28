# Setup

1. Fork the [repository](https://github.com/JoinCODED/RJS4-TheIndex-Events-and-States)
2. Clone it.
3. `cd` into the project directory.
4. Install the required packages for the task.

```shell
$ yarn install
```

_5._ Run the project.

```shell
$ yarn start
```

---

# Task - Trip-Tracker

In this task, you will build a trip-tracker web app through which you will be able to:

## Add a trip to your list of trips

1. Set up the state items that will help you keep track of your trips, added items, wishlist trips and accomplished trips.

```jsx
this.state = {
      trips: [],
      text: "",
      ...
    };
```

2. Like we did in the To-Do app, define _handleChange_ and _handleSubmit_ methods properly to pass in added trips and update the trips list.

Notice,

```jsx
const newItem = {
  country: this.state.text,
  // >>>>>>>>>>> Missing Field
  id: new Date(),
};
```

## 2. Delete trips from the list

1. Show a remove button next to each added item in the list.

2. Define a method _deleteTrip_ that will filter the listed trips and update the trips field after an item is deleted.

3. Remember to pass the proper props to `ListItems.js`.

## 3. Check trips and add them to your accomplished trips

1. Likewise, add a check button next to each newly added item to the list.

2. Define a method _checkItem_ that will change the status of the trip from flase to true. That is, a trip will be considered accomplished.

3. Remember to pass the proper props to `ListItems.js`.

## 4. Filter trips into accomplished and wish lists

1. You state fields should include the lists wishlistTrips and accomplishedTrips so as to segregate the trips based on their status.

2. For that you will need to define the methods _updateWishlistTrips_ and _updateAccomplishedTrips_. _updateAccomplishedTrips_ is done for you.

## 5. Show filtered lists of trips

Can you call the proper functions on clicking the **Trips Wishlist** and **Trips Accomplished** buttons to display the respective filtered list below the buttons.

Good luck with that, this is your bonus 😉
