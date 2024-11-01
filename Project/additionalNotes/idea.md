- **ADMIN(librarian)** : Manages books, categories, and sets the access level for each membership plan.
- **USERS (students)**: Can sign up and access the library based on their membership plan.
- **Role-based login:** Only `admin` should have access to the management functions, while `users` access browsing, renting, or purchasing.


- **Browse All Books(Landing page)**: All users, including non-logged-in users, can browse books but can't interact (rent, buy, or read) until they log in and have an active membership.


- Categories of Books: Categories such as Fiction, Romance, etc., will be displayed and unlocked according to the user’s membership plan.



- **Reading Access:** Users with a valid membership can read books online. Ensure that reading access ends once the membership expires.
- **Buying Books:** Users can purchase books directly at the book’s full price, which will be a one-time transaction and will grant lifetime access to that book.
- **Renting Books:** Users with a membership can rent books at a discounted rate compared to buying. If a user’s membership expires, rented books become inaccessible unless they renew or buy the book outright.
