# FuliFragment

Displays a staggered grid of images with endless scroll.

## Contracts
- View: `IFuliView`
- Presenter: `FuliPresenterImpl`

## Public Callbacks
- `void onFuliLoad(List<ImageBean> imageList)`
- `void onLoadFailed(String errMsg)`

## Usage

Auto-loads on create; pull to refresh; infinite scroll loads more.