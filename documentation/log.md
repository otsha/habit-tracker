# Project log

| Date | Time spent (h) | Description |
|------|----------------|-------------|
| 14.3 | ~2             | Initial project idea, design and setup |
| 22.3 | ~1,5           | Rudimentary visual prototyping |
| 28.3 | ~4,5           | Refactoring, trying to figure out a monthly view, massive issues with hooks that ate a lot of time |
| 29.3 | ~1             | Complete a basic working version of the monthly view. Had issues with checkbox states - using a workaround for now. |
| 3.4  | ~1             | Fixes to the monthly view, allow changing the year, allow adding and removing habits |
| 4.4  | ~2             | Start using Redux to control parts of the state of the application |
| 5.4  | ~1,5           | Allow highlighting important habits, start using ESLint, move display state handling to Redux, refactoring |
| 10.4 | ~1,5           | Init a node backend project, allow listing, posting and deleting habits with a rest client (list still session-sensitive - data lost on server restart) |
| 11.4 | ~1,25          | Allow listing, posting, deleting and modifying habits in the backend using the front-end of the application |
| 12.4 | ~2,25          | Set up a MongoDB Atlas database and configure the backend to use it. Wrestled with ESLint in trying to get it to work with the backend project - couldn't get it to work yet. |
| 17.4 | ~1,25           | Begin trying to allow date marking to backend from frontend - not working yet, went through a lot of troubleshooting and issue should be identified |
| 18.4 | ~2,25           | Battling with checkboxes without any luck. |
| 19.4 | ~1,25           | Finally managed to fix the checkbox issues! Some visual bugs remain, but checkbox status should now be shown correctly. |
| 24.4 | ~1,75           | Begin working on user-sensitivity: Habits should now be user-sensitive in the backend. Frontend functionality is definitely broken at this time. |
| 25.4 | ~1,5            | Implement barebones login/register functionality to front-end. No progress on user-sensitivity. |
| 30.4 | ~1,75           | Both dates and habits are now user-sensitive and fetched from the backend based on the user that's currently logged in. Logins are now stored locally until logged out |
| 29.5 | ~3,5            | Spent a few hours styling the frontend using Semantic UI + began implementing a way to give visual feedback to users regarding their habits |
| 30.5 | 4               | Researching, then configuring the backend for deployment on Heroku. Finishing touches on the UI before the deadline + notifications. Tidying up the codebase a little. |

**Total: 35,75 hours**
