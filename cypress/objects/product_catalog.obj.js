const sideBar = '.left-sidebar'
const products = '.features_items'
const productTile = `${products} .product-image-wrapper`
const productOverlay = '.product-overlay'


module.exports = {
    saleImage: '#sale_image',
    searchInput: '#search_product',
    searchButton: '#submit_search',
    // sidebar - categories
    categoriesHeading: `${sideBar} > :first-child`,
    allCategories: `${sideBar} > :nth-child(2) .panel`,
    categoryWomenHeading: `${sideBar} > :nth-child(2) > :nth-child(1) h4`,
    categoryWomenIcon: `${sideBar} > :nth-child(2) > :nth-child(1) .badge i`,
    categoryWomenSubcategories: `${sideBar} > :nth-child(2) > :nth-child(1) li a`,
    categoryMenHeading: `${sideBar} > :nth-child(2) > :nth-child(2) h4`,
    categoryMenIcon: `${sideBar} > :nth-child(2) > :nth-child(2) .badge i`,
    categoryMenSubcategories: `${sideBar} > :nth-child(2) > :nth-child(2) li a`,
    categoryKidsHeading: `${sideBar} > :nth-child(2) > :nth-child(3) h4`,
    categoryKidsIcon: `${sideBar} > :nth-child(2) > :nth-child(3) .badge i`,
    categoryKidsSubcategories: `${sideBar} > :nth-child(2) > :nth-child(3) li a`,
    brandsHeading: `${sideBar} .brands_products h2`,
    brandNames: `${sideBar} .brands-name li a`,
    productsHeading: `${products} .title`,
    productTile: productTile,
    productImage: '.productinfo img',
    productPrice: '.productinfo h2',
    productName: '.productinfo p',
    addToCartButton: '.productinfo .add-to-cart',
    viewProductLink: '.choose a',
    productOverlay: productOverlay,
    overlayPrice: `${productOverlay} h2`,
    overlayName: `${productOverlay} p`,
    overlayCartButton: `${productOverlay} .add-to-cart`
}