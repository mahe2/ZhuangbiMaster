# MainActivity

Root activity; hosts navigation drawer and switches between fragments.

## Public API

- Inherits from `MvpActivity<IMainView, MainPresenterImpl>`
- `protected MainPresenterImpl createPresenter(BaseView view)`

## Usage

Starts app, binds views, loads weather, and shows `JokeFragment` by default.