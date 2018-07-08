# The Name Game

Practice your coworkers' names with this minimalist ReactJS game.

[View Trello Board.](https://trello.com/b/XpGRLRDX/the-name-game)

Current features:
- User can select from five random `Person`s and see whether he was correct.
- User can view running score
- User can toggle hints on and off in `Settings`
- User can filter `Person`s by substring (i.e. "Matt")

Future:
- Bug: `PersonList` should rerender every round to prevent repeated `Person` from remembering its local state.
- Chore: Simplify `Settings` actions/reducers with `combineReducers`.